const pptxgen = require('pptxgenjs');
const pres = new pptxgen();

pres.layout = 'LAYOUT_16x9';

// Define theme colors
const TEAL = '008080';
const NAVY = '003366';
const BLUE = '006699';
const DARK_GRAY = '222222';
const LIGHT_BG = 'F4F7F9';
const WHITE = 'FFFFFF';
const GREEN = '2E7D32';
const RED = 'C62828';

// Helper for generic slide header
function addSlideHeader(s, title, category) {
  s.background = { color: LIGHT_BG };
  s.addShape(pres.ShapeType.rect, { x: 0, y: 0, w: '100%', h: 1.0, fill: { color: NAVY } });
  s.addText(title, { x: 0.8, y: 0.15, w: 10, h: 0.7, fontSize: 24, color: WHITE, bold: true });
  if (category) {
    s.addText(category, { x: 9.5, y: 0.25, w: 3.2, h: 0.5, fontSize: 11, color: 'BBDEFB', align: 'right' });
  }
}

// ==========================================
// Slide 1: Title
// ==========================================
let slide = pres.addSlide();
slide.background = { color: 'F0F8FF' };
slide.addShape(pres.ShapeType.rect, { x: 0, y: 0, w: '100%', h: 0.5, fill: { color: BLUE } });
slide.addText('VOIS AICTE Internship Batch 1 (2026-2027) Major Project', {
  x: 0.8, y: 0.1, w: 11.5, h: 0.35, fontSize: 13, color: WHITE, bold: true, align: 'center'
});
slide.addText('Seasonal Agriculture Performance Analysis', {
  x: 0.8, y: 1.6, w: 11.7, h: 1.1, fontSize: 32, color: NAVY, bold: true, align: 'center'
});
slide.addText('Empirical Data Analytics & Crop Economics Across 4,000 Multi-State Farm Observations', {
  x: 1.0, y: 2.8, w: 11.3, h: 0.5, fontSize: 15, color: '555555', italic: true, align: 'center'
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
  x: 2.2, y: 3.6, w: 8.9, h: 2.9, fontSize: 13.5, fill: { color: WHITE }, line: { color: 'CCCCCC', width: 1 },
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
], { x: 0.8, y: 1.3, w: 11.7, h: 5.8, color: DARK_GRAY, margin: 10 });

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
], { x: 0.8, y: 1.3, w: 11.7, h: 5.8, color: DARK_GRAY, margin: 10 });

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
  slide.addShape(pres.ShapeType.roundRect, { x: 0.8, y: 1.3 + (idx * 1.1), w: 11.7, h: 0.95, fill: { color: WHITE }, line: { color: 'DDDDDD' } });
  slide.addText(u.role, { x: 1.0, y: 1.35 + (idx * 1.1), w: 4.8, h: 0.4, fontSize: 13.5, bold: true, color: NAVY });
  slide.addText(u.desc, { x: 1.0, y: 1.75 + (idx * 1.1), w: 11.3, h: 0.45, fontSize: 12, color: DARK_GRAY });
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
  slide.addShape(pres.ShapeType.roundRect, { x: 0.8 + (col * 6.0), y: 1.4 + (row * 1.8), w: 5.7, h: 1.5, fill: { color: WHITE }, line: { color: 'CCDDEE', width: 1.5 } });
  slide.addText(t.tool, { x: 1.0 + (col * 6.0), y: 1.55 + (row * 1.8), w: 5.3, h: 0.35, fontSize: 15, bold: true, color: BLUE });
  slide.addText(t.desc, { x: 1.0 + (col * 6.0), y: 1.95 + (row * 1.8), w: 5.3, h: 0.85, fontSize: 12.5, color: DARK_GRAY });
});

// ==========================================
// Slide 6: Results - Seasonal Overview
// ==========================================
slide = pres.addSlide();
addSlideHeader(slide, 'Results: Seasonal Performance & Economics', 'Slide 6 of 14');
slide.addText('Empirical Comparison Across 4,000 Farms (Kharif vs Rabi vs Zaid):', {
  x: 0.8, y: 1.2, w: 11.7, h: 0.4, fontSize: 15, bold: true, color: NAVY
});

