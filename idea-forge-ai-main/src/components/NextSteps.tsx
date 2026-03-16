import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Circle, ArrowRight } from "lucide-react";

interface Step {
  id: number;
  title: string;
  description: string;
}

interface NextStepsProps {
  steps: Step[];
}

const NextSteps = ({ steps }: NextStepsProps) => {
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  const toggleStep = (id: number) => {
    setCompletedSteps((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8 }}
      className="rounded-xl bg-[#1a2332] border border-cyan-500/30 p-6"
    >
      <div className="mb-6 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-white">Actionable Next Steps</h3>
        <span className="text-sm text-gray-400">
          {completedSteps.length}/{steps.length} completed
        </span>
      </div>

      <div className="space-y-3">
        {steps.map((step, index) => (
          <motion.div
            key={step.id}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 + index * 0.1 }}
            onClick={() => toggleStep(step.id)}
            className={`group flex cursor-pointer items-start gap-4 rounded-lg border p-4 transition-all ${
              completedSteps.includes(step.id)
                ? "border-green-400/30 bg-green-400/5"
                : "bg-[#0f1729] border-cyan-500/30 hover:border-cyan-400"
            }`}
          >
            <div className="mt-0.5">
              {completedSteps.includes(step.id) ? (
                <CheckCircle2 className="h-5 w-5 text-green-400" />
              ) : (
                <Circle className="h-5 w-5 text-gray-400 transition-colors group-hover:text-cyan-400" />
              )}
            </div>
            <div className="flex-1">
              <p
                className={`font-medium text-white ${
                  completedSteps.includes(step.id) ? "text-green-400 line-through" : ""
                }`}
              >
                {step.title}
              </p>
              <p className="mt-1 text-sm text-gray-400">{step.description}</p>
            </div>
            <ArrowRight className="h-5 w-5 text-gray-400 opacity-0 transition-opacity group-hover:opacity-100" />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default NextSteps;
