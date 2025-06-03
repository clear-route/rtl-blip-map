const initiativesData = [
    {
        id: "mno_predict_heal",
        label: "AI M&O: Predict & Heal",
        valueCategory: "High", effortCategory: "High",
        rtlPhase: "Monitoring & Observability", rtlPhaseColor: "#4B0082",
        aiLevel: "High", aiSize: 15, quadrantName: "Big Bets"
    },
    {
        id: "deploy_risk_canary",
        label: "AI Deploy: Risk & Canary",
        valueCategory: "High", effortCategory: "High",
        rtlPhase: "Deployment", rtlPhaseColor: "#DC143C",
        aiLevel: "High", aiSize: 15, quadrantName: "Big Bets"
    },
    {
        id: "envs_forecast_selfserve",
        label: "AI Envs: Forecast & Self-Serve",
        valueCategory: "High", effortCategory: "High",
        rtlPhase: "Environments", rtlPhaseColor: "#800080",
        aiLevel: "High", aiSize: 15, quadrantName: "Big Bets"
    },
    {
        id: "design_rapid_pocs",
        label: "AI Design: Rapid POCs",
        valueCategory: "High", effortCategory: "High",
        rtlPhase: "Design", rtlPhaseColor: "#FFD700",
        aiLevel: "Medium", aiSize: 10, quadrantName: "Big Bets"
    },
    {
        id: "testing_data_prioritize",
        label: "AI Testing: Data & Prioritize",
        valueCategory: "High", effortCategory: "High",
        rtlPhase: "Testing", rtlPhaseColor: "#4169E1",
        aiLevel: "High", aiSize: 15, quadrantName: "Big Bets"
    },
    {
        id: "dev_codegen_validate",
        label: "AI Dev: Code Gen & Validate",
        valueCategory: "High", effortCategory: "High",
        rtlPhase: "Development", rtlPhaseColor: "#228B22",
        aiLevel: "Medium", aiSize: 10, quadrantName: "Big Bets"
    },
    {
        id: "build_analyze_select",
        label: "AI Build: Analyze & Select",
        valueCategory: "Medium", effortCategory: "Medium",
        rtlPhase: "Build", rtlPhaseColor: "#008080",
        aiLevel: "High", aiSize: 15, quadrantName: "Fill-ins / Incrementals"
    },
    {
        id: "ideation_feasibility_scan",
        label: "AI Ideation: Feasibility Scan",
        valueCategory: "Medium", effortCategory: "Medium",
        rtlPhase: "Ideation & Planning", rtlPhaseColor: "#FFA500",
        aiLevel: "Medium", aiSize: 10, quadrantName: "Fill-ins / Incrementals"
    }
];

const margin = {top: 80, right: 150, bottom: 180, left: 100}; // Adjusted bottom margin for legends
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
    svg.append("line").attr("x1", 0).attr("y1", yMidPoint).attr("x2", chartWidth).attr("y2", yMidPoint).attr("stroke", "#ccc").attr("stroke-dasharray", "5,5");
    
    const labelData = [
        { x: chartWidth * 0.25, y: chartHeight * 0.25, main: "Time Sinks / Reconsider", sub: "(Low Value, High Effort)" },
        { x: chartWidth * 0.75, y: chartHeight * 0.25, main: "Big Bets", sub: "(High Value, High Effort)" },
        { x: chartWidth * 0.25, y: chartHeight * 0.75, main: "Fill-ins / Incrementals", sub: "(Medium Value, Medium Effort)" },
        { x: chartWidth * 0.75, y: chartHeight * 0.75, main: "Quick Wins", sub: "(High Value, Low Effort)" }
    ];

    labelData.forEach(ld => {
        svg.append("text").attr("class", "quadrant-label")
            .attr("x", ld.x).attr("y", ld.y - 10).attr("text-anchor", "middle").text(ld.main);
        svg.append("text").attr("class", "quadrant-sublabel")
            .attr("x", ld.x).attr("y", ld.y + 8).attr("text-anchor", "middle").style("font-size", "10px").text(ld.sub);
    });
}

function getQuadrantCenterCoordinates(quadrantName, chartWidth, chartHeight) {
    const centers = {
        "Big Bets": { x: chartWidth * 0.75, y: chartHeight * 0.25 },
        "Fill-ins / Incrementals": { x: chartWidth * 0.25, y: chartHeight * 0.75 }
    };
    return centers[quadrantName] || { x: chartWidth / 2, y: chartHeight / 2 };
}

