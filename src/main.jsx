import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RecipeProvider } from './Context/RecipeContext';
import App from './App';
import "./reset.css";
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RecipeProvider>
      <App />
    </RecipeProvider>
  </StrictMode>
)
