import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'

// load theme from localStorage before paint
const stored = localStorage.getItem('theme') || 'dark'
if (stored === 'dark') document.documentElement.classList.add('dark')

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
