"use client";
import { motion } from "framer-motion";
import { FileText, CheckCircle2 } from "lucide-react";
import { useState, useEffect } from "react";

const dataFields = [
  { label: "Document Type", value: "Material Declaration" },
  { label: "Supplier", value: "ABC Wood Suppliers GmbH" },
  { label: "Material", value: "Oak Wood - 60%" },
  { label: "Origin", value: "Poland" },
  { label: "Certificate", value: "FSC-C123456" },
  { label: "REACH Status", value: "Compliant" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.3, delayChildren: 1.5 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, x: 30, scale: 0.95 },
  show: { 
    opacity: 1, 
    x: 0, 
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" } 
  }
};

export function HeroAnimation() {
  const [key, setKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setKey(prev => prev + 1);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex items-center gap-8 lg:gap-12" key={key}>
      {/* Document Preview */}
      <motion.div
        initial={{ opacity: 0, x: -30, y: 10 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative"
      >
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="w-[200px] lg:w-[240px] bg-white rounded-xl shadow-xl border border-gray-100 p-4 lg:p-5"
        >
          <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-100">
            <FileText className="w-5 h-5 text-[#2d5a3d]" />
            <span className="text-xs font-medium text-gray-600">Material Declaration</span>
          </div>
          
          <div className="space-y-2.5">
            <div className="h-2.5 bg-gray-200 rounded w-full" />
            <div className="h-2.5 bg-gray-100 rounded w-4/5" />
            <div className="h-2.5 bg-gray-200 rounded w-full" />
            <div className="h-2.5 bg-gray-100 rounded w-3/5" />
            <div className="h-2.5 bg-gray-200 rounded w-full" />
            <div className="h-2.5 bg-gray-100 rounded w-4/5" />
            <div className="h-2.5 bg-gray-200 rounded w-2/3" />
            <div className="h-2.5 bg-gray-100 rounded w-full" />
          </div>

          <motion.div
            className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#2d5a3d] to-transparent"
            initial={{ top: "15%" }}
            animate={{ top: ["15%", "85%", "15%"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />

          <motion.div
            className="absolute top-[30%] left-3 right-3 h-4 border-2 border-[#2d5a3d]/40 rounded bg-[#2d5a3d]/5"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
          />
          <motion.div
            className="absolute top-[50%] left-3 right-3 h-4 border-2 border-[#2d5a3d]/40 rounded bg-[#2d5a3d]/5"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
          />
        </motion.div>
      </motion.div>

      {/* Arrow */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 0.4 }}
        className="hidden lg:flex items-center"
      >
        <motion.div
          animate={{ x: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-[#2d5a3d] text-2xl font-bold"
        >
          →
        </motion.div>
      </motion.div>

      {/* Extracted Data Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="space-y-2.5"
      >
        {dataFields.map((field, i) => (
          <motion.div
            key={i}
            variants={cardVariants}
            className="flex items-center gap-3 bg-white rounded-lg shadow-md border border-gray-100 px-4 py-2.5 min-w-[220px] lg:min-w-[260px]"
          >
            <div className="flex-1 min-w-0">
              <p className="text-[10px] uppercase tracking-wider text-gray-400 font-medium">{field.label}</p>
              <p className="text-sm font-medium text-gray-900 truncate">{field.value}</p>
            </div>
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1.8 + i * 0.3, duration: 0.3, type: "spring" }}
            >
              <CheckCircle2 className="w-5 h-5 text-[#2d5a3d]" />
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
