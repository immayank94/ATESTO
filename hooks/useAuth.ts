"use client";

import { useEffect, useState, useCallback } from "react";
import { createClient } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import type { User } from "@supabase/supabase-js";
import type { Company } from "@/lib/types";

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [company, setCompany] = useState<Company | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const supabase = createClient();

  const fetchCompany = useCallback(
    async (userId: string) => {
      const { data } = await supabase
        .from("companies")
        .select("*")
        .eq("user_id", userId)
        .single();

      if (data) {
        setCompany(data);
      }
    },
    [supabase]
  );

  useEffect(() => {
    const getSession = async () => {
      try {
        const {
          data: { session },
        } = await supabase.auth.getSession();
        setUser(session?.user ?? null);

        if (session?.user) {
          await fetchCompany(session.user.id);
        }
      } catch (error) {
        console.error("Error getting session:", error);
      } finally {
        setLoading(false);
      }
    };

    getSession();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (_event, session) => {
      setUser(session?.user ?? null);
      if (session?.user) {
        await fetchCompany(session.user.id);
      } else {
        setCompany(null);
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [supabase, fetchCompany]);

  const signUp = async (
    email: string,
    password: string,
    companyName: string
  ) => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) throw error;

    if (data.user) {
      // Create company
      const { error: companyError } = await supabase.from("companies").insert({
        name: companyName,
        user_id: data.user.id,
      });

      if (companyError) {
        console.error("Error creating company:", companyError);
      }
    }

    return data;
  };

  const signIn = async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) throw error;

    return data;
  };

  const signInWithMagicLink = async (email: string) => {
    const { data, error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: `${window.location.origin}/auth/callback`,
      },
    });

    if (error) throw error;

    return data;
  };

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
    setUser(null);
    setCompany(null);
    router.push("/");
  };

  return {
    user,
    company,
    loading,
    signUp,
    signIn,
    signInWithMagicLink,
    signOut,
  };
}
