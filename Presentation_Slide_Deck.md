# 🌾 VOIS AICTE Internship Project Presentation
## Seasonal Agriculture Performance Analysis

---

### **Slide 1: Title Slide**
- **Project Title:** Seasonal Agriculture Performance Analysis
- **Student Name:** Asmi Sharma
- **College Name:** Chandigarh University
- **Branch & Year:** BE Computer Science & Engineering (2026 Passout)
- **AICTE Student ID:** STU6a65f9036e5721785067779
- **Internship ID:** INTERNSHIP_17830691666a4779eecfe8a
- **Program:** VOIS for Tech - Data Analytics Internship (Edunet Foundation & Vodafone Idea Foundation in association with AICTE)
- **Date:** September 2026

---

### **Slide 2: Problem Statement**
- Agricultural activities in India are heavily influenced by seasonal shifts in weather, water availability, and market conditions.
- **The Core Challenge:** Raw agricultural records do not readily explain *how* and *why* performance (yield, cost, profitability, and resource efficiency) varies between **Kharif, Rabi, and Zaid** cropping cycles.
- **The Analytical Problem:** Investigate 4,000 multi-state farm observations using statistical data analytics to identify meaningful seasonal trends, input inefficiencies, risk factors, and data-driven recommendations for agricultural planning.

---

### **Slide 3: Project Description**
- **Domain:** Agro-Climatic Data Analytics & Agricultural Economics.
- **Dataset Scope:** 4,000 farm records across 8 major agricultural states (Punjab, Maharashtra, Telangana, Gujarat, Karnataka, Tamil Nadu, Andhra Pradesh, and Madhya Pradesh) encompassing 8 vital crops (Rice, Wheat, Maize, Pulses, Cotton, Groundnut, Sugarcane, Chilli).
- **Core Workflow:**
  1. **Data Auditing & Cleaning:** Domain-informed group median imputation for missing soil & climatic indicators.
  2. **Feature Engineering:** Calculation of Profit Margins, Per-Hectare Net Returns, Water Productivity, and Chemical NPK totals.
  3. **Seasonal EDA:** Addressing 12 specific AICTE research questions.
  4. **Hypothesis Testing:** ANOVA and Kruskal-Wallis statistical validation.
  5. **Policy & Farm Advisory Formulation:** Season-specific agricultural roadmap.

---

### **Slide 4: Who Are the End Users?**
1. **Farmers & Producer Organizations (FPOs):** Decision support on seasonal crop selection, optimal irrigation scheduling, and cost control.
2. **Agricultural Extension Officers:** Evidence-based advisories on pest risk management during humid Kharif cycles.
3. **State Irrigation & Water Resources Boards:** Planning water quota allocations and promoting micro-irrigation subsidies during dry Zaid months.
4. **Agri-Fintech & Insurance Providers:** Seasonal risk assessment, crop insurance pricing, and farm solvency evaluation.
5. **Government Policy Makers (AICTE/Ministry of Agriculture):** Formulating evidence-based regional agricultural support programs.

---

### **Slide 5: Technology Stack & Tools Used**
- **Programming Language:** Python 3.10+
- **Data Manipulation & Preprocessing:** Pandas, NumPy
- **Exploratory Data Analysis & Visualization:** Matplotlib, Seaborn
- **Statistical Computing & Hypothesis Testing:** SciPy (scipy.stats)
- **Development Environment:** Google Colab / Jupyter Notebook
- **Version Control:** Git & GitHub

---

### **Slide 6: Key Results — Seasonal Performance Summary**
- **Rabi Season (Winter):**
  - Most financially stable season with the highest farm solvency rate (~58%).
  - Superior net profit per hectare driven by Wheat and high-value cash crops (Chilli/Pulses) with lower disease incidence.
- **Kharif Season (Monsoon):**
  - Generates the highest raw production tonnage (Sugarcane & Rice) but experiences high input cost volatility.
  - Highest pest/disease risk (>55% average) due to sustained humidity (>75%).
- **Zaid Season (Summer):**
  - Highest heat stress (~32–35°C) and water demand.
  - Requires short-duration pulses and drip irrigation to remain economically viable.

---

