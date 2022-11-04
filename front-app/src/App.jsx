import { Link, Route, Routes } from "react-router-dom"
import Landing from "./pages/Landing"
import Login from "./pages/Login"



function App() {

  return (
    <div className="App">
      <nav>
        <ul>
          <li><Link to="/" >Landing</Link ></li>
          <li><Link to="/login" >login</Link ></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  )
}

export default App
