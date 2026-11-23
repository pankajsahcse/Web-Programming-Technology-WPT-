import { Route, Routes } from "react-router-dom"
import MyNavbar from "./components/MyNavbar"
import Home from "./pages/Home"
import Course from "./pages/Course"
import About from "./pages/About"
import Form from "./pages/Form"


function App() {

  return (
    <>
      <MyNavbar />

      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} >  </Route>
        <Route path="/courses" element={<Course />} >  </Route>
        <Route path="/about" element={<About />} >  </Route>
        <Route path="/form" element={<Form />} >  </Route>

      </Routes>

    </>
  )
}

export default App
