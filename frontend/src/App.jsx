

import { BrowserRouter as Router ,Routes , Route} from "react-router-dom"
import ICRTETConference from "./pages/ICRTETConference"
import PaperSubmit from "./components/PaperSubmit"
import Navbar from "./components/Navbar"
import AboutConference from "./components/AboutConference"

const App = () => {

  


  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }
  return (
    <Router>
       <Navbar scrollToSection={scrollToSection} />
      <Routes>
        <Route path="/" element={<ICRTETConference/>}/>
        <Route path="about" element={<AboutConference/>}/>
        <Route path="submit-paper" element={<PaperSubmit/>}/>
      </Routes>
    </Router>
  )
}

export default App