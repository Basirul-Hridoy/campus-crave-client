import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa"

const Footer = () => {
    return (
        <div className='mt-32 relative'>
            {/*//* === Footer upper part ===*/}
            <div className='h-40 flex flex-col md:flex-row items-center justify-center md:gap-4 gap-6 bg-primary w-full wrapper rounded-md absolute -top-20 left-1/2 right-1/2 -translate-x-1/2 md:px-28 px-4s'>
                <div className=' md:w-1/2 md:text-4xl text-3xl font-semibold text-white text-center'>
                    <h2>Subscribe to Newsletter</h2>
                </div>
                <div className='border border-gray-500 p-1 flex justify-between md:w-1/2 mx-auto'>
                    <input className="flex-1 border border-[#1B8EF8] px-4 md:py-4 py-2 text-[#1B8EF8] duration-300 focus:outline-none placeholder:text-gray-600" type="text" placeholder='Search' />
                    <button className='md:px-6 py-3 bg-secondary text-white'>Subscribe</button>
                </div>
            </div>

            {/*//* === Footer lower part ===*/}
            <div className='bg-[#171F32] '>
                <div className='wrapper flex flex-col md:flex-row justify-between md:gap-8 gap-4 pt-40 pb-14 text-[#FFFFFF] px-4'>
                    <div className='md:w-96 w-full space-y-4'>
                        {/* <img src="../../public/images/navbar-logo-removebg (1).png" width={200} alt="" /> */}
                        <h2 className='text-4xl text-orange-400 font-bold flex items-center gap-2 '><img src="../public/main-logo.png" className='w-12' alt="" /> Campus <span className='text-red-500'>Crave</span></h2>
                        <p className='md:leading-9 leading-8'>
                            We denounce with righteous indi gnation and dislike men who are so beguiled and demoralized by the charms of pleasure of your moment, so blinded by desire those who fail weakness.
                        </p>
                    </div>
                    <div className='max-w-xs space-y-4'>
                        <h2 className='text-3xl font-semibold group flex flex-col'>Contact Info
                            <span className='mt-[12px] h-[3px] w-1/3 rounded-full bg-secondary transition-all duration-300'></span>
                        </h2>
                        <p className='md:leading-9 leading-8'>
                            We'd love to hear from you! Feel free to reach out for general inquiries, collaboration, or to get involved.
                        </p>
                    </div>
                    <div className='max-w-xs space-y-4'>
                        <h2 className='text-3xl font-semibold group flex flex-col'>Useful Links
                            <span className='mt-[12px] h-[3px] w-1/2 rounded-full bg-secondary transition-all duration-300'></span>
                        </h2>
                        <div className='my-3 flex flex-col md:gap-3 gap-2'>
                            <Link href={'#'} className='hover:text-primaryCol duration-300'>Home</Link>
                            <Link href={'#'} className='hover:text-primaryCol duration-300'>About</Link>
                            <Link href={'#'} className='hover:text-primaryCol duration-300'>Contact</Link>
                            <Link href={'#'} className='hover:text-primaryCol duration-300'>Explore</Link>
                        </div>
                    </div>
                    <div className='space-y-4 '>
                        <li className='text-3xl font-semibold group flex flex-col'>Update News <span className='mt-[12px] h-[3px] w-1/3 rounded-full bg-secondary transition-all duration-300'></span></li>
                        <div>
                            <img src="" alt="" />
                            <div className='space-y-2'>
                                <p>University While The Lovely Valley Team Work</p>
                                <p>September 20, 2020</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/*//* ===== Copyright seciton =======*/}
                <div className='pb-14 px-4 md:px-0'>
                    <p className='wrapper border-b border-gray-600 mb-4'></p>
                    <div className='md:flex space-y-3 md:space-y-0 justify-between wrapper text-white'>
                        <p>© 2020 All Rights Reserved. Developed By Campus crave</p>
                        <div className='flex gap-2 '>
                            <a href="#facebook"><FaFacebook className='inline mx-2 text-2xl hover:scale-105' /></a>
                            <a href="#intagram"><FaInstagram className='inline mx-2 text-2xl hover:scale-105' /></a>
                            <a href="#youtube"><FaYoutube className='inline ml-2 text-2xl hover:scale-105' /></a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Footer;