function drawBlips(svg, data, chartWidth, chartHeight) {
    const blipItems = svg.append("g").attr("class", "blips")
        .selectAll(".blip-item")
        .data(data)
        .enter().append("g")
        .attr("class", "blip-item")
        .attr("transform", d => {
            const baseCoords = getQuadrantCenterCoordinates(d.quadrantName, chartWidth, chartHeight);
            let jitter = {dx: 0, dy: 0};
            const quadrantBlipData = data.filter(item => item.quadrantName === d.quadrantName);
            const indexInQuadrant = quadrantBlipData.findIndex(item => item.id === d.id);
            const bigBetsJitter = [
                { dx: -50, dy: -40 }, { dx: 0, dy: -55 }, { dx: 50, dy: -40 },
                { dx: -50, dy: 40 },  { dx: 0, dy: 55 },  { dx: 50, dy: 40 } 
            ];
            const fillInsJitter = [{ dx: -45, dy: 0 }, { dx: 45, dy: 0 }];
            if (d.quadrantName === "Big Bets" && indexInQuadrant < bigBetsJitter.length) {
                jitter = bigBetsJitter[indexInQuadrant];
            } else if (d.quadrantName === "Fill-ins / Incrementals" && indexInQuadrant < fillInsJitter.length) {
                jitter = fillInsJitter[indexInQuadrant];
            }
            return `translate(${baseCoords.x + jitter.dx}, ${baseCoords.y + jitter.dy})`;
        });

    blipItems.append("circle")
        .attr("r", d => d.aiSize)
        .style("fill", d => d.rtlPhaseColor)
        .style("stroke", "#333")
        .style("stroke-width", "1.5px");

    blipItems.append("text")
        .attr("class", "blip-label")
        .attr("y", d => d.aiSize + 12) 
        .attr("text-anchor", "middle")
        .style("font-size", "9px") 
        .text(d => d.label);
}

function drawLegends(svg, chartWidth, chartHeight) {
    const legendItemHeight = 22;
    const legendPadding = 8;
    const legendRectSize = 15;
    const legendGroup = svg.append("g").attr("class", "legends-group")
                           .attr("transform", `translate(0, ${chartHeight + 70})`);

    // RTL Phase Legend
    const uniqueRtlPhases = initiativesData.reduce((acc, curr) => {
        if (!acc.find(item => item.rtlPhase === curr.rtlPhase)) {
            acc.push({ rtlPhase: curr.rtlPhase, rtlPhaseColor: curr.rtlPhaseColor });
        }
        return acc;
    }, []).sort((a,b) => a.rtlPhase.localeCompare(b.rtlPhase));

    const rtlLegend = legendGroup.append("g")
        .attr("class", "legend-rtl");

    rtlLegend.append("text")
        .attr("x", 0)
        .attr("y", -10) 
        .style("font-weight", "bold")
        .style("font-size", "12px")
        .text("RTL Phase (Color):");

    const rtlLegendItems = rtlLegend.selectAll(".legend-rtl-item")
        .data(uniqueRtlPhases)
        .enter().append("g")
        .attr("class", "legend-rtl-item")
        .attr("transform", (d, i) => `translate(0, ${(i * legendItemHeight) + 10})`);

    rtlLegendItems.append("rect")
        .attr("x", 0)
        .attr("y", (legendItemHeight - legendRectSize) / 2 - legendRectSize / 2 ) // Adjust for better centering
        .attr("width", legendRectSize)
        .attr("height", legendRectSize)
        .style("fill", d => d.rtlPhaseColor);

    rtlLegendItems.append("text")
        .attr("x", legendRectSize + legendPadding)
        .attr("y", legendItemHeight / 2  - legendRectSize / 2 + legendRectSize / 2) // Align text with center of rect
        .attr("dy", "0.32em") 
        .style("font-size", "10px")
        .text(d => d.rtlPhase);
    
    // AI Integration Level Legend
    const aiLevelsData = [
        { label: "High AI (Driven)", aiSize: 15 },
        { label: "Medium AI (Augmented)", aiSize: 10 }
    ];
    
    let rtlLegendCalculatedWidth = 150; // Fallback width
    const tempText = rtlLegend.append("text").style("font-size", "10px");
    let maxRtlTextWidth = 0;
    uniqueRtlPhases.forEach(phase => {
        tempText.text(phase.rtlPhase);
        const Twidth = tempText.node().getComputedTextLength();
        if (Twidth > maxRtlTextWidth) maxRtlTextWidth = Twidth;
    });
    tempText.remove();
    rtlLegendCalculatedWidth = legendRectSize + legendPadding + maxRtlTextWidth + 40; // Add buffer

    const aiLegend = legendGroup.append("g")
        .attr("class", "legend-ai")
        .attr("transform", `translate(${rtlLegendCalculatedWidth}, 0)`); 

    aiLegend.append("text")
        .attr("x", 0)
        .attr("y", -10)
        .style("font-weight", "bold")
        .style("font-size", "12px")
        .text("AI Integration (Size):");
        
    const aiLegendItems = aiLegend.selectAll(".legend-ai-item")
        .data(aiLevelsData)
        .enter().append("g")
        .attr("class", "legend-ai-item")
        .attr("transform", (d, i) => `translate(0, ${(i * (15 * 1.8)) + 10 + d.aiSize})`); // Adjusted vertical spacing

    aiLegendItems.append("circle")
        .attr("cx", d => d.aiSize) 
        .attr("cy", 0) 
        .attr("r", d => d.aiSize)
        .style("fill", "#E0E0E0") 
        .style("stroke", "#333");

    aiLegendItems.append("text")
        .attr("x", d => d.aiSize * 2 + legendPadding + 5)
        .attr("y", 0)
        .attr("dy", "0.35em") 
        .style("font-size", "10px")
        .text(d => d.label);
}

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded. Initiatives data:', initiativesData);
    const svg = setupChart();
    const { xScale, yScale } = defineScales(width, height);
    drawAxes(svg, xScale, yScale, width, height);
    drawQuadrants(svg, width, height);
    drawBlips(svg, initiativesData, width, height);
    drawLegends(svg, width, height);
});
