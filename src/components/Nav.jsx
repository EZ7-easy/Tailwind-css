import { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { mainlogo } from '../assets/images/index.js'

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return(
      <div className="flex items-center w-[100%] gap-[70px] h-[120px]">
        <img src={mainlogo} className="w-[250px] h-[200px] mt-8 ml-[-20px] md:ml-[5%] md:mr-[20%] " alt=""/>
        <ul className="flex items-center gap-[5%] hidden md:flex">
          <li className="hover:text-[#2C679E] hover:ease-in hover:duration-100">
            <a className="text-xl" href="#">Home</a>
          </li>
          <li className="w-[200px] hover:text-[#2C679E] hover:ease-in hover:duration-100">
            <a className="text-xl" href="#">About Us</a>
          </li>

          <li className="hover:text-[#2C679E] hover:ease-in hover:duration-100">
            <a className="text-xl" href="#">Teams</a>
          </li>
          <li className="hover:text-[#2C679E] hover:ease-in hover:duration-100">
            <a className="text-xl" href="#">Prices</a>
          </li>
          <li className="w-[200px] hover:text-[#2C679E] hover:ease-in hover:duration-100">
            <a className="text-xl" href="#">Contact Us</a>
          </li>
          <form className="">
            <button className="bg-[#2C679E] text-white px-7 py-2 hover:bg-white hover:text-[#2C679E] hover:border-[3px] hover:border-[#2C679E] focus:outline-none focus:ring focus:ring-[#2C679E]-300 " type="submit">Get Consulting</button>
          </form>
        </ul>
        <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={30} className='text-black'/> : <AiOutlineMenu size={30} className='text-black ms-[20%]'/>}
        </div>
        <ul className={nav ? 'z-10 fixed left-0 top-0 w-[60%] h-full fill-[rgba(255,255,255,0.91)] backdrop-blur-[9.5px] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
          <img src={mainlogo} className="w-[400px] h-[200px] mt-8" alt=""/>
          <li className="hover:text-[#2C679E] hover:ease-in hover:duration-200 hover:ml-[30px] ml-[10px]">
            <a className="text-2xl" href="#">Home</a>
          </li>
          <li className="hover:text-[#2C679E] hover:ease-in hover:duration-200 hover:ml-[30px] ml-[10px]">
            <a className="text-2xl" href="#">About Us</a>
          </li>

          <li className="hover:text-[#2C679E] hover:ease-in hover:duration-200 hover:ml-[30px] ml-[10px]">
            <a className="text-2xl" href="#">Teams</a>
          </li>
          <li className="hover:text-[#2C679E] hover:ease-in hover:duration-200 hover:ml-[30px] ml-[10px]">
            <a className="text-2xl" href="#">Prices</a>
          </li>
          <li className="hover:text-[#2C679E] hover:ease-in hover:duration-200 hover:ml-[30px] ml-[10px]">
            <a className="text-2xl" href="#">Contact Us</a>
          </li>
        </ul>
      </div>
  )
}
export default Navbar;