const seasonTable = [
  [
    { text: 'Cropping Season', options: { bold: true, fill: { color: NAVY }, color: WHITE } },
    { text: 'Sample (N)', options: { bold: true, fill: { color: NAVY }, color: WHITE } },
    { text: 'Mean Yield (t/ha)', options: { bold: true, fill: { color: NAVY }, color: WHITE } },
    { text: 'Avg Cost (INR)', options: { bold: true, fill: { color: NAVY }, color: WHITE } },
    { text: 'Avg Revenue (INR)', options: { bold: true, fill: { color: NAVY }, color: WHITE } },
    { text: 'Avg Net Profit (INR)', options: { bold: true, fill: { color: NAVY }, color: WHITE } },
    { text: 'Solvency Rate (%)', options: { bold: true, fill: { color: NAVY }, color: WHITE } }
  ],
  [
    { text: 'Kharif (Monsoon)', options: { bold: true } },
    { text: '1,779 (44.5%)' },
    { text: '5.64 t/ha' },
    { text: 'INR 5,31,804' },
    { text: 'INR 7,10,719' },
    { text: '+INR 1,78,915', options: { bold: true, color: GREEN } },
    { text: '57.8%', options: { bold: true, color: GREEN } }
  ],
  [
    { text: 'Rabi (Winter)', options: { bold: true } },
    { text: '1,627 (40.7%)' },
    { text: '5.08 t/ha' },
    { text: 'INR 5,13,837' },
    { text: 'INR 6,01,526' },
    { text: '+INR 87,689', options: { bold: true, color: GREEN } },
    { text: '48.9%' }
  ],
  [
    { text: 'Zaid (Summer)', options: { bold: true } },
    { text: '594 (14.8%)' },
    { text: '4.67 t/ha' },
    { text: 'INR 5,43,977' },
    { text: 'INR 5,19,172' },
    { text: '-INR 24,805', options: { bold: true, color: RED } },
    { text: '35.5%', options: { bold: true, color: RED } }
  ]
];
slide.addTable(seasonTable, { x: 0.8, y: 1.7, w: 11.7, h: 2.3, fontSize: 12, align: 'center', border: { pt: 1, color: 'CCCCCC' } });

slide.addText([
  { text: 'Key Findings:\n', options: { bold: true, fontSize: 14.5, color: NAVY } },
  { text: '• Kharif generates the highest average net return (+INR 1.79 Lakh) driven by sugarcane tonnage and monsoon rainwater availability.\n', options: { fontSize: 13 } },
  { text: '• Rabi delivers stable economic performance (+INR 87.7K) with low temperature variability, though cereal margins are compressed.\n', options: { fontSize: 13 } },
  { text: '• Critical Zaid Deficit: Summer season records an average NET LOSS (-INR 24.8K). Almost two-thirds of summer farms (64.5%) lose money due to high irrigation pumping bills and heat-induced yield suppression.', options: { fontSize: 13, bold: true, color: RED } }
], { x: 0.8, y: 4.3, w: 11.7, h: 2.8, color: DARK_GRAY });

// ==========================================
// Slide 7: Results - Environmental
// ==========================================
slide = pres.addSlide();
addSlideHeader(slide, 'Results: Environmental & Soil Dynamics', 'Slide 7 of 14');
const envCards = [
  { title: '🌧️ Rainfall Dynamics', text: '• Kharif: 852.1 mm average (peaks up to 1,395 mm).\n• Rabi: 436.0 mm average.\n• Zaid: 299.4 mm average.\nInsight: Summer agriculture cannot rely on ambient precipitation; irrigation is 100% compulsory.' },
  { title: '🌡️ Thermal & Solar Patterns', text: '• Temperature: Zaid averages 31.0°C (peaks at 39.7°C) vs Rabi at 23.5°C.\n• Sunlight Hours: Zaid receives 8.18 hrs/day vs Kharif at 6.79 hrs/day.\nInsight: Zaid crops suffer high evapotranspiration and thermal stress.' },
  { title: '💧 Soil Moisture & pH', text: '• Soil Moisture: Peaks during Kharif (30.8%) due to monsoon soaking; drops to 18.6% in Zaid.\n• Soil pH: Relatively neutral across seasons (6.7–6.8 mean).\nInsight: Moisture retention (mulching/drip) is mandatory in summer.' },
  { title: '🐛 Disease & Pest Risk', text: '• Kharif: 54.5% average pest risk (high humidity >71.8% promotes fungal/insect vectors).\n• Rabi: 40.5% average pest risk.\n• Zaid: 38.2% average pest risk.\nInsight: Monsoons demand proactive pest management.' }
];

