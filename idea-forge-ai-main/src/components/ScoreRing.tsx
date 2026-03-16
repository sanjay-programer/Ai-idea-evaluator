import { motion } from "framer-motion";

interface ScoreRingProps {
  score: number;
  size?: number;
  strokeWidth?: number;
}

const ScoreRing = ({ score, size = 180, strokeWidth = 12 }: ScoreRingProps) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (score / 100) * circumference;

  const getScoreColor = () => {
    if (score >= 75) return "#10b981";
    if (score >= 50) return "#8b5cf6";
    if (score >= 25) return "#f59e0b";
    return "#ef4444";
  };

  const getScoreLabel = () => {
    if (score >= 75) return "Excellent";
    if (score >= 50) return "Promising";
    if (score >= 25) return "Needs Work";
    return "Risky";
  };

  return (
    <div className="relative flex items-center justify-center transition-all hover:-translate-y-1">
      <svg width={size} height={size} className="-rotate-90 transform">
        {/* Background ring */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="rgba(255, 255, 255, 0.1)"
          strokeWidth={strokeWidth}
        />
        {/* Animated score ring */}
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={getScoreColor()}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
          style={{
            filter: `drop-shadow(0 0 8px ${getScoreColor()})`,
          }}
        />
      </svg>
      <div className="absolute flex flex-col items-center">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="text-5xl font-bold text-white"
        >
          {score}
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-sm text-white/60"
        >
          {getScoreLabel()}
        </motion.span>
      </div>
    </div>
  );
};

export default ScoreRing;
