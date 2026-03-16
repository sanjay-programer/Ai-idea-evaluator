import { motion } from "framer-motion";
import { DollarSign } from "lucide-react";

interface MarketData {
  tam: string;
  sam: string;
  som: string;
}

interface MarketAnalysisProps {
  data: MarketData;
}

const MarketAnalysis = ({ data }: MarketAnalysisProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="rounded-xl bg-[#1a2332] border border-cyan-500/30 p-6 transition-all hover:shadow-[0_0_30px_rgba(6,182,212,0.3)]"
    >
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-500">
          <DollarSign className="h-5 w-5 text-white" />
        </div>
        <div>
          <h3 className="font-semibold text-white">Market Analysis</h3>
          <p className="text-sm text-gray-400">TAM/SAM/SOM Estimates</p>
        </div>
      </div>

      <div className="mb-6 grid grid-cols-3 gap-4">
        <div className="rounded-lg bg-[#0f1729] p-4 text-center transition-all hover:-translate-y-1">
          <p className="text-xs text-gray-400">TAM</p>
          <p className="text-xl font-bold text-cyan-400">{data.tam}</p>
        </div>
        <div className="rounded-lg bg-[#0f1729] p-4 text-center transition-all hover:-translate-y-1">
          <p className="text-xs text-gray-400">SAM</p>
          <p className="text-xl font-bold text-cyan-400">{data.sam}</p>
        </div>
        <div className="rounded-lg bg-[#0f1729] p-4 text-center transition-all hover:-translate-y-1">
          <p className="text-xs text-gray-400">SOM</p>
          <p className="text-xl font-bold text-cyan-400">{data.som}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default MarketAnalysis;
