import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'

// Handle message port errors (extensions, service workers)
window.addEventListener('error', (event) => {
  if (event.message && event.message.includes('The message port closed')) {
    event.preventDefault();
  }
});

chrome?.runtime?.onMessage?.addListener(() => {
  return true; // Keep channel open
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
