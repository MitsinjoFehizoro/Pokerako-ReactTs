import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Root } from './pages/root'
import { HomePage } from './pages/home-page'
import { SignUpPage } from './pages/signup-page'


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
    ]
  }
])

function App() {
  return (
    <RouterProvider router={route} />
  )
}

export default App
