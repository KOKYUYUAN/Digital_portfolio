# Smart Image Processing for Night Landscape Enhancement

## Project Overview
This project focuses on enhancing low-light night landscape images using digital image processing (DIP) techniques. Images captured at night often suffer from low brightness, poor contrast, and noise due to insufficient lighting conditions. The objective of this project is to improve image visibility and overall visual quality while preserving important details and natural color appearance.

---

## Problem Statement
Night landscape images commonly exhibit the following issues:
- Low illumination and poor contrast
- Presence of noise caused by high ISO settings
- Loss of details in dark regions
- Reduced visual quality and clarity

These limitations reduce both the aesthetic value and practical usability of night-time images.

---

## Objectives
- To enhance the brightness and contrast of night landscape images  
- To reduce noise while preserving important image details  
- To apply fundamental digital image processing techniques in a structured pipeline  
- To evaluate the effectiveness of enhancement methods through visual comparison  

---

## Methodology
The image enhancement process consists of the following stages:

### 1. Image Preprocessing
- Image loading and normalization  
- Conversion between RGB and grayscale (when required)  

### 2. Contrast Enhancement
- Histogram Equalization  
- Contrast Limited Adaptive Histogram Equalization (CLAHE)  

### 3. Noise Reduction
- Median filtering to remove impulse noise  
- Gaussian filtering to smooth image variations  

### 4. Image Sharpening
- Unsharp masking  
- Spatial filtering to enhance edges and fine details  

### 5. Color Enhancement (RGB Images)
- Channel-wise enhancement  
- Brightness and saturation adjustment  

---

## Tools and Technologies
- Python  
- OpenCV  
- NumPy  
- Matplotlib  

---

## Results and Discussion
The enhanced images show significant improvement in brightness and contrast compared to the original night images. Dark regions become more visible, and important structural details are better preserved. Noise reduction techniques help suppress unwanted artifacts without excessive blurring. Overall, the enhancement pipeline produces visually clearer images suitable for visualization and further image analysis tasks.

---

## Learning Outcomes
- Applied core digital image processing techniques to real-world images  
- Gained understanding of contrast enhancement and noise reduction trade-offs  
- Developed a systematic image enhancement pipeline  
- Improved skills in Python-based image processing using OpenCV  

---

## Future Improvements
- Incorporation of adaptive enhancement techniques based on image content  
- Quantitative evaluation using image quality metrics such as PSNR and SSIM  
- Comparison with learning-based low-light image enhancement methods  
- Optimization for real-time processing applications  

---
