import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { PizzaProvider } from './context/PizzaProvider.jsx'
import { ThemeProvider } from '@material-tailwind/react'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <PizzaProvider>
          <App />
        </PizzaProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
