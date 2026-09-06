# Major Project Report: Seasonal Agriculture Performance Analysis

**VOIS for Tech – Data Analytics Internship (Batch 1, 2026–2027)**  
*Conducted by Vodafone Idea Foundation & Edunet Foundation in association with AICTE*

---

### Candidate & Project Details
- **Candidate Name:** Asmi Sharma
- **Degree / Branch:** Bachelor of Engineering in Computer Science & Engineering (Batch of 2026)
- **Institution:** Chandigarh University, Mohali, Punjab
- **AICTE Student ID:** STU6a65f9036e5721785067779
- **Internship ID:** INTERNSHIP_17830691666a4779eecfe8a
- **Repository:** https://github.com/ocotpi/Seasonal-Agriculture-Performance-Analysis
- **Date of Submission:** September 2026

---

## Abstract

Agriculture in India is structurally governed by three primary seasonal cycles: Kharif (Monsoon), Rabi (Winter), and Zaid (Summer). In traditional farming, resource allocation is frequently static, with little dynamic adjustment for seasonal temperature spikes, ambient humidity shifts, or crop-specific water requirements. This study performs an empirical data analytics investigation on 4,000 multi-state farm observations across 8 agricultural states (Andhra Pradesh, Gujarat, Karnataka, Madhya Pradesh, Maharashtra, Punjab, Tamil Nadu, Telangana) and 8 major crops (Rice, Wheat, Maize, Pulses, Cotton, Groundnut, Sugarcane, Chilli).

The analysis reveals significant differences in seasonal performance. Kharif operations achieved the highest mean farm profit (INR 1,78,915) and highest solvency rate (57.8%), supported by monsoon precipitation (852.1 mm average) and high-tonnage sugarcane production. Rabi operations demonstrated stable returns (INR 87,689 average profit; 48.9% solvency) under moderate temperatures (23.5 deg C). In contrast, Zaid summer operations operated at an average net loss of -INR 24,805 per farm, with only 35.5% of farms achieving solvency (a 64.5% loss rate), caused primarily by high irrigation pumping costs and evaporative water losses under summer heat (31.0 deg C average, peaking at 39.7 deg C). 

Micro-irrigation (drip systems) demonstrated a significant performance advantage, delivering 6.27 t/1000m3 water efficiency and INR 2,19,626 average net profit, compared to 3.44 t/1000m3 and INR 73,354 for flood irrigation. One-Way ANOVA and Kruskal-Wallis non-parametric tests confirmed that seasonal differences in net profit (F = 34.29, p < 0.001), disease/pest risk (F = 1049.47, p < 0.0001), and foodgrain yields (Rice F = 22.17, Pulses F = 23.82, Wheat F = 11.03, Maize F = 10.68, all p < 0.001) are statistically significant. A season-specific crop rotation and irrigation advisory framework is presented to support smallholder decision-making.

---

## 1. Introduction and Domain Background

Agricultural production in India depends heavily on seasonal weather variations. The agricultural calendar is divided into three main seasons:

1. **Kharif Season (June – October):** Corresponds to the southwest monsoon. Characterized by high cumulative precipitation, elevated relative humidity, and warm temperatures. Dominant crops include Rice, Maize, Cotton, Groundnut, and Sugarcane.
2. **Rabi Season (October – April):** Winter cropping cycle sown following the monsoon retreat. Characterized by cooler ambient temperatures, steady sunshine, and reliance on stored soil moisture supplemented by canal and tubewell irrigation. Major crops include Wheat, Pulses (Gram/Lentil), Mustard, and Winter Chilli.
3. **Zaid Season (March – June):** Short summer window characterized by high ambient temperatures, low relative humidity, intense solar radiation, and minimal rainfall. Sowing is restricted to short-duration crops such as pulses, summer groundnut, and vegetables.

Despite widespread recognition of these seasonal patterns, farm management frequently relies on uniform input packages. Farmers often apply similar flood irrigation schedules and chemical treatments throughout the year. During summer months, open flood irrigation under high ambient temperatures results in rapid surface evaporation before water can penetrate root zones, inflating electricity and diesel pumping costs while depressing crop margins. 

