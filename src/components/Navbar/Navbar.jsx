import { Link } from "react-router-dom"
import CRYPTL from "../../assets/CRYPTL.png"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"
import { useState } from "react"

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <div className="py-6 px-6  md:py-6 md:px-20 text-white flex justify-between items-center">
      <div>
        <img src={CRYPTL} alt="crypt-logo" className="h-10 md:h-14" />
      </div>
      <div>
        <ul className="hidden  lg:flex items-center gap-14 text-xl font-semibold">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/coins">Coins</Link></li>
          <li><Link to="/exchange">Exchange</Link></li>
          <li><Link to="/currencyconverter">Converter</Link></li>
          <li><a href="#aboutus">About Us</a></li>
        </ul>
        <div>
          <Bars3Icon className="h-12 w-12 lg:hidden" onClick={() => setToggleMenu(true)} />
          {toggleMenu && (
            <div className="fixed top-0 left-0 w-full h-screen bg-slate-800 flex flex-col  ">
              <XMarkIcon className="h-14 w-14 m-4 flex float-right " onClick={() => setToggleMenu(false)} />
              <ul className="h-screen w-full flex flex-col gap-5 font-semibold text-3xl items-center p-14">
                <li  onClick={() => setToggleMenu(false)}><Link to="/">Home</Link></li>
                <li  onClick={() => setToggleMenu(false)}><Link to="/coins">Coins</Link></li>
                <li  onClick={() => setToggleMenu(false)}><Link to="/exchange">Exchange</Link></li>
                <li  onClick={() => setToggleMenu(false)}><Link to="/currencyconverter">CurrencyConverter</Link></li>
                {/* <li  onClick={() => setToggleMenu(false)}><a href="#aboutus">About Us</a></li> */}
                {/* <li  onClick={() => setToggleMenu(false)}><a href="contact">Contact</a></li> */}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Navbar