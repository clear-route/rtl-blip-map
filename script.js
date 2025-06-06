const initiativesData = [
    {
        id: "mno_predict_heal", label: "AI M&O: Predict & Heal", valueCategory: "High", effortCategory: "High",
        rtlPhase: "Monitoring & Observability", rtlPhaseColor: "#4B0082", aiLevel: "High", aiSize: 15, quadrantName: "Big Bets"
    },
    {
        id: "deploy_risk_canary", label: "AI Deploy: Risk & Canary", valueCategory: "High", effortCategory: "High",
        rtlPhase: "Deployment", rtlPhaseColor: "#DC143C", aiLevel: "High", aiSize: 15, quadrantName: "Big Bets"
    },
    {
        id: "envs_forecast_selfserve", label: "AI Envs: Forecast & Self-Serve", valueCategory: "High", effortCategory: "High",
        rtlPhase: "Environments", rtlPhaseColor: "#800080", aiLevel: "High", aiSize: 15, quadrantName: "Big Bets"
    },
    {
        id: "design_rapid_pocs", label: "AI Design: Rapid POCs", valueCategory: "High", effortCategory: "High",
        rtlPhase: "Design", rtlPhaseColor: "#FFD700", aiLevel: "Medium", aiSize: 10, quadrantName: "Big Bets"
    },
    {
        id: "testing_data_prioritize", label: "AI Testing: Data & Prioritize", valueCategory: "High", effortCategory: "High",
        rtlPhase: "Testing", rtlPhaseColor: "#4169E1", aiLevel: "High", aiSize: 15, quadrantName: "Big Bets"
    },
    {
        id: "dev_codegen_validate", label: "AI Dev: Code Gen & Validate", valueCategory: "High", effortCategory: "Low",
        rtlPhase: "Development", rtlPhaseColor: "#228B22", aiLevel: "Medium", aiSize: 7, quadrantName: "Quick Wins"
    },
    {
        id: "build_analyze_select", label: "AI Build: Analyze & Select", valueCategory: "Medium", effortCategory: "Medium",
        rtlPhase: "Build", rtlPhaseColor: "#008080", aiLevel: "High", aiSize: 15, quadrantName: "Fill-ins / Incrementals"
    },
    {
        id: "ideation_feasibility_scan", label: "AI Ideation: Feasibility Scan", valueCategory: "Medium", effortCategory: "Medium",
        rtlPhase: "Ideation & Planning", rtlPhaseColor: "#FFA500", aiLevel: "Medium", aiSize: 10, quadrantName: "Fill-ins / Incrementals"
    },
    {
        id: "qw_api_testing_prev", label: "Focused API Testing Adoption", valueCategory: "High", effortCategory: "Low", 
        rtlPhase: "Test", rtlPhaseColor: "#4169E1", aiLevel: "Low", aiSize: 7, quadrantName: "Quick Wins" 
    },
    {
        id: "qw_golden_paths_prev", label: "Define Core Golden Paths", valueCategory: "High", effortCategory: "Low", 
        rtlPhase: "Development", rtlPhaseColor: "#228B22", aiLevel: "Low", aiSize: 7, quadrantName: "Quick Wins" 
    },
    {
        id: "ts_microservices_prev", label: "Hasty Microservices Migration", valueCategory: "Low", effortCategory: "High", 
        rtlPhase: "Platform", rtlPhaseColor: "#800080", aiLevel: "Low", aiSize: 7, quadrantName: "Time Sinks / Reconsider" 
    },
    {
        id: "qw_refine_test_strategy", label: "Refine Test Strategy Doc", valueCategory: "High", effortCategory: "Low",
        rtlPhase: "Test", rtlPhaseColor: "#4169E1", aiLevel: "Low", aiSize: 7, quadrantName: "Quick Wins"
    },
    {
        id: "qw_secrets_vault", label: "Secrets Vault Setup", valueCategory: "High", effortCategory: "Low",
        rtlPhase: "Secure", rtlPhaseColor: "#8A2BE2", aiLevel: "Low", aiSize: 7, quadrantName: "Quick Wins"
    },
    {
        id: "fi_dev_hub_mvp", label: "Launch Internal Developer Platform (MVP)", valueCategory: "High", effortCategory: "Medium",
        rtlPhase: "Development", rtlPhaseColor: "#228B22", aiLevel: "Low", aiSize: 7, quadrantName: "Big Bets"
    },
    {
        id: "fi_optimize_ci_pipeline", label: "Optimize Key CI Pipeline", valueCategory: "Medium", effortCategory: "Medium",
        rtlPhase: "Build", rtlPhaseColor: "#008080", aiLevel: "Low", aiSize: 7, quadrantName: "Fill-ins / Incrementals"
    },
    {
        id: "ts_manual_regression", label: "Manual Regression for All Changes", valueCategory: "Low", effortCategory: "High",
        rtlPhase: "Test", rtlPhaseColor: "#4169E1", aiLevel: "Low", aiSize: 7, quadrantName: "Time Sinks / Reconsider"
    },
    {
        id: "ts_overcustom_cots", label: "Over-customizing COTS Tools", valueCategory: "Low", effortCategory: "High",
        rtlPhase: "Platform", rtlPhaseColor: "#800080", aiLevel: "Low", aiSize: 7, quadrantName: "Time Sinks / Reconsider"
    },
    {
        id: "fi_ai_code_reviews", label: "AI Assisted Code Reviews", valueCategory: "Medium", effortCategory: "Medium",
        rtlPhase: "Development", rtlPhaseColor: "#228B22", aiLevel: "Medium", aiSize: 10, quadrantName: "Fill-ins / Incrementals"
    },
    {
        id: "bb_auto_release_docs", label: "Automated Release/Gov Docs", valueCategory: "High", effortCategory: "High",
        rtlPhase: "Deployment", rtlPhaseColor: "#DC143C", aiLevel: "Low", aiSize: 7, quadrantName: "Big Bets"
    },
    {
        id: "bb_ephemeral_envs", label: "Ephemeral Test Environments", valueCategory: "High", effortCategory: "High",
        rtlPhase: "Environments", rtlPhaseColor: "#800080", aiLevel: "Low", aiSize: 7, quadrantName: "Big Bets"
    },
    {
        id: "bb_header_routing_mocks", label: "Header-based Routing (Mocks)", valueCategory: "High", effortCategory: "Low",
        rtlPhase: "Testing", rtlPhaseColor: "#4169E1", aiLevel: "Low", aiSize: 7, quadrantName: "Quick Wins"
    },
    {
        id: "qw_agentic_devsecops", label: "Pilot DevSecOps Agentic Use Cases", valueCategory: "High", effortCategory: "Low",
        rtlPhase: "Secure", rtlPhaseColor: "#8A2BE2", aiLevel: "Medium", aiSize: 10, quadrantName: "Quick Wins"
    },
    {
        id: "bb_agentic_platform", label: "Observable, Traceable Agentic Platform", valueCategory: "High", effortCategory: "High",
        rtlPhase: "Platform", rtlPhaseColor: "#800080", aiLevel: "High", aiSize: 15, quadrantName: "Big Bets"
    }
];