This project analyzes empirical farm records to identify the factors driving seasonal yield variations, evaluate resource efficiencies, and develop data-driven planning guidelines.

---

## 2. Problem Statement and Objectives

### 2.1 Problem Statement
Agricultural activities are influenced by seasonal variations in environmental conditions, farming practices, resource availability, and market conditions. As a result, agricultural performance differs from one season to another. However, raw agricultural data does not clearly explain how performance changes across seasons or what specific patterns can be observed under different seasonal conditions. The problem is to analyze the agricultural dataset and investigate seasonal differences in agricultural performance by identifying meaningful patterns, trends, relationships, and variations within the available data.

### 2.2 Core Project Objectives
1. **Data Preprocessing & Quality Assurance:** Audit raw survey records, inspect missing entries in environmental and agronomic variables, and apply localized group-median imputation.
2. **Feature Engineering:** Calculate normalized land-intensity indices (Cost/Ha, Revenue/Ha, Profit/Ha, Profit Margin %, Water Productivity, Total NPK chemical load).
3. **Exploratory Data Analysis:** Investigate all 12 key analytical questions formulated in the AICTE project brief.
4. **Statistical Hypothesis Testing:** Conduct One-Way ANOVA and Kruskal-Wallis non-parametric tests to establish statistical significance.
5. **Decision Support Formulation:** Develop a seasonal crop-rotation and irrigation matrix to guide agricultural planning.

---

## 3. Dataset Description and Preprocessing

### 3.1 Dataset Overview
The dataset contains **4,000 farm observations** across 8 states and 8 crops with 28 initial attributes:

- **Geographic Coverage:** Andhra Pradesh (529), Telangana (516), Maharashtra (512), Madhya Pradesh (497), Karnataka (489), Gujarat (488), Tamil Nadu (485), and Punjab (484).
- **Crop Representation:** Rice (690), Wheat (614), Maize (551), Cotton (508), Pulses (496), Groundnut (424), Chilli (412), and Sugarcane (305).
- **Seasonal Split:** Kharif (1,779 observations; 44.48%), Rabi (1,627 observations; 40.68%), and Zaid (594 observations; 14.85%).

### 3.2 Data Cleaning and Missing Value Imputation
An initial missing value audit identified missing entries in three variables:
- `Rainfall_mm`: 48 missing values (1.20%)
- `Soil_Moisture_pct`: 40 missing values (1.00%)
- `Yield_Tonnes_Ha`: 32 missing values (0.80%)

**Imputation Rationale:**  
Dropping incomplete rows would discard 120 farm records and introduce potential sampling bias across regions. Global mean imputation was avoided because environmental variables vary substantially by season (e.g., Kharif rainfall averages 852.1 mm versus 299.4 mm in Zaid). Imputing a global mean would distort seasonal climate baselines.

Therefore, missing values were imputed using **localized group medians by (`Crop`, `Season`)**. Median values were preferred over means to mitigate the influence of extreme weather outliers. Following imputation, arithmetic relationships across production, revenue, and profit were reconciled:

$$\text{Production (t)} = \text{Yield (t/ha)} \times \text{Farm Area (ha)}$$
$$\text{Revenue (INR)} = \text{Production (t)} \times \text{Market Price (INR/t)}$$
$$\text{Profit (INR)} = \text{Revenue (INR)} - \text{Total Cost (INR)}$$

### 3.3 Engineered Features
To enable fair comparisons across farms ranging from 0.5 to 15.0 hectares, six normalized features were computed:

1. **Cost per Hectare (INR/ha):** Total Cost / Farm Area
2. **Revenue per Hectare (INR/ha):** Revenue / Farm Area
3. **Profit per Hectare (INR/ha):** Profit / Farm Area
4. **Profit Margin (%):** (Profit / Revenue) * 100
5. **Solvency Indicator (`Is_Profitable`):** Binary flag (1 if Profit > 0, else 0)
6. **Total NPK Chemical Load (kg/ha):** Nitrogen + Phosphorus + Potassium application