envCards.forEach((c, idx) => {
  const col = idx % 2;
  const row = Math.floor(idx / 2);
  slide.addShape(pres.ShapeType.roundRect, { x: 0.8 + (col * 6.0), y: 1.3 + (row * 2.8), w: 5.7, h: 2.6, fill: { color: WHITE }, line: { color: 'B0BEC5' } });
  slide.addText(c.title, { x: 1.0 + (col * 6.0), y: 1.45 + (row * 2.8), w: 5.3, h: 0.4, fontSize: 15, bold: true, color: NAVY });
  slide.addText(c.text, { x: 1.0 + (col * 6.0), y: 1.9 + (row * 2.8), w: 5.3, h: 1.8, fontSize: 12.5, color: DARK_GRAY });
});

// ==========================================
// Slide 8: Results - Irrigation & Resource Efficiency
// ==========================================
slide = pres.addSlide();
addSlideHeader(slide, 'Results: Irrigation Methods & Efficiency Benchmark', 'Slide 8 of 14');

const irriTable = [
  [
    { text: 'Irrigation Method', options: { bold: true, fill: { color: NAVY }, color: WHITE } },
    { text: 'Sample (N)', options: { bold: true, fill: { color: NAVY }, color: WHITE } },
    { text: 'Water Efficiency (t/1000m³)', options: { bold: true, fill: { color: NAVY }, color: WHITE } },
    { text: 'Mean Water Used (m³)', options: { bold: true, fill: { color: NAVY }, color: WHITE } },
    { text: 'Mean Farm Profit (INR)', options: { bold: true, fill: { color: NAVY }, color: WHITE } }
  ],
  [
    { text: 'Drip Irrigation', options: { bold: true } },
    { text: '915 (22.9%)' },
    { text: '6.27 t/1000m³', options: { bold: true, color: GREEN } },
    { text: '6,009 m³' },
    { text: '+INR 2,19,626', options: { bold: true, color: GREEN } }
  ],
  [
    { text: 'Sprinkler Irrigation', options: { bold: true } },
    { text: '734 (18.4%)' },
    { text: '4.67 t/1000m³' },
    { text: '5,885 m³' },
    { text: '+INR 91,121' }
  ],
  [
    { text: 'Flood Irrigation', options: { bold: true } },
    { text: '1,310 (32.8%)' },
    { text: '3.44 t/1000m³', options: { bold: true, color: RED } },
    { text: '9,812 m³', options: { color: RED } },
    { text: '+INR 73,354' }
  ],
  [
    { text: 'Rainfed Farming', options: { bold: true } },
    { text: '1,041 (26.0%)' },
    { text: '7.56 t/1000m³*' },
    { text: '3,248 m³ (groundwater)' },
    { text: '+INR 79,050' }
  ]
];
slide.addTable(irriTable, { x: 0.8, y: 1.4, w: 11.7, h: 2.6, fontSize: 12.5, align: 'center', border: { pt: 1, color: 'CCCCCC' } });

slide.addText([
  { text: 'Critical Irrigation Inefficiency Findings:\n', options: { bold: true, fontSize: 14.5, color: NAVY } },
  { text: '• Drip Irrigation is 82.3% more water-efficient than Flood Irrigation (6.27 vs 3.44 t/1000m³) and generates 3.0x higher average profit (+INR 2.20L vs +INR 73.4K).\n', options: { fontSize: 13 } },
  { text: '• The Summer Flood Trap: In Zaid, farms practicing flood irrigation suffered the lowest efficiency (2.1 t/1000m³) due to severe evaporative losses, losing an average of INR 68,400 per farm.\n', options: { fontSize: 13 } },
  { text: '• Policy Implication: Mandating micro-drip adoption in summer cycles would save up to 3,800 m³ of groundwater per farm while boosting solvency.', options: { fontSize: 13, bold: true, color: BLUE } }
], { x: 0.8, y: 4.4, w: 11.7, h: 2.7, color: DARK_GRAY });