const margin = {top: 80, right: 150, bottom: 180, left: 100};
const width = 960 - margin.left - margin.right;
const height = 700 - margin.top - margin.bottom;

function setupChart() {
    d3.select("#chart-container").select("svg").remove();
    const svg = d3.select("#chart-container").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
      .append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);
    svg.append("rect")
        .attr("width", width)
        .attr("height", height)
        .attr("fill", "#ffffff");
    return svg;
}

function defineScales(chartWidth, chartHeight) {
    const effortCategories = ["Low", "Medium", "High"];
    const valueCategories = ["Low", "Medium", "High"];
    const yScale = d3.scalePoint().domain(effortCategories).range([chartHeight, 0]).padding(0.5);
    const xScale = d3.scalePoint().domain(valueCategories).range([0, chartWidth]).padding(0.5);
    return { xScale, yScale };
}

function drawAxes(svg, xScale, yScale, chartWidth, chartHeight) {
    svg.append("g").attr("class", "x-axis axis").attr("transform", `translate(0,${chartHeight})`).call(d3.axisBottom(xScale));
    svg.append("text").attr("class", "x-axis-label axis-label").attr("text-anchor", "middle")
        .attr("x", chartWidth / 2).attr("y", chartHeight + 40 ).text("Expected Business Value / Strategic Impact");
    svg.append("g").attr("class", "y-axis axis").call(d3.axisLeft(yScale));
    svg.append("text").attr("class", "y-axis-label axis-label").attr("text-anchor", "middle")
        .attr("transform", "rotate(-90)").attr("y", -margin.left + 30 ).attr("x", -chartHeight / 2).text("Implementation Effort / Complexity");
}

function drawQuadrants(svg, chartWidth, chartHeight) {
    const xMidPoint = chartWidth / 2;
    const yMidPoint = chartHeight / 2;
    svg.append("line").attr("x1", xMidPoint).attr("y1", 0).attr("x2", xMidPoint).attr("y2", chartHeight).attr("stroke", "#ccc").attr("stroke-dasharray", "5,5");
    svg.append("line
