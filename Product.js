import React, { useState } from 'react';

export default function Product() {
  const [cart, setCart] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    { 
      id: 1, 
      name: 'Product 1', 
      price: 50.99, 
      imageUrl: 'cafep2.jpeg', 
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget justo id nisi commodo fringilla.' 
    },
    { 
      id: 2, 
      name: 'Product 2', 
      price: 29.99, 
      imageUrl: 'cafep3.jpg', 
      description: 'Sed eu metus vel ex sagittis varius. Integer in massa non libero cursus elementum vel non enim.' 
    },
    { 
      id: 3, 
      name: 'Product 3', 
      price: 39.99, 
      imageUrl: 'cafep5.jpeg', 
      description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.' 
    },
    { 
      id: 4, 
      name: 'Product 4', 
      price: 39.99, 
      imageUrl: 'cafep6.jpg', 
      description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.' 
    },
    { 
      id: 5, 
      name: 'Product 5', 
      price: 39.99, 
      imageUrl: 'cafep1.png', 
      description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.' 
    },
  
   
  ];

  const addToCart = (product) => {
    const existingItem = cart.find((item) => item.id === product.id);

    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  const increaseQuantity = (productId) => {
    setCart(
      cart.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (productId) => {
    setCart(
      cart.map((item) =>
        item.id === productId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const showProductDetails = (product) => {
    setSelectedProduct(product);
  };

  const closeProductDetails = () => {
    setSelectedProduct(null);
  };

  const calculateTotalPrice = () => {
    return cart
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Menu</h1>
      <div className="product-list" style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
        {products.map((product) => (
          <div
            key={product.id}
            className="product-card"
            style={{
              textAlign: 'center',
              margin: '10px',
              padding: '5px',
              border: '1px solid #ccc',
              borderRadius: '8px',
              maxWidth: '200px',
            }}
          >
            <img
              src={product.imageUrl}
              alt={product.name}
              style={{
                width: '100%',
                height: '100px',
                objectFit: 'cover',
                marginBottom: '10px',
                borderRadius: '4px',
              }}
            />
            <h3 style={{ margin: '0', fontSize: '18px' }}>{product.name}</h3>
            <p style={{ margin: '5px 0', fontSize: '16px' }}>
              Price: ${product.price.toFixed(2)}
            </p>
            <button
              style={{
                backgroundColor: '#4CAF50',
                color: 'white',
                padding: '5px',
                borderRadius: '4px',
                cursor: 'pointer',
                border: 'none',
              }}
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
            <button
              style={{
                backgroundColor: '#2196F3',
                color: 'white',
                padding: '5px',
                borderRadius: '4px',
                cursor: 'pointer',
                marginLeft: '5px',
                border: 'none',
              }}
              onClick={() => showProductDetails(product)}
            >
              More Info
            </button>
          </div>
        ))}
      </div>
      {/* Cart */}
      <div
        style={{
          marginTop: '20px',
          textAlign: 'center',
          border: '1px solid #ccc',
          padding: '1px',
          borderRadius: '8px',
        }}
      >
        <h2 style={{ borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>
          Shopping Cart
        </h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul
            style={{
              listStyleType: 'none',
              padding: '5px',
              maxWidth: '300px',
              margin: '0 auto',
            }}
          >
            {cart.map((item, index) => (
              <li
                key={index}
                style={{
                  borderBottom: '1px solid #ccc',
                  marginBottom: '10px',
                  paddingBottom: '1px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <div>
                  {item.name} - ${item.price.toFixed(2)} - Quantity: {item.quantity}
                </div>
                <div>
                  <button
                    style={{
                      marginLeft: '5px',
                      padding: '1px',
                      borderRadius: '4px',
                    }}
                    onClick={() => increaseQuantity(item.id)}
                  >
                    +
                  </button>
                  <button
                    style={{
                      marginLeft: '5px',
                      padding: '1px',
                      borderRadius: '4px',
                    }}
                    onClick={() => decreaseQuantity(item.id)}
                  >
                    -
                  </button>
                  <button
                    style={{
                      marginLeft: '5px',
                      backgroundColor: '#FF3333',
                      color: 'white',
                      padding: '1px',
                      borderRadius: '4px',
                    }}
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
        <p
          style={{
            marginTop: '10px',
            fontSize: '18px',
            fontWeight: 'bold',
            color: '#4CAF50',
          }}
        >
          Total Price: ${calculateTotalPrice()}
        </p>
        <h1>Happy Shopping...!</h1>


      </div>

      {/* Product Details */}
      {selectedProduct && (
        <div
          style={{
            position: 'fixed',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            background: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              background: '#fff',
              padding: '1px',
              borderRadius: '8px',
              maxWidth: '400px',
              width: '100%',
              overflow: 'auto',
            }}
          >
            <h2>{selectedProduct.name}</h2>
            <p>Price: ${selectedProduct.price.toFixed(2)}</p>
            <p>Description: {selectedProduct.description}</p>
            <button onClick={closeProductDetails}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}