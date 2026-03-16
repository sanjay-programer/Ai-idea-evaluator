import { useState } from "react";
import Header from "@/components/Header";
import IdeaInput from "@/components/IdeaInput";
import Dashboard from "@/components/Dashboard";
import LandingPage from "@/components/LandingPage";
import { evaluateIdea, EvaluationResult } from "@/services/evaluateIdea";
import { toast } from "sonner";

const Index = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [evaluationResult, setEvaluationResult] =
    useState<EvaluationResult | null>(null);
  const [showApp, setShowApp] = useState(false);

  const handleGetStarted = () => {
    setShowApp(true);
  };

  const handleEvaluate = async (idea: string, location: string) => {
    setIsLoading(true);
    setEvaluationResult(null);

    try {
      const result = await evaluateIdea(idea, location);
      setEvaluationResult(result);

      // Scroll to results
      setTimeout(() => {
        window.scrollTo({ top: 500, behavior: "smooth" });
      }, 100);
    } catch (error) {
      console.error("Evaluation failed:", error);
      toast.error("Failed to evaluate idea. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  if (!showApp) {
    return <LandingPage onGetStarted={handleGetStarted} />;
  }

  return (
    <div className="min-h-screen bg-[#0f1729] flex flex-col">
      <div className="relative flex-1">
        <Header />
        <IdeaInput onEvaluate={handleEvaluate} isLoading={isLoading} />

        {evaluationResult && <Dashboard result={evaluationResult} />}
      </div>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-8 border-t border-gray-800">
        <div className="text-center text-gray-500 text-sm">
          <p>© 2026 IdeaForge AI. Built by builders, for builders.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
