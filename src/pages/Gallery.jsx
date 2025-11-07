import React, { useState, useEffect } from 'react'
import { FaUtensils, FaFish, FaDrumstickBite, FaLeaf, FaPizzaSlice } from 'react-icons/fa'
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
    { id: 'seafood', label: 'Seafood', icon: <FaFish /> },
    { id: 'meat', label: 'Meat', icon: <FaDrumstickBite /> },
    { id: 'pasta', label: 'Pasta & Risotto', icon: <FaPizzaSlice /> },
    { id: 'salads', label: 'Salads', icon: <FaLeaf /> }
  ]

  const galleryItems = [
    // Appetizers & Canapes
    { id: 1, category: 'appetizers', title: 'Assorted Canapés', image: '/images/gallery/Assorted Canapes.jpg', description: 'Elegant bite-sized appetizers' },
    { id: 2, category: 'appetizers', title: 'Avocado & Crab Amuse Bouche', image: '/images/gallery/Avocado and Crab Meat Amuse Bouche.jpg', description: 'Delicate avocado and crab presentation' },
    { id: 3, category: 'appetizers', title: 'Cajun Fried Shrimp', image: '/images/gallery/Cajun Fried Shrimp with Mixed Greens in a Baguette Tube.jpg', description: 'Spicy shrimp with mixed greens' },
    { id: 4, category: 'appetizers', title: 'Butter Chicken Risotto Croquettes', image: '/images/gallery/Butter Chicken Risotto Croquettes Cardamom Yogurt Spiced Plum Chutney Parmigiano-Reggiano.jpg', description: 'Fusion croquettes with spiced chutney' },
    { id: 5, category: 'appetizers', title: 'Twice Baked Baby Potatoes with Caviar', image: '/images/gallery/Twice Baked Baby Potatoes Caviar.jpg', description: 'Luxurious potato appetizer' },
    { id: 6, category: 'appetizers', title: 'Mexican Fusion Bao Bun', image: '/images/gallery/Mexican Fusion Bao Bun.png', description: 'Creative fusion appetizer' },
    
    // Seafood Main Courses
    { id: 10, category: 'seafood', title: 'Seared Scallops with Prosciutto', image: '/images/gallery/Seared Scallops with Prosciutto Chips and Port Demi.jpg', description: 'Pan-seared scallops with crispy prosciutto' },
    { id: 11, category: 'seafood', title: 'Seared Scallop with Cauliflower Velouté', image: '/images/gallery/Seared Scallop with Cauliflower Veloute.jpg', description: 'Scallop with creamy cauliflower' },
    { id: 12, category: 'seafood', title: 'Seared Bay Scallop with Pea Purée', image: '/images/gallery/Seared Bay Scallop with Mited Pea Puree.jpg', description: 'Delicate scallop with minted pea' },
    { id: 13, category: 'seafood', title: 'Butter Poached Lobster', image: '/images/gallery/Butter Poached Lobster Tail with Sweet Peppers and Corn.jpg', description: 'Luxurious butter-poached lobster' },
    { id: 14, category: 'seafood', title: 'Champagne Poached Lobster Salad', image: '/images/gallery/Champagne Poached Lobster Salad.jpg', description: 'Elegant lobster preparation' },
    { id: 15, category: 'seafood', title: 'Poached Lobster Nuggets', image: '/images/gallery/Poached Lobster Nuggets.jpg', description: 'Tender lobster bites' },
    { id: 16, category: 'seafood', title: 'Fire Roasted Salmon', image: '/images/gallery/Fire Roasted Salmon Filet ith Mixed vegetable Wheels and Mango Coulis.jpg', description: 'Salmon with tropical mango coulis' },
    { id: 17, category: 'seafood', title: 'Beet Root Salmon', image: '/images/gallery/Beet Root salmon with Sugared Berries.png', description: 'Salmon with beet infusion' },
    { id: 18, category: 'seafood', title: 'Rum Marinated Salmon', image: '/images/gallery/Rum Marinated Salmon.jpg', description: 'Caribbean-inspired salmon' },
    { id: 19, category: 'seafood', title: 'Sesame Seared Ahi Tuna', image: '/images/gallery/Sesame Seared Ahi Tuna.png', description: 'Asian-style tuna' },
    { id: 20, category: 'seafood', title: 'Mediterranean Bass with Zucchini Flowers', image: '/images/gallery/Mediterranean Bass with Zucchini Flowers.jpg', description: 'Delicate bass with edible flowers' },
    { id: 21, category: 'seafood', title: 'Poached Sea Bass in Miso Broth', image: '/images/gallery/Poached Sea Bass in a Miso Broth.jpg', description: 'Japanese-inspired preparation' },
    { id: 22, category: 'seafood', title: 'Roast Monk Fish', image: '/images/gallery/Roast Monk Fish with Mixed Micro Green salad and Potato Gaufrette.jpg', description: 'Perfectly roasted monkfish' },
    { id: 23, category: 'seafood', title: 'Poached Grouper', image: '/images/gallery/Poached Grouper with Artichoke Hearts Grilled Corn and Fingerlings.jpg', description: 'Delicate grouper with vegetables' },
    { id: 24, category: 'seafood', title: 'Fish Stew', image: '/images/gallery/Fish Stew.jpg', description: 'Hearty Mediterranean fish stew' },
    { id: 25, category: 'seafood', title: 'Poached Seafood Stew', image: '/images/gallery/Poached Seafood Stew.jpg', description: 'Mixed seafood in aromatic broth' },
    { id: 26, category: 'seafood', title: 'Zuppa de Pesce', image: '/images/gallery/Zuppa de Pesce.jpg', description: 'Italian seafood soup' },
    { id: 27, category: 'seafood', title: 'Steamed Mussels', image: '/images/gallery/Steamed Mussels Spicy Tomato.jpg', description: 'Mussels in spicy tomato broth' },
    { id: 28, category: 'seafood', title: 'Shrimp Saganaki', image: '/images/gallery/Shrimp Saganaki.jpg', description: 'Greek-style shrimp' },
    { id: 29, category: 'seafood', title: 'Frilled Calamari', image: '/images/gallery/Frilled Calamari Over Raddichio Salad.jpg', description: 'Crispy calamari on bitter greens' },
    
    // Meat Main Courses
    { id: 40, category: 'meat', title: 'Beef on Beef', image: '/images/gallery/Beef on Beef.jpg', description: 'Luxurious beef preparation' },
    { id: 41, category: 'meat', title: 'Ontario Rack of Lamb', image: '/images/gallery/Ontario Rack of Lamb with a Fig Demi.jpg', description: 'Local lamb with fig reduction' },
    { id: 42, category: 'meat', title: 'Ontario Lamb Chop with Morels', image: '/images/gallery/Ontario Lamb Chop, Morrel in a Lamb Jus.jpg', description: 'Lamb with wild mushrooms' },
    { id: 43, category: 'meat', title: 'Ontario Lamb Chops', image: '/images/gallery/Ontario Lamb Chops.jpg', description: 'Perfectly cooked lamb' },
    { id: 44, category: 'meat', title: 'Chicken Supreme with Mushroom Marsala', image: '/images/gallery/Chicken Supreme with Mushroom Marsala Cream.png', description: 'Classic Italian preparation' },
    { id: 45, category: 'meat', title: 'Chicken Supreme over Sweet Potato', image: '/images/gallery/Chicken Supreme over Sweet Potato Puree.jpg', description: 'Elegant chicken presentation' },
    { id: 46, category: 'meat', title: 'Oven Roasted Duck Breast', image: '/images/gallery/Oven Roasted Duck Breast with King Oyster Mushrooms.jpg', description: 'Duck with exotic mushrooms' },
    { id: 47, category: 'meat', title: 'Sous Vide Duck Breast', image: '/images/gallery/Sous Vide Duck Breast Black Cherry Jus Cacio e Pepe.jpg', description: 'Modern technique duck' },
    { id: 48, category: 'meat', title: 'Pork Belly Porchetta', image: '/images/gallery/Pork Belly Porchetta with Braised Apples.jpg', description: 'Italian-style pork belly' },
    { id: 49, category: 'meat', title: 'Smoke and Grilled Baby Back Ribs', image: '/images/gallery/Smoke and Grilled Baby Back Ribs.jpg', description: 'Tender BBQ ribs' },
    { id: 50, category: 'meat', title: 'Roasted Elk Tenderloin', image: '/images/gallery/Roasted Elk Tenderloin Red Wine Jus.jpg', description: 'Wild game with red wine' },
    { id: 51, category: 'meat', title: 'Venison Tenderloin', image: '/images/gallery/Venison Tenderloin, Roasted Roots vegetables and Toasted Pistachio.jpg', description: 'Venison with root vegetables' },
    
    // Pasta & Risotto
    { id: 60, category: 'pasta', title: 'Fettuccine Alfredo with Truffles', image: '/images/gallery/fettucine Alfredo with Autumn Truffles.jpg', description: 'Classic pasta with fresh truffles' },
    { id: 61, category: 'pasta', title: 'Cacio e Pepe', image: '/images/gallery/Cacio Pepe.jpg', description: 'Roman cheese and pepper pasta' },
    { id: 62, category: 'pasta', title: 'Andouille Sausage Pappardelle', image: '/images/gallery/Andouille Sausage and Tomato Papardelle.jpg', description: 'Spicy sausage with wide pasta' },
    { id: 63, category: 'pasta', title: 'Beef Tenderloin Pappardelle', image: '/images/gallery/Beef Tenderloin Tip Papardelle with Wild Mushrooms.png', description: 'Beef and mushroom pasta' },
    { id: 64, category: 'pasta', title: 'Beef Cheek Raviolini', image: '/images/gallery/Beef Cheek Raviolini Creamed Pistachios Amarone Reduction Pistachio Dust.jpg', description: 'Luxurious filled pasta' },
    { id: 65, category: 'pasta', title: 'Wild Mushroom Bucatini', image: '/images/gallery/Wild Mushoom and Spinach Bucattini.jpg', description: 'Earthy mushroom pasta' },
    { id: 66, category: 'pasta', title: 'Shrimp Gnocchi', image: '/images/gallery/Shrimp Gnocchi.png', description: 'Pillowy gnocchi with shrimp' },
    { id: 67, category: 'pasta', title: 'Sweet Corn Risotto', image: '/images/gallery/Sweet Corn Risotto with Fresh Truffles.jpg', description: 'Summer risotto with truffles' },
    { id: 68, category: 'pasta', title: 'Lobster Zucchini Risotto', image: '/images/gallery/Lobster, Zucchini Risotto Saffron Cream.jpg', description: 'Luxurious seafood risotto' },
    { id: 69, category: 'pasta', title: 'Seafood Risotto', image: '/images/gallery/Seafood Risotto Appetizer.jpg', description: 'Mixed seafood risotto' },
    { id: 70, category: 'pasta', title: 'Foraged Mushroom Pizza', image: '/images/gallery/Foraged Mushroom Pizza.jpg', description: 'Artisan wild mushroom pizza' },
    
    // Salads & Raw Preparations
    { id: 80, category: 'salads', title: 'Tuna Tartare with Caviar', image: '/images/gallery/Tuna Tartare with Caviar Crown and Quails egg.jpg', description: 'Luxurious raw tuna' },
    { id: 81, category: 'salads', title: 'Tuna Tartare with Crostini', image: '/images/gallery/Tuna Tartare with Crostini and Micro Salad.jpg', description: 'Fresh tuna with crispy bread' },
    { id: 82, category: 'salads', title: 'Fish Tartare with Avocado', image: '/images/gallery/Fish Tartare with Avocado and Caviar.jpg', description: 'Delicate fish preparation' },
    { id: 83, category: 'salads', title: 'Beet Root Salmon Carpaccio', image: '/images/gallery/Beet Root Infused Salmon Carpacio.jpg', description: 'Thinly sliced salmon' },
    { id: 84, category: 'salads', title: 'Lobster Ceviche', image: '/images/gallery/Lobster Ceviche with Salmon Skin Chip.jpg', description: 'Citrus-cured lobster' },
    { id: 85, category: 'salads', title: 'Salmon Ceviche', image: '/images/gallery/Salmon Cevishe with Patron on the Half Shell.png', description: 'Fresh salmon in citrus' },
    { id: 86, category: 'salads', title: 'Seared Tuna Niçoise', image: '/images/gallery/Seared Ahi Tuna salad Nicoise.jpg', description: 'Classic French salad' },
    { id: 87, category: 'salads', title: 'Marinated Wagyu Salad', image: '/images/gallery/Marinated Wagyu Salad.jpg', description: 'Premium beef salad' },
    { id: 88, category: 'salads', title: 'Burrata & Tomato', image: '/images/gallery/Buratta, Basil and Chrry Tomato Salad with Pine Nuts.jpg', description: 'Fresh Italian salad' },
    { id: 89, category: 'salads', title: 'Burrata Heirloom Tomato', image: '/images/gallery/Burrata Heirloom Tomato Salad.jpg', description: 'Colorful summer salad' },
    { id: 90, category: 'salads', title: 'Heirloom Tomato & Burrata', image: '/images/gallery/Heirloom Tomato and Buratta Salad.jpg', description: 'Classic caprese variation' },
    { id: 91, category: 'salads', title: 'Horiatiki Salad', image: '/images/gallery/Horiatiki Salad.jpg', description: 'Traditional Greek salad' },
    { id: 92, category: 'salads', title: 'Watermelon & Feta', image: '/images/gallery/Watermelon and Feta Salad with fresh Mint.jpg', description: 'Refreshing summer salad' },
    { id: 93, category: 'salads', title: 'Melon & Prosciutto', image: '/images/gallery/Melom, Fig and Prosciutto.png', description: 'Classic Italian appetizer' },
    { id: 94, category: 'salads', title: 'Melon & Dragon Fruit', image: '/images/gallery/Melon and Dragon Fruit Salad.jpg', description: 'Tropical fruit medley' },
    { id: 95, category: 'salads', title: 'Asian Salad', image: '/images/gallery/Asian Salad with Pickled Ginger and Fried Rice Noodles.jpg', description: 'Crispy Asian flavors' },
    { id: 96, category: 'salads', title: 'Roast Beet Salad', image: '/images/gallery/Roast Beet Salad.jpg', description: 'Earthy beet preparation' },
    { id: 97, category: 'salads', title: 'Roast Salmon Salad', image: '/images/gallery/Roast Salmon Salad.jpg', description: 'Warm salmon over greens' },
    { id: 98, category: 'salads', title: 'Cured Salmon Salad', image: '/images/gallery/Cured Salmon Salad.jpg', description: 'Gravlax-style salmon' },
    { id: 99, category: 'salads', title: 'Spinach Strawberry Salad', image: '/images/gallery/Spinach Strawberry and Foraged Mushroom Salad.jpg', description: 'Sweet and earthy combination' },
    { id: 100, category: 'salads', title: 'Asparagus Zucchini Salad', image: '/images/gallery/Asparagus Zucchini and Cirus salad.jpg', description: 'Light vegetable salad' },
    { id: 101, category: 'salads', title: 'Zucchini & Goat Cheese', image: '/images/gallery/Zucchini and Goat Cheese Salad.jpg', description: 'Fresh summer vegetables' },
    { id: 102, category: 'salads', title: 'Radicchio Fiore di Latte', image: '/images/gallery/Radicchio Fiore di Latte Salad.jpg', description: 'Bitter greens with fresh cheese' },
    { id: 103, category: 'salads', title: 'Lobster & Avocado', image: '/images/gallery/Lobster, Avocado Salad with Gochujang Mayo.jpg', description: 'Fusion lobster salad' },
    { id: 104, category: 'salads', title: 'Avocado, Mango & King Crab', image: '/images/gallery/Avocado, Mango, King Crab and Poached Tiger Shrimp.jpg', description: 'Tropical seafood salad' },
    
    // Bruschetta & Appetizers
    { id: 110, category: 'appetizers', title: 'Fig, Gorgonzola & Prosciutto Bruschetta', image: '/images/gallery/Fig, Gorgonzola, Prosciutto, Walnut and Wild Honey Bruschetta.jpg', description: 'Sweet and savory combination' },
    { id: 111, category: 'appetizers', title: 'Port Poached Pear Brulée', image: '/images/gallery/Port Poached Pear, Gorgonzola and Toasted Walnut Brulee.jpg', description: 'Elegant fruit and cheese' },
    { id: 112, category: 'appetizers', title: 'Brulée Chèvre Pinwheel', image: '/images/gallery/Brule Chevre Demerara Thyme Infused PinwheelLavender Honey Mascarpone Crema Black Mission Fresh Fig Candied Pistachio Dust.jpg', description: 'Complex cheese preparation' },
    { id: 113, category: 'appetizers', title: 'Lobster Bisque', image: '/images/gallery/Lobster Bisque.jpg', description: 'Rich seafood soup' },
    { id: 114, category: 'appetizers', title: 'Tuna Bomb', image: '/images/gallery/Tuna Bomb on a Potato Croquette.jpg', description: 'Dramatic tuna presentation' },
    { id: 115, category: 'appetizers', title: 'Scallop with Duo of Caviar', image: '/images/gallery/Seared Scallop with a Duo of Caviar on the Half Shell.jpg', description: 'Luxurious scallop preparation' },
    { id: 116, category: 'appetizers', title: 'Scallop with Beet Reduction', image: '/images/gallery/Scallop, Roasted Veggie Chips and Beet Reduction.jpg', description: 'Colorful plating' }
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
                style={{ animationDelay: `${index * 0.05}s` }}
                onClick={() => setSelectedImage(item)}
              >
                <div className="gallery-image">
                  {item.image ? (
                    <img src={item.image} alt={item.title} loading="lazy" />
                  ) : (
                    <div className="image-placeholder">
                      <FaUtensils className="placeholder-icon" />
                    </div>
                  )}
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
              {selectedImage.image ? (
                <img src={selectedImage.image} alt={selectedImage.title} />
              ) : (
                <div className="image-placeholder large">
                  <FaUtensils className="placeholder-icon" />
                </div>
              )}
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

