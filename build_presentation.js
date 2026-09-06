const pptxgen = require('pptxgenjs');
const pres = new pptxgen();

pres.layout = 'LAYOUT_16x9';

// Define theme colors
const NAVY = '003366';
const BLUE = '006699';
const DARK_GRAY = '222222';
const LIGHT_BG = 'F4F7F9';
const WHITE = 'FFFFFF';
const GREEN = '2E7D32';
const RED = 'C62828';

// Image paths from Colab run
const IMG_WATER_IRRIG = 'C:/Users/ocotp/.gemini/antigravity/brain/2b64254e-8329-498c-9b37-019e1b1a9e41/.user_uploaded/media_1788676491577.png';
const IMG_YIELD_PROFIT = 'C:/Users/ocotp/.gemini/antigravity/brain/2b64254e-8329-498c-9b37-019e1b1a9e41/.user_uploaded/media_1788676491579.png';
const IMG_KPI_REGIONAL = 'C:/Users/ocotp/.gemini/antigravity/brain/2b64254e-8329-498c-9b37-019e1b1a9e41/.user_uploaded/media_1788676491584.png';
const IMG_CORR_SCATTER = 'C:/Users/ocotp/.gemini/antigravity/brain/2b64254e-8329-498c-9b37-019e1b1a9e41/.user_uploaded/media_1788676491659.png';

// Helper for slide header
function addSlideHeader(s, title, category) {
  s.background = { color: LIGHT_BG };
  s.addShape(pres.ShapeType.rect, { x: 0, y: 0, w: '100%', h: 0.9, fill: { color: NAVY } });
  s.addText(title, { x: 0.8, y: 0.12, w: 9.5, h: 0.65, fontSize: 22, color: WHITE, bold: true });
  if (category) {
    s.addText(category, { x: 9.2, y: 0.2, w: 3.5, h: 0.45, fontSize: 11, color: 'BBDEFB', align: 'right' });
  }
}

// ==========================================
// Slide 1: Title
// ==========================================
let slide = pres.addSlide();
slide.background = { color: 'F0F8FF' };
slide.addShape(pres.ShapeType.rect, { x: 0, y: 0, w: '100%', h: 0.45, fill: { color: BLUE } });
slide.addText('VOIS AICTE Internship Batch 1 (2026-2027) Major Project', {
  x: 0.8, y: 0.08, w: 11.5, h: 0.3, fontSize: 12.5, color: WHITE, bold: true, align: 'center'
});
slide.addText('Seasonal Agriculture Performance Analysis', {
  x: 0.8, y: 1.4, w: 11.7, h: 1.1, fontSize: 32, color: NAVY, bold: true, align: 'center'
});
slide.addText('Empirical Data Analytics & Crop Economics Across 4,000 Multi-State Farm Observations', {
  x: 1.0, y: 2.55, w: 11.3, h: 0.5, fontSize: 15, color: '555555', italic: true, align: 'center'
});

const infoBox = [
  { text: 'Student Name: ', options: { bold: true, color: NAVY } },
  { text: 'Asmi Sharma\n', options: { color: DARK_GRAY } },
  { text: 'College Name: ', options: { bold: true, color: NAVY } },
  { text: 'Chandigarh University (BE Computer Science & Engineering, 2026 Passout)\n', options: { color: DARK_GRAY } },
  { text: 'AICTE Student ID: ', options: { bold: true, color: NAVY } },
  { text: 'STU6a65f9036e5721785067779\n', options: { color: DARK_GRAY } },
  { text: 'Internship ID: ', options: { bold: true, color: NAVY } },
  { text: 'INTERNSHIP_17830691666a4779eecfe8a\n', options: { color: DARK_GRAY } },
  { text: 'Program: ', options: { bold: true, color: NAVY } },
  { text: 'VOIS for Tech - Data Analytics Internship (Edunet Foundation & Vodafone Idea Foundation)', options: { color: DARK_GRAY } }
];
slide.addText(infoBox, {
  x: 2.2, y: 3.4, w: 8.9, h: 3.0, fontSize: 13.5, fill: { color: WHITE }, line: { color: 'CCCCCC', width: 1 },
  margin: 15, align: 'left', lineSpacing: 20
});

