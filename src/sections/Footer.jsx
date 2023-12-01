import { copyrightSign } from "../assets/icons";
import {footerLogo, loc, mail, mainlogo, phone} from "../assets/images";
import { footerLinks, socialMedia } from "../constants/index1";
import { FaInstagram, FaFacebook, FaTwitter, FaPinterest } from 'react-icons/fa'

const Footer = () => {
    return (
        <section className='bg-[#37393F]'>
            <div className='text-white'>
                <div className="w-full max-w-screen-xl mx-auto p-4 md:py-4">
                    <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                        <img src={mainlogo} className="w-[180px] h-[130px]" alt="Flowbite Logo" />
                        <ul className="flex flex-wrap text-white items-center mb-6 text-sm font-medium sm:mb-0 dark:text-gray-400">
                            <li className='ml-10'>
                                <img src={phone} alt='phone'/>
                                <a href='/' className='text-lg'>Call us</a> <br/>
                                <span>+01 569 896 654</span>
                            </li>
                            <li className='ml-10'>
                                <img src={mail} alt='mail'/>
                                <a href='/' className='text-lg'>Mail us</a> <br/>
                                Info@Example.com
                            </li>
                            <li className='ml-10'>
                                <img src={loc} alt='location'/>
                                <a href='/' className='text-lg'>Location</a> <br/>
                                Amsterdam, 109-74
                            </li>
                        </ul>
                    </div>
                    <hr className="border-[#6C6D72] sm:mx-auto dark:border-[#6C6D72] lg:my-8" />
                    <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                        <span className='text-2xl text-[#40DDB6]'><strong>Quick Link</strong></span>
                        <div>
                            <ul className="flex flex-wrap text-white items-center mb-6 text-md font-medium sm:mb-0 dark:text-gray-400">
                                <li className='ml-10'>
                                    <span>Home</span>
                                </li>
                                <li className='ml-10'>
                                    <span>About Us</span>
                                </li>
                                <li className='ml-10'>
                                    <span>Teams</span>
                                </li>
                                <li className='ml-10'>
                                    <span>Prices</span>
                                </li>
                                <li className='ml-10'>
                                    <span>Contact Us</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <hr className="border-[#6C6D72] sm:mx-auto dark:border-[#6C6D72] lg:my-8" />
                </div>
            </div>
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span className="text-md text-white sm:text-center dark:text-white">Copyright © <a href='/' className='text-[#40DDB6]'>WhiteCollar</a> | Designed by <a href='/' className='text-[#6B77E5]'>VictorFlow</a> Templates - Powered by Webflow
    </span>
                <ul className="text-white flex flex-wrap  mt-3 text-md font-medium dark:text-gray-400 sm:mt-0">
                    <li>
                        <a href="#" className="hover:underline  md:me-6">Follow: </a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline  md:me-6"><FaInstagram/></a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline  md:me-6"><FaFacebook/></a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline  md:me-6"><FaTwitter/></a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline  md:me-6"><FaPinterest/></a>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Footer;