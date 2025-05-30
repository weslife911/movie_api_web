import Header from "./components/Header"
import Footer from "./components/Footer"
import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import MovieDetailsPage from "./pages/MovieDetailsPage"


function App() {

  return (
    <>
      <Header/>

      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/movie/:id" element={<MovieDetailsPage/>} />
      </Routes>

      <Footer/>
    </>
  )
}

export default App
