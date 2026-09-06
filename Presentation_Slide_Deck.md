# VOIS AICTE Internship Project Presentation
## Major Project: Seasonal Agriculture Performance Analysis

---

### **Slide 1: Title Slide**
- **Project Title:** Seasonal Agriculture Performance Analysis
- **Student Name:** Asmi Sharma
- **College Name:** Chandigarh University
- **Degree & Branch:** B.E. Computer Science & Engineering (2026 Batch)
- **AICTE Student ID:** STU6a65f9036e5721785067779
- **Internship ID:** INTERNSHIP_17830691666a4779eecfe8a
- **Program:** VOIS for Tech - Data Analytics Internship (Edunet Foundation & Vodafone Idea Foundation in collaboration with AICTE)
- **Review Date:** September 2026

---

### **Slide 2: Problem Statement**
- Agricultural performance in India fluctuates heavily across seasons due to changing monsoon intensity, temperature extremes, irrigation access, and market price dynamics.
- **The Core Problem:** Raw farm records record what happened, but fail to explain *why* yields, operational costs, and farm profits vary so sharply between **Kharif (Monsoon), Rabi (Winter), and Zaid (Summer)** cycles.
- **The Practical Challenge:** Farmers often apply uniform inputs regardless of season, resulting in high resource wastage (e.g., flood irrigation during summer heatwaves) or catastrophic pest losses during monsoon humidity.
- **Project Goal:** Analyze 4,000 multi-state farm observations to uncover seasonal inefficiencies, identify crop-specific risk factors, statistically validate seasonal differences, and deliver actionable recommendations for crop planning.

---

### **Slide 3: Project Description**
- **Domain:** Agro-Climatic Data Analytics, Agricultural Economics & Resource Management.
- **Dataset Scope:** 4,000 empirical farm records spanning 8 key agricultural states (Andhra Pradesh, Gujarat, Karnataka, Madhya Pradesh, Maharashtra, Punjab, Tamil Nadu, Telangana) and 8 major crops (Wheat, Rice, Maize, Pulses, Cotton, Groundnut, Sugarcane, Chilli).
- **Core Methodology:**
  1. **Data Auditing & Preprocessing:** Identified missing values in Rainfall (48 rows), Soil Moisture (40 rows), and Yield (32 rows); applied district-and-season group median imputation to preserve local microclimates.
  2. **Feature Engineering:** Calculated Profit Margins, Cost per Hectare, Revenue per Hectare, Total NPK chemical load, and Water Productivity ratios.
  3. **Comprehensive EDA:** Answered all 12 AICTE research questions across agronomic, environmental, and financial dimensions.
  4. **Hypothesis Testing:** Conducted One-Way ANOVA and Kruskal-Wallis non-parametric tests to confirm statistical significance of seasonal shifts.
  5. **Decision Framework:** Formulated a season-wise crop rotation and irrigation advisory matrix for smallholders.

---

### **Slide 4: Who Are the End Users?**
1. **Smallholder Farmers & FPOs (Farmer Producer Organizations):** Guidance on seasonal crop selection, moving away from loss-making staples during summer, and optimizing irrigation scheduling.
2. **Agricultural Extension Workers & Krishi Vigyan Kendras (KVKs):** Delivering early warning advisories on monsoon pest risks (>54% risk in Kharif) and targeted chemical usage.
3. **State Water Resource & Irrigation Departments:** Managing canal water releases and subsidizing micro-irrigation where flood irrigation causes severe water loss.
4. **Agri-Fintech & Crop Insurance Companies:** Assessing seasonal default risk (Zaid default risk is highest at 64.5% loss rate) and setting risk-adjusted crop insurance premiums.
5. **Policy Planners (Ministry of Agriculture / AICTE / State Boards):** Evidence-based regional input subsidies and MSP planning.

---

### **Slide 5: Technology Used**
- **Programming Language:** Python 3.10+
- **Data Manipulation & Analysis:** Pandas, NumPy
- **Data Visualization:** Matplotlib, Seaborn
- **Statistical Computing & Hypothesis Testing:** SciPy (`scipy.stats` - ANOVA, Kruskal-Wallis, Chi-Square, Pearson Correlation)
- **Environment & Notebooks:** Google Colab, Jupyter Notebook, VS Code
- **Version Control:** Git & GitHub

---

