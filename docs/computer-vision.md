## Unit 1 


### Introduction  
- **Image Processing**: Image in → Image out.  
- **Computer Vision**: Image/Video in → Interpretation out.  
- **Objective**: Enable computers to see and interpret objects like humans.  

### Human vs. Computer Vision  
- **Humans**: Quick recognition, intelligent decision-making.  
- **Computers**: Require complex processing, pattern recognition, and AI.  

### Features of Human Vision  
- **Stereo Vision**: Two eyes perceive depth using different distances.  
- **Texture & Color**: Identifies objects based on patterns and colors.  
- **Object Recognition**: Recognizes objects despite illumination, viewpoint, or expression changes.  
- **Context Awareness**: Infers key information from a scene.  

### Limitations of Human Vision  
- **Memory Constraints**: Limited ability to recall vast image data.  
- **Restricted Spectrum**: Limited to visible light.  
- **Optical Illusions**: Misinterpretations of size, shape, and perspective.  

### Computer Vision vs. Image Processing  
- **Image Processing**: Low-level operations (compression, restoration, enhancement).  
- **Computer Vision**: High-level understanding (object recognition, scene interpretation).  

### Applications of Computer Vision  
- **Self-driving Cars**: Navigation and obstacle detection.  
- **Facial Recognition**: Identity verification.  
- **Augmented Reality**: Merging virtual objects with reality.  
- **Medical Imaging**: Detecting anomalies in X-rays and MRIs.  
- **Manufacturing**: Detecting defective products.  
- **Retail & Banking**: OCR, fraud detection, and identity verification.

## **📜 Levels of processing for computer Vision**  

## **Computer Vision Processing Levels**  

### **Low-Level Processing**  
- **Enhances image quality** and extracts **basic features** like **edges, corners, textures**.  
- Works on **raw pixel data** without understanding objects.  
- **Steps for low level processing**:  
  - **Image Preprocessing**: Contrast enhancement, noise reduction.  
  - **Feature Extraction**: **Edge detection** (Canny, Sobel filters).  
  - **Segmentation**: Divides an image into meaningful parts.  
  - **Super-Resolution**: Converts **low-resolution** to **high-resolution** images.  

!!! Important
    Low-level processing extracts fundamental features such as edges, lines, corners, and salient points from an image. These features serve as the building blocks for higher-level processing, enabling pattern recognition, object detection, and scene understanding.

How Low-Level Processing Helps:

- ✅ Feature Extraction: Identifies edges, textures, and key points in an image.
- ✅ Segmentation: Divides images into meaningful regions and shapes.
- ✅ Noise Reduction: Enhances image clarity by removing unwanted distortions.
- ✅ Super-Resolution: Generates higher-resolution images from fewer pixels.
- ✅ Depth Perception: Uses stereo vision (left & right cameras) to create disparity maps for estimating depth.

---

### **Mid-Level Processing**  
- Uses **patterns and object features** for recognition.  
- Works on **segmented objects** to **classify, track, and detect motion**.  
- **Examples**:  
  - **Object Detection**: Recognizes and labels objects.  
  - **Image Classification**: Assigns categories to images.  
  - **Image Matching & Stitching**: Used in **panoramas**.  
  - **Object Tracking**: **Predicts movement** using **optical flow**.  
  - **Clustering (K-Means)**: Segments objects into groups.  


---

### **High-Level Processing**  
- Involves **complex scene understanding** and **AI-based interpretations**.  
- Integrates **low-level features** for **semantic meaning**.  
- **Examples**:  
  - **Semantic Segmentation**: Classifies pixels into categories (e.g., road, car, tree).  
  - **Instance Segmentation**: Differentiates between multiple **objects of the same type**.  
  - **Panoptic Segmentation**: Combines **semantic + instance segmentation**.  
  - **Deep Learning for Segmentation**: Uses **CNNs & RNNs** for precise object recognition.  
  - **Theme Understanding**: Identifies scene context (e.g., **marketplace vs. garden**).  
  - **Visual Question Answering (VQA)**: AI interprets **images + text-based queries**.  

---

### **Applications of Computer Vision**  
- **Self-Driving Cars**: Detects lanes, pedestrians, and traffic signs.  
- **Facial Recognition**: Matches faces for identity verification.  
- **Medical Imaging**: Detects diseases in X-rays & MRIs.  
- **Manufacturing**: Identifies **defective products**.  
- **Retail & Banking**: Uses **OCR, fraud detection, and customer authentication**.


