import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Root } from './pages/root'
import { HomePage } from './pages/home-page'


const route = createBrowserRouter([
  {
    path: '',
    element: <Root />,
    children: [
      {
        path: '',
        element: <HomePage />
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
