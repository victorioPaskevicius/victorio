import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/log/log'
import User from './pages/user/user'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/user/:userName' element={<User></User>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App