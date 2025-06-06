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
        id: "qw_secrets_vault", label: "Basic Secrets Vault Setup", valueCategory: "High", effortCategory: "Low",
        rtlPhase: "Secure", rtlPhaseColor: "#8A2BE2", aiLevel: "Low", aiSize: 7, quadrantName: "Quick Wins"
    },
    // MOVED to Big Bets
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
        "Fill-ins / Incrementals": { x: chartWidth * 0.25, y: chartHeight * 0.75 },
        "Quick Wins": { x: chartWidth * 0.75, y: chartHeight * 0.75 },
        "Time Sinks / Reconsider": { x: chartWidth * 0.25, y: chartHeight * 0.25 }
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

            const spacingX = chartWidth / 8; 
            const spacingY = chartHeight / 8;

            const eightItemPattern = [
                { dx: -spacingX*1.2, dy: -spacingY }, { dx: 0, dy: -spacingY*1.2 }, { dx: spacingX*1.2, dy: -spacingY },
                { dx: -spacingX*0.8, dy: 0 }, { dx: spacingX*0.8, dy: 0 },
                { dx: -spacingX*1.2, dy: spacingY }, { dx: 0, dy: spacingY*1.2 }, { dx: spacingX*1.2, dy: spacingY },
            ];
            const sevenItemPattern = [
                { dx: -spacingX, dy: -spacingY*1.0 }, { dx: 0, dy: -spacingY*1.2 }, { dx: spacingX, dy: -spacingY*1.0 }, 
                { dx: -spacingX*0.5, dy: 0 },  { dx: spacingX*0.5, dy: 0 },
                { dx: -spacingX, dy: spacingY*1.0 }, { dx: spacingX, dy: spacingY*1.0 }
            ];

            if (quadrantBlipData.length >= 8) {
                jitter = JSON.parse(JSON.stringify(eightItemPattern[indexInQuadrant % eightItemPattern.length]));
            } else if (quadrantBlipData.length === 7) {
                 jitter = JSON.parse(JSON.stringify(sevenItemPattern[indexInQuadrant % sevenItemPattern.length])); 
            } else {
                // Fallback to simpler patterns for fewer items
                const patterns = {
                    6: [ { dx: -spacingX, dy: -spacingY*1.0 }, { dx: 0, dy: -spacingY*1.2 }, { dx: spacingX, dy: -spacingY*1.0 }, { dx: -spacingX, dy: spacingY*0.8 },  { dx: 0, dy: spacingY*1.0 },  { dx: spacingX, dy: spacingY*0.8 } ],
                    5: [ { dx: -spacingX*0.7, dy: -spacingY*0.9 }, { dx: spacingX*0.7, dy: -spacingY*0.9 }, { dx: 0, dy: 0 }, { dx: -spacingX*0.7, dy: spacingY*0.7 }, { dx: spacingX*0.7, dy: spacingY*0.7 } ],
                    4: [ { dx: -spacingX*0.7, dy: -spacingY*0.9 }, { dx: spacingX*0.7, dy: -spacingY*0.9 }, { dx: -spacingX*0.7, dy: spacingY*0.7 },  { dx: spacingX*0.7, dy: spacingY*0.7 } ],
                    3: [ { dx: 0, dy: -spacingY*0.9 }, { dx: -spacingX*0.7, dy: spacingY*0.7 }, { dx: spacingX*0.7, dy: spacingY*0.7 } ],
                    2: [ { dx: -spacingX*0.6, dy: 0 }, { dx: spacingX*0.6, dy: 0 } ],
                    1: [ { dx: 0, dy: 0 } ]
                };
                const pattern = patterns[quadrantBlipData.length] || [{dx:0, dy:0}];
                jitter = JSON.parse(JSON.stringify(pattern[indexInQuadrant % pattern.length]));
            }
            
            // Specific individual blip adjustments
            if (d.id === "mno_predict_heal") { jitter.dy += 25; jitter.dx -= 25; } // More down and left
            if (d.id === "bb_ephemeral_envs") { jitter.dy -= 15; }
            if (d.id === "qw_golden_paths_prev") { jitter.dx += 50; }
            if (d.id === "bb_header_routing_mocks") { jitter.dx = -spacingX * 0.8; jitter.dy = 5; } // further left
            if (d.id === "ts_manual_regression") { jitter.dy -= 15; } // up a bit
            if (d.id === "ts_overcustom_cots") { jitter.dy += 15; } // down a bit


            return `translate(${baseCoords.x + jitter.dx}, ${baseCoords.y + jitter.dy})`;
        });

    blipItems.append("circle")
        .attr("r", d => d.aiSize)
        .style("fill", d => d.rtlPhaseColor)
        .style("stroke", "#333")
        .style("stroke-width", "1.5px");

    blipItems.append("text")
        .attr("class", "blip-label")
        .attr("y", d => d.aiSize + 14) 
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
    const uniqueRtlPhases = initiativesData.map(d => ({ rtlPhase: d.rtlPhase, rtlPhaseColor: d.rtlPhaseColor }))
        .filter((value, index, self) => self.findIndex(t => t.rtlPhase === value.rtlPhase && t.rtlPhaseColor === value.rtlPhaseColor) === index)
        .sort((a,b) => a.rtlPhase.localeCompare(b.rtlPhase));

    const rtlLegend = legendGroup.append("g").attr("class", "legend-rtl");
    rtlLegend.append("text").attr("x", 0).attr("y", -10).style("font-weight", "bold").style("font-size", "12px").text("RTL Phase (Color):");
    
    const numColumnsRtl = 3;
    const itemsPerRtlColumn = Math.ceil(uniqueRtlPhases.length / numColumnsRtl);
    let rtlColumnWidth = 0;
    const tempTextForWidthCalc = rtlLegend.append("text").style("font-size", "10px").style("visibility", "hidden");
    uniqueRtlPhases.forEach((phase) => {
        tempTextForWidthCalc.text(phase.rtlPhase);
        try {
            const textWidth = tempTextForWidthCalc.node().getComputedTextLength();
            if (textWidth > rtlColumnWidth) rtlColumnWidth = textWidth;
        } catch(e) {
            rtlColumnWidth = Math.max(rtlColumnWidth, phase.rtlPhase.length * 6); 
            console.warn('getComputedTextLength failed for RTL legend width, estimating.');
        }
    });
    tempTextForWidthCalc.remove();
    rtlColumnWidth += legendRectSize + legendPadding + 15; 
    const interColumnGapRtl = 20;

    const rtlLegendItems = rtlLegend.selectAll(".legend-rtl-item").data(uniqueRtlPhases).enter().append("g")
        .attr("class", "legend-rtl-item")
        .attr("transform", (d, i) => {
            const colIndex = Math.floor(i / itemsPerRtlColumn);
            const itemIndexInCol = i % itemsPerRtlColumn;
            const xPos = colIndex * (rtlColumnWidth + interColumnGapRtl);
            const yPos = (itemIndexInCol * legendItemHeight) + 10;
            return `translate(${xPos}, ${yPos})`;
        });

    rtlLegendItems.append("rect")
        .attr("x", 0)
        .attr("y", (legendItemHeight - legendRectSize) / 2 )
        .attr("width", legendRectSize)
        .attr("height", legendRectSize)
        .style("fill", d => d.rtlPhaseColor);

    rtlLegendItems.append("text")
        .attr("x", legendRectSize + legendPadding)
        .attr("y", legendItemHeight / 2) 
        .attr("dominant-baseline", "middle") 
        .style("font-size", "10px")
        .text(d => d.rtlPhase);
    
    const aiLevelsData = [
        { label: "High AI (Driven)", aiSize: 15 },
        { label: "Medium AI (Augmented)", aiSize: 10 },
        { label: "Standard / Low AI", aiSize: 7 } 
    ];
    
    const totalRtlLegendWidthActual = (numColumnsRtl * rtlColumnWidth) + ((numColumnsRtl - 1) * interColumnGapRtl) - interColumnGapRtl;

    const aiLegend = legendGroup.append("g").attr("class", "legend-ai")
                           .attr("transform", `translate(${totalRtlLegendWidthActual + 40}, 0)`);
    aiLegend.append("text").attr("x", 0).attr("y", -10).style("font-weight", "bold").style("font-size", "12px").text("AI Integration (Size):");
    const aiLegendItems = aiLegend.selectAll(".legend-ai-item").data(aiLevelsData).enter().append("g")
        .attr("class", "legend-ai-item").attr("transform", (d, i) => `translate(0, ${(i * (Math.max(...aiLevelsData.map(l => l.aiSize)) * 1.5 + legendItemHeight * 0.4)) + 10 + d.aiSize})`);
    aiLegendItems.append("circle").attr("cx", d => d.aiSize).attr("cy", 0).attr("r", d => d.aiSize).style("fill", "#E0E0E0").style("stroke", "#333");
    aiLegendItems.append("text").attr("x", d => d.aiSize * 2 + legendPadding + 5).attr("y", 0).attr("dy", "0.35em").style("font-size", "10px").text(d => d.label);
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