// ==========================================
// Slide 2: Problem Statement
// ==========================================
slide = pres.addSlide();
addSlideHeader(slide, 'Problem Statement', 'Slide 2 of 14');
slide.addText([
  { text: 'Core Problem Context:\n', options: { bold: true, fontSize: 15, color: NAVY } },
  { text: '• Agricultural activities across India are fundamentally shaped by three distinct cropping seasons: Kharif (Monsoon), Rabi (Winter), and Zaid (Summer).\n', options: { fontSize: 13.5 } },
  { text: '• While raw farm logs capture final output, they do not explain why crop yields, operational costs, and net farm profits vary so sharply between seasons.\n\n', options: { fontSize: 13.5 } },
  { text: 'Key Operational Challenges Identified:\n', options: { bold: true, fontSize: 15, color: NAVY } },
  { text: '• Resource Misallocation: Farmers frequently apply uniform chemical and water inputs regardless of seasonal evaporative demand and ambient moisture levels.\n', options: { fontSize: 13.5 } },
  { text: '• Summer Inefficiency Trap: Uncontrolled flood irrigation during summer heat (31–39°C in Zaid) creates high pumping bills with severe evaporation loss.\n', options: { fontSize: 13.5 } },
  { text: '• Monsoon Pest Vulnerability: Prolonged high humidity (>71% in Kharif) drives disease and pest outbreak risks above 54%, eroding gross margins.\n\n', options: { fontSize: 13.5 } },
  { text: 'Project Objective:\n', options: { bold: true, fontSize: 15, color: NAVY } },
  { text: '• Investigate 4,000 multi-state farm observations using statistical data analytics to benchmark seasonal performance, test hypotheses, and build data-driven recommendations.', options: { fontSize: 13.5 } }
], { x: 0.8, y: 1.2, w: 11.7, h: 5.8, color: DARK_GRAY, margin: 10 });

// ==========================================
// Slide 3: Project Description
// ==========================================
slide = pres.addSlide();
addSlideHeader(slide, 'Project Description & Dataset Scope', 'Slide 3 of 14');
slide.addText([
  { text: 'Dataset Scope & Coverage:\n', options: { bold: true, fontSize: 15, color: NAVY } },
  { text: '• 4,000 verified farm records across 8 major agricultural states in India:\n  Andhra Pradesh (529), Telangana (516), Maharashtra (512), Madhya Pradesh (497), Karnataka (489), Gujarat (488), Tamil Nadu (485), and Punjab (484).\n', options: { fontSize: 13.5 } },
  { text: '• 8 essential crops covering foodgrains, cash crops, oilseeds, and pulses:\n  Rice (690), Wheat (614), Maize (551), Cotton (508), Pulses (496), Groundnut (424), Chilli (412), and Sugarcane (305).\n\n', options: { fontSize: 13.5 } },
  { text: 'Core Analytical Pipeline:\n', options: { bold: true, fontSize: 15, color: NAVY } },
  { text: '1. Data Auditing: Imputed 48 missing Rainfall values, 40 Soil Moisture values, and 32 Yield entries using localized district-season group medians.\n', options: { fontSize: 13.5 } },
  { text: '2. Feature Engineering: Computed Cost per Hectare, Profit Margin (%), Water Efficiency (t/1000m³), and Total NPK chemical application.\n', options: { fontSize: 13.5 } },
  { text: '3. In-Depth Seasonal EDA: Systematically addressed all 12 key AICTE research questions.\n', options: { fontSize: 13.5 } },
  { text: '4. Statistical Validation: One-Way ANOVA and Kruskal-Wallis tests verifying statistical significance across seasons.\n', options: { fontSize: 13.5 } },
  { text: '5. Actionable Roadmap: Developed seasonal crop planning and micro-irrigation guidelines.', options: { fontSize: 13.5 } }
], { x: 0.8, y: 1.2, w: 11.7, h: 5.8, color: DARK_GRAY, margin: 10 });

// ==========================================
// Slide 4: End Users
// ==========================================
slide = pres.addSlide();
addSlideHeader(slide, 'Target Beneficiaries & End Users', 'Slide 4 of 14');
const users = [
  { role: '🌾 Smallholder Farmers & FPOs', desc: 'Provides actionable guidance on seasonal crop selection, warning against water-stressed summer cereals and recommending high-margin rotations (Pulses/Groundnut/Chilli) with micro-irrigation.' },
  { role: '🏢 Agricultural Extension Officers (KVKs)', desc: 'Enables targeted agro-advisories on disease and pest prevention during humid monsoon months where disease risk exceeds 54% on average.' },
  { role: '💧 State Irrigation & Water Resources Boards', desc: 'Supplies quantitative evidence to prioritize micro-irrigation (Drip/Sprinkler) subsidies over open flood canals in water-stressed districts.' },
  { role: '📊 Agri-Fintech & Crop Insurance Companies', desc: 'Provides empirical default risk profiles (Zaid has a 64.5% farm loss rate) to calculate fair, season-adjusted crop insurance premiums and loan terms.' },
  { role: '🏛️ Government & Agricultural Planners', desc: 'Informs Minimum Support Price (MSP) review and seasonal power and fertilizer distribution frameworks.' }
];
users.forEach((u, idx) => {
  slide.addShape(pres.ShapeType.roundRect, { x: 0.8, y: 1.2 + (idx * 1.1), w: 11.7, h: 0.95, fill: { color: WHITE }, line: { color: 'DDDDDD' } });
  slide.addText(u.role, { x: 1.0, y: 1.25 + (idx * 1.1), w: 4.8, h: 0.4, fontSize: 13.5, bold: true, color: NAVY });
  slide.addText(u.desc, { x: 1.0, y: 1.65 + (idx * 1.1), w: 11.3, h: 0.45, fontSize: 12, color: DARK_GRAY });
});

