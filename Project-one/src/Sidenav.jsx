import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import AboutImg from './assets/img/side.jpg';
import { Link } from 'react-router-dom';

export const Sidenav = () => {
  const [open, setOpen] = useState(false);
  
  const change = () => {
    setOpen(!open);
  }

  return (
    <>
      <div className={`${open ? "fixed" : "hidden"} md:fixed lg:block`}>
        <div className="bg-black w-64 text-white overflow-y-auto h-full fixed top-0 left-0 ">
          <img src={AboutImg}  className='ml-10 rounded-full h-48 w-40' alt="About" />
          <h4 className='text-3xl font-bold pl-2 pt-5 pb-5 ml-7'>  Joshua Aaron</h4>
          <div className="pt-3 text-2xl flex justify-around ">
            <a href="https://x.com/?lang=en" className='hover_icon'><i className="fa-brands fa-x-twitter"></i></a>
            <a href="https://www.facebook.com/" className='hover_icon'><i className="fa-brands fa-facebook"></i></a>
            <a href="https://api.linkedin.com/login" className='hover_icon'><i className="fa-brands fa-linkedin-in"></i></a>
            <a href="https://www.instagram.com/accounts/login/?hl=en" className='hover_icon'><i className="fa-brands fa-instagram"></i></a>
            <a href="https://in.pinterest.com/" className='hover_icon'><i className="fa-brands fa-pinterest-p"></i></a>
          </div>

          <div>
            <ul className='pl-14 text-lg'>
              <div className='pt-9 hover:text-sky-600'>
                <li>
                <Link to="/"><i className="fa-solid fa-house"></i><span className='pl-5'>Home</span></Link>
                </li>
              </div>
              <div className='pt-9 hover:text-sky-600'>
                <li>
                <Link to="/about"><i className="fa-regular fa-user"></i><span className='pl-5'>About</span></Link>
                </li>
              </div>
              <div className='pt-9 hover:text-sky-600'>
                <li>
                <Link to="/skill"><i className="fa-solid fa-heart"></i><span className='pl-5'>Skills</span></Link>
                </li>
              </div>
              <div className='pt-9 hover:text-sky-600'>
                <li>
                <Link to="/resume"><i className="fa-regular fa-file"></i><span className='pl-5'>Resume</span></Link>
                </li>
              </div>
              <div className='pt-9 hover:text-sky-600'>
                <li>
                <Link to="/portfolio"><i className="fa-regular fa-image"></i><span className='pl-5'>Portfolio</span></Link>
                </li>
              </div>
              <div className='pt-9 hover:text-sky-600'>
                <li>
                <Link to="/service"><i className="fa-solid fa-server"></i><span className='pl-5'>Services</span></Link>
                </li>
              </div>
              <div className='pt-9 hover:text-sky-600'>
                <li>
                <Link to="/contact"><i className="fa-solid fa-phone"></i><span className='pl-5'>Contact</span></Link>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </div>
      <div className=' fixed'>
        <button onClick={change} className='lg:hidden'>
          <div className='text-right pr-20 text-2xl text-cyan-50 mt-9 rounded-full'>
            <span className='border border-sky-400 pl-5 pr-5 pt-4 pb-4 rounded-full bg-sky-400'>
              <i className="fa-solid fa-bars"></i>
            </span>
          </div>
        </button>
      </div>
    </>
  );
}