### **Slide 6: RESULTS — Seasonal Performance Overview**
*(Screenshots of Code & Seasonal Distribution Plots inserted below)*
- **Kharif Season (Monsoon, N = 1,779 farms / 44.5%):**
  - Average Yield: 5.64 t/ha | Production: 46.31 tonnes | Average Farm Profit: +INR 1,78,915.
  - Highest solvency rate (57.8% profitable farms) driven by monsoon rainfall and high-tonnage sugarcane/rice harvests.
- **Rabi Season (Winter, N = 1,627 farms / 40.7%):**
  - Average Yield: 5.08 t/ha | Average Farm Profit: +INR 87,689 | Solvency Rate: 48.9%.
  - Stable growing conditions with lower temperature stress (23.5°C avg) and solid returns on cash crops (Chilli, Pulses).
- **Zaid Season (Summer, N = 594 farms / 14.85%):**
  - Average Yield: 4.67 t/ha | Average Farm Profit: **-INR 24,805 (Net Average Loss)**.
  - **Severe Economic Distress:** Only 35.5% of farms were profitable (64.5% incurred net financial losses) due to high pumping costs and heat stress.

---

### **Slide 7: RESULTS — Environmental & Climatic Dynamics**
*(Screenshots of Code & Climatological Boxplots inserted below)*
- **Rainfall Distribution:**
  - Kharif received an average of **852.08 mm** of rain, compared to **436.00 mm** in Rabi and just **299.42 mm** in Zaid.
- **Thermal & Solar Stress:**
  - Temperatures peak in Zaid (**31.04°C** average, reaching up to 39.7°C), coinciding with peak sunshine hours (**8.18 hours/day**).
  - Kharif experiences overcast skies (**6.79 hours/day**) with persistent high relative humidity (**71.81%** vs 52.01% in Zaid).
- **Soil Moisture Dynamics:**
  - Natural soil moisture peaks in Kharif (30.8% avg) but plunges in Zaid (18.6% avg), making moisture-retention techniques (mulching, drip) non-negotiable for summer crops.

---

### **Slide 8: RESULTS — Irrigation & Resource Efficiency Analysis**
*(Screenshots of Code & Irrigation Efficiency Charts inserted below)*
- **Irrigation Method Economics:**
  - **Drip Irrigation (N = 915):** Achieved **6.27 t/1000m³** water efficiency and an average profit of **+INR 2,19,626** per farm.
  - **Sprinkler Irrigation (N = 734):** Achieved **4.67 t/1000m³** water efficiency and an average profit of **+INR 91,121**.
  - **Flood Irrigation (N = 1,310):** Lowest water efficiency at **3.44 t/1000m³** and an average profit of **+INR 73,354**.
  - **Rainfed (N = 1,041):** Common in Kharif (7.56 t/1000m³ apparent rainfall productivity) but highly exposed to dry spells.
- **The Summer Flood Inefficiency Trap:**
  - In Zaid, farms practicing flood irrigation wasted up to 45% more water through evaporation while suffering an average net loss exceeding -INR 68,000 per farm.
- **Chemical Inputs & Pest Risk:**
  - Disease/Pest Risk was highest in Kharif (**54.47%**) due to warm, saturated air, compared to Rabi (40.48%) and Zaid (38.22%).

---

### **Slide 9: RESULTS — Crop Economics & The Cash Crop Divide**
*(Screenshots of Code & Crop Profitability Matrix inserted below)*
- **The Cereal Paradox (High Labor/Cost, Low Return):**
  - **Wheat (N = 614):** Average Profit: -INR 1,23,398 | Solvency Rate: **25.9%** (74.1% of wheat farms lost money).
  - **Rice (N = 690):** Average Profit: -INR 1,02,214 | Solvency Rate: **33.6%** (High water pumping and fertilizer costs).
  - **Maize (N = 551):** Average Profit: -INR 83,978 | Solvency Rate: **36.3%**.
- **Commercial & Cash Crops (High Value Solvency Drivers):**
  - **Sugarcane (N = 305):** Average Profit: **+INR 8,17,188** | Solvency Rate: **88.5%** | Average Yield: 46.94 t/ha.
  - **Chilli (N = 412):** Average Profit: **+INR 7,50,878** | Solvency Rate: **82.0%** | Driven by premium market prices (~INR 1,02,000/tonne).
  - **Cotton (N = 508):** Average Profit: **+INR 1,24,547** | Solvency Rate: **65.4%**.
  - **Groundnut (N = 424):** Average Profit: **+INR 44,858** | Solvency Rate: **59.2%**.