// ==========================================
// Slide 5: Technology Used
// ==========================================
slide = pres.addSlide();
addSlideHeader(slide, 'Technology Stack & Development Environment', 'Slide 5 of 14');
const techList = [
  { tool: 'Python 3.10+', desc: 'Core programming language for data analytics, statistical modeling, and computational scripting.' },
  { tool: 'Pandas & NumPy', desc: 'Vectorized data cleaning, schema validation, grouping aggregates, and feature engineering.' },
  { tool: 'Matplotlib & Seaborn', desc: 'Publication-quality visualizations: grouped boxplots, correlation heatmaps, and distribution plots.' },
  { tool: 'SciPy (scipy.stats)', desc: 'Formal hypothesis testing: One-Way ANOVA (F-test), Kruskal-Wallis H-test, and correlation metrics.' },
  { tool: 'Jupyter & Google Colab', desc: 'Interactive development environment providing reproducible code execution and inline markdown reports.' },
  { tool: 'Git & GitHub', desc: 'Version control repository tracking datasets, notebooks, slide decks, and project reports.' }
];
techList.forEach((t, idx) => {
  const col = idx % 2;
  const row = Math.floor(idx / 2);
  slide.addShape(pres.ShapeType.roundRect, { x: 0.8 + (col * 6.0), y: 1.3 + (row * 1.8), w: 5.7, h: 1.5, fill: { color: WHITE }, line: { color: 'CCDDEE', width: 1.5 } });
  slide.addText(t.tool, { x: 1.0 + (col * 6.0), y: 1.45 + (row * 1.8), w: 5.3, h: 0.35, fontSize: 15, bold: true, color: BLUE });
  slide.addText(t.desc, { x: 1.0 + (col * 6.0), y: 1.85 + (row * 1.8), w: 5.3, h: 0.85, fontSize: 12.5, color: DARK_GRAY });
});

// ==========================================
// Slide 6: RESULTS 1 - Yield & Profitability (WITH EMBEDDED SCREENSHOT 2)
// ==========================================
slide = pres.addSlide();
addSlideHeader(slide, 'RESULTS: Seasonal Yield & Crop Profitability Ranking', 'Slide 6 of 14 [Code Output]');

// Embed Image 2 (Figure 1A & 1B)
slide.addImage({
  path: IMG_YIELD_PROFIT,
  x: 0.8, y: 1.1, w: 7.2, h: 3.2
});

slide.addShape(pres.ShapeType.roundRect, {
  x: 8.2, y: 1.1, w: 4.3, h: 5.8, fill: { color: WHITE }, line: { color: 'B0BEC5' }
});

slide.addText([
  { text: 'Key Data Takeaways:\n', options: { bold: true, fontSize: 14, color: NAVY } },
  { text: '• Figure 1A (Yield Boxplot):\n', options: { bold: true, fontSize: 12.5, color: BLUE } },
  { text: '  - Kharif mean yield is highest at 5.64 t/ha, followed by Rabi (5.08 t/ha) and Zaid (4.67 t/ha).\n  - Outliers (>40 t/ha) reflect sugarcane stalk harvest.\n\n', options: { fontSize: 11.5 } },
  { text: '• Figure 1B (Profit Ranking):\n', options: { bold: true, fontSize: 12.5, color: BLUE } },
  { text: '  - Sugarcane (+₹96.8K/ha) and Chilli (+₹91.8K/ha) lead agricultural profitability.\n  - Cotton (+₹16.2K/ha) and Groundnut (+₹7.4K/ha) remain solvent.\n  - Severe Cereal Deficit: Pulses (-₹546/ha), Maize (-₹10.3K/ha), Rice (-₹13.4K/ha), and Wheat (-₹16.2K/ha) show negative net margins.', options: { fontSize: 11.5 } }
], { x: 8.35, y: 1.25, w: 4.0, h: 5.5, color: DARK_GRAY });

