import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Root } from './pages/root'
import { HomePage } from './pages/home-page'
import { SignUpPage } from './pages/signup-page'
import { LoginPage } from './pages/login-page'


const route = createBrowserRouter([
  {
    path: '',
    element: <Root />,
    children: [
      {
        path: '',
        element: <HomePage />
      },
      {
        path: '/signup',
        element: <SignUpPage />
      },
      {
        path: '/login',
        element: <LoginPage />
      }
    ]
  }
])

function App() {
  return (
    <RouterProvider router={route} />
  )
}

export default App
