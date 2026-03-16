# AI Idea Evaluator

AI Idea Evaluator is a full-stack web application designed to evaluate business ideas using AI-powered analysis. It combines a Python backend with a React frontend to provide comprehensive entrepreneurial intelligence.

---

## Project Structure

### Backend: AI-Idea-Evaluator-Logic

**Purpose**: Core evaluation engine that analyzes business ideas across multiple dimensions.

**Key Technologies**:
- **Framework**: FastAPI for REST API
- **AI Model**: Google Gemini 2.0 Flash (LLM)
- **Agent Framework**: Google ADK (Agents Development Kit) for autonomous AI agents
- **Search Integration**: Google Search for real-time market data
- **Deployment**: Render.com

**Main Features**:
1. **SWOT Analysis** - Identifies strengths, weaknesses, opportunities, and threats.
2. **Competitor Analysis** - Uses AI agents to discover and analyze top 5 competitors via Google Search.
3. **Market Analysis** - Calculates TAM (Total Addressable Market), SAM (Serviceable Available Market), SOM (Serviceable Obtainable Market).
4. **Market Size & Feasibility Scoring** - Rates market potential and implementation feasibility.
5. **Overall Viability Score** - Provides risk assessment and investment verdict.

**API Endpoints**:
- `GET /health` - Health check.
- `POST /evaluate-idea` - Main evaluation endpoint.

---

### Frontend: Idea-Forge-AI-Main

**Purpose**: Interactive user interface for evaluating and visualizing business idea analysis.

**Key Technologies**:
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite (fast development and production builds)
- **UI Components**: shadcn/ui + Radix UI (accessible, composable component library)
- **State Management**: React Query (TanStack Query) for API calls
- **Styling**: Tailwind CSS
- **Routing**: React Router v6
- **Animations**: Framer Motion
- **Forms**: React Hook Form
- **Charting**: Recharts

**Core Components**:
- **LandingPage.tsx**: Welcome screen with "Get Started" CTA.
- **IdeaInput.tsx**: Form for entering idea and location.
- **Dashboard.tsx**: Main results container.
- **ScoreRing.tsx**: Circular visualization of overall viability score.
- **PillarsGrid.tsx**: Displays three assessment pillars: Market Size, Potential, Feasibility.
- **MarketAnalysis.tsx**: TAM/SAM/SOM breakdown.
- **CompetitorMap.tsx**: Visualizes competitors.
- **SwotAnalysis.tsx**: SWOT matrix display.
- **NextSteps.tsx**: Recommendations and action items.

---

## Data Flow

```
User Input (Idea + Location)
         ↓
[IdeaInput Form] → API Call to Backend
         ↓
[FastAPI Backend] → Gemini AI Analysis
         ↓
[Competitor Agent] → Google Search for Real Companies
         ↓
Comprehensive JSON Response
         ↓
[Dashboard] → Display Results (SWOT, Competitors, Scores, Risk Assessment)
```

---

## Key Dependencies

### Backend:
- FastAPI
- google-genai
- google-adk
- google-cloud-*
- Pydantic

### Frontend:
- React
- TypeScript
- Tailwind CSS
- Shadcn/UI
- Recharts
- React Router
- React Query

---

## Deployment

- **Backend**: Deployed on Render.com.
- **Frontend**: Can be hosted on Vercel/Netlify.

---

## Getting Started

### Prerequisites
- Node.js (for frontend)
- Python 3.11+ (for backend)
- Virtual environment for Python dependencies

### Installation

#### Backend:
1. Navigate to `AI-Idea-Evaluator-Logic`.
2. Create and activate a virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```
3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
4. Run the server:
   ```bash
   uvicorn main:app --reload
   ```

#### Frontend:
1. Navigate to `Idea-Forge-AI-Main`.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

---

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m 'Add feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Open a Pull Request.

---

## License

This project is licensed under the MIT License.