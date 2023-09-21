import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Home from "./components/Home/Home"
import Coins from "./components/Coins/Coins"
import Exchange from "./components/Exchange/Exchange"
import CurrencyConverter from "./components/CurrencyConverter/CurrencyConverter"
import Footer from "./components/Footer/Footer"


function App() {

  return (
    <div className="bg-gradient-to-r from-gray-900 via-purple-900 to-violet-600 transition-all">
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/coins" element={<Coins />}/>
      <Route path="/exchange" element={<Exchange />}/>
      <Route path="/currencyconverter" element={<CurrencyConverter />}/>
    </Routes>
    <Footer />
    </div>
  )
}

export default App
