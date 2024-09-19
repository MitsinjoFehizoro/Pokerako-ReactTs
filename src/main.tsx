import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.scss'
import { ToastContextProvider } from './hooks/use-toast.tsx'
import { AuthContexProvider } from './api/user/use-auth-api.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthContexProvider>
      <ToastContextProvider>
        <App />
      </ToastContextProvider>
    </AuthContexProvider>
  </StrictMode>,
)
