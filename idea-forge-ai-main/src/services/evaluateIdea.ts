// API service for evaluating startup ideas

const BASE_URL = import.meta.env.VITE_API_URL ?? "http://localhost:8000";
const API_URL = `${BASE_URL}/evaluate-idea`;

// ─── Raw API response types ───

export interface ApiResponse {
    swot: {
        strengths: string[];
        weaknesses: string[];
        opportunities: string[];
        threats: string[];
    };
    competitors: {
        competitors: Array<{
            name: string;
            description: string;
        }>;
    };
    market_analysis: {
        tam: string;
        sam: string;
        som: string;
    };
    market_size: {
        market_size_score: number;
        market_size_description: string;
        potential_score: number;
        potential_description: string;
        feasibility_score: number;
        feasibility_description: string;
    };
    overall_evaluation: {
        overall_viability_score: number;
        overall_risk_score: number;
        verdict: string;
        verdict_description: string;
        key_risks: Array<{
            risk_name: string;
            risk_description: string;
        }>;
    };
}

// ─── Frontend-facing result type ───

export interface EvaluationResult {
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

// ─── Helpers ───

function getRiskLevel(riskScore: number): "Low" | "Medium" | "High" {
    if (riskScore <= 33) return "Low";
    if (riskScore <= 66) return "Medium";
    return "High";
}

// ─── Transform API response → frontend shape ───

export function transformApiResponse(api: ApiResponse): EvaluationResult {
    const oe = api.overall_evaluation;
    const ms = api.market_size;

    return {
        overallScore: Math.round(oe.overall_viability_score),
        riskScore: Math.round(oe.overall_risk_score),
        riskLevel: getRiskLevel(oe.overall_risk_score),
        verdict: oe.verdict,
        key_risks: oe.key_risks,
        ideaSummary: oe.verdict_description,
        market: {
            tam: api.market_analysis.tam,
            sam: api.market_analysis.sam,
            som: api.market_analysis.som,
        },
        pillars: {
            marketSize: {
                score: Math.round(ms.market_size_score),
                description: ms.market_size_description,
            },
            potential: {
                score: Math.round(ms.potential_score),
                description: ms.potential_description,
            },
            feasibility: {
                score: Math.round(ms.feasibility_score),
                description: ms.feasibility_description,
                locationInsight: "",
            },
        },
        competitors: api.competitors.competitors.map((c) => ({
            name: c.name,
            description: c.description,
        })),
        swot: api.swot,
    };
}

// ─── API call ───

export async function evaluateIdea(
    idea: string,
    location: string
): Promise<EvaluationResult> {
    const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ idea, location }),
    });

    if (!response.ok) {
        throw new Error(`API error: ${response.status} ${response.statusText}`);
    }

    const data: ApiResponse = await response.json();
    return transformApiResponse(data);
}
