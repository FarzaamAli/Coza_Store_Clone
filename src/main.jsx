import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Navigator from './navigation/Navigator.jsx'
import Theme from './components/themes/Theme.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Theme>
      <Navigator/>
    </Theme>
  </React.StrictMode>,
)
