import { motion } from "framer-motion";
import { Globe, Rocket, CheckCircle2 } from "lucide-react";

interface PillarData {
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
}

interface PillarsGridProps {
  data: PillarData;
}

const PillarsGrid = ({ data }: PillarsGridProps) => {
  const pillars = [
    {
      title: "Market Size",
      icon: Globe,
      score: data.marketSize.score,
      description: data.marketSize.description,
      color: "primary",
    },
    {
      title: "Potential",
      icon: Rocket,
      score: data.potential.score,
      description: data.potential.description,
      color: "accent",
    },
    {
      title: "Feasibility",
      icon: CheckCircle2,
      score: data.feasibility.score,
      description: data.feasibility.description,
      color: "success",
    },
  ];

  const getBarColor = (color: string) => {
    switch (color) {
      case "primary":
        return "bg-purple-500";
      case "accent":
        return "bg-pink-500";
      case "success":
        return "bg-green-500";
      default:
        return "bg-purple-500";
    }
  };

  const getIconBg = (color: string) => {
    switch (color) {
      case "primary":
        return "bg-purple-500/20 text-purple-400";
      case "accent":
        return "bg-pink-500/20 text-pink-400";
      case "success":
        return "bg-green-500/20 text-green-400";
      default:
        return "bg-purple-500/20 text-purple-400";
    }
  };

  return (
    <div className="grid gap-4 md:grid-cols-3">
      {pillars.map((pillar, index) => (
        <motion.div
          key={pillar.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 + index * 0.1 }}
          whileHover={{ y: -5, scale: 1.03 }}
          className="group rounded-xl bg-[#1a2332] border border-cyan-500/30 p-5 transition-all hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(6,182,212,0.3)]"
        >
          <div className="mb-4 flex items-center justify-between">
            <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${getIconBg(pillar.color)}`}>
              <pillar.icon className="h-5 w-5" />
            </div>
            <span className="text-2xl font-bold text-white">{pillar.score}%</span>
          </div>

          <h4 className="mb-1 font-semibold text-white">{pillar.title}</h4>
          <p className="mb-4 text-sm text-gray-400">{pillar.description}</p>

          {/* Progress bar */}
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-gray-700">
            <motion.div
              className={`h-full ${getBarColor(pillar.color)}`}
              initial={{ width: 0 }}
              animate={{ width: `${pillar.score}%` }}
              transition={{ duration: 1, delay: 0.7 + index * 0.1 }}
            />
          </div>

        </motion.div>
      ))}
    </div>
  );
};

export default PillarsGrid;