---

## 4. Empirical Findings on the 12 AICTE Research Questions

### Q1: How does agricultural performance vary across seasons?
- **Kharif (N = 1,779):** Average yield was 5.64 t/ha, average production was 46.31 tonnes, and mean farm profit was INR 1,78,915. High precipitation offsets groundwater pumping expenses for high-biomass crops.
- **Rabi (N = 1,627):** Average yield was 5.08 t/ha, with a mean farm profit of INR 87,689. Operating expenses were the lowest among all seasons (INR 5,13,837 average).
- **Zaid (N = 594):** Average yield fell to 4.67 t/ha, resulting in an average **net loss of -INR 24,805 per farm**. Summer heat and continuous tubewell pumping increased operating expenses to INR 5,43,977.

### Q2: What major seasonal patterns can be observed?
Crop selection shifts systematically across seasons:
- **Kharif:** Dominated by Rice (18.7%), Cotton (14.7%), Wheat/Maize (15.5%, 13.8%), and Sugarcane.
- **Rabi:** Characterized by higher adoption of high-value cash crops; Chilli represents 12.7% of crops and Pulses represent 13.4%.
- **Zaid:** Sown predominantly with short-duration, drought-hardy crops; Pulses increase to 16.5%, Summer Maize to 14.5%, and Groundnut to 11.5%. Long-duration staples are largely avoided.

### Q3: Which characteristics change between seasons?
- **Precipitation:** Kharif receives 852.1 mm average rainfall, compared to 436.0 mm in Rabi and 299.4 mm in Zaid.
- **Temperature & Solar Exposure:** Ambient temperature averages 23.5 deg C in Rabi, 28.5 deg C in Kharif, and 31.0 deg C in Zaid (peaking at 39.7 deg C). Daily sunshine duration is highest in Zaid (8.18 hours/day) and lowest in Kharif (6.79 hours/day) due to monsoon cloud cover.
- **Soil Moisture:** Volumetric soil moisture peaks in Kharif (30.82%), declines to 24.64% in Rabi, and drops to 18.61% in Zaid. Soil pH remains neutral across seasons (6.71–6.75).

### Q4: What differences exist between agricultural activities in different seasons?
- **Irrigation Practices:** Rainfed cultivation accounts for 26.0% of Kharif farms. In Rabi and Zaid, micro-irrigation (Drip and Sprinkler) accounts for 41% to 44% of total cultivated area.
- **Chemical Inputs:** Fertilizer application is relatively steady (187–192 kg/ha). However, pesticide spray intensity is highest during Kharif to control monsoon insect vectors.

### Q5: Are there noticeable variations in resource usage across seasons?
- **Groundwater Extraction:** Zaid requires the highest groundwater volume (6,420 m3 average per farm) due to high evaporative demand, compared to 5,847 m3 in Rabi and 6,102 m3 in Kharif.
- **Water Productivity:** Water efficiency decreases from 5.89 t/1000m3 in Kharif to 5.19 t/1000m3 in Rabi, reaching 4.41 t/1000m3 in Zaid.
- **Pest & Pathogen Risk:** Disease/pest risk averages **54.47% in Kharif**, compared to 40.48% in Rabi and 38.22% in Zaid.

### Q6: Are there relationships between environmental conditions and performance?
- In **Kharif**, relative humidity correlates positively with disease/pest risk ($r = +0.55$). Warm, moist microclimates promote fungal and bacterial blights.
- In **Rabi**, daily sunlight hours correlate positively with cereal yield ($r = +0.18$), indicating that clear winter sunlight supports grain filling in Wheat and Maize.
- In **Zaid**, ambient temperature correlates negatively with profit per hectare ($r = -0.21$), showing that thermal stress and pumping costs compress summer net margins.

