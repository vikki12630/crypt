import { Link } from "react-router-dom"
import logo from "../../assets/CRYPTL.png"
import { FaGithub, FaLinkedin, FaGoogle } from "react-icons/fa6";


const Footer = () => {
  return (
    <div className="w-full md:h-60 flex flex-col items-center text-center text-3xl font-semibold gap-5 mt-10 p-10 md:flex-row justify-evenly">
      <div>
        <img src={logo} alt="logo" />
      </div>
      <ul className="w-1/2 md:flex md:flex-wrap md:gap-8 text-center">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/coins">Coins</Link></li>
          <li><Link to="/exchange">Exchange</Link></li>
          <li><Link to="/currencyconverter">Converter</Link></li>
          <li><a href="#aboutus">About Us</a></li>
        </ul>
      
      <div className="w-full md:w-0">
      <ul className="w-full flex text-5xl justify-around md:flex-col md:gap-2">
          <li><a href="https://github.com/vikki12630"><FaGithub /></a></li>
          <li><a href="https://www.linkedin.com/in/vikas-singh-3a4904290/"><FaLinkedin/></a></li>
          <li><a href="vikas7490@gmail.com"><FaGoogle /></a></li>
        </ul>
      </div>
    </div>
  )
}

export default Footer