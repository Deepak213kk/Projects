import 'bootstrap/dist/css/bootstrap.min.css';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { CartProvider } from './component/context/CartContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    root.render(
  <CartProvider>
    <App />
  </CartProvider>
);
  </StrictMode>
)