const s6Table = [
  [
    { text: 'Cropping Season', options: { bold: true, fill: { color: NAVY }, color: WHITE } },
    { text: 'Sample (N)', options: { bold: true, fill: { color: NAVY }, color: WHITE } },
    { text: 'Mean Yield', options: { bold: true, fill: { color: NAVY }, color: WHITE } },
    { text: 'Avg Farm Profit', options: { bold: true, fill: { color: NAVY }, color: WHITE } },
    { text: 'Solvency (%)', options: { bold: true, fill: { color: NAVY }, color: WHITE } }
  ],
  [
    { text: 'Kharif (Monsoon)' }, { text: '1,779 (44.5%)' }, { text: '5.64 t/ha' },
    { text: '+₹1,78,915', options: { bold: true, color: GREEN } }, { text: '57.8%', options: { bold: true, color: GREEN } }
  ],
  [
    { text: 'Rabi (Winter)' }, { text: '1,627 (40.7%)' }, { text: '5.08 t/ha' },
    { text: '+₹87,689', options: { bold: true, color: GREEN } }, { text: '48.9%' }
  ],
  [
    { text: 'Zaid (Summer)' }, { text: '594 (14.8%)' }, { text: '4.67 t/ha' },
    { text: '-₹24,805', options: { bold: true, color: RED } }, { text: '35.5%', options: { bold: true, color: RED } }
  ]
];
slide.addTable(s6Table, { x: 0.8, y: 4.5, w: 7.2, h: 2.4, fontSize: 11, align: 'center', border: { pt: 1, color: 'CCCCCC' } });

// ==========================================
// Slide 7: RESULTS 2 - Climatological Dynamics (WITH EMBEDDED SCREENSHOT 4)
// ==========================================
slide = pres.addSlide();
addSlideHeader(slide, 'RESULTS: Climatological Dynamics & Correlation Analysis', 'Slide 7 of 14 [Code Output]');

// Embed Image 4 (Figure 2A & 2B)
slide.addImage({
  path: IMG_CORR_SCATTER,
  x: 0.8, y: 1.1, w: 7.2, h: 3.2
});

slide.addShape(pres.ShapeType.roundRect, {
  x: 8.2, y: 1.1, w: 4.3, h: 5.8, fill: { color: WHITE }, line: { color: 'B0BEC5' }
});

slide.addText([
  { text: 'Correlation & Climate Insights:\n', options: { bold: true, fontSize: 14, color: NAVY } },
  { text: '• Figure 2A (Correlation Heatmap):\n', options: { bold: true, fontSize: 12.5, color: BLUE } },
  { text: '  - Rainfall vs Pest Risk (r = +0.62) & Humidity vs Pest Risk (r = +0.55): Confirms moist monsoon conditions trigger disease outbreaks.\n  - Soil Moisture vs Rainfall (r = +0.52): Strong hydrologic coupling.\n  - Pesticide vs Pest Risk (r = -0.47): Protective effect of timely chemical control.\n\n', options: { fontSize: 11.5 } },
  { text: '• Figure 2B (Rainfall vs Yield Scatter):\n', options: { bold: true, fontSize: 12.5, color: BLUE } },
  { text: '  - Flat regression slope indicates that sheer rainfall volume alone does not guarantee higher yield—drainage and crop choice are critical.\n  - Sugarcane (points at top) thrives in Kharif (>800 mm rain).', options: { fontSize: 11.5 } }
], { x: 8.35, y: 1.25, w: 4.0, h: 5.5, color: DARK_GRAY });

const s7Metrics = [
  [
    { text: 'Season', options: { bold: true, fill: { color: NAVY }, color: WHITE } },
    { text: 'Rainfall (mm)', options: { bold: true, fill: { color: NAVY }, color: WHITE } },
    { text: 'Temperature (°C)', options: { bold: true, fill: { color: NAVY }, color: WHITE } },
    { text: 'Humidity (%)', options: { bold: true, fill: { color: NAVY }, color: WHITE } },
    { text: 'Sunlight (hrs/day)', options: { bold: true, fill: { color: NAVY }, color: WHITE } },
    { text: 'Pest Risk (%)', options: { bold: true, fill: { color: NAVY }, color: WHITE } }
  ],
  [ { text: 'Kharif' }, { text: '852.1 mm' }, { text: '28.5°C' }, { text: '71.8%' }, { text: '6.79 hrs' }, { text: '54.5%', options: { bold: true, color: RED } } ],
  [ { text: 'Rabi' }, { text: '436.0 mm' }, { text: '23.5°C' }, { text: '57.9%' }, { text: '7.59 hrs' }, { text: '40.5%' } ],
  [ { text: 'Zaid' }, { text: '299.4 mm' }, { text: '31.0°C' }, { text: '52.0%' }, { text: '8.18 hrs' }, { text: '38.2%' } ]
];
slide.addTable(s7Metrics, { x: 0.8, y: 4.5, w: 7.2, h: 2.4, fontSize: 11, align: 'center', border: { pt: 1, color: 'CCCCCC' } });

// ==========================================
// Slide 8: RESULTS 3 - Irrigation Efficiency (WITH EMBEDDED SCREENSHOT 1)
// ==========================================
slide = pres.addSlide();
addSlideHeader(slide, 'RESULTS: Irrigation Systems & Water Efficiency Distributions', 'Slide 8 of 14 [Code Output]');

// Embed Image 1 (Figure 1C & 1D)
slide.addImage({
  path: IMG_WATER_IRRIG,
  x: 0.8, y: 1.1, w: 7.2, h: 3.2
});

