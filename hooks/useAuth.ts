"use client";

import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import type { Company } from "@/lib/types";
import { mockAuth, mockDb, isMockMode, type MockUser } from "@/lib/mock-db";

// Unified user type for both mock and real auth
interface AuthUser {
  id: string;
  email: string;
}

export function useAuth() {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [company, setCompany] = useState<Company | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  // Check for existing session on mount
  useEffect(() => {
    const checkSession = async () => {
      try {
        if (isMockMode()) {
          // Mock mode: check localStorage for user
          const mockUser = mockAuth.getUser();
          if (mockUser) {
            setUser({ id: mockUser.id, email: mockUser.email });
            const mockCompany = mockAuth.getCompany();
            setCompany(mockCompany);

            // Seed demo data if needed
            if (mockCompany) {
              await mockDb.seedDemoData(mockCompany.id);
            }
          }
        } else {
          // Real Supabase auth - dynamically import to avoid issues
          const { createClient } = await import("@/lib/supabase");
          const supabase = createClient();

          const { data: { session } } = await supabase.auth.getSession();
          if (session?.user) {
            setUser({ id: session.user.id, email: session.user.email || "" });

            const { data: companyData } = await supabase
              .from("companies")
              .select("*")
              .eq("user_id", session.user.id)
              .single();

            if (companyData) {
              setCompany(companyData);
            }
          }
        }
      } catch (error) {
        console.error("Error checking session:", error);
      } finally {
        setLoading(false);
      }
    };

    checkSession();
  }, []);

  const signUp = async (
    email: string,
    password: string,
    companyName: string
  ) => {
    if (isMockMode()) {
      const result = await mockAuth.signUp(email, password, companyName);
      setUser({ id: result.user.id, email: result.user.email });
      setCompany(result.company);
      await mockDb.seedDemoData(result.company.id);
      return result;
    }

    // Real Supabase auth
    const { createClient } = await import("@/lib/supabase");
    const supabase = createClient();

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) throw error;

    if (data.user) {
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
    if (isMockMode()) {
      const result = await mockAuth.signIn(email, password);
      setUser({ id: result.user.id, email: result.user.email });
      setCompany(result.company);
      if (result.company) {
        await mockDb.seedDemoData(result.company.id);
      }
      return result;
    }

    // Real Supabase auth
    const { createClient } = await import("@/lib/supabase");
    const supabase = createClient();

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) throw error;

    if (data.user) {
      setUser({ id: data.user.id, email: data.user.email || "" });

      const { data: companyData } = await supabase
        .from("companies")
        .select("*")
        .eq("user_id", data.user.id)
        .single();

      if (companyData) {
        setCompany(companyData);
      }
    }

    return data;
  };

  const signInWithMagicLink = async (email: string) => {
    if (isMockMode()) {
      // In mock mode, just sign in directly
      await mockAuth.signInWithMagicLink(email);
      const mockUser = mockAuth.getUser();
      const mockCompany = mockAuth.getCompany();
      if (mockUser) {
        setUser({ id: mockUser.id, email: mockUser.email });
        setCompany(mockCompany);
      }
      return;
    }

    // Real Supabase auth
    const { createClient } = await import("@/lib/supabase");
    const supabase = createClient();

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
    if (isMockMode()) {
      await mockAuth.signOut();
      setUser(null);
      setCompany(null);
      router.push("/");
      return;
    }

    // Real Supabase auth
    const { createClient } = await import("@/lib/supabase");
    const supabase = createClient();

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