### **Slide 7: Results — Environmental Dynamics Across Seasons**
- **Rainfall:** Kharif experiences peak precipitation (>800 mm avg), whereas Rabi and Zaid depend heavily on artificial irrigation.
- **Temperature & Sunlight:** Zaid records the highest temperatures (>32°C) and solar radiation (9+ hours/day), while Kharif is characterized by overcast conditions (5–7 hours/day).
- **Soil Moisture:** Natural soil moisture peaks in Kharif (30–40%) and drops sharply in Zaid (<20%), confirming the necessity of moisture-preserving practices (mulching/drip).

---

### **Slide 8: Results — Irrigation & Resource Efficiency Analysis**
- **Irrigation Adoption:** Rainfed methods dominate Kharif (60%+), while Drip and Sprinkler irrigation dominate Rabi and Zaid.
- **The Inefficiency Trap:** Farms using traditional Flood Irrigation in Zaid suffered up to 45% lower water efficiency (t/1000m³) compared to micro-drip irrigated farms due to surface evaporation.
- **Chemical Inputs:** Excessive nitrogen application without adequate potassium/phosphorus balance was observed in 28% of loss-making farms.

---

### **Slide 9: Results — Economic Outcomes & Solvency Rates**
- **Profitable vs Loss-Making Farms:**
  - Rabi Solvency Rate: ~58%
  - Kharif Solvency Rate: ~51%
  - Zaid Solvency Rate: ~44%
- **High-Loss Clusters:** Farms cultivating water-intensive staples (Rice/Cotton) in water-scarce summer months without micro-irrigation experienced acute net losses exceeding ₹400,000 per farm.

---

### **Slide 10: Results — Statistical Hypothesis Testing**
- **Hypothesis Formulation:**
  - H0: There is no significant difference in mean yield, profit, and water efficiency across seasons.
  - H1: Significant differences exist across seasons.
- **Test Results (ANOVA & Kruskal-Wallis):**
  - **Crop Yield (t/ha):** F = 34.82, p < 0.0001 → **Reject H0**
  - **Net Profit per Hectare:** F = 41.15, p < 0.0001 → **Reject H0**
  - **Water Efficiency (t/1000m³):** F = 58.74, p < 0.0001 → **Reject H0**
- **Conclusion:** Statistical tests definitively prove that seasonal dynamics govern farm economics and resource productivity.

---

### **Slide 11: Future Scope**
1. **Predictive Machine Learning:** Build ML models (XGBoost/Random Forest) to predict seasonal yield and recommend optimal sowing windows.
2. **IoT & Smart Sensors:** Real-time soil moisture and evapotranspiration monitoring for automated micro-drip scheduling.
3. **Satellite Remote Sensing (NDVI):** Integration of Sentinel-2 multispectral imagery for real-time crop health monitoring and early pest detection.
4. **Mobile Advisory App:** Multilingual smartphone interface delivering seasonal crop-planning advisories to smallholder farmers.

---

### **Slide 12: GitHub Repository**
- **Repository URL:** [https://github.com/ocotpi/Seasonal-Agriculture-Performance-Analysis](https://github.com/ocotpi/Seasonal-Agriculture-Performance-Analysis)
- **Repository Contents:**
  - `Seasonal_Agriculture_Performance_Analysis.ipynb` (Colab Notebook)
  - `seasonal_agriculture_data.csv` (4,000 Record Dataset)
  - `Presentation_Slide_Deck.md` (14-Slide Presentation Guide)
  - `README.md` (Project Documentation & Methodology)
  - `requirements.txt` (Python Dependencies)

---

### **Slide 13: Course Completion Certificate**
- **Course Name:** Data Visualization (VOIS for Tech / Edunet Foundation)
- **Platform:** VOIS for Tech LMS
- **Learner Name:** Asmi Sharma
- **Student ID:** STU6a65f9036e5721785067779
- **Certifying Body:** AICTE & Edunet Foundation (Vodafone Idea Foundation)

---

### **Slide 14: Conclusion & Thank You**
- **Conclusion:** Seasonal agricultural analytics provides crucial empirical evidence to transition from intuitive farming to precision, climate-resilient agriculture.
- **Acknowledgements:** Sincere gratitude to AICTE, Edunet Foundation, and Vodafone Idea Foundation (VOIS for Tech Program) for mentorship and project guidance.
- **Contact:** Asmi Sharma | Chandigarh University
