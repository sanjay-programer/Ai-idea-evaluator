import { motion } from "framer-motion";
import ScoreRing from "./ScoreRing";
import MarketAnalysis from "./MarketAnalysis";
import PillarsGrid from "./PillarsGrid";
import CompetitorMap from "./CompetitorMap";
import SwotAnalysis from "./SwotAnalysis";

interface EvaluationResult {
  overallScore: number;
  riskLevel: "Low" | "Medium" | "High";
  riskScore: number;
  verdict: string;
  key_risks: Array<{ risk_name: string; risk_description: string }>;
  ideaSummary: string;
  market: {
    tam: string;
    sam: string;
    som: string;
  };
  pillars: {
    marketSize: {
      score: number;
      description: string;
    };
    potential: {
      score: number;
      description: string;
    };
    feasibility: {
      score: number;
      description: string;
      locationInsight: string;
    };
  };
  competitors: Array<{
    name: string;
    description: string;
  }>;
  swot: {
    strengths: string[];
    weaknesses: string[];
    opportunities: string[];
    threats: string[];
  };
}

interface DashboardProps {
  result: EvaluationResult;
}

const Dashboard = ({ result }: DashboardProps) => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="container max-w-6xl pb-16 px-6"
    >
      {/* Header with Score */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        whileHover={{ y: -10, scale: 1.02 }}
        className="mb-8 rounded-2xl bg-[#1a2332] border border-cyan-500/30 p-8 transition-all hover:shadow-[0_0_30px_rgba(6,182,212,0.3)]"
      >
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          <div className="text-center md:text-left">
            <h2 className="mb-2 text-2xl font-bold text-white">Evaluation Complete</h2>
            <p className="max-w-lg text-gray-400">{result.ideaSummary}</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <ScoreRing score={result.overallScore} />
            <span className={`mt-2 inline-block rounded-full px-4 py-1 text-sm font-bold tracking-wide ${result.overallScore >= 75
                ? "bg-green-500/20 text-green-400 border border-green-500/30"
                : result.overallScore >= 50
                  ? "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30"
                  : "bg-red-500/20 text-red-400 border border-red-500/30"
              }`}>
              {result.verdict}
            </span>
          </div>
        </div>
      </motion.div>

      {/* Key Risk Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        whileHover={{ y: -10, scale: 1.02 }}
        className="mb-8 rounded-2xl bg-[#1a2332] border border-cyan-500/30 p-8 transition-all hover:shadow-[0_0_30px_rgba(6,182,212,0.3)]"
      >
        <h3 className="mb-6 text-lg font-semibold text-white">Key Risk Assessment</h3>
        <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
          <div className="flex items-center gap-4">
            <div className="relative">
              <svg width="120" height="120" className="-rotate-90 transform">
                <circle
                  cx="60"
                  cy="60"
                  r="50"
                  fill="none"
                  stroke="rgba(255, 255, 255, 0.1)"
                  strokeWidth="10"
                />
                <motion.circle
                  cx="60"
                  cy="60"
                  r="50"
                  fill="none"
                  stroke={result.riskLevel === "Low" ? "#10b981" : result.riskLevel === "Medium" ? "#f59e0b" : "#ef4444"}
                  strokeWidth="10"
                  strokeLinecap="round"
                  strokeDasharray={314}
                  initial={{ strokeDashoffset: 314 }}
                  animate={{ strokeDashoffset: 314 - (result.riskScore / 100) * 314 }}
                  transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-3xl font-bold text-white">{result.riskScore}</span>
                <span className="text-xs text-gray-400">Risk Score</span>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className={`w-3 h-3 rounded-full ${result.riskLevel === "Low" ? "bg-green-500" :
                  result.riskLevel === "Medium" ? "bg-orange-500" : "bg-red-500"
                  }`}></div>
                <span className="text-2xl font-bold text-white">{result.riskLevel}</span>
              </div>
              <p className="text-sm text-gray-400">Risk Level</p>
            </div>
          </div>
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {result.key_risks.map((risk, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="rounded-xl bg-[#0f1729] border border-white/10 p-4 hover:border-cyan-500/30 transition-colors"
              >
                <h4 className="text-sm font-semibold text-white mb-1">{risk.risk_name}</h4>
                <p className="text-xs text-gray-400 leading-relaxed">{risk.risk_description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Market Analysis */}
      <div className="mb-8">
        <MarketAnalysis data={result.market} />
      </div>

      {/* 3 Pillars */}
      <div className="mb-8">
        <motion.h3
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mb-4 text-lg font-semibold text-white"
        >
          The 3 Pillars of Validation
        </motion.h3>
        <PillarsGrid data={result.pillars} />
      </div>

      {/* Competitor Map & SWOT in 2-column grid on larger screens */}
      <div className="mb-8 grid gap-8 lg:grid-cols-2">
        <CompetitorMap competitors={result.competitors} />
        <SwotAnalysis data={result.swot} />
      </div>
    </motion.section>
  );
};

export default Dashboard;
