import { Link, Route, Routes } from "react-router-dom"
import DashBoard from "./pages/Dashboard"
import Landing from "./pages/Landing"
import Login from "./pages/Login"



function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<DashBoard />} />
      </Routes>
    </div>
  )
}

export default App
