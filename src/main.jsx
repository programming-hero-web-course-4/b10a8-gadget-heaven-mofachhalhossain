// src/main.jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { CartProvider } from './CartContext'; // Import CartProvider

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Wrap your app with CartProvider */}
    <CartProvider>
      <App />
    </CartProvider>
  </StrictMode>
);
