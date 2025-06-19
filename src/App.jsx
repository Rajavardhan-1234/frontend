import React from 'react'
import { RouterProvider} from 'react-router'
import route from './routes/routes'
import "./App.css"

const App = () => {
  return (
  
      <RouterProvider router={route}></RouterProvider>
   
  )
}

export default App