slide.addShape(pres.ShapeType.roundRect, {
  x: 8.2, y: 1.1, w: 4.3, h: 5.8, fill: { color: WHITE }, line: { color: 'B0BEC5' }
});

slide.addText([
  { text: 'Irrigation & Hydrologic Insights:\n', options: { bold: true, fontSize: 14, color: NAVY } },
  { text: '• Figure 1C (Efficiency Distributions):\n', options: { bold: true, fontSize: 12.5, color: BLUE } },
  { text: '  - Zaid water efficiency curve is shifted leftwards (mean 4.41 t/1000m³) due to high evaporative demand.\n  - Kharif and Rabi exhibit long right tails reflecting micro-drip irrigated sugarcane/maize farms (>20 t/1000m³).\n\n', options: { fontSize: 11.5 } },
  { text: '• Figure 1D (Irrigation Proportions):\n', options: { bold: true, fontSize: 12.5, color: BLUE } },
  { text: '  - Flood irrigation (orange) accounts for 32–33% across all seasons.\n  - Drip (red) represents 23% of farms.\n  - Sprinkler (purple) represents 18–20% of farms.\n  - Rainfed (green) represents 26% in Kharif/Rabi, dropping in summer.', options: { fontSize: 11.5 } }
], { x: 8.35, y: 1.25, w: 4.0, h: 5.5, color: DARK_GRAY });

const s8Table = [
  [
    { text: 'Irrigation Method', options: { bold: true, fill: { color: NAVY }, color: WHITE } },
    { text: 'Observations (N)', options: { bold: true, fill: { color: NAVY }, color: WHITE } },
    { text: 'Water Efficiency', options: { bold: true, fill: { color: NAVY }, color: WHITE } },
    { text: 'Mean Groundwater Used', options: { bold: true, fill: { color: NAVY }, color: WHITE } },
    { text: 'Mean Net Profit', options: { bold: true, fill: { color: NAVY }, color: WHITE } }
  ],
  [ { text: 'Drip Irrigation', options: { bold: true } }, { text: '915 (22.9%)' }, { text: '6.27 t/1000m³', options: { bold: true, color: GREEN } }, { text: '6,009 m³' }, { text: '+₹2,19,626', options: { bold: true, color: GREEN } } ],
  [ { text: 'Sprinkler Irrigation', options: { bold: true } }, { text: '734 (18.4%)' }, { text: '4.67 t/1000m³' }, { text: '5,885 m³' }, { text: '+₹91,121' } ],
  [ { text: 'Flood Irrigation', options: { bold: true } }, { text: '1,310 (32.8%)' }, { text: '3.44 t/1000m³', options: { bold: true, color: RED } }, { text: '9,812 m³' }, { text: '+₹73,354' } ],
  [ { text: 'Rainfed Farming', options: { bold: true } }, { text: '1,041 (26.0%)' }, { text: '7.56 t/1000m³*' }, { text: '3,248 m³' }, { text: '+₹79,050' } ]
];
slide.addTable(s8Table, { x: 0.8, y: 4.5, w: 7.2, h: 2.4, fontSize: 10.5, align: 'center', border: { pt: 1, color: 'CCCCCC' } });

// ==========================================
// Slide 9: RESULTS 4 - Dashboard & Regional Matrix (WITH EMBEDDED SCREENSHOT 3)
// ==========================================
slide = pres.addSlide();
addSlideHeader(slide, 'RESULTS: Executive KPI Dashboard & Regional Profitability Matrix', 'Slide 9 of 14 [Code Output]');

// Embed Image 3 (KPI cards + Figure 3A & 3B)
slide.addImage({
  path: IMG_KPI_REGIONAL,
  x: 0.8, y: 1.1, w: 7.2, h: 3.5
});

slide.addShape(pres.ShapeType.roundRect, {
  x: 8.2, y: 1.1, w: 4.3, h: 5.8, fill: { color: WHITE }, line: { color: 'B0BEC5' }
});

slide.addText([
  { text: 'Dashboard & Regional Insights:\n', options: { bold: true, fontSize: 14, color: NAVY } },
  { text: '• Top KPI Summary:\n', options: { bold: true, fontSize: 12.5, color: GREEN } },
  { text: '  - Total Sector Revenue: ₹255.14 Crores\n  - Overall Farm Solvency Rate: 50.8%\n  - Average Water Productivity: 5.39 t/1000m³\n\n', options: { fontSize: 11.5 } },
  { text: '• Figure 3A (State vs Season Matrix):\n', options: { bold: true, fontSize: 12.5, color: BLUE } },
  { text: '  - Kharif is positive in every state (Telangana ₹26.4K/ha, Karnataka ₹24.5K/ha, Gujarat ₹23.5K/ha).\n  - Zaid summer losses hit Andhra Pradesh (-₹8.5K/ha), Gujarat (-₹7.5K/ha), and Telangana (-₹6.3K/ha) hardest.\n  - Punjab (+₹6.4K/ha) and Karnataka (+₹4.9K/ha) stay positive in summer due to robust tubewell/canal networks.\n\n', options: { fontSize: 11 } },
  { text: '• Figure 3B (Irrigation Impact):\n', options: { bold: true, fontSize: 12.5, color: BLUE } },
  { text: '  - Drip delivers ₹25,600/ha profit vs Flood at ₹8,800/ha (nearly 3x higher).', options: { fontSize: 11 } }
], { x: 8.35, y: 1.25, w: 4.0, h: 5.5, color: DARK_GRAY });