### Q7: How do economic outcomes vary across seasons?
- **Farm Solvency Rates (Percentage of Profitable Farms):**
  - **Kharif:** 57.84% of farms operated profitably.
  - **Rabi:** 48.92% of farms operated profitably.
  - **Zaid:** Only 35.52% of farms operated profitably; **64.48% of summer farms incurred net losses**.
- **Margin Distribution:** Median profit margin is +14.2% in Kharif, +8.6% in Rabi, and -4.8% in Zaid.

### Q8: Are some seasonal patterns consistent across different regions?
- Summer margin contraction occurs across all 8 states in the dataset.
- States with developed canal infrastructure and energized borewells (Punjab: -INR 15,200 summer profit; Andhra Pradesh: -INR 18,920) demonstrated greater loss resilience than states with lower irrigation penetration (Gujarat: -INR 31,450; Tamil Nadu: -INR 29,800).

### Q9: Are there unusual or unexpected seasonal patterns?
- **The Summer Flood Irrigation Trap:** 59% of the worst-performing summer farms practiced flood irrigation. High ambient temperatures cause surface water evaporation before it reaches root zones, generating high electricity bills without improving yields.
- **Foodgrain Margin Compression:** Foodgrains (Wheat, Rice, Maize) exhibited low solvency rates (25.9% to 36.3%), whereas cash crops (Sugarcane at 88.5% solvency and Chilli at 82.0% solvency) accounted for the majority of positive net farm income.

### Q10: What insights can be derived from the observed seasonal differences?
Agricultural viability requires season-specific management. A cropping strategy that succeeds during monsoon Kharif can become financially unsustainable in summer Zaid unless farmers adopt micro-irrigation and heat-tolerant crops.

### Q11: What conclusions can reasonably be drawn from the data?
Parametric ANOVA and non-parametric Kruskal-Wallis tests confirm that seasonal variations in net profit ($p < 0.001$), disease risk ($p < 0.0001$), and crop-specific foodgrain yields ($p < 0.001$) are statistically significant.

### Q12: How could the findings support better agricultural planning?
By establishing a seasonal advisory protocol: mandating drip irrigation for summer crops, scheduling preventative pest management prior to peak monsoon humidity, and rotating cereal land with nitrogen-fixing pulses during winter.

---

## 5. Statistical Hypothesis Testing

To evaluate whether seasonal variations were statistically significant, formal hypothesis testing was conducted at a significance level of $\alpha = 0.05$.

### 5.1 Hypothesis Formulation
- **Null Hypothesis ($H_0$):** The population means of the performance metric are equal across Kharif, Rabi, and Zaid seasons ($\mu_{\text{Kharif}} = \mu_{\text{Rabi}} = \mu_{\text{Zaid}}$).
- **Alternative Hypothesis ($H_1$):** At least one cropping season has a significantly different population mean.

### 5.2 Test Results

| Performance Metric | Kharif Mean | Rabi Mean | Zaid Mean | ANOVA $F$-Statistic | ANOVA $p$-value | Kruskal-Wallis $H$ | Kruskal $p$-value | Statistical Decision |
|---|---|---|---|---|---|---|---|---|
| **Net Farm Profit (INR)** | ₹1,78,915 | ₹87,689 | -₹24,805 | **34.292** | $1.63 \times 10^{-15}$ | **82.410** | $1.04 \times 10^{-18}$ | **Reject $H_0$ ($p < 0.001$)** |
| **Disease/Pest Risk (%)** | 54.47% | 40.48% | 38.22% | **1049.467** | $< 1.0 \times 10^{-100}$ | **1421.152** | $< 1.0 \times 10^{-100}$ | **Reject $H_0$ ($p < 0.0001$)** |
| **Water Efficiency (t/1000m³)** | 5.89 | 5.19 | 4.41 | **6.948** | $9.68 \times 10^{-4}$ | **17.824** | $1.35 \times 10^{-4}$ | **Reject $H_0$ ($p < 0.001$)** |
| **Water Used (m³)** | 6,102 m³ | 5,847 m³ | 6,420 m³ | 2.467 | $0.085$ | 5.210 | $0.074$ | Fail to Reject $H_0$ |

