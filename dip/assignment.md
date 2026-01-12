# Smart Image Processing: Night Landscape Enhancement

## Project Overview
**Project Name**: Smart Image Processing  
**Contribution**: Night Landscape Enhancement Module

This portfolio documents my specific contribution to the "Smart Image Processing" group project. My role was to develop a robust image enhancement pipeline capable of restoring visibility in low-light night scenes without introducing significant noise, a common challenge in digital photography.

---

## The Challenge
Night photography presents a trilemma of constraints:
1.  **Low Visibility**: Details are hidden in deep shadows.
2.  **Noise Sensitivity**: Simply brightening the image (Global Gain) amplifies sensor noise.
3.  **Contrast Balance**: Linear contrast stretching often over-saturates bright light sources (street lamps) while failing to lift shadows.

## The Solution
I implemented a **multi-stage enhancement pipeline** using fundamental computer vision techniques. The pipeline is designed to treat noise, luminance, and texture independently to achieve a balanced result.

### Pipeline Architecture
1.  **Noise Reduction**: 3x3 Median Filter
2.  **Luminance Extraction**: LAB Color Space Conversion
3.  **Adaptive Contrast**: CLAHE (Contrast Limited Adaptive Histogram Equalization)
4.  **Detail Recovery**: Unsharp Masking

---

## Implementation Details

### 1. Removing Noise (Median Filter)
Before any enhancement, we must clean the signal. I chose a **Median Filter** because it is excellent at removing "salt-and-pepper" noise (random bright pixels) while preserving edge boundaries, unlike a Gaussian blur which smudges edges.

```python
# Code Snippet: Noise Reduction
denoised_bgr = cv2.medianBlur(img_bgr, 3)
```

### 2. Enhancing Contrast (LAB + CLAHE)
Standard RGB histogram equalization distorts colors. My approach converts the image to the **LAB color space**, where "L" stands for Lightness. This allows me to enhance the brightness structure without altering the color information ("A" and "B" channels).

I applied **CLAHE** with a clip limit of 2.0. This limits the contrast amplification in flat areas (like the night sky), preventing the "grainy sky" effect.

```python
# Code Snippet: Luminance Enhancement
lab = cv2.cvtColor(denoised_bgr, cv2.COLOR_BGR2LAB)
l, a, b = cv2.split(lab)

# Apply CLAHE to L channel
clahe = cv2.createCLAHE(clipLimit=2.0, tileGridSize=(8,8))
l_enhanced = clahe.apply(l)
```

### 3. Recovering Details (Unsharp Masking)
After CLAHE, the image gains dynamic range but may look slightly soft due to the initial denoising. I implemented **Unsharp Masking** to crispen the details. This technique works by creating a blurred "mask" of the image and subtracting it from the original to isolate high-frequency edges, which are then added back to the image.

```python
# Code Snippet: Unsharp Masking
l_float = l_enhanced.astype(np.float32) / 255.0
gaussian = cv2.GaussianBlur(l_float, (5, 5), sigmaX=1.0)
l_sharpened = l_float + 1.0 * (l_float - gaussian)
```

---

## Results Verification

The script `night_enhancement.py` demonstrates this pipeline. Below are the results comparing the original low-light input against the enhanced output.

*   **Noise**: Significantly reduced in the dark sky regions.
*   **Visibility**: Textures in the buildings and trees are now visible.
*   **Color**: Colors remain natural and are not washed out.

### Deliverables
*   **`night_enhancement.py`**: A standalone Python script containing the complete, reusable enhancement function `enhance_night_landscape`.

### Output after enhancement

#### 1. Original Low-Light Input
![original image](/dip/original_images.png)
*Figure 1: The raw input image captured in low-light conditions. Note the limited visibility in the shadowed areas and the presence of sensor noise in the dark sky.*

#### 2. Histogram Analysis
![RGB Histogram](/dip/RGB_Histogram_asm.png)
*Figure 2: Histogram Analysis. This plot visualizes the intensity distribution. The global equalization tends to stretch noise, whereas our CLAHE approach maintains a more natural distribution while improving local contrast.*

#### 3. Final Enhanced Result
![Enhanced image](/dip/Enhancement_output.png)
*Figure 3: The final output after the full processing pipeline. The sky noise is significantly reduced via the median filter, while the Unsharp Masking has restored clarity to the building edges and trees, resulting in a balanced and visually pleasing night scene.*    