import { headerLogo, mainlogo } from '../assets/images'
import { hamburger } from '../assets/icons'
import {navLinks} from '../constants/index1'
function Nav() {
  return (
      <section className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-0'>
          <img src={mainlogo} className="w-180px h-[130px]" alt="Flowbite Logo"/>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#" className='text-lg'>Teams</a>
            </li>
            <li>
              <a href="#" className='text-lg'>Prices</a>
            </li>
            <li>
              <a href="#" className='text-lg'>Contact Us</a>
            </li>
            <li>
              <a href="#" className='border-0 bg-[#6B77E5] p-4 ml-6'>Get Consulting</a>
            </li>
          </ul>
        </div>
      </section>
  )
}

export default Nav