### 5.3 Within-Crop Foodgrain Yield ANOVA
When evaluating raw yield across all crops combined, Sugarcane (averaging 46.94 t/ha stalk biomass) masks seasonal differences. However, when ANOVA is conducted **within individual foodgrain crops**, seasonal yield decline is statistically significant across all four foodgrains:
- **Rice Yield:** $F = 22.170, p = 4.28 \times 10^{-10}$ (Kharif: 2.71 > Rabi: 2.33 > Zaid: 1.90 t/ha) → **Reject $H_0$**
- **Pulses Yield:** $F = 23.816, p = 1.15 \times 10^{-10}$ (Kharif: 1.04 > Rabi: 0.87 > Zaid: 0.65 t/ha) → **Reject $H_0$**
- **Wheat Yield:** $F = 11.027, p = 1.84 \times 10^{-5}$ (Kharif: 2.26 > Rabi: 2.06 > Zaid: 1.75 t/ha) → **Reject $H_0$**
- **Maize Yield:** $F = 10.684, p = 2.62 \times 10^{-5}$ (Kharif: 2.97 > Rabi: 2.61 > Zaid: 2.30 t/ha) → **Reject $H_0$**

---

## 6. Irrigation and Resource Efficiency Analysis

Evaluating performance by irrigation method demonstrates the impact of micro-irrigation technology:

| Irrigation System | Sample (N) | Water Efficiency (t/1000m³) | Mean Water Used (m³) | Mean Farm Profit (INR) | Mean Profit/Ha (INR) |
|---|---|---|---|---|---|
| **Drip Irrigation** | 915 (22.88%) | **6.27 t/1000m³** | 6,009 m³ | **+INR 2,19,626** | **+INR 25,600/ha** |
| **Sprinkler Irrigation** | 734 (18.35%) | **4.67 t/1000m³** | 5,885 m³ | **+INR 91,121** | **+INR 12,800/ha** |
| **Flood Irrigation** | 1,310 (32.75%) | **3.44 t/1000m³** | 9,812 m³ | **+INR 73,354** | **+INR 8,800/ha** |
| **Rainfed Cultivation** | 1,041 (26.02%) | **7.56 t/1000m³\*** | 3,248 m³ (groundwater) | **+INR 79,050** | **+INR 9,400/ha** |

*\*Rainfed water efficiency reflects crop output relative to supplemental groundwater extraction.*

**Key Takeaways:**
1. Drip irrigation achieves **82.3% higher water productivity** than flood irrigation (6.27 vs 3.44 t/1000m³).
2. Drip-irrigated farms generate nearly **3.0 times higher net profit per hectare** (₹25,600/ha vs ₹8,800/ha).
3. In summer Zaid, flood irrigation resulted in an average loss of -INR 68,400 per farm, compared to positive returns on drip-irrigated plots.

---

## 7. Crop Economics: Foodgrains vs. Commercial Cash Crops

Analyzing financial performance across the 8 crops highlights a structural margin divergence:

| Crop | Observations (N) | Mean Yield (t/ha) | Market Price (INR/t) | Mean Farm Profit (INR) | Solvency Rate (%) |
|---|---|---|---|---|---|
| **Sugarcane** | 305 | 46.94 t/ha | INR 3,500 | **+INR 8,17,188** | **88.5%** |
| **Chilli** | 412 | 1.54 t/ha | INR 1,02,500 | **+INR 7,50,878** | **82.0%** |
| **Cotton** | 508 | 1.23 t/ha | INR 67,500 | **+INR 1,24,547** | **65.4%** |
| **Groundnut** | 424 | 1.32 t/ha | INR 55,500 | **+INR 44,858** | **59.2%** |
| **Pulses** | 496 | 0.92 t/ha | INR 71,000 | **-INR 4,238** | **50.8%** |
| **Maize** | 551 | 2.72 t/ha | INR 21,000 | **-INR 83,978** | **36.3%** |
| **Rice** | 690 | 2.44 t/ha | INR 22,500 | **-INR 1,02,214** | **33.6%** |
| **Wheat** | 614 | 2.11 t/ha | INR 24,000 | **-INR 1,23,398** | **25.9%** |

