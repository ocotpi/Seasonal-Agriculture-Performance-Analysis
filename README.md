# 🌾 Seasonal Agriculture Performance Analysis
> **VOIS AICTE Batch 1 (2026–2027) Major Project | Data Analytics Internship**

[![Python 3.10+](https://img.shields.io/badge/Python-3.10%2B-blue.svg)](https://www.python.org/)
[![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

---

## 👤 Author Information
- **Student Name:** Asmi Sharma
- **Institution:** Chandigarh University
- **Degree:** BE Computer Science & Engineering (Batch of 2026)
- **AICTE Student ID:** `STU6a65f9036e5721785067779`
- **Internship ID:** `INTERNSHIP_17830691666a4779eecfe8a`
- **Internship Program:** VOIS for Tech – Data Analytics Internship by Edunet Foundation & Vodafone Idea Foundation in association with AICTE

---

## 📖 Executive Summary
Agricultural systems in India operate within dynamic seasonal boundaries (**Kharif, Rabi, and Zaid**). This project performs an in-depth empirical data analytics investigation on **4,000 multi-state farm observations** across 8 states and 8 major crops.

The study explores the complex interactions among seasonal meteorology, soil edaphic properties, input allocations (fertilizers, pesticides, irrigation), and financial outcomes.

---

## 📁 Repository Structure
```text
├── Seasonal_Agriculture_Performance_Analysis.ipynb  # Complete Google Colab / Jupyter Notebook
├── seasonal_agriculture_data.csv                    # Complete 4,000-Row Cleaned Dataset
├── Presentation_Slide_Deck.md                       # Full 14-Slide Presentation Deck Content
├── requirements.txt                                 # Python Dependencies
└── README.md                                        # Project Documentation
```

---

## 🔬 Key Research Questions & Insights

| # | Research Question | Key Finding & Strategic Insight |
|---|---|---|
| **Q1** | **Seasonal Performance Variation** | **Rabi** delivers the highest net margin per hectare; **Kharif** yields the highest tonnage (Sugarcane/Rice); **Zaid** experiences highest water stress. |
| **Q2** | **Cropping Patterns** | Rice & Cotton dominate Kharif; Wheat, Mustard & Pulses thrive in Rabi; Short-duration Pulses & Summer Maize are optimal for Zaid. |
| **Q3** | **Environmental Shifts** | Rainfall peaks in Kharif (>800mm); Solar radiation and temperature peak in Zaid (>32°C, 9+ hrs/day). |
| **Q4** | **Farming Practices** | Rainfed reliance in Kharif transitions to mandatory Drip/Sprinkler in Rabi & Zaid. |
| **Q5** | **Resource Efficiency** | Water efficiency is **45% higher** with Drip/Sprinkler micro-irrigation compared to traditional flood irrigation. |
| **Q6** | **Climatic Relationships** | Humidity strongly drives pest outbreaks ($r = +0.45$) in Kharif; high summer temperatures depress Zaid profit margins without shading/mulching. |
| **Q7** | **Economic Outcomes** | Solvency rates: Rabi (58%) > Kharif (51%) > Zaid (44%). |
| **Q8** | **Regional Consistency** | Northern states with canal/well infrastructure (Punjab/Gujarat) maintain lower seasonal yield variance than rainfed regions. |
| **Q9** | **Anomalies & Traps** | Flood irrigation in hot Zaid creates an evaporation inefficiency trap, causing severe financial losses. |
| **Q10** | **Derived Takeaways** | Crop profitability is governed more by input-cost optimization than raw volume production. |
| **Q11** | **Hypothesis Testing** | One-Way ANOVA and Kruskal-Wallis tests reject $H_0$ ($p < 0.0001$), proving seasonal variance is statistically significant. |
| **Q12** | **Planning Framework** | Established an actionable crop-rotation and micro-irrigation adoption matrix for smallholder farmers. |

---

## 🛠️ Installation & Setup

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/ocotpi/Seasonal-Agriculture-Performance-Analysis.git
   cd Seasonal-Agriculture-Performance-Analysis
   ```

2. **Install Dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

3. **Run in Jupyter / Google Colab:**
   - Launch `Seasonal_Agriculture_Performance_Analysis.ipynb` directly in Jupyter Notebook or upload to [Google Colab](https://colab.research.google.com/).

---

## 📜 Acknowledgements
- **AICTE (All India Council for Technical Education)**
- **Edunet Foundation**
- **Vodafone Idea Foundation (VOIS for Tech Program)**
