# 🏥 Hospital Emergency Room Insight Hub

An end-to-end interactive Excel dashboard that analyzes Hospital Emergency Room (ER) operations — patient volume, wait times, satisfaction scores, admissions, and department referrals — to help hospital administrators make faster, data-driven decisions.

---

## 📌 Brief Summary

This project transforms raw, messy Emergency Room admission data into a clean, interactive Excel dashboard. It tracks key operational metrics like patient count, average wait time, and satisfaction score, and breaks them down by month, age group, gender, department, and admission status — enabling quick identification of bottlenecks and trends in ER performance.

---

## 🔎 Overview

Emergency Rooms handle high patient volumes under time-sensitive conditions, making operational visibility critical. This dashboard consolidates a full year of ER patient records into a single interactive report, allowing stakeholders to filter by year and month and instantly see how patient load, wait times, and satisfaction are trending — without digging through raw spreadsheets.

---

## ❓ Problem Statement

Hospital administrators often lack a consolidated, easy-to-read view of ER performance. Raw patient-level data is difficult to interpret at a glance, making it hard to answer questions such as:
- How many patients are being treated on time vs. delayed?
- Which departments receive the most referrals?
- How do wait times and satisfaction scores trend day to day?
- Which age groups and demographics use the ER the most?

This project addresses that gap by building a dynamic dashboard that answers these questions in real time.

---

## 🗂️ Dataset

- **File:** `Hospital Emergency Room Data.csv`
- **Records:** ~9,200 patient entries
- **Fields include:**
  - Patient ID, Admission Date, First/Last Name (anonymized)
  - Gender, Age, Race
  - Department Referral
  - Admission Flag (Admitted / Not Admitted)
  - Patient Satisfaction Score
  - Patient Wait Time (minutes)

*Note: Dataset used for educational/portfolio purposes only.*

---

## 🛠️ Tools and Technologies

- **Microsoft Excel** — Data cleaning, Pivot Tables, Pivot Charts, Dashboard design
- **Power Query** — Data transformation and cleaning
- **DAX / Excel Formulas** — KPI calculations
- **Slicers & Timelines** — Interactive filtering (Year, Month)
- **Data Visualization** — Area charts, Donut charts, Pie charts, Bar charts, Sparklines

---

## ⚙️ Methods

1. **Data Cleaning:** Removed duplicate columns, handled blank/null satisfaction scores, standardized date formats using Power Query.
2. **Data Modeling:** Structured cleaned data into an Excel Table and built Pivot Tables for each KPI.
3. **KPI Calculation:** Computed total patients, average wait time, and average satisfaction score using aggregate formulas.
4. **Visualization:** Designed area charts to show daily patient trends and wait-time patterns, plus donut/pie charts for gender split and on-time vs. delayed treatment.
5. **Interactivity:** Added year and month slicers/buttons so users can filter the entire dashboard dynamically.
6. **Design:** Applied a consistent color theme, custom icons, and a clean single-page layout for readability.

---

## 💡 Key Insights

- Nearly an even split between **Admitted (49.55%)** and **Not Admitted (50.45%)** patients.
- **43% of patients** experienced a delay in treatment, while 57% were attended on time.
- **General Practice** and **Orthopedics** receive the highest volume of department referrals.
- Patient gender distribution is fairly balanced (479 Female vs. 456 Male).
- Daily patient wait times fluctuate between roughly 31–39 minutes, with visible spikes on specific days.
- Patient satisfaction scores show day-to-day variability, useful for correlating with high-volume or high-delay days.

---

## 📊 Dashboard

The dashboard consolidates all metrics into a single interactive view:

- **KPI Cards:** Total Patients, Average Wait Time, Patient Satisfaction Score
- **Admission Status Breakdown:** Admitted vs. Not Admitted
- **On-Time vs. Delayed Treatment:** Donut chart
- **Gender Distribution:** Donut chart
- **Patients by Age Group:** Bar chart
- **Patients by Department Referral:** Horizontal bar chart
- **Month & Year Filters:** For dynamic, on-demand analysis

<img width="959" height="539" alt="Dashboard" src="https://github.com/user-attachments/assets/d0245f21-cc7e-405d-a4a9-1545e06eb4be" />
<img width="959" height="539" alt="Daily ER No  Of Patient" src="https://github.com/user-attachments/assets/11d3157a-4cb5-47cd-80f8-1dd869f53ee6" />
<img width="959" height="539" alt="Average Wait Time" src="https://github.com/user-attachments/assets/b8a485da-eb8a-498a-89f0-6d1da79fbd01" />
<img width="959" height="539" alt="Satisfaction Score Trend" src="https://github.com/user-attachments/assets/db2c7dd5-00b6-4706-966d-a2b32bcd34a9" />

---

## ✅ Results and Conclusion

The final dashboard provides a single-page, decision-ready view of ER operations that would otherwise require manually parsing thousands of rows of raw data. It highlights operational pain points — such as delayed treatment rates and peak patient-load days — that hospital management can act on to improve patient flow and satisfaction.

---

## 🚀 Future Work

- Integrate real-time data using Power BI or a live database connection
- Add predictive analytics (e.g., forecasting peak patient hours)
- Build a mobile-friendly version of the dashboard
- Expand analysis to include staff-to-patient ratio and resource allocation

---

## 👤 Author

**Sanika Shinde**
Data Analytics & ML Enthusiast | Python, SQL, Excel, Power BI, Tableau
📧 [sanikadshinde264@example.com] | 🔗 [sanikadshinde264] | 💻 [sanikadshinde264]
