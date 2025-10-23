import React, { useState } from "react";
import { motion } from "framer-motion";

const CPNCalculator = () => {
  const [matricMarks, setMatricMarks] = useState("");
  const [interMarks, setInterMarks] = useState("");
  const [testMarks, setTestMarks] = useState("");
  const [cpnResult, setCpnResult] = useState<number | null>(null);
  const [cpnError, setCpnError] = useState("");

  const calculateCPN = () => {
    const matric = parseFloat(matricMarks);
    const inter = parseFloat(interMarks);
    const test = parseFloat(testMarks);

    if ([matric, inter, test].some((v) => isNaN(v) || v < 0)) {
      setCpnError("⚠️ Please enter valid positive numbers.");
      setCpnResult(null);
      return;
    }

    const matricPercent = (matric / 1100) * 100;
    const interPercent = (inter / 1100) * 100;
    const testPercent = (test / 100) * 100; // Fixed 100 total marks

    const cpn = matricPercent * 0.1 + interPercent * 0.3 + testPercent * 0.6;

    setCpnResult(parseFloat(cpn.toFixed(2)));
    setCpnError("");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-md mx-auto mt-12 p-8 rounded-2xl shadow-[0_0_25px_rgba(59,130,246,0.3)] bg-gradient-to-br from-blue-950 via-blue-800 to-cyan-600 text-white"
    >
      <h2 className="text-3xl font-extrabold text-center mb-6 bg-gradient-to-r from-cyan-300 to-white bg-clip-text text-transparent">
        CPN Calculator
      </h2>

      <div className="flex flex-col gap-4">
        <input
          type="number"
          placeholder="10th Class Marks (out of 1100)"
          value={matricMarks}
          onChange={(e) => setMatricMarks(e.target.value)}
          className="p-3 rounded-lg bg-white/10 border border-white/20 placeholder-white/70 focus:ring-2 focus:ring-cyan-300 outline-none"
        />

        <input
          type="number"
          placeholder="12th Class Marks (out of 1100)"
          value={interMarks}
          onChange={(e) => setInterMarks(e.target.value)}
          className="p-3 rounded-lg bg-white/10 border border-white/20 placeholder-white/70 focus:ring-2 focus:ring-cyan-300 outline-none"
        />

        <input
          type="number"
          placeholder="Test Marks (out of 100)"
          value={testMarks}
          onChange={(e) => setTestMarks(e.target.value)}
          className="p-3 rounded-lg bg-white/10 border border-white/20 placeholder-white/70 focus:ring-2 focus:ring-cyan-300 outline-none"
        />

        <motion.button
          onClick={calculateCPN}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-2 bg-gradient-to-r from-cyan-400 to-blue-600 text-white font-semibold py-3 rounded-lg shadow-lg hover:shadow-xl transition-all"
        >
          Calculate CPN
        </motion.button>

        {cpnError && (
          <p className="text-red-300 text-center mt-2 font-medium">{cpnError}</p>
        )}

        {cpnResult !== null && !cpnError && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-2xl font-bold mt-4 text-cyan-200"
          >
            ✅ Your CPN is:{" "}
            <span className="text-white">{cpnResult}%</span>
          </motion.p>
        )}
      </div>
    </motion.div>
  );
};

export default CPNCalculator;
