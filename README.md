# Seasonal Agriculture Performance Analysis

**VOIS AICTE Batch 1 (2026–2027) Major Project | Data Analytics Internship**  
*Vodafone Idea Foundation & Edunet Foundation in association with AICTE*

[![Python 3.10+](https://img.shields.io/badge/Python-3.10%2B-blue.svg)](https://www.python.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

---

### Candidate and Project Information
- **Candidate Name:** Asmi Sharma
- **Institution:** Chandigarh University, Mohali, Punjab
- **Degree / Branch:** Bachelor of Engineering in Computer Science & Engineering (Batch of 2026)
- **AICTE Student ID:** `STU6a65f9036e5721785067779`
- **Internship ID:** `INTERNSHIP_17830691666a4779eecfe8a`
- **Program:** VOIS for Tech – Data Analytics Internship (Edunet Foundation & Vodafone Idea Foundation in association with AICTE)
- **Repository URL:** https://github.com/ocotpi/Seasonal-Agriculture-Performance-Analysis

---

## Project Overview

Agriculture in India is structurally governed by three primary agro-meteorological seasons: **Kharif (Monsoon)**, **Rabi (Winter)**, and **Zaid (Summer)**. In this major project, I conducted an empirical data analytics investigation on **4,000 multi-state farm observations** spanning **8 agricultural states** (Andhra Pradesh, Gujarat, Karnataka, Madhya Pradesh, Maharashtra, Punjab, Tamil Nadu, Telangana) and **8 major crops** (Wheat, Rice, Maize, Pulses, Cotton, Groundnut, Sugarcane, Chilli).

The investigation evaluates the complex relationships between seasonal climate dynamics (rainfall, temperature, humidity, sunlight duration), soil characteristics (moisture, pH), farming inputs (irrigation methods, chemical NPK fertilizers, pesticides), and economic outcomes (production tonnage, cultivation expenses, gross revenue, profit margins, and farm solvency rates).

---

## Repository Structure

```text
Seasonal-Agriculture-Performance-Analysis/
├── Data_Visualization.ipynb             # Jupyter Notebook containing analysis, plots, and hypothesis tests
├── seasonal_agriculrural_analysis.pptx   # 14-Slide PowerPoint Presentation Deck
├── seasonal_agriculture_data.csv         # Cleaned 4,000-Observation Dataset
├── PROJECT_REPORT.md                     # Comprehensive 12-Section Academic Project Report
├── requirements.txt                      # Python Dependencies
└── README.md                             # Project Documentation & Reproducibility Guide
```

---

## Summary of Empirical Findings (12 AICTE Research Questions)

| # | Research Question | Verified Empirical Finding & Domain Takeaway |
|---|---|---|
| **Q1** | **Seasonal Performance Variation** | **Kharif** delivers highest net farm profit (**+₹1,78,915**) and volume (**46.31 t**); **Rabi** delivers stable returns (**+₹87,689**); **Zaid operates at an average net loss (-₹24,805)**. |
| **Q2** | **Cropping Patterns** | Rice & Cotton dominate Kharif; Wheat, Pulses & Chilli thrive in Rabi; Short-duration Pulses (16.5%) & Summer Maize (14.5%) dominate Zaid. |
| **Q3** | **Environmental Shifts** | Rainfall peaks in Kharif (**852.1 mm** vs 299.4 mm in Zaid); Temperatures peak in Zaid (**31.0°C** avg, up to 39.7°C); Solar radiation peaks in Zaid (**8.18 hrs/day**). |
| **Q4** | **Farming Practices** | Rainfed farming is prominent in Kharif (26.0%); Drip & Sprinkler become essential in Rabi & Zaid (>41%–44% share); Chemical NPK application is sustained (~276 kg/ha). |
| **Q5** | **Resource Usage & Efficiency** | Drip irrigation delivers **6.27 t/1000m³** water efficiency vs **3.44 t/1000m³** for Flood; Kharif records highest disease risk (**54.47%**). |
| **Q6** | **Climatic Relationships** | Relative humidity strongly correlates with monsoon pest outbreaks ($r = +0.55$); Summer heat correlates negatively with profit margin ($r = -0.21$). |
| **Q7** | **Economic Outcomes** | Solvency Rates: **Kharif (57.8%) > Rabi (48.9%) > Zaid (35.5%)**. Nearly 65% of summer farms incur financial losses under traditional flood management. |
| **Q8** | **Regional Consistency** | Across all 8 states, Zaid profits drop significantly. States with high canal/tubewell density (Punjab, Karnataka) maintain positive margins. |
| **Q9** | **Anomalies & Traps** | **The Summer Flood Trap:** 59% of high-loss summer farms used flood irrigation. **The Cereal Squeeze:** Wheat, Rice & Maize had low solvency (25%–36%). |
| **Q10** | **Derived Takeaways** | Crop selection and market price alignment dominate pure volume production; flood irrigation in summer is economically unviable. |
| **Q11** | **Hypothesis Testing** | One-Way ANOVA rejects $H_0$ for Net Profit ($F = 34.29, p < 0.001$), Disease Risk ($F = 1049.47, p < 0.0001$), and within-crop yields across foodgrains ($p < 0.001$). |
| **Q12** | **Agricultural Planning** | Established season-specific decision matrix recommending drip adoption, Kharif IPM preventative scouting, and summer pulse rotations. |

---

## Setup and Reproduction Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/ocotpi/Seasonal-Agriculture-Performance-Analysis.git
cd Seasonal-Agriculture-Performance-Analysis
```

### 2. Install Required Dependencies
```bash
pip install -r requirements.txt
```

### 3. Open and Run the Notebook
```bash
jupyter notebook Data_Visualization.ipynb
```
*The notebook can also be opened directly in [Google Colab](https://colab.research.google.com/).*

---

## Acknowledgements

I express my gratitude to:
- **All India Council for Technical Education (AICTE)**
- **Edunet Foundation**
- **Vodafone Idea Foundation (VOIS for Tech Program)**
- Faculty and mentors at **Chandigarh University** for their guidance throughout this internship project.

---
**Candidate:** Asmi Sharma | B.E. Computer Science & Engineering, Chandigarh University  
**Contact:** `asmi.sharma.cu@gmail.com`
