import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Lancer from './pages/lancer/lancer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Lancer />
  </StrictMode>,
)
