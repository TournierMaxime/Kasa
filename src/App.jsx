import "./styles/App.scss"
import { Fragment } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./views/Home"
import Accommodation from "./views/Accommodation"
import About from "./views/About"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Error404 from "./components/Error404"

const App = () => {
  return (
    <Fragment>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/accommodation/:id"
            element={<Accommodation />}
          />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
        <Footer />
      </Router>
    </Fragment>
  )
}

export default App