**Discussion:**  
Foodgrains (Wheat, Rice, Maize) face high input costs (mechanized tillage, synthetic fertilizers, diesel pumping) relative to farmgate selling prices (INR 21,000–24,000/t). Consequently, 63% to 74% of cereal-producing farms operated at a loss. In contrast, Chilli benefits from strong market demand (INR 1,02,500/t), and Sugarcane benefits from high stalk biomass tonnage, sustaining farm profitability.

---

## 8. Actionable Seasonal Planning Matrix

| Cropping Season | Primary Agronomic Risk | Recommended Irrigation Protocol | Recommended Crop Mix | Expected Economic Impact |
|---|---|---|---|---|
| **Kharif (Monsoon)** | High humidity (>71%), waterlogging, elevated pest risk (54.5%) | Subsurface drainage channels + supplemental sprinkler; avoid stagnant ponding | Pest-resistant Rice cultivars, Sugarcane, High-yield Maize, Cotton | Reduces pesticide spray expenditure by 20–25% and protects baseline yields |
| **Rabi (Winter)** | Cold stress, unmonitored flood over-watering, soil nitrogen depletion | Scheduled micro-drip or sprinkler irrigation based on tensiometer readings | Wheat, Nitrogen-fixing Pulses (Gram/Lentil), Mustard, Cash Chilli | Maximizes profit per hectare and restores soil nitrogen balance naturally |
| **Zaid (Summer)** | Extreme heat (>31–39°C), severe evaporation; 64.5% loss rate under flood irrigation | Mandatory drip irrigation with plastic/organic mulching; avoid flood irrigation | Short-duration Pulses (Moong/Urad), Summer Groundnut, Drought-hardy Maize | Prevents water pumping debt traps and lifts summer solvency above 60% |

---

## 9. Limitations and Future Scope

### 9.1 Study Limitations
1. **Aggregated Weather Data:** Weather variables reflect seasonal averages, preventing analysis of discrete acute events (e.g., short-duration flash heatwaves or single-day heavy rainfall).
2. **Seasonal Price Averages:** Market prices represent seasonal realized averages, whereas mandi prices fluctuate weekly based on market arrivals.

### 9.2 Future Scope
1. **Predictive Machine Learning:** Train gradient-boosted regression models (XGBoost/LightGBM) to forecast farm profit margins before sowing based on pre-season weather forecasts.
2. **IoT Soil Probes:** Deploy automated LoRaWAN soil moisture sensors to trigger micro-drip emitters autonomously.
3. **Satellite Remote Sensing (NDVI):** Integrate Sentinel-2 multispectral imagery to track vegetation indices and detect fungal outbreaks prior to visible symptoms.
4. **Multilingual Advisory Mobile App:** Build an offline-first mobile advisory tool delivering personalized crop recommendations in regional Indian languages.

---

## 10. Conclusion and Acknowledgements

This major project demonstrates that agricultural profitability in India is fundamentally governed by seasonal environmental dynamics. By diagnosing the causes of the **Zaid economic deficit**, quantifying the **3.0x profit advantage of drip irrigation**, and establishing **crop-specific yield seasonality through ANOVA testing**, this analysis provides empirical evidence for transitioning from static farming practices to climate-resilient precision agriculture.

### Acknowledgements
I express my gratitude to:
- **All India Council for Technical Education (AICTE)**
- **Edunet Foundation**
- **Vodafone Idea Foundation (VOIS for Tech Program)**
- Faculty and mentors at **Chandigarh University** for their guidance throughout this internship.

---
**Report Prepared By:** Asmi Sharma  
*B.E. Computer Science & Engineering, Chandigarh University*  
*AICTE Student ID: `STU6a65f9036e5721785067779` | Internship ID: `INTERNSHIP_17830691666a4779eecfe8a`*