---

### **Slide 10: RESULTS — Statistical Hypothesis Testing**
*(Screenshots of Code & Statistical Test Outputs inserted below)*
- **Formal Hypothesis:**
  - $H_0$: Cropping season has no statistically significant effect on agricultural outcomes.
  - $H_1$: Significant differences exist across Kharif, Rabi, and Zaid seasons.
- **Statistical Results:**
  - **Profit per Farm (INR):** One-Way ANOVA $F = 34.292$ ($p = 1.63 \times 10^{-15} < 0.001$) → **Reject $H_0$**
  - **Disease/Pest Risk (%):** One-Way ANOVA $F = 1049.467$ ($p < 0.0001$) → **Reject $H_0$**
  - **Within-Crop Yield by Season (Crop-Specific ANOVA):**
    - Rice Yield ($F = 22.170, p < 0.001$): Kharif (2.71 t/ha) > Rabi (2.33 t/ha) > Zaid (1.90 t/ha) → **Reject $H_0$**
    - Pulses Yield ($F = 23.816, p < 0.001$): Kharif (1.04 t/ha) > Rabi (0.87 t/ha) > Zaid (0.65 t/ha) → **Reject $H_0$**
    - Wheat Yield ($F = 11.027, p < 0.001$): Kharif (2.26 t/ha) > Rabi (2.06 t/ha) > Zaid (1.75 t/ha) → **Reject $H_0$**
    - Maize Yield ($F = 10.684, p < 0.001$): Kharif (2.97 t/ha) > Rabi (2.61 t/ha) > Zaid (2.30 t/ha) → **Reject $H_0$**
- **Non-Parametric Validation:** Kruskal-Wallis $H$-tests confirmed identical conclusions ($p < 0.001$), ruling out outlier distortion.

---

### **Slide 11: Future Scope**
1. **Predictive Machine Learning:** Train gradient-boosted trees (XGBoost/LightGBM) to forecast farm profit and yield based on localized pre-season weather forecasts.
2. **IoT-Driven Precision Irrigation:** Solar-powered automated soil moisture sensors that trigger micro-drip emitters, eliminating summer flood irrigation wastage.
3. **Satellite Remote Sensing (NDVI):** Integrate Sentinel-2 multispectral imagery to track vegetation index progression and detect fungal outbreaks early in humid Kharif cycles.
4. **Farmer Advisory Mobile Interface:** Develop a lightweight, multilingual WhatsApp/Android advisory tool providing season-specific crop suitability and fertilizer dosage recommendations.

---

### **Slide 12: GitHub Link**
- **Repository URL:** `https://github.com/ocotpi/Seasonal-Agriculture-Performance-Analysis`
- **Repository Assets:**
  - `Seasonal_Agriculture_Performance_Analysis.ipynb` — Complete, documented, executable Jupyter Notebook
  - `seasonal_agriculture_data.csv` — Full 4,000-observation dataset
  - `Presentation_Slide_Deck.md` — 14-slide structured deck matching the AICTE PPT template
  - `PROJECT_REPORT.md` — In-depth academic project documentation & research analysis
  - `requirements.txt` — Environment reproduction configuration

---

### **Slide 13: VOIS Course Completion Certificate**
- **Course Name:** Data Visualization
- **Platform:** VOIS for Tech Learning Portal (Edunet Foundation & Vodafone Idea Foundation)
- **Learner Name:** Asmi Sharma
- **AICTE Student ID:** STU6a65f9036e5721785067779
- **Certifying Organization:** Vodafone Idea Foundation & Edunet Foundation in association with AICTE
- *[Certificate image placeholder for presentation slide]*

---

### **Slide 14: Conclusion & Thank You**
- **Final Takeaway:** Farm viability in India is fundamentally seasonal. Replacing flood irrigation with drip systems and shifting from water-stressed summer cereals to high-value cash rotations can lift farm solvency by over 30%.
- **Acknowledgements:** Sincere thanks to the VOIS for Tech program, Edunet Foundation, Vodafone Idea Foundation, and AICTE mentors for their guidance throughout this internship project.
- **Contact:** Asmi Sharma | Chandigarh University
- **Questions & Discussion:** Open for Q&A!
