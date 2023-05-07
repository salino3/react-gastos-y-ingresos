import React from 'react'
import ReactDOM from 'react-dom/client'
import { MyProvider } from './context'
import App from './App'
import './index.scss'
// npm install -D tailwindcss postcss autoprefixer
//*> npx tailwindcss init -p
// npm install victory

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MyProvider>
     <App />
    </MyProvider>
  </React.StrictMode>,
)