// ==========================================
// Slide 9: Results - Crop Economics
// ==========================================
slide = pres.addSlide();
addSlideHeader(slide, 'Results: The Cereal vs. Cash Crop Divide', 'Slide 9 of 14');

const cropTable = [
  [
    { text: 'Crop Name', options: { bold: true, fill: { color: NAVY }, color: WHITE } },
    { text: 'Observations', options: { bold: true, fill: { color: NAVY }, color: WHITE } },
    { text: 'Mean Yield (t/ha)', options: { bold: true, fill: { color: NAVY }, color: WHITE } },
    { text: 'Market Price (INR/t)', options: { bold: true, fill: { color: NAVY }, color: WHITE } },
    { text: 'Average Profit (INR)', options: { bold: true, fill: { color: NAVY }, color: WHITE } },
    { text: 'Solvency Rate (%)', options: { bold: true, fill: { color: NAVY }, color: WHITE } }
  ],
  [
    { text: 'Sugarcane', options: { bold: true } },
    { text: '305' },
    { text: '46.94 t/ha' },
    { text: 'INR 3,500' },
    { text: '+INR 8,17,188', options: { bold: true, color: GREEN } },
    { text: '88.5%', options: { bold: true, color: GREEN } }
  ],
  [
    { text: 'Chilli', options: { bold: true } },
    { text: '412' },
    { text: '1.54 t/ha' },
    { text: 'INR 1,02,500' },
    { text: '+INR 7,50,878', options: { bold: true, color: GREEN } },
    { text: '82.0%', options: { bold: true, color: GREEN } }
  ],
  [
    { text: 'Cotton', options: { bold: true } },
    { text: '508' },
    { text: '1.23 t/ha' },
    { text: 'INR 67,500' },
    { text: '+INR 1,24,547', options: { color: GREEN } },
    { text: '65.4%' }
  ],
  [
    { text: 'Groundnut', options: { bold: true } },
    { text: '424' },
    { text: '1.32 t/ha' },
    { text: 'INR 55,500' },
    { text: '+INR 44,858', options: { color: GREEN } },
    { text: '59.2%' }
  ],
  [
    { text: 'Pulses', options: { bold: true } },
    { text: '496' },
    { text: '0.92 t/ha' },
    { text: 'INR 71,000' },
    { text: '-INR 4,238' },
    { text: '50.8%' }
  ],
  [
    { text: 'Maize', options: { bold: true } },
    { text: '551' },
    { text: '2.72 t/ha' },
    { text: 'INR 21,000' },
    { text: '-INR 83,978', options: { color: RED } },
    { text: '36.3%', options: { color: RED } }
  ],
  [
    { text: 'Rice', options: { bold: true } },
    { text: '690' },
    { text: '2.44 t/ha' },
    { text: 'INR 22,500' },
    { text: '-INR 1,02,214', options: { color: RED } },
    { text: '33.6%', options: { color: RED } }
  ],
  [
    { text: 'Wheat', options: { bold: true } },
    { text: '614' },
    { text: '2.11 t/ha' },
    { text: 'INR 24,000' },
    { text: '-INR 1,23,398', options: { bold: true, color: RED } },
    { text: '25.9%', options: { bold: true, color: RED } }
  ]
];
slide.addTable(cropTable, { x: 0.8, y: 1.35, w: 11.7, h: 3.5, fontSize: 11, align: 'center', border: { pt: 1, color: 'CCCCCC' } });

slide.addText([
  { text: 'The Cereal Squeeze Phenomenon:\n', options: { bold: true, fontSize: 13.5, color: NAVY } },
  { text: '• Staple foodgrains (Wheat, Rice, Maize) face a severe margin squeeze: high fixed irrigation and fertilizer costs exceed the realized market value, leading to low solvency (25.9%–36.3%).\n', options: { fontSize: 12 } },
  { text: '• Cash crops (Sugarcane, Chilli, Cotton) provide the financial backbone of farmer viability, proving that crop selection and market price alignment dominate pure tonnage.', options: { fontSize: 12, bold: true } }
], { x: 0.8, y: 5.1, w: 11.7, h: 2.0, color: DARK_GRAY });