### Deep Learning for Image Segmentation
🔹 Convolutional Neural Networks (CNNs) play a crucial role in image segmentation, enabling computers to understand objects at a pixel level.

How Deep Learning Works for Image Segmentation:

- 1️⃣ Feature Extraction with CNNs: CNNs process images and detect key features for segmentation.
- 2️⃣ Object Localization with Region Proposal Network (RPN): Identifies potential object locations and generates bounding boxes.
- 3️⃣ Refining Features from the Region of Interest (ROI): CNN extracts features within the bounding box.
- 4️⃣ Instance Segmentation using Fully Convolutional Networks (FCN): The extracted features are passed into an FCN, which learns to segment the object from its surroundings.
- 5️⃣ Binary Mask Output: The FCN produces a binary mask, highlighting which pixels belong to the object and which do not.


🚀 From raw images to object masks, deep learning models enhance precision in image segmentation by combining feature extraction, region detection, and pixel-level classification! 🚀

### **Difference Between Low-Level and High-Level Features**

|**Feature Type**|**Low-Level Features** 🖼️|**High-Level Features** 🧠|
|---|---|---|
|**Content**|Deals with **raw pixel data**, detecting **edges, textures, and simple patterns**.|Focuses on **object understanding, classification, and relationships**.|
|**Sensitivity**|More **sensitive to noise**, lighting, and orientation changes.|More **robust**, can interpret **complex scenes** despite variations.|
|**Scale**|Extracted from **local regions** (e.g., edges in a small part of the image).|**Global features**—considers the entire image for **context**.|
|**Resources**|Requires **fewer system resources**, as it focuses on simple features.|Uses **advanced AI models**, requiring **higher computation power**.|
|**Use Cases**|Applied in **image segmentation, feature matching, and object detection**.|Used in **image classification, object recognition, and scene understanding**.|

🔍 **Low-level features** lay the foundation by detecting **shapes and patterns**, while **high-level features** bring **context and meaning** to an image. Together, they power modern **computer vision applications**! 🚀



### Edge Detection

### **Sharpening Spatial Filters**  
🖼️ **Purpose**:  
- Removes **blurring** and **enhances edges** in images.  
- Highlights **intensity transitions** using **spatial differentiation**.  
- **Image gradients** measure the **rate of change in pixel intensity**, crucial for detecting edges.  

---

### **Image Gradients**  
📌 **Fundamental for computer vision & image processing**  
🔹 Used for:  
✅ **Edge detection**  
✅ **Finding object contours**  
✅ **Outlining shapes**  

🔹 Computes:  
- **Gradient Magnitude** (Strength of the edge)  
- **Gradient Orientation** (Direction of the edge)  

✨ **Popular techniques built on image gradients**:  
- **Histogram of Oriented Gradients (HOG)**  
- **Scale-Invariant Feature Transform (SIFT)**  

---

### **Edge Detection Using Image Gradients**  
💡 **Gradient computation is a key pre-processing step** for edge detection.  

#### **Computing Image Gradients**  
The **gradient of an image** is calculated using finite differences:  
- **Gradient along the vertical direction ($G_y$):**  
  $$ G_y = f(r+1, c) - f(r-1, c) $$  
- **Gradient along the horizontal direction ($G_x$):**  
  $$ G_x = f(r, c+1) - f(r, c-1) $$  

📌 **Gradient masks (filters) for edge detection:**  

| **Filter** | **Mask** |
|------------|-------------|
| **Vertical ($G_y$) Sobel Filter** | \(\begin{bmatrix} -1 & 0 & 1 \end{bmatrix}\) |
| **Horizontal ($G_x$) Sobel Filter** | \(\begin{bmatrix} -1 \\ 0 \\ 1 \end{bmatrix}\) |


### **Image Gradient & Gradient Vector**  
🖼️ **Purpose**:  
- Computes **rate of change** in pixel intensity.  
- **Gradient Magnitude ($M$)** measures the **strength** of intensity change.  
- **Gradient Orientation ($\alpha$)** determines **direction** of the edge.  
- The **matrix size** for magnitude and angle is the **same** as the original image.  

🔹 **Mathematical Representation:**  
- **Gradient Angle ($\alpha$):**  
  $$ \alpha = \tan^{-1} \left(\frac{g_y}{g_x} \right) $$  
- **Gradient Magnitude ($M$):**  
  $$ M = \sqrt{g_x^2 + g_y^2} $$  

