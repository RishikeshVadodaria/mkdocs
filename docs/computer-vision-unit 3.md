<div class="nav-wrapper">
    <a href="https://rishikeshvadodaria.github.io/mkdocs/computer-vision-unit 1/" class="nav-item mobile-computing" data-title="Unit 1">Unit 1</a>
    <a href="https://rishikeshvadodaria.github.io/mkdocs/computer-vision-unit 2/" class="nav-item mobile-computing" data-title="Unit 2">Unit 2</a>
    <a href="https://rishikeshvadodaria.github.io/mkdocs/computer-vision-unit 3/" class="nav-item mobile-computing" data-title="Unit 3">Unit 3</a>
    <a href="https://rishikeshvadodaria.github.io/mkdocs/computer-vision-unit 4/" class="nav-item mobile-computing" data-title="Unit 4">Unit 4</a>
   </div>


# Image Segmentation

## Unit 3

Image segmentation partitions an image into multiple regions based on pixel characteristics, grouping similar pixels into regions with assigned labels to identify objects and boundaries (lines, curves, etc.).

## Key Points

**Definition**: Divides an image into regions where pixels share similar attributes (e.g., texture, color).

**Purpose**: Locates objects and boundaries in images for applications like object detection and medical imaging.

**Algorithms**:
  - Divisive Clustering
  - Hierarchical Clustering
  - K-means Clustering
  - Mean Shift Clustering
  - Graph Cuts

**Categories**:
  - Region-Based Segmentation
  - Edge Detection Based Segmentation
  - Cluster-Based Segmentation
  - CNN-Based Segmentation

**Applications**:
  - Object detection and recognition
  - Medical imaging (e.g., MRI, CT scans)
  - Texture segmentation
  - Video tracking

## Highlights

> 💡 **Tip**: Use the Elbow Method to select the optimal number of clusters (`k`) in K-means clustering by identifying the "knee" in the WCSS plot.

> ⚠️ **Caution**: K-means clustering is sensitive to the Random Initialization Trap, where poor centroid initialization can lead to suboptimal clustering.

> 💡 **Tip**: In Mean Shift, adjust the bandwidth parameter carefully—smaller values yield finer segmentation, while larger values produce coarser results.

## K-means Clustering

### Overview
K-means is an unsupervised algorithm that groups data points based on similarity (e.g., pixel values, texture).

### Process
1. Randomly select `k` initial clusters.
2. Assign each data point to one of the `k` clusters randomly.
3. Calculate the centroid (mean) of each cluster.
4. Compute the distance of each point from all centroids.
5. Reassign points to the nearest centroid.
6. Recalculate centroids for the new clusters.
7. Repeat steps 4–6 until centroids stabilize, points stop changing clusters, or a set number of iterations is reached.

### Elbow Method for Optimal `k`
To determine the best `k`, use the Within Cluster Sum of Squares (WCSS):
```python
# Pseudo-code for calculating WCSS
def calculate_wcss(data, k):
    wcss = 0
    for each cluster in k_clusters:
        centroid = compute_centroid(cluster)
        for each point in cluster:
            wcss += distance(point, centroid) ** 2
    return wcss

# Compute WCSS for different k values
wcss_values = []
for k in range(1, max_k):
    wcss_values.append(calculate_wcss(data, k))

# Plot WCSS vs k to find the elbow
plot(wcss_values)
```

### Pros
- Fast and suitable for large datasets.
- Low computational complexity.

### Cons
- Requires choosing `k`.
- Sensitive to centroid initialization, rescaling, and outliers.
- Works best with spherical clusters, not complex shapes.

## Mean Shift Algorithm

### Overview
Mean Shift is an unsupervised clustering algorithm that identifies clusters without specifying the number of clusters beforehand. It shifts data points toward the regional mean in each iteration, grouping pixels that converge to the same mode.

### Process
1. **Convert Image to Feature Space**:
   - Use spatial (x, y) coordinates and color values (e.g., RGB, Lab) or texture features.
   - Optionally use histogram backprojection for pixel distribution.
2. **Mean Shift Clustering**:
   - For each pixel, apply Mean Shift to move the kernel to the region of highest data density (mode).
3. **Assign Labels**:
   - Pixels converging to the same mode are assigned the same cluster label.

### Key Concepts
- **Kernel Density Estimation (KDE)**:
  - Uses a kernel window (circular or Gaussian) to calculate the mean of pixels within it.
  - Updates pixel values to the new mean until convergence.
- **Bandwidth Parameter**:
  - Controls kernel window size.
  - Small bandwidth: More clusters, finer segmentation.
  - Large bandwidth: Fewer clusters, coarser segmentation.
- **Weighted Mean Function**:
```python
# Pseudo-code for weighted mean in Mean Shift
def weighted_mean(pixel, neighbors, sigma):
    total_weight = 0
    weighted_sum = 0
    for neighbor in neighbors:
        d = distance(pixel, neighbor)
        weight = gaussian_weight(d, sigma)
        weighted_sum += weight * neighbor
        total_weight += weight
    return weighted_sum / total_weight

def gaussian_weight(d, sigma):
    return exp(-(d ** 2) / (2 * sigma ** 2))
```

### Pros
- Automatically determines the number of clusters.
- Robust to noise and outliers by focusing on high-density regions.
- Non-parametric, handling arbitrary cluster shapes.

### Cons
- Sensitive to bandwidth choice, which can cause under- or over-segmentation.
- Computationally expensive, especially for high-resolution images.
- May identify noisy pixels as clusters.
- Slow due to iterative kernel movement for each pixel.

## Segmentation Techniques

### Comparison Table

| **Algorithm**                     | **Description**                                                                 | **Advantages**                                                                 | **Limitations**                                                                 |
|-----------------------------------|--------------------------------------------------------------------------------|-------------------------------------------------------------------------------|--------------------------------------------------------------------------------|
| **Region-Based Segmentation**     | Separates objects using threshold value(s).                                    | Simple, fast, effective with high contrast.                                   | Struggles with low grayscale differences or overlapping pixel values.          |
| **Edge Detection Segmentation**   | Detects edges to define object boundaries.                                     | Good for high-contrast images.                                               | Not suitable for images with many edges or low contrast.                      |
| **Segmentation Based on Clustering** | Groups pixels into homogeneous clusters (e.g., K-means, Mean Shift).          | Effective for small datasets, produces excellent clusters.                   | High computation time, not ideal for non-convex clusters.                     |
| **Mask R-CNN**                    | Outputs class, bounding box, and mask for each object.                         | Flexible, state-of-the-art for segmentation.                                 | Requires significant training time.                                          |

## Applications of Image Segmentation

1. **Object Detection and Recognition**:
   - Groups similar pixels to identify distinct objects.
2. **Medical Imaging**:
   - Segments MRI, CT scans, or X-rays to highlight tumors, organs, or abnormalities.
3. **Texture Segmentation**:
   - Separates regions based on texture or color (e.g., landscape segmentation).
4. **Video Tracking**:
   - Tracks objects across video frames by clustering similar features.