// ==========================================
// Slide 10: Hypothesis Testing
// ==========================================
slide = pres.addSlide();
addSlideHeader(slide, 'Results: Formal Statistical Hypothesis Testing', 'Slide 10 of 14');

slide.addText([
  { text: 'Hypothesis Framework:\n', options: { bold: true, fontSize: 14.5, color: NAVY } },
  { text: '• H0: Cropping season has no statistically significant effect on agricultural performance metrics.\n• H1: Statistically significant differences exist across Kharif, Rabi, and Zaid seasons (alpha = 0.05).', options: { fontSize: 13 } }
], { x: 0.8, y: 1.2, w: 11.7, h: 0.8 });

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
slide.addTable(testTable, { x: 0.8, y: 2.1, w: 11.7, h: 3.1, fontSize: 11, align: 'center', border: { pt: 1, color: 'CCCCCC' } });

slide.addText([
  { text: 'Empirical Verification:\n', options: { bold: true, fontSize: 13, color: NAVY } },
  { text: '• While overall yield variance across all combined crops is dominated by sugarcane biomass, evaluating crops individually proves that seasonal decline (Kharif > Rabi > Zaid) is overwhelmingly statistically significant across all staples.', options: { fontSize: 12 } }
], { x: 0.8, y: 5.4, w: 11.7, h: 1.5, color: DARK_GRAY });

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
slide.addShape(pres.ShapeType.roundRect, { x: 0.8, y: 1.5, w: 11.7, h: 5.4, fill: { color: WHITE }, line: { color: 'B0BEC5' } });
slide.addText('🔗 GitHub Repository URL:', { x: 1.2, y: 1.8, w: 10.9, h: 0.4, fontSize: 15, bold: true, color: NAVY });
slide.addText('https://github.com/ocotpi/Seasonal-Agriculture-Performance-Analysis', {
  x: 1.2, y: 2.25, w: 10.9, h: 0.5, fontSize: 14, color: BLUE, bold: true
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
], { x: 1.2, y: 2.85, w: 10.9, h: 3.9 });

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
slide.addShape(pres.ShapeType.rect, { x: 0, y: 0, w: '100%', h: 0.5, fill: { color: BLUE } });
slide.addText('Thank You!', {
  x: 1.0, y: 1.8, w: 11.3, h: 1.2, fontSize: 40, color: NAVY, bold: true, align: 'center'
});
slide.addText('Empirical Evidence for Climate-Resilient Agricultural Planning', {
  x: 1.0, y: 3.0, w: 11.3, h: 0.5, fontSize: 18, color: '555555', italic: true, align: 'center'
});

const ackText = [
  { text: 'Core Project Takeaway:\n', options: { bold: true, color: NAVY, fontSize: 15 } },
  { text: '\"Agricultural performance in India is structurally seasonal. By transitioning from open flood irrigation to precision drip emitters and rotating water-intensive staples into summer cash crops, smallholder farm solvency can be increased by over 30%.\"\n\n', options: { italic: true, fontSize: 13 } },
  { text: 'Acknowledgements:\n', options: { bold: true, color: NAVY, fontSize: 15 } },
  { text: 'Sincere gratitude to AICTE, Edunet Foundation, and Vodafone Idea Foundation (VOIS for Tech Program) for mentorship and project support.\n\n', options: { fontSize: 13 } },
  { text: 'Student Contact: ', options: { bold: true, color: NAVY, fontSize: 13.5 } },
  { text: 'Asmi Sharma | Chandigarh University (STU6a65f9036e5721785067779)', options: { fontSize: 13.5 } }
];
slide.addText(ackText, {
  x: 1.8, y: 3.7, w: 9.7, h: 2.8, fill: { color: WHITE }, line: { color: 'CCCCCC', width: 1 },
  margin: 15, align: 'center'
});

pres.writeFile({ fileName: 'Seasonal_Agriculture_Performance_Analysis_Presentation.pptx' })
  .then(fileName => console.log('Successfully generated PPTX:', fileName))
  .catch(err => console.error('Error generating PPTX:', err));
