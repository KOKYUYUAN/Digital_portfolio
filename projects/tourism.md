# Tourism Anomaly Detection
## Comparative Study of Unsupervised Machine Learning Models

## 🔍 Project Focus
This project involves a comparative study of unsupervised machine learning models to detect abnormal spikes or drops in tourism arrival data. Identifying these anomalies helps in understanding external factors (pandemics, economic shifts) affecting tourism.

## 🧠 Models Used
1. **Isolation Forest**
   - Efficient for high-dimensional data.
   - explicitly isolates anomalies rather than profiling normal points.
2. **DBSCAN (Density-Based Spatial Clustering of Applications with Noise)**
   - Groups together points that are closely packed.
   - Marks points as outliers that lie alone in low-density regions.
3. **K-Means Clustering**
   - Partitions data into K clusters.
   - Anomalies are identified as points far from their cluster centroids.

## 📊 Results
- **Isolation Forest** demonstrated the best robustness, particularly in detecting sparse anomalies in the dataset.
- **DBSCAN** was effective for spatial clusters but sensitive to parameter tuning (`eps` and `minPts`).

## 🛠 Tools
- Python (Scikit-Learn, Pandas, NumPy)
- Matplotlib / Seaborn for visualization
