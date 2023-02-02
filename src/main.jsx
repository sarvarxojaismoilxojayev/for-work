import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Navbar from './Body/Navbar'
import Search from './Body/Search'
import Information from './Body/Information'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Navbar />
    <Search />
    <Information />
  </React.StrictMode>,
)