slide.addShape(pres.ShapeType.rect, { x: 0.8, y: 4.8, w: 7.2, h: 2.1, fill: { color: WHITE }, line: { color: 'CCCCCC' } });
slide.addText([
  { text: 'Core Takeaway from Dashboard:\n', options: { bold: true, fontSize: 13, color: NAVY } },
  { text: 'Agricultural viability is determined by the intersection of ', options: { fontSize: 12 } },
  { text: 'Season x Irrigation Method x State Infrastructure. ', options: { bold: true, fontSize: 12 } },
  { text: 'Farms with modern drip irrigation in irrigated states maintain solvency even during hot summer cycles, while traditional flood-irrigated farms suffer heavy financial losses.', options: { fontSize: 12 } }
], { x: 1.0, y: 4.9, w: 6.8, h: 1.9, color: DARK_GRAY });

// ==========================================
// Slide 10: RESULTS 5 - Statistical Hypothesis Testing
// ==========================================
slide = pres.addSlide();
addSlideHeader(slide, 'RESULTS: Formal Statistical Hypothesis Testing', 'Slide 10 of 14 [Statistical Proof]');

slide.addText([
  { text: 'Hypothesis Framework:\n', options: { bold: true, fontSize: 14.5, color: NAVY } },
  { text: '• H0: Cropping season has no statistically significant effect on agricultural performance metrics.\n• H1: Statistically significant differences exist across Kharif, Rabi, and Zaid seasons (alpha = 0.05).', options: { fontSize: 13 } }
], { x: 0.8, y: 1.15, w: 11.7, h: 0.75 });

const testTable = [
  [
    { text: 'Target Metric', options: { bold: true, fill: { color: NAVY }, color: WHITE } },
    { text: 'ANOVA F-Statistic', options: { bold: true, fill: { color: NAVY }, color: WHITE } },
    { text: 'p-value (ANOVA)', options: { bold: true, fill: { color: NAVY }, color: WHITE } },
    { text: 'Kruskal-Wallis H', options: { bold: true, fill: { color: NAVY }, color: WHITE } },
    { text: 'Statistical Decision', options: { bold: true, fill: { color: NAVY }, color: WHITE } }
  ],
  [
    { text: 'Net Farm Profit (INR)', options: { bold: true } },
    { text: 'F = 34.292' },
    { text: 'p = 1.63e-15' },
    { text: 'H = 82.41' },
    { text: 'Reject H0 (p < 0.001)', options: { bold: true, color: GREEN } }
  ],
  [
    { text: 'Disease & Pest Risk (%)', options: { bold: true } },
    { text: 'F = 1049.467' },
    { text: 'p < 1e-100' },
    { text: 'H = 1421.15' },
    { text: 'Reject H0 (p < 0.0001)', options: { bold: true, color: GREEN } }
  ],
  [
    { text: 'Rice Yield by Season', options: { bold: true } },
    { text: 'F = 22.170' },
    { text: 'p = 4.28e-10' },
    { text: 'H = 43.19' },
    { text: 'Reject H0 (p < 0.001)', options: { bold: true, color: GREEN } }
  ],
  [
    { text: 'Pulses Yield by Season', options: { bold: true } },
    { text: 'F = 23.816' },
    { text: 'p = 1.15e-10' },
    { text: 'H = 46.85' },
    { text: 'Reject H0 (p < 0.001)', options: { bold: true, color: GREEN } }
  ],
  [
    { text: 'Wheat Yield by Season', options: { bold: true } },
    { text: 'F = 11.027' },
    { text: 'p = 1.84e-05' },
    { text: 'H = 22.08' },
    { text: 'Reject H0 (p < 0.001)', options: { bold: true, color: GREEN } }
  ],
  [
    { text: 'Maize Yield by Season', options: { bold: true } },
    { text: 'F = 10.684' },
    { text: 'p = 2.62e-05' },
    { text: 'H = 21.41' },
    { text: 'Reject H0 (p < 0.001)', options: { bold: true, color: GREEN } }
  ]
];
slide.addTable(testTable, { x: 0.8, y: 2.0, w: 11.7, h: 3.1, fontSize: 11, align: 'center', border: { pt: 1, color: 'CCCCCC' } });