📌 **Where:**  
- $g_x$ = Gradient in the **horizontal direction**.  
- $g_y$ = Gradient in the **vertical direction**.  
- $\alpha$ = Angle between the **vertical axis** and the **edge direction**.  

---

### **Sobel Filter for Edge Detection**  
💡 **Sobel filters** compute **image gradients** using convolution masks.  

#### **Gradient Computation with Sobel Operator**  
🔹 **Sobel Operator for Horizontal ($G_x$) and Vertical ($G_y$) Gradients:**  

| **Gradient Direction** | **Filter Mask (Kernel)** |
|----------------|-----------------------------------|
| **$G_x$ (Horizontal Gradient)** | $\begin{bmatrix} -1 & 0 & 1 \\ -2 & 0 & 2 \\ -1 & 0 & 1 \end{bmatrix}$ |
| **$G_y$ (Vertical Gradient)** | $\begin{bmatrix} -1 & -2 & -1 \\ 0 & 0 & 0 \\ 1 & 2 & 1 \end{bmatrix}$ |

🔹 **Steps to Compute Edge Strength:**  
1️⃣ Convolve the **image** with **$G_x$** to compute **horizontal changes**.  
2️⃣ Convolve the **image** with **$G_y$** to compute **vertical changes**.  
3️⃣ Compute **gradient magnitude** and **angle** using:  
   $$ M = \sqrt{G_x^2 + G_y^2} $$  
   $$ \alpha = \tan^{-1} \left(\frac{G_y}{G_x} \right) $$  

📌 **Why Sobel Filters?**  
✅ Enhances **edges** by detecting **gradients** in both directions.  
✅ **Smooths noise** while emphasizing high-frequency intensity changes.  
✅ Used in **edge detection algorithms** like **Canny Edge Detector**.  

### **Gaussian Filter for Image Smoothing**  

🔹 The **Gaussian filter** is a **smoothing filter** that reduces **noise and detail** in an image.  
🔹 It applies a **Gaussian function** to weight pixels, giving higher importance to the center pixel and gradually reducing weights outward.  

---

### **Mathematical Representation**  
The **Gaussian function** for a 2D image is:  
$$ G_\sigma(x, y) = \frac{1}{2\pi\sigma^2} e^{-\frac{x^2 + y^2}{2\sigma^2}} $$
where:  
- \( \sigma \) = Standard deviation (controls blurring strength)  
- \( x, y \) = Pixel coordinates  

📌 **Higher \( \sigma \) → More blur**  
📌 **Lower \( \sigma \) → Less blur, preserves more details**  

---

### **Gaussian Filter Kernels**  

| **Filter Size** | **Kernel Matrix (Normalized)** |
|---------------|----------------------------|
| **3×3 (σ = 1)** | \( \frac{1}{16} \begin{bmatrix} 1 & 2 & 1 \\ 2 & 4 & 2 \\ 1 & 2 & 1 \end{bmatrix} \) |
| **5×5 (σ = 1)** | \( \frac{1}{330} \begin{bmatrix} 1 & 4 & 7 & 4 & 1 \\ 4 & 20 & 33 & 20 & 4 \\ 7 & 33 & 54 & 33 & 7 \\ 4 & 20 & 33 & 20 & 4 \\ 1 & 4 & 7 & 4 & 1 \end{bmatrix} \) |
| **5×5 (σ = 2)** | \( \frac{1}{34} \begin{bmatrix} 1 & 1 & 1 & 1 & 1 \\ 1 & 2 & 2 & 2 & 1 \\ 1 & 2 & 2 & 2 & 1 \\ 1 & 2 & 2 & 2 & 1 \\ 1 & 1 & 1 & 1 & 1 \end{bmatrix} \) |

📌 **Larger filter size → More blur & smoothing**  
📌 **Smaller filter size → Preserves more details**  

---

### **Laplacian Filter for Edge Detection**  

🔹 The **Laplacian filter** is a **second-order derivative filter** used for **edge detection**.  
🔹 It highlights regions of **rapid intensity change** by computing the **second derivative** of an image.  

#### **Mathematical Representation**  
The Laplacian operator is given by:  

\[ \nabla^2 f = \frac{\partial^2 f}{\partial x^2} + \frac{\partial^2 f}{\partial y^2}\]  

where \( f(x, y) \) is the image intensity at a given point.

---

### **Laplacian Filter Kernels**  

