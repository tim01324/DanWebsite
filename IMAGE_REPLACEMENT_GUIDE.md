# 图片替换指南

## 📁 文件夹结构

所有图片放在 `public/images/` 文件夹中：

```
public/
├── images/
│   ├── chef/
│   │   └── profile.jpg          # 厨师个人照片
│   ├── dishes/
│   │   ├── appetizer-1.jpg
│   │   ├── appetizer-2.jpg
│   │   ├── main-1.jpg
│   │   ├── main-2.jpg
│   │   ├── dessert-1.jpg
│   │   └── dessert-2.jpg
│   └── gallery/
│       ├── dish-1.jpg
│       ├── dish-2.jpg
│       ├── dish-3.jpg
│       └── ...
└── resume.pdf                   # 你的简历 PDF
```

---

## 🖼️ 需要替换的地方

### 1. Home 页面 - 厨师照片

**文件**: `src/pages/Home.jsx`

**找到** (第 52-56 行):
```jsx
<div className="image-placeholder">
  <FaUtensils className="placeholder-icon" />
  <p>Chef Photo</p>
</div>
```

**替换为**:
```jsx
<img src="/images/chef/profile.jpg" alt="Chef Photo" />
```

---

### 2. Home 页面 - 菜系展示图

**文件**: `src/pages/Home.jsx`

**找到** (第 104-124 行):
```jsx
<div className="cuisine-image">
  <div className="image-placeholder">
    <span>French</span>
  </div>
</div>
```

**替换为**:
```jsx
<div className="cuisine-image">
  <img src="/images/dishes/french-cuisine.jpg" alt="French Cuisine" />
</div>
```

对三个菜系都做同样的替换：
- French Cuisine → `/images/dishes/french-cuisine.jpg`
- Italian Cuisine → `/images/dishes/italian-cuisine.jpg`
- Asian Fusion → `/images/dishes/asian-cuisine.jpg`

---

### 3. Gallery 页面 - 作品集图片

**文件**: `src/pages/Gallery.jsx`

**找到** (第 21-32 行):
```jsx
const galleryItems = [
  { id: 1, category: 'appetizers', title: 'Seared Scallops', description: 'Fresh scallops with citrus reduction' },
  // ...
]
```

**更新为**（添加 image 属性）:
```jsx
const galleryItems = [
  { 
    id: 1, 
    category: 'appetizers', 
    title: 'Seared Scallops', 
    description: 'Fresh scallops with citrus reduction',
    image: '/images/gallery/scallops.jpg'  // 添加这一行
  },
  { 
    id: 2, 
    category: 'appetizers', 
    title: 'Salmon Tartare', 
    description: 'Scottish salmon with avocado',
    image: '/images/gallery/salmon-tartare.jpg'  // 添加这一行
  },
  // ... 为每个项目添加 image 属性
]
```

**然后找到** (第 73-77 行):
```jsx
<div className="gallery-image">
  <div className="image-placeholder">
    <FaUtensils className="placeholder-icon" />
  </div>
  <div className="gallery-overlay">
```

**替换为**:
```jsx
<div className="gallery-image">
  {item.image ? (
    <img src={item.image} alt={item.title} />
  ) : (
    <div className="image-placeholder">
      <FaUtensils className="placeholder-icon" />
    </div>
  )}
  <div className="gallery-overlay">
```

**同样更新 Lightbox 中的图片** (第 98-101 行):
```jsx
<div className="lightbox-image">
  {selectedImage.image ? (
    <img src={selectedImage.image} alt={selectedImage.title} />
  ) : (
    <div className="image-placeholder large">
      <FaUtensils className="placeholder-icon" />
    </div>
  )}
</div>
```

---

### 4. 添加 Resume PDF

只需将你的 PDF 文件重命名为 `resume.pdf`，放在 `public/` 文件夹中即可。

按钮已经配置好了，会自动链接到 `/resume.pdf`。

---

## 🎨 添加图片样式（可选）

如果替换后图片显示不理想，可以添加样式：

**文件**: `src/pages/Home.css`

添加：
```css
.about-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
}

.cuisine-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
```

**文件**: `src/pages/Gallery.css`

添加：
```css
.gallery-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.lightbox-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
```

---

## 📏 推荐的图片尺寸

为了最佳显示效果：

| 位置 | 推荐尺寸 | 比例 |
|------|---------|------|
| 厨师个人照片 | 800x1000px | 4:5 |
| 菜系展示图 | 1200x800px | 3:2 |
| Gallery 作品 | 1200x900px | 4:3 |
| Resume PDF | - | A4 |

---

## ⚡ 优化建议

1. **压缩图片**
   - 使用 [TinyPNG](https://tinypng.com/)
   - 目标：每张图片 < 500KB

2. **使用正确格式**
   - 照片：JPG
   - 插图/图标：PNG
   - 现代浏览器：WebP

3. **命名规范**
   - 使用小写
   - 使用连字符
   - 描述性命名
   - 例如：`seared-scallops.jpg`

---

## 🔄 快速替换流程

1. 准备所有图片并优化
2. 按照上述文件夹结构放置图片
3. 更新代码中的图片路径
4. 本地测试：`npm run dev`
5. 确认无误后部署

---

完成后，记得删除所有 `.image-placeholder` 相关的代码！

