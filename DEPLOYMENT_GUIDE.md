# 部署到 Vercel 指南

## 📸 图片管理

### 图片应该放在哪里？

所有图片都应该放在 `public/images/` 文件夹中。建议的文件夹结构：

```
public/
├── images/
│   ├── chef/           # 厨师个人照片
│   │   └── profile.jpg
│   ├── dishes/         # 菜品照片
│   │   ├── appetizer-1.jpg
│   │   ├── main-1.jpg
│   │   └── dessert-1.jpg
│   └── gallery/        # 作品集照片
│       ├── dish-1.jpg
│       ├── dish-2.jpg
│       └── ...
├── resume.pdf          # 你的简历 PDF
└── chef-hat.svg
```

### 如何使用图片？

在代码中使用图片时，直接引用路径：

```jsx
// 示例：更新 Home 页面的厨师照片
<img src="/images/chef/profile.jpg" alt="Chef Photo" />

// 示例：更新 Gallery 的菜品照片
<img src="/images/dishes/appetizer-1.jpg" alt="Dish Name" />
```

### 需要替换图片的地方：

1. **Home 页面** (`src/pages/Home.jsx`)

    - 第 52 行：厨师个人照片
    - 第 104-124 行：三个菜系展示图

2. **Gallery 页面** (`src/pages/Gallery.jsx`)

    - 第 21-32 行：定义 `galleryItems` 数组，为每个项目添加图片路径

3. **Footer** (`src/components/Footer.jsx`)
    - 更新社交媒体链接

---

## 🚀 部署到 Vercel

### 方法一：通过 GitHub（推荐）

这是最简单的方法，而且支持自动部署。

#### 步骤：

1. **创建 GitHub 仓库**

    ```bash
    git init
    git add .
    git commit -m "Initial commit"
    git branch -M main
    git remote add origin https://github.com/你的用户名/chef-portfolio.git
    git push -u origin main
    ```

2. **连接 Vercel**

    - 访问 [vercel.com](https://vercel.com)
    - 使用 GitHub 账号登录
    - 点击 "Add New Project"
    - 选择你的 GitHub 仓库
    - Vercel 会自动检测到这是一个 Vite 项目
    - 点击 "Deploy"

3. **完成！**
    - Vercel 会自动构建和部署
    - 你会获得一个免费的 `.vercel.app` 域名
    - 每次推送到 GitHub，网站会自动更新

---

### 方法二：使用 Vercel CLI

如果你不想使用 GitHub，可以直接通过命令行部署。

#### 步骤：

1. **安装 Vercel CLI**

    ```bash
    npm install -g vercel
    ```

2. **登录 Vercel**

    ```bash
    vercel login
    ```

3. **部署**

    ```bash
    vercel
    ```

    第一次部署时会问你几个问题：

    - Set up and deploy? → `Y`
    - Which scope? → 选择你的账号
    - Link to existing project? → `N`
    - Project name? → 输入项目名称或按回车使用默认
    - In which directory is your code located? → 按回车（当前目录）

4. **部署到生产环境**
    ```bash
    vercel --prod
    ```

---

### 方法三：拖放部署

1. **构建项目**

    ```bash
    npm run build
    ```

2. **上传到 Vercel**
    - 访问 [vercel.com](https://vercel.com)
    - 点击 "Add New Project"
    - 选择 "Deploy from template" 或直接拖放 `dist` 文件夹

---

## ⚙️ Vercel 配置（可选）

创建 `vercel.json` 文件来自定义配置：

```json
{
	"buildCommand": "npm run build",
	"outputDirectory": "dist",
	"devCommand": "npm run dev",
	"installCommand": "npm install"
}
```

---

## 🌐 自定义域名

部署后，你可以添加自定义域名：

1. 在 Vercel 项目设置中，找到 "Domains"
2. 输入你的域名
3. 按照指示配置 DNS 记录

---

## 📝 环境变量（如果需要）

如果你的表单需要连接后端 API：

1. 在 Vercel 项目设置中找到 "Environment Variables"
2. 添加你的 API keys 或配置

---

## 🔄 更新网站

### 使用 GitHub：

```bash
git add .
git commit -m "更新内容"
git push
```

Vercel 会自动重新部署！

### 使用 CLI：

```bash
vercel --prod
```

---

## ⚡ 优化建议

在部署前：

1. **压缩图片**

    - 使用 [TinyPNG](https://tinypng.com/) 或 [Squoosh](https://squoosh.app/)
    - 推荐大小：小于 500KB 每张

2. **检查构建**

    ```bash
    npm run build
    npm run preview
    ```

3. **测试所有功能**
    - 检查所有链接
    - 测试表单
    - 确保图片加载

---

## 🎉 部署后

你会获得：

-   ✅ 免费的 HTTPS
-   ✅ 全球 CDN
-   ✅ 自动优化
-   ✅ 分析数据
-   ✅ 自动部署（如果使用 GitHub）

你的网站将类似：`https://chef-portfolio.vercel.app`

---

## 🆘 常见问题

**Q: 部署后图片不显示？**
A: 确保图片在 `public` 文件夹中，并使用 `/images/...` 路径

**Q: 如何更新内容？**
A: 修改代码后重新部署（git push 或 vercel --prod）

**Q: 可以使用自己的域名吗？**
A: 可以！在 Vercel 项目设置中添加

**Q: 免费吗？**
A: 个人项目完全免费！

---

需要帮助？查看 [Vercel 文档](https://vercel.com/docs)