| **Filter Type** | **Kernel Matrix** |
|----------------|------------------|
| **4-Neighbor Laplacian** | \( \begin{bmatrix} 0 & -1 & 0 \\ -1 & 4 & -1 \\ 0 & -1 & 0 \end{bmatrix} \) |
| **8-Neighbor Laplacian** | \( \begin{bmatrix} -1 & -1 & -1 \\ -1 & 8 & -1 \\ -1 & -1 & -1 \end{bmatrix} \) |

🔹 The **4-neighbor Laplacian** considers only direct neighbors, while the **8-neighbor Laplacian** accounts for diagonal edges as well.

---

## Unit 2

### **Image Features in Computer Vision**  

🔹 **Image features** are key elements that help in **object recognition, segmentation, and analysis**.  

#### **Types of Image Features**  
✅ **Edges** – Identifies boundaries between objects.  
✅ **Color** – Extracts information based on pixel intensity.  
✅ **Texture** – Analyzes surface patterns and structures.  
✅ **Object Boundaries** – Detects outlines and contours of objects.  
✅ **Object Shape** – Defines geometric properties of an object.  

🔹 **Good Features Should Be:**  
- ✅ **Unique & Distinctive** – Helps differentiate between objects.  
- ✅ **Non-redundant** – Avoids duplicate or unnecessary information.  
- ✅ **Robust** – Works well under noise and illumination changes.  
- ✅ **Global Representation** – Captures scene-wide characteristics, not just local details.  

---

### **Gradient-Based Features**  
Gradient-based techniques detect **changes in pixel intensity**, which highlight object edges and textures.  

🔹 **Popular Techniques:**  
- **DoG (Difference of Gaussian)**  
- **LoG (Laplacian of Gaussian)**  
- **HoG (Histogram of Oriented Gradients)**  
- **SIFT (Scale-Invariant Feature Transform)**  
- **SURF (Speeded-Up Robust Features)**  

📌 **Advantages:**  
✅ **Invariant to small shifts & rotations** – Ensures stability under transformations.  
✅ **Localized histograms** – Offers better spatial information compared to global histograms.  
✅ **Contrast normalization** – Reduces the impact of variable illumination.  

---

### **Difference of Gaussian (DoG)**  
📌 **A feature enhancement technique used for blob detection & SIFT descriptors**.  

#### **How DoG Works:**  
1️⃣ **Apply Gaussian Blur** – Smoothens the image using **two Gaussian filters** with different sigma values (**σ₁ & σ₂**).  
2️⃣ **Subtract the Two Blurred Images** – Enhances regions with specific frequency details.  
3️⃣ **Suppress High-Frequency Details** – Reduces random noise but preserves important structures.  

🔹 **Mathematical Representation:**  
$$ DoG = G_{\sigma_1} * I - G_{\sigma_2} * I $$

where:  
- \( I \) = Original grayscale image  
- \( G_{\sigma_1}, G_{\sigma_2} \) = Gaussian filters with different standard deviations  

📌 **Pros & Cons:**  
✅ **Reduces noise while preserving edges**  
✅ **Enhances spatial features**  
❌ **Reduces overall image contrast**  


### **Laplacian of Gaussian (LoG) – Edge Detection & Feature Enhancement**  

🔹 **Laplacian of Gaussian (LoG)** is a feature detection technique that combines:  
1️⃣ **Gaussian Smoothing** – Reduces noise in the image.  
2️⃣ **Laplacian Operator** – Detects **edges and blobs** by identifying intensity changes.  

#### **How LoG Works:**  
1. **Apply a Gaussian filter** to smooth the image and suppress noise.  
2. **Compute the second derivative (Laplacian)** to highlight regions with rapid intensity changes (edges).  
3. **Detect zero-crossings** in the Laplacian response to identify edges.  

#### **Mathematical Representation:**  
The **LoG function** is given by:  
$$ LoG(x, y) = \nabla^2 G_{\sigma} (x, y) * I(x, y) $$  
where:  
- \( G_{\sigma} (x, y) \) = **Gaussian filter** with standard deviation \( \sigma \)  
- \( \nabla^2 \) = **Laplacian operator** (second derivative)  
- \( I(x, y) \) = **Input image**  

#### **Key Features of LoG:**  
✅ **Combines smoothing & edge detection** in one step.  
✅ **Detects both fine and coarse details** depending on \( \sigma \).  
✅ **Useful for blob detection** in feature descriptors like **SIFT**.  
❌ **Sensitive to noise** – Requires pre-smoothing for better results.  

