# Chef Portfolio Website

A modern, elegant portfolio website for professional chefs built with React and Vite.

## Features

- 🎨 Modern and elegant design with smooth animations
- 📱 Fully responsive layout
- 🚀 Fast performance with Vite
- 🎯 Easy navigation with React Router
- 💼 Professional sections:
  - Home - Introduction and specialties
  - Gallery - Showcase of culinary creations
  - CV & References - Professional experience and skills
  - Contact - Contact form and information

## Tech Stack

- **React 18** - UI library
- **React Router DOM** - Navigation
- **React Icons** - Icon library
- **Vite** - Build tool and dev server
- **CSS3** - Styling with modern features

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository or extract the files

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:3000`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Customization

### Images

Replace the placeholder images with actual photos:
- Add images to a `public/images` folder
- Update the image placeholders in the components

### Content

Update the content in the following files:
- `src/pages/Home.jsx` - Personal introduction and specialties
- `src/pages/Gallery.jsx` - Gallery items and categories
- `src/pages/CV.jsx` - Professional experience and education
- `src/pages/Contact.jsx` - Contact information
- `src/components/Footer.jsx` - Footer contact details

### Styling

Customize colors and styles in:
- `src/index.css` - Global styles and CSS variables
- Individual component CSS files for specific sections

### Colors

Main color variables in `src/index.css`:
```css
--primary-color: #1a1a1a;
--secondary-color: #d4a574;
--accent-color: #c9a062;
```

## Project Structure

```
chef-portfolio/
├── public/
├── src/
│   ├── components/
│   │   ├── Layout.jsx
│   │   ├── Navigation.jsx
│   │   ├── Footer.jsx
│   │   └── *.css
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Gallery.jsx
│   │   ├── CV.jsx
│   │   ├── Contact.jsx
│   │   └── *.css
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
└── vite.config.js
```

## License

This project is open source and available for personal and commercial use.

## 📸 Adding Images

See `IMAGE_REPLACEMENT_GUIDE.md` for detailed instructions on how to add your photos.

Quick summary:
1. Place all images in the `public/images/` folder
2. Update image paths in the code
3. Add your resume PDF as `public/resume.pdf`

## 🚀 Deploy to Vercel

See `DEPLOYMENT_GUIDE.md` for detailed deployment instructions.

Quick start:
```bash
# Method 1: Using Vercel CLI
npm install -g vercel
vercel login
vercel --prod

# Method 2: Using GitHub
git init
git add .
git commit -m "Initial commit"
git push
# Then connect to Vercel via their website
```

## Support

For any questions or issues, please open an issue in the repository.

