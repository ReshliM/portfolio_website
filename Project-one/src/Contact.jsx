import React from 'react'

export const Contact = () => {
  return (
   <>
   <div className='sm:pl-2 md:pl-2 lg:pl-0'>
   <div className="sm:pl-10 md:pl-20 lg:pl-72 lg:pt-20">
   <h2 className='text-4xl font-bold underline decoration-blue-400'>Contact</h2>
        <p className="mb-6 pt-7">Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
        <div className="lg:flex justify-around sm:flex-none  md:flex-none">
            <div  className='bg-sky-100'>

                <div className='pt-10 pl-8'>
          <div>          <i className="fa-solid fa-location-dot text-2xl text-sky-500  hover:text-white border p-3 rounded-full pl-5 pr-5 bg-white hover:bg-sky-500 "></i><span className='pl-9 text-2xl '>Address</span> <p className='pl-20'>A198 Album Street, New York, NY 535022</p></div>
          <div className='pt-10'>        <i className="fa-solid fa-phone text-2xl text-sky-500  hover:text-white border p-3 rounded-full pl-5 pr-5 bg-white hover:bg-sky-500 "></i><span className='pl-9 text-2xl '>Call Us</span><p className='pl-20'>+1 2345 5598758 55</p></div>
          <div className='pt-10'>       <i className="fa-solid fa-envelope text-2xl text-sky-500  hover:text-white border p-3 rounded-full pl-5 pr-5 bg-white hover:bg-sky-500"></i><span className='pl-9 text-2xl '>Email Us</span><p className='pl-20'>info@example.com</p></div>



                </div>
                <div className='pt-20'>
                <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63188.97635583575!2d77.37383232367208!3d8.171387977804555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b04f0dfc0ddc7b7%3A0x809a9e32a95d3ed1!2sNagercoil%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1719207923059!5m2!1sen!2sin"
  width="550"
  height="250"
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>

                </div>

            </div>
            <div  >
            <div>
  <form>
    <div>
      <table>
        <tr>
          <td>
            <div className='sm:pt-20 md:pt-20 lg:pt-0 '>
              <p className='text-xl'>
                <label htmlFor="name">Your Name</label>
              </p>
              <input type="text" id="name" className='w-full p-4 border border-gray-900 rounded h-10' />
            </div>
          </td>
          <td>
            <div className='pl-9 sm:pt-20 md:pt-20 lg:pt-0'>
              <p className='text-xl'>
                <label htmlFor="email">Your Email</label>
              </p>
              <input type="text" id="email"  className='w-full p-4 border border-gray-900 rounded h-10'/>
            </div>
          </td>
        </tr>
      </table>
      <div className='pt-10'>
        <p className='text-xl'>
          <label htmlFor="subject">Subject</label>
        </p>
        <input type="text" id="subject"  className='w-full p-4 border border-gray-900 rounded h-10'/>
      </div>
      <div className='pt-10'>
        <p className='text-xl'>
          <label htmlFor="message">Message</label>
        </p>
        <textarea id="message" rows="15" cols="75"  className="  border-2 border-gray-400 p-4 " ></textarea>
      </div>
      <div className='pt-10 text-center'>
        <button className='border-2 p-4 bg-sky-500 rounded-lg text-white'>Send Message</button>
      </div>
    </div>
  </form>
</div>
</div>


        </div>
</div></div>
   </>
  )
}