🚀 **LoG is commonly used in edge detection pipelines like the Marr-Hildreth operator and as a preprocessing step in Computer Vision applications!** 🔍


### **Histogram of Oriented Gradients (HoG) – Feature Descriptor for Object Detection**  

🔹 **Histogram of Oriented Gradients (HoG)** is a feature descriptor used for **object detection** and **image classification** by analyzing **gradient orientations** in localized regions of an image.  


### **Step-by-Step HoG Computation**  

✅ **Step 1: Resize Image**  
- Resize the image to an **integer multiple of 8** (nearest to the original size).  
- Ensures uniform cell division and efficient computation.  

✅ **Step 2: Divide Image into Cells**  
- Split the image into **small patches of equal size** (e.g., **8×8 pixels per cell**).  
- Each cell will have its own **gradient histogram**.  

✅ **Step 3: Compute Gradients**  
- Calculate the **gradient magnitude** and **orientation** using **Sobel filters**:  
  \[
  M = \sqrt{G_x^2 + G_y^2}, \quad \theta = \tan^{-1} \left(\frac{G_y}{G_x} \right)
  \]  
  where \( G_x, G_y \) are gradients along horizontal and vertical directions.  

✅ **Step 4: Compute Gradient Histograms (Per Cell)**  
- For **each 8×8 cell**, create a **histogram of gradients** (e.g., 9 bins for 0°-180°).  
- Assign gradient magnitudes to their corresponding **orientation bins**.  

✅ **Step 5: Construct Feature Vector**  
- Normalize the histograms **across neighboring blocks** (e.g., **2×2 cells per block**) for better illumination invariance.  
- Flatten the computed HoG features into a **single feature vector** for classification.  

✅ **Step 6: Visualize HoG**  
- HoG features are often **visualized as a grid of arrows**, where the **length and direction** represent gradient strength and orientation.  

✅ **Step 7: Classify Images**  
- Use machine learning models (**SVM, Deep Learning**) to classify objects using the extracted **HoG feature vector**.  


#### **Mathematical Representation:**  
- **Gradient Magnitude ($M$):**  
$$   M = \sqrt{G_x^2 + G_y^2} $$ 

- **Gradient Orientation ($\theta$):**  
$$   \theta = \tan^{-1} \left(\frac{G_y}{G_x} \right) $$   
where:  
- \( G_x, G_y \) = Gradients in horizontal & vertical directions.  
- \( M \) = Strength of edge response.  
- \( \theta \) = Edge direction (0°–180° or 0°–360° bins).  

#### **Key Features of HoG:**  
✅ **Invariance to Illumination & Shadows** – Normalization removes intensity variations.  
✅ **Captures Local Shape Information** – Focuses on **edges and textures** rather than pixel intensity.  
✅ **Robust to Small Translations & Rotations** – Uses **histograms** instead of raw gradients.  
✅ **Widely Used in Object Detection** – Forms the basis of **Dalal-Triggs pedestrian detection** and is used in **SVM-based image recognition**.  
❌ **Computationally Expensive** – Requires **dense gradient computations** across the entire image.  

🚀 **HoG is widely used in Human & Object Detection (e.g., Pedestrian Detection in self-driving cars) and Machine Learning-based Image Classification!** 🔍



### **Feature Descriptors in Computer Vision**  

🔹 **Feature descriptors** help identify **key points, edges, and corners** in an image.  
🔹 These descriptors are used for **object detection, image matching, and recognition**.  

---

### **Types of Feature Descriptors**  

#### **1. Global Descriptors 🌍**  
- Represent the **entire image**.  
- Examples:  
  ✅ **Histogram of Oriented Gradients (HoG)**  
  ✅ **Difference of Gaussian (DoG)**  
  ✅ **Histogram of Optical Flow (HOF)**  
- **Limitations**: Struggle with **occlusions and profile variations** since they analyze the **whole image**.  

#### **2. Local Descriptors 🔍**  
- Describe **small patches** within an image.  
- More **accurate & robust** for **object detection, matching, and occlusion handling**.  
- Examples:  
  ✅ **SIFT (Scale-Invariant Feature Transform)**  
  ✅ **SURF (Speeded-Up Robust Features)**  
  ✅ **LBP (Local Binary Pattern)**  
  ✅ **BRISK (Binary Robust Invariant Scalable Keypoints)**  
  ✅ **MSER (Maximally Stable Extremal Regions)**  
  ✅ **FREAK (Fast Retina Keypoint)**  

