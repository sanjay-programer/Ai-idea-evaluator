import { motion } from "framer-motion";

interface Competitor {
  name: string;
  description: string;
}

interface CompetitorMapProps {
  competitors: Competitor[];
}

const CompetitorMap = ({ competitors }: CompetitorMapProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="rounded-xl bg-[#1a2332] border border-cyan-500/30 p-6 transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.3)]"
    >
      <h3 className="mb-6 text-lg font-semibold text-white">Competitor Landscape</h3>

      <div className="grid gap-3 md:grid-cols-2">
        {competitors.map((comp, index) => (
          <motion.div
            key={comp.name}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 + index * 0.1 }}
            className="rounded-lg bg-[#0f1729] p-3 cursor-pointer transition-all duration-300 hover:bg-[#1a2332] hover:border hover:border-cyan-500/50 hover:shadow-[0_0_15px_rgba(6,182,212,0.2)] hover:scale-105 hover:-translate-y-2"
          >
            <p className="font-medium text-white">{comp.name}</p>
            <p className="text-xs text-gray-400">{comp.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default CompetitorMap;
