/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable react/prop-types */
import { useState } from 'react';
import Icon from '../Elements/Icon';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AuthLayout = ({ children }) => {
    AOS.init();

    const [open, setShowOpen] = useState(false);

    const scrollToTop = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth'
            })
        }
    }

    const handleClick = (id, e) => {
        e.preventDefault();
        scrollToTop(id);
      };

    const handleToggle = () => {
        setShowOpen(!open);
    }

    return (
        <div className='w-full bg-baseColor1'>
            <header className="bg-baseColor2 top-0 left-0 w-full xl:flex xl:justify-center font-inter fixed z-30 h-24 md:h-20" data-aos="fade-down">
                <div className="w-full xl:w-3/5 h-full flex justify-center xl:justify-between items-center">
                <div className='w-full flex justify-between xl:justify-start items-center'>
                    <img src="/images/logo.png" alt="CodeExpress" className="w-36 -ms-2" />
                    <div className='mr-3 lg:hidden'>
                        {open ? (
                            <Icon style="fas fa-times text-2xl mr-2 cursor-pointer text-baseColor4" handleIcon={handleToggle}></Icon>
                        ) : (
                            <Icon style="fas fa-bars text-2xl mr-2 cursor-pointer text-baseColor4" handleIcon={handleToggle}></Icon>
                        )}
                    </div>
                </div>
                {open && (
                    <nav className="bg-baseColor4 w-full mt-72 md:mt-96 absolute xl:hidden">
                        <ul className='text-white flex flex-col font-bold md:text-xl'>
                            <a href="#home" onClick={(e) => handleClick("home", e)}>
                                <li className='hover:bg-baseColor1 hover:text-baseColor4 w-full p-2 md:p-4 px-4'>Home</li>
                            </a>
                            <a href="#about" onClick={(e) => handleClick("about", e)}>
                                <li className='hover:bg-baseColor1 hover:text-baseColor4 w-full p-2 md:p-4 px-4'>About Us</li>
                            </a>
                            <a href="#product" onClick={(e) => handleClick("product", e)}>
                                <li className='hover:bg-baseColor1 hover:text-baseColor4 w-full p-2 md:p-4 px-4'>Products</li>
                            </a>
                            <a href="#team" onClick={(e) => handleClick("team", e)}>
                                <li className='hover:bg-baseColor1 hover:text-baseColor4 w-full p-2 md:p-4 px-4'>Our Team</li>
                            </a>
                            <a href="#contact" onClick={(e) => handleClick("contact", e)}>
                                <li className='hover:bg-baseColor1 hover:text-baseColor4 w-full p-2 md:p-4 px-4'>Contact Us</li>
                            </a>
                        </ul>
                    </nav>
                )}

                    <nav className="hidden w-full lg:block">
                        <ul className='text-baseColor4 flex font-bold justify-center items-center gap-x-3'>
                            <a href="#home" onClick={(e) => handleClick("home", e)} className='flex justify-center items-center w-28'>
                                <li className='hover:scale-125 duration-300 rounded-lg p-3'>Home</li>
                            </a>
                            <a href="#about" onClick={(e) => handleClick("about", e)} className='flex justify-center items-center w-28'>
                                <li className='hover:scale-125 duration-300 rounded-lg p-3'>About Us</li>
                            </a>
                            <a href="#product" onClick={(e) => handleClick("product", e)} className='flex justify-center items-center w-28'>
                                <li className='hover:scale-125 duration-300 rounded-lg p-3'>Products</li>
                            </a>
                            <a href="#team" onClick={(e) => handleClick("team", e)} className='flex justify-center items-center w-28'>
                                <li className='hover:scale-125 duration-300 rounded-lg p-3'>Our Team</li>
                            </a>
                            <a href="#contact" onClick={(e) => handleClick("contact", e)} className='flex justify-center items-center w-28'>
                                <li className='hover:scale-125 duration-300 rounded-lg p-3'>Contact Us</li>
                            </a>
                        </ul>
                    </nav>
                </div>
            </header>

            <main className='flex flex-col gap-y-10 overflow-x-hidden overflow-y-hidden'>
                {children}

                <div className='fixed bottom-5 right-5 bg-green-500 rounded-full w-10 h-10 flex justify-center items-center md:w-11 md:h-11'>
                    <a href="https://wa.me/+6281222535507">
                        <Icon style="fab fa-whatsapp text-white text-2xl lg:text-3xl" />
                    </a>
                </div>
            </main>

            <footer className="bg-baseColor2 text-black flex flex-col gap-y-5 w-full">
                <section className='flex flex-col md:flex-row gap-y-5 md:gap-x-10 lg:justify-between xl:w-3/5 xl:self-center p-3 md:p-5'>
                    <div>
                        <img src="/images/logotext.png" alt="CodeExpress" className="w-52 -mt-20 -ms-10" />
                        <p className="-mt-20">Mari wujudkan impian kalian bersama CodeExpress</p>
                    </div>

                    <hr className='md:hidden border-baseColor3' />

                    <div className="flex flex-col gap-y-3">
                        <div className="flex flex-col gap-y-1">
                            <h1 className="text-xl font-semibold">Menu Kami</h1>
                            <hr className="w-20 rounded-xl border-baseColor3 border-2 border-y-2" />
                        </div>
                        <ul className="flex flex-col gap-y-2">
                            <li className="hover:text-baseColor3">Home</li>
                            <li className="hover:text-baseColor3">About Us</li>
                            <li className="hover:text-baseColor3">Product</li>
                            <li className="hover:text-baseColor3">Team</li>
                            <li className="hover:text-baseColor3">Contact Us</li>
                        </ul>
                    </div>

                    <hr className='md:hidden border-baseColor3' />

                    <div className="flex flex-col gap-y-3">
                        <div className="flex flex-col gap-y-1">
                            <h1 className="text-xl font-semibold">Hubungi Kami</h1>
                            <hr className="w-20 rounded-xl border-baseColor3 border-2 border-y-2" />
                        </div>
                        <ul className="flex flex-col gap-y-3">
                            <li className="flex gap-x-3 items-center">
                            <img src="/images/email.png" alt="Email" className="w-6" />
                            <p>codeexpress@gmai.com</p>
                            </li>
                            <li className="flex gap-x-3 items-center">
                            <i className="fab fa-whatsapp text-2xl text-green-600 hover:text-red"></i>
                            <p>+62 858 66244363</p>
                            </li>
                        </ul>
                    </div>
                </section>

                <div className="text-center flex justify-center items-start bg-baseColor4 p-3 text-white">
                    <p className="text-sm md:text-lg md:-mt-3 lg:mt-1">© Copyright 2024. All Rights Reserved by CodeExpress</p>
                </div>
            </footer>
        </div>
    )
}

export default AuthLayout;