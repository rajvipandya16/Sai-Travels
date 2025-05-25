import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/navbar/Navbar"
import Home from "./pages/home/Home"
import About from "./pages/about/About"
import Footer from "./components/footer/Footer"
import Ticket from "./pages/ticket/Ticket"
import Detail from "./components/ticket/detail/Detail"


function App() {

  return (
    <>
    <Router>
       <main className="w-full flex flex-col bg-neutral-50 min-h-screen">
      {/* Navbar */}
       <Navbar />


       {/* Routing */}
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/bus-tickets" element={<Ticket />} />
      <Route path="/bus-tickets/detail" element={<Detail />} />
     
    </Routes> 


    {/*  */}
      {/* Footer */}
        <Footer />
       </main>
    </Router>
    
      
    </>
  )
}

export default App