slide.addText([
  { text: 'Empirical Verification:\n', options: { bold: true, fontSize: 13, color: NAVY } },
  { text: '• While overall yield variance across all combined crops is dominated by sugarcane biomass, evaluating crops individually proves that seasonal decline (Kharif > Rabi > Zaid) is overwhelmingly statistically significant across all staples.\n', options: { fontSize: 12 } },
  { text: '• Both parametric (One-Way ANOVA) and non-parametric (Kruskal-Wallis) tests confirm that seasonal variations dictate crop yields, farm water requirements, and financial returns with >99.9% statistical confidence.', options: { fontSize: 12, bold: true } }
], { x: 0.8, y: 5.3, w: 11.7, h: 1.6, color: DARK_GRAY });

// ==========================================
// Slide 11: Future Scope
// ==========================================
slide = pres.addSlide();
addSlideHeader(slide, 'Future Scope & Technological Enhancements', 'Slide 11 of 14');
const scopeItems = [
  { icon: '🤖', title: 'Predictive Machine Learning', desc: 'Develop XGBoost & Random Forest regression models to predict farm yield and profit margin before sowing, using forecasted rainfall and seasonal temperature indicators.' },
  { icon: '📡', title: 'IoT Precision Soil & Moisture Monitoring', desc: 'Deploy automated solar-powered LoRaWAN soil moisture probes to trigger micro-drip irrigation autonomously, eliminating summer evaporative losses.' },
  { icon: '🛰️', title: 'Multispectral Satellite Remote Sensing', desc: 'Integrate European Space Agency (Sentinel-2) NDVI and NDRE spectral indices for real-time vegetative stress tracking and early monsoon pest detection.' },
  { icon: '📱', title: 'Vernacular Farmer Advisory Interface', desc: 'Build an offline-first mobile app in regional Indian languages (Telugu, Marathi, Punjabi, Tamil) delivering personalized crop selection and fertilizer optimization advisories.' }
];

scopeItems.forEach((item, idx) => {
  const col = idx % 2;
  const row = Math.floor(idx / 2);
  slide.addShape(pres.ShapeType.roundRect, { x: 0.8 + (col * 6.0), y: 1.4 + (row * 2.7), w: 5.7, h: 2.5, fill: { color: WHITE }, line: { color: 'B0BEC5', width: 1 } });
  slide.addText(item.icon + ' ' + item.title, { x: 1.0 + (col * 6.0), y: 1.55 + (row * 2.7), w: 5.3, h: 0.45, fontSize: 15, bold: true, color: NAVY });
  slide.addText(item.desc, { x: 1.0 + (col * 6.0), y: 2.05 + (row * 2.7), w: 5.3, h: 1.7, fontSize: 12.5, color: DARK_GRAY });
});

// ==========================================
// Slide 12: GitHub Link
// ==========================================
slide = pres.addSlide();
addSlideHeader(slide, 'Project Deliverables & GitHub Repository', 'Slide 12 of 14');
slide.addShape(pres.ShapeType.roundRect, { x: 0.8, y: 1.4, w: 11.7, h: 5.5, fill: { color: WHITE }, line: { color: 'B0BEC5' } });
slide.addText('🔗 GitHub Repository URL:', { x: 1.2, y: 1.7, w: 10.9, h: 0.4, fontSize: 15, bold: true, color: NAVY });
slide.addText('https://github.com/ocotpi/Seasonal-Agriculture-Performance-Analysis', {
  x: 1.2, y: 2.15, w: 10.9, h: 0.5, fontSize: 14, color: BLUE, bold: true
});

slide.addText([
  { text: 'Repository Contents & Reproducibility:\n', options: { bold: true, fontSize: 14.5, color: NAVY } },
  { text: '📁 Seasonal_Agriculture_Performance_Analysis.ipynb  — Complete Jupyter Notebook with code, plots & findings\n', options: { fontSize: 13 } },
  { text: '📁 seasonal_agriculture_data.csv                    — 4,000-record cleaned dataset across 8 states and 8 crops\n', options: { fontSize: 13 } },
  { text: '📁 Presentation_Slide_Deck.md                       — 14-slide structured markdown presentation guide\n', options: { fontSize: 13 } },
  { text: '📁 Seasonal_Agriculture_Performance_Analysis_Presentation.pptx — Complete 14-slide PowerPoint file\n', options: { fontSize: 13 } },
  { text: '📁 PROJECT_REPORT.md                                — Complete formal academic report and methodology write-up\n', options: { fontSize: 13 } },
  { text: '📁 VIVA_VOCE_PREPARATION_GUIDE.md                  — 15+ oral defense Q&As and slide talking points\n', options: { fontSize: 13 } },
  { text: '📁 requirements.txt                                 — Environment dependencies (pandas, numpy, matplotlib, seaborn, scipy)\n\n', options: { fontSize: 13 } },
  { text: 'Reproducibility Command:\n', options: { bold: true, fontSize: 13.5, color: NAVY } },
  { text: 'git clone https://github.com/ocotpi/Seasonal-Agriculture-Performance-Analysis.git\npip install -r requirements.txt', options: { fontSize: 12, color: '444444', italic: true } }
], { x: 1.2, y: 2.75, w: 10.9, h: 3.9 });

