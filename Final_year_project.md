# Songket Motif Classification Using Deep Learning

**Automated Cultural Heritage Preservation through Computer Vision**

---

## 📌 Project Overview
**Title:** *Songket Motif Classification Using Deep Learning for Automated Cultural Heritage Preservation*  
**Status:** In Progress (Final Year Project)  

This project focuses on preserving the intricate art of **Songket**, a traditional Malay hand-woven fabric, by digitizing the identification of its motifs. By leveraging **Convolutional Neural Networks (CNNs)** and **Transfer Learning**, this system aims to automate the classification of distinct Songket patterns, creating a bridge between cultural heritage and modern artificial intelligence.

---

## 🧠 Key Technologies
*   **Deep Learning**: Custom CNN Architectures, Transfer Learning (e.g., VGG16, ResNet)
*   **Image Processing**: OpenCV for preprocessing (noise reduction, augmentation)
*   **Languages & Frameworks**: Python, TensorFlow / PyTorch
*   **Tools**: Jupyter Notebook, Google Colab

---

## ❓ Problem Statement
Identifying Songket motifs is a skill typically held by a shrinking number of textile experts and elder weavers. As this generation passes, the knowledge risks being lost. Manual documented catalogs are often incomplete or inaccessible. There is a need for a **digital, automated solution** to:
1.  Archive and classify patterns accurately.
2.  Assist researchers and the public in identifying motifs instantly.
3.  Preserve the cultural significance of each pattern for future generations.

---

## 🎯 Objectives
1.  To curate a dataset of various traditional Songket motifs.
2.  To design and train a Deep Learning model capable of classifying motifs with high accuracy.
3.  To evaluate the model's performance against standard metrics (Accuracy, Precision, Recall).
4.  To develop a prototype interface for users to upload and identify patterns.

---

## ⚙️ Methodology (Draft)
### 1. Data Collection & Preprocessing
*   Gathering high-resolution images of Songket fabrics.
*   Data Augmentation (rotation, scaling, flipping) to increase dataset diversity.
*   Preprocessing: Resizing, Normalization, and Denoising.

### 2. Model Development
*   **Baseline Model**: Training a simple CNN from scratch.
*   **Transfer Learning**: Fine-tuning pre-trained models (like **MobileNetV2** or **ResNet50**) to recognize texture-specific features of woven fabric.

### 3. Training & Evaluation
*   Splitting data into Training (70%), Validation (15%), and Testing (15%) sets.
*   Using **Cross-Entropy Loss** and **Adam Optimizer**.
*   Monitoring **Confusion Matrices** to identify misclassified patterns.

---

## 📅 Current Progress
- [x] Literature Review completed.
- [x] Initial dataset collection in progress.
- [ ] Model architecture design.
- [ ] Training and hyperparameter tuning.

> *This page documents the ongoing progress of my Final Year Project. Updates will be posted as the system evolves.*
