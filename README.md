# 🌾 Seasonal Agriculture Performance Analysis
> **VOIS AICTE Batch 1 (2026–2027) Major Project | Data Analytics Internship**  
> *Conducted by Vodafone Idea Foundation & Edunet Foundation in association with AICTE*

[![Python 3.10+](https://img.shields.io/badge/Python-3.10%2B-blue.svg)](https://www.python.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![Jupyter Notebook](https://img.shields.io/badge/Notebook-Jupyter-orange.svg)](Seasonal_Agriculture_Performance_Analysis.ipynb)
[![PowerPoint Deck](https://img.shields.io/badge/Presentation-PowerPoint-red.svg)](Seasonal_Agriculture_Performance_Analysis_Presentation.pptx)

---

## 👤 Author & Project Metadata
- **Student Name:** Asmi Sharma
- **Institution:** Chandigarh University
- **Degree:** Bachelor of Engineering in Computer Science & Engineering (Batch of 2026)
- **AICTE Student ID:** `STU6a65f9036e5721785067779`
- **Internship ID:** `INTERNSHIP_17830691666a4779eecfe8a`
- **Internship Program:** VOIS for Tech – Data Analytics Internship by Edunet Foundation & Vodafone Idea Foundation in association with AICTE
- **GitHub Repository:** `https://github.com/ocotpi/Seasonal-Agriculture-Performance-Analysis`

---

## 📖 Executive Summary
Agriculture across India is structurally governed by three agro-meteorological seasons: **Kharif (Monsoon)**, **Rabi (Winter)**, and **Zaid (Summer)**. In this project, I performed an extensive empirical investigation on **4,000 multi-state farm observations** spanning **8 states** and **8 major crops** (Wheat, Rice, Maize, Pulses, Cotton, Groundnut, Sugarcane, Chilli).

The study evaluates the interaction between seasonal weather dynamics (rainfall, temperature, humidity, sunlight), soil characteristics (moisture, pH), input practices (irrigation systems, chemical NPK fertilizers, pesticides), and economic outcomes (production, costs, revenue, profit margins, and farm solvency rates).

---

## 📁 Repository Structure
```text
Seasonal-Agriculture-Performance-Analysis/
├── Seasonal_Agriculture_Performance_Analysis.ipynb          # Executable Jupyter Notebook with pre-rendered outputs
├── seasonal_agriculture_data.csv                            # Cleaned 4,000-Observation Empirical Dataset
├── Seasonal_Agriculture_Performance_Analysis_Presentation.pptx # Formatted 14-Slide PowerPoint Presentation Deck
├── Presentation_Slide_Deck.md                               # 14-Slide Presentation Guide matching AICTE template
├── PROJECT_REPORT.md                                        # Comprehensive 12-Section Academic Project Report
├── VIVA_VOCE_PREPARATION_GUIDE.md                          # 15+ Oral Defense Q&As and Slide-by-Slide Script
├── Data_Visualization_Mastery_Portfolio.ipynb               # Course Practical Portfolio for Data Visualization
├── requirements.txt                                         # Python Environment Dependencies
└── README.md                                                # Project Overview & Execution Instructions
```

---

## 🔬 Summary of Key Research Findings (12 AICTE Questions)

| # | Research Question | Verified Empirical Finding & Domain Takeaway |
|---|---|---|
| **Q1** | **Seasonal Performance Variation** | **Kharif** yields highest net farm profit (**+₹1,78,915**) and volume (**46.31 t**); **Rabi** delivers consistent returns (**+₹87,689**); **Zaid operates at an average net loss (-₹24,805)**. |
| **Q2** | **Cropping Patterns** | Rice & Cotton dominate Kharif; Wheat, Pulses & Chilli thrive in Rabi; Short-duration Pulses (16.5%) & Summer Maize (14.5%) dominate Zaid. |
| **Q3** | **Environmental Shifts** | Rainfall peaks in Kharif (**852.1 mm** vs 299.4 mm in Zaid); Temperatures peak in Zaid (**31.0°C** avg, up to 39.7°C); Solar radiation peaks in Zaid (**8.18 hrs/day**). |
| **Q4** | **Farming Practices** | Rainfed farming is prominent in Kharif (26.0%); Drip & Sprinkler become essential in Rabi & Zaid (>41%–44% share); Chemical NPK is stable (~276 kg/ha). |
| **Q5** | **Resource Usage & Efficiency** | Drip irrigation delivers **6.27 t/1000m³** water efficiency vs **3.44 t/1000m³** for Flood; Kharif records highest disease risk (**54.47%**). |
| **Q6** | **Climatic Relationships** | Relative humidity strongly correlates with monsoon pest outbreaks ($r = +0.448$); Summer heat correlates negatively with profit margin ($r = -0.214$). |
| **Q7** | **Economic Outcomes** | Solvency Rates: **Kharif (57.8%) > Rabi (48.9%) > Zaid (35.5%)**. Nearly 65% of summer farms incur financial losses under traditional flood management. |
| **Q8** | **Regional Consistency** | Across all 8 states, Zaid profits drop significantly. States with high canal/tubewell density (Punjab, Andhra Pradesh) maintain better summer loss resilience. |
| **Q9** | **Anomalies & Traps** | **The Summer Flood Trap:** 59% of high-loss summer farms used flood irrigation. **The Cereal Squeeze:** Wheat, Rice & Maize had low solvency (25%–36%). |
| **Q10** | **Derived Takeaways** | Crop selection and market price alignment dominate pure volume production; flood irrigation in summer is economically unviable. |
| **Q11** | **Hypothesis Testing** | One-Way ANOVA rejects $H_0$ for Net Profit ($F = 34.29, p < 0.001$), Disease Risk ($F = 1049.47, p < 0.0001$), and within-crop yields across foodgrains ($p < 0.001$). |
| **Q12** | **Agricultural Planning** | Established season-specific decision matrix recommending drip adoption, Kharif IPM preventative scouting, and summer pulse rotations. |

---

## 🛠️ Quickstart & Reproduction Guide

### **1. Clone Repository**
```bash
git clone https://github.com/ocotpi/Seasonal-Agriculture-Performance-Analysis.git
cd Seasonal-Agriculture-Performance-Analysis
```

### **2. Install Dependencies**
```bash
pip install -r requirements.txt
```

### **3. Run Notebook**
```bash
jupyter notebook Seasonal_Agriculture_Performance_Analysis.ipynb
```
*Or upload `Seasonal_Agriculture_Performance_Analysis.ipynb` directly into [Google Colab](https://colab.research.google.com/).*

---

## 📜 Acknowledgements
I express my gratitude to:
- **All India Council for Technical Education (AICTE)**
- **Edunet Foundation**
- **Vodafone Idea Foundation (VOIS for Tech Program)**
- Mentors and faculty at **Chandigarh University** for continuous project guidance.

---
**Author:** Asmi Sharma | BE Computer Science & Engineering, Chandigarh University  
**Contact:** `asmi.sharma.cu@gmail.com`