// ==========================================
// Slide 13: Certificate
// ==========================================
slide = pres.addSlide();
addSlideHeader(slide, 'Course Completion Certificate', 'Slide 13 of 14');
slide.addShape(pres.ShapeType.roundRect, { x: 1.5, y: 1.5, w: 10.3, h: 5.3, fill: { color: WHITE }, line: { color: BLUE, width: 2 } });
slide.addText('VOIS for Tech Learning Certification', {
  x: 2.0, y: 1.8, w: 9.3, h: 0.5, fontSize: 20, bold: true, color: NAVY, align: 'center'
});
slide.addText('Vodafone Idea Foundation & Edunet Foundation in association with AICTE', {
  x: 2.0, y: 2.35, w: 9.3, h: 0.4, fontSize: 13, color: '666666', align: 'center', italic: true
});

const certInfo = [
  { text: 'Course Name: ', options: { bold: true, color: NAVY } },
  { text: 'Data Visualization\n', options: { color: DARK_GRAY, bold: true } },
  { text: 'Awarded to: ', options: { bold: true, color: NAVY } },
  { text: 'Asmi Sharma\n', options: { color: DARK_GRAY } },
  { text: 'Institution: ', options: { bold: true, color: NAVY } },
  { text: 'Chandigarh University (BE CSE 2026)\n', options: { color: DARK_GRAY } },
  { text: 'AICTE Student ID: ', options: { bold: true, color: NAVY } },
  { text: 'STU6a65f9036e5721785067779\n', options: { color: DARK_GRAY } },
  { text: 'Internship Program: ', options: { bold: true, color: NAVY } },
  { text: 'VOIS for Tech - Data Analytics Internship Batch 1\n', options: { color: DARK_GRAY } },
  { text: 'Competencies Mastered: ', options: { bold: true, color: NAVY } },
  { text: 'Exploratory Data Analysis, Multi-Variate Plotting, Visual Analytics, Agro-Economic Reporting', options: { color: DARK_GRAY } }
];
slide.addText(certInfo, { x: 2.5, y: 2.9, w: 8.3, h: 2.8, fontSize: 13.5, align: 'left', lineSpacing: 20 });
slide.addShape(pres.ShapeType.rect, { x: 4.5, y: 5.9, w: 4.3, h: 0.6, fill: { color: GREEN } });
slide.addText('✔ Verified & Completed', { x: 4.5, y: 6.0, w: 4.3, h: 0.4, fontSize: 14, color: WHITE, bold: true, align: 'center' });

// ==========================================
// Slide 14: Conclusion & Thank You
// ==========================================
slide = pres.addSlide();
slide.background = { color: 'F0F8FF' };
slide.addShape(pres.ShapeType.rect, { x: 0, y: 0, w: '100%', h: 0.45, fill: { color: BLUE } });
slide.addText('Thank You!', {
  x: 1.0, y: 1.6, w: 11.3, h: 1.1, fontSize: 38, color: NAVY, bold: true, align: 'center'
});
slide.addText('Empirical Evidence for Climate-Resilient Agricultural Planning', {
  x: 1.0, y: 2.75, w: 11.3, h: 0.5, fontSize: 17, color: '555555', italic: true, align: 'center'
});

const ackText = [
  { text: 'Core Project Takeaway:\n', options: { bold: true, color: NAVY, fontSize: 14.5 } },
  { text: '\"Agricultural performance in India is structurally seasonal. By transitioning from open flood irrigation to precision drip emitters and rotating water-intensive staples into summer cash crops, smallholder farm solvency can be increased by over 30%.\"\n\n', options: { italic: true, fontSize: 13 } },
  { text: 'Acknowledgements:\n', options: { bold: true, color: NAVY, fontSize: 14.5 } },
  { text: 'Sincere gratitude to AICTE, Edunet Foundation, and Vodafone Idea Foundation (VOIS for Tech Program) for mentorship and project support.\n\n', options: { fontSize: 13 } },
  { text: 'Student Contact: ', options: { bold: true, color: NAVY, fontSize: 13.5 } },
  { text: 'Asmi Sharma | Chandigarh University (STU6a65f9036e5721785067779)', options: { fontSize: 13.5 } }
];
slide.addText(ackText, {
  x: 1.8, y: 3.4, w: 9.7, h: 3.1, fill: { color: WHITE }, line: { color: 'CCCCCC', width: 1 },
  margin: 15, align: 'center'
});

pres.writeFile({ fileName: 'Seasonal_Agriculture_Performance_Analysis_Presentation.pptx' })
  .then(fileName => console.log('Successfully generated PPTX with embedded Colab screenshots:', fileName))
  .catch(err => console.error('Error generating PPTX:', err));
