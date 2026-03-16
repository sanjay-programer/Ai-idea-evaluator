import { motion } from "framer-motion";
import { Shield, AlertTriangle, Lightbulb, Target } from "lucide-react";

interface SwotData {
  strengths: string[];
  weaknesses: string[];
  opportunities: string[];
  threats: string[];
}

interface SwotAnalysisProps {
  data: SwotData;
}

const SwotAnalysis = ({ data }: SwotAnalysisProps) => {
  const quadrants = [
    {
      title: "Strengths",
      icon: Shield,
      items: data.strengths,
      bgClass: "bg-green-500/5 border-green-400/20",
      iconClass: "bg-green-500/10 text-green-400",
    },
    {
      title: "Weaknesses",
      icon: AlertTriangle,
      items: data.weaknesses,
      bgClass: "bg-red-500/5 border-red-400/20",
      iconClass: "bg-red-500/10 text-red-400",
    },
    {
      title: "Opportunities",
      icon: Lightbulb,
      items: data.opportunities,
      bgClass: "bg-purple-500/5 border-purple-400/20",
      iconClass: "bg-purple-500/10 text-purple-400",
    },
    {
      title: "Threats",
      icon: Target,
      items: data.threats,
      bgClass: "bg-yellow-500/5 border-yellow-400/20",
      iconClass: "bg-yellow-500/10 text-yellow-400",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.7 }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="rounded-xl bg-[#1a2332] border border-cyan-500/30 p-6 transition-all hover:shadow-[0_0_30px_rgba(6,182,212,0.3)]"
    >
      <h3 className="mb-6 text-lg font-semibold text-white">SWOT Analysis</h3>

      <div className="grid gap-4 md:grid-cols-2">
        {quadrants.map((quadrant, index) => (
          <motion.div
            key={quadrant.title}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9 + index * 0.1 }}
            className={`rounded-lg border p-4 ${quadrant.bgClass} transition-all hover:-translate-y-1`}
          >
            <div className="mb-3 flex items-center gap-2">
              <div className={`flex h-8 w-8 items-center justify-center rounded-lg ${quadrant.iconClass}`}>
                <quadrant.icon className="h-4 w-4" />
              </div>
              <span className="font-medium text-white">{quadrant.title}</span>
            </div>
            <ul className="space-y-2">
              {quadrant.items.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-white/50" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default SwotAnalysis;
