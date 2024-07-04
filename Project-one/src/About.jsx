import React from 'react';
import AboutImg from './assets/img/hero.webp';
import '@fortawesome/fontawesome-free/css/all.min.css';

export const About = () => {
  return (
    <>
      <div className='sm:pl-2 md:pl-2 lg:pl-42'>
        <div className='pl-4 sm:pl-10 md:pl-20 lg:pl-72 pt-16'>
          <h2 className='text-4xl font-bold underline decoration-blue-400'>About</h2>
          <p className='pt-8 text-lg'>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>
        <div className='pl-4 sm:pl-10 md:pl-20 lg:pl-72 pt-16  sm:flex-none md:flex-none lg:flex'>
          <div className='flex-none'>
            <img src={AboutImg} className='h-96 w-96' alt='About' />
          </div>
          <div className='pl-4 sm:pl-10 md:pl-20 sm:pt-10 md:pt-10 lg:pt-0'>
            <h2 className='text-2xl font-semibold'>UI/UX Designer & Web Developer.</h2>
            <p className='pt-4 text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div className='flex pt-6 leading-loose'>
              <ul className='w-1/2'>
                <li><i className="fa-solid fa-arrow-right list_icon"></i><b> Birthday: </b>1 May 1995</li>
                <li><i className="fa-solid fa-arrow-right list_icon"></i><b> Website: </b>www.example.com</li>
                <li><i className="fa-solid fa-arrow-right list_icon"></i><b> Phone: </b>+123 456 7890</li>
                <li><i className="fa-solid fa-arrow-right list_icon"></i><b> City: </b>New York, USA</li>
              </ul>
              <ul className='w-1/2'>
                <li><i className="fa-solid fa-arrow-right list_icon"></i><b> Age: </b>30</li>
                <li><i className="fa-solid fa-arrow-right list_icon"></i><b> Degree: </b>Master</li>
                <li><i className="fa-solid fa-arrow-right list_icon"></i><b> Email: </b>email@example.com</li>
                <li><i className="fa-solid fa-arrow-right list_icon"></i><b> Freelance: </b>Available</li>
              </ul>
            </div>
            <p className='pt-4 text-lg'>Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis. Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque.</p>
          </div>
        </div>
        <div className='pl-4 sm:pl-10 md:pl-20 lg:pl-72 pt-40 lg:flex justify-around sm:flex-none md:flex-none '>
          <div className=' flex'>
            <i className="fa-regular fa-face-smile text-sky-600 text-5xl"></i>
            <p><b className='text-5xl'>232<br /></b><span className='text-lg'>Happy clients<br /></span> <span className='text-gray-400'>consequuntur quae</span></p>
          </div>
          <div className='flex sm:pt-7 md-pt-7 lg:pt-0 '>
            <i className="fa-solid fa-list-check text-sky-600 text-5xl"></i>
            <p><b className='text-5xl'>521<br /></b><span className='text-lg'>Projects adipisci atque<br /></span> <span className='text-gray-400'>cum quia aut</span></p>
          </div>
          <div className='flex sm:pt-7 md-pt-7 lg:pt-0 '>
            <i className="fa-solid fa-headphones text-sky-600 text-5xl"></i>
            <p><b className='text-5xl'>1453<br /></b><span className='text-lg'>Hours Of Support aut<br /></span> <span className='text-gray-400'>commodi quaerat</span></p>
          </div>
          <div className='flex sm:pt-7 md-pt-7 lg:pt-0 '>
            <i className="fa-regular fa-user text-sky-600 text-5xl"></i>
            <p><b className='text-5xl'>32<br /></b><span className='text-lg'>Hard Workers rerum<br /></span> <span className='text-gray-400'> asperiores dolor</span></p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
