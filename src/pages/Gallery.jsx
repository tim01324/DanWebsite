import React, { useState, useEffect } from 'react'
import { FaUtensils, FaBirthdayCake, FaFish, FaDrumstickBite } from 'react-icons/fa'
import './Gallery.css'

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedImage, setSelectedImage] = useState(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const categories = [
    { id: 'all', label: 'All', icon: <FaUtensils /> },
    { id: 'appetizers', label: 'Appetizers', icon: <FaFish /> },
    { id: 'mains', label: 'Main Courses', icon: <FaDrumstickBite /> },
    { id: 'desserts', label: 'Desserts', icon: <FaBirthdayCake /> }
  ]

  const galleryItems = [
    { id: 1, category: 'appetizers', title: 'Seared Scallops', description: 'Fresh scallops with citrus reduction' },
    { id: 2, category: 'appetizers', title: 'Salmon Tartare', description: 'Scottish salmon with avocado' },
    { id: 3, category: 'appetizers', title: 'Foie Gras', description: 'Pan-seared foie gras with berry compote' },
    { id: 4, category: 'mains', title: 'Beef Wellington', description: 'Classic beef wellington with truffle sauce' },
    { id: 5, category: 'mains', title: 'Roasted Duck', description: 'Duck breast with orange glaze' },
    { id: 6, category: 'mains', title: 'Sea Bass', description: 'Mediterranean-style sea bass' },
    { id: 7, category: 'desserts', title: 'Chocolate Soufflé', description: 'Dark chocolate soufflé with vanilla sauce' },
    { id: 8, category: 'desserts', title: 'Crème Brûlée', description: 'Classic French crème brûlée' },
    { id: 9, category: 'desserts', title: 'Tarte Tatin', description: 'Caramelized apple tart' },
    { id: 10, category: 'appetizers', title: 'Truffle Risotto', description: 'Creamy risotto with black truffle' },
    { id: 11, category: 'mains', title: 'Rack of Lamb', description: 'Herb-crusted lamb with vegetables' },
    { id: 12, category: 'desserts', title: 'Opera Cake', description: 'French coffee-flavored layer cake' }
  ]

  const filteredItems = selectedCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory)

  return (
    <div className="gallery">
      {/* Hero Section */}
      <section className="gallery-hero">
        <div className="gallery-hero-content">
          <h1 className="fade-in">Culinary Portfolio</h1>
          <p className="fade-in">A showcase of Chef Daniel Racine's culinary artistry and innovative creations</p>
        </div>
      </section>

      {/* Gallery Content */}
      <section className="gallery-content section-padding">
        <div className="container">
          {/* Category Filter */}
          <div className="category-filter">
            {categories.map(category => (
              <button
                key={category.id}
                className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category.id)}
              >
                <span className="category-icon">{category.icon}</span>
                <span>{category.label}</span>
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="gallery-grid">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className="gallery-item"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedImage(item)}
              >
                <div className="gallery-image">
                  <div className="image-placeholder">
                    <FaUtensils className="placeholder-icon" />
                  </div>
                  <div className="gallery-overlay">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setSelectedImage(null)}>
              ×
            </button>
            <div className="lightbox-image">
              <div className="image-placeholder large">
                <FaUtensils className="placeholder-icon" />
              </div>
            </div>
            <div className="lightbox-info">
              <h3>{selectedImage.title}</h3>
              <p>{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Gallery