📌 **Local descriptors outperform global ones in real-world applications like facial recognition and object tracking!** 🚀  

---

### **How to Define an Interest Point?**  

🔹 **Interest points** are key locations (e.g., edges, corners) where **features can be extracted**.  

✅ **Repeatability**:  
- A feature should be detected **consistently across multiple images**, despite **geometric & photometric transformations**.  

✅ **Saliency**:  
- Features should be **distinct and unique** to avoid mismatches.  

✅ **Compactness**:  
- Fewer features than the number of image pixels should **effectively represent the image**.  

✅ **Efficiency**:  
- **Fast computation** is essential for **real-time applications** like tracking & detection.  

✅ **Locality**:  
- Features should **occupy a small area** and remain **robust to clutter & occlusion**.  

✅ **Covariance**:  
- Features should be **detectable despite geometric & photometric variations** (e.g., rotation, lighting changes).  

### **SIFT Algorithm – Scale-Invariant Feature Transform**  

SIFT is a **feature detection** algorithm that extracts **scale and rotation-invariant keypoints** for object recognition, tracking, and image matching.  

---

## **Step 1: Construct a Scale Space**  

📌 **Why?**  
- Real-world objects appear different at **various distances (scales)**.  
- A feature must be **detectable at multiple scales** to be useful in recognition.  

🔹 **How it Works:**  
1. The **original image** is repeatedly **blurred using a Gaussian filter**.  
2. **Octaves** are created by **downsampling** the image (reducing its size by half).  
3. Within each octave, multiple blurred images are generated with increasing **sigma values (σ)**.  
4. This **scale-space representation** ensures features are **scale-independent**.  

🔹 **Mathematical Formulation (Gaussian Blur):**  
\[
G(x, y, \sigma) = \frac{1}{2\pi\sigma^2} e^{-\frac{x^2 + y^2}{2\sigma^2}}
\]  
where:  
- \( G(x, y, \sigma) \) = Gaussian function.  
- \( \sigma \) = Standard deviation (controls blurring).  
- \( x, y \) = Pixel coordinates.  

🔹 **Example:**  
- **Octave 1**: Original image + multiple blurred versions.  
- **Octave 2**: Image resized to **half** and blurred again.  
- **Repeats** for multiple octaves (typically **4-5** octaves).  

📌 **Outcome:**  
- A collection of images at **different scales and resolutions**.  

---

## **Step 2: Compute Difference of Gaussian (DoG)**  

📌 **Why?**  
- Identifies keypoints by enhancing **edges and texture features**.  
- The **Gaussian Blur removes noise**, and the **DoG highlights changes in intensity**.  

🔹 **How it Works:**  
1. **Compute DoG images** by subtracting two consecutive Gaussian-blurred images:  
   \[
   DoG(x, y, \sigma) = G(x, y, k\sigma) - G(x, y, \sigma)
   \]  
   where \( k \) is a constant (typically \( k = \sqrt{2} \)).  
2. This process is repeated across all octaves.  
3. The resulting **DoG images** enhance edges, blobs, and texture details.  

📌 **Outcome:**  
- A set of **DoG images** that highlight regions of interest (potential keypoints).  

---

## **Step 3: Keypoint Localization**  

📌 **Why?**  
- Identify **stable keypoints** while removing weak or false detections.  

🔹 **How it Works:**  
1. Each pixel in the **DoG images** is compared with **26 neighboring pixels** (8 in the same image, 9 in the scale above, and 9 in the scale below).  
2. If a pixel is the **local maximum or minimum**, it is marked as a **potential keypoint**.  
3. **Low-contrast keypoints** are discarded using a **threshold (typically 0.03)**.  
4. **Edges are removed** using the Hessian matrix determinant to avoid unstable keypoints.  

🔹 **Mathematical Filtering (Hessian Matrix):**  
\[
H = \begin{bmatrix} I_{xx} & I_{xy} \\ I_{xy} & I_{yy} \end{bmatrix}
\]  
- Compute **corner response**:  
  \[
  \frac{(\text{Trace}(H))^2}{\text{Det}(H)} < 12.1
  \]  
  If the value is **greater than 12.1**, the keypoint is rejected.  

📌 **Outcome:**  
- A set of **highly stable, contrast-rich keypoints** that can be used for further processing.  

