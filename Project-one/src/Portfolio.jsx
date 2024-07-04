import React from 'react'
import App1 from './assets/img/app-1.jpg'
import Book1 from './assets/img/books-1.jpg'
import Product1 from './assets/img/product-1.jpg'
import App2 from './assets/img/app-2.jpg'
import Book2 from './assets/img/books-2.jpg'
import Product2 from './assets/img/product-2.jpg'
import App3 from './assets/img/app-3.jpg'
import Book3 from './assets/img/books-3.jpg'
import Product3 from './assets/img/product-3.jpg'
import Brand1 from './assets/img/branding-1.jpg'
import Brand2 from './assets/img/branding-2.jpg'
import Brand3 from './assets/img/branding-3.jpg'
export const Portfolio = () => {
  return (
  <>
  <div className='sm:pl-2 md:pl-2 lg:pl-0'>
  <div className="sm:pl-10 md:pl-20 lg:pl-72  pt-36">
   <h2 className='text-4xl font-bold underline decoration-blue-400'>Portfolio</h2>
        <p className="mb-6 pt-7">Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint
            consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit
            in iste officiis commodi quidem hic quas.</p>
<div className='flex  flex-wrap pt-10 justify-around' >

            <div className="pt-8" >
                <img src={App1} className='h-80 w-80 hover:opacity-50'/>

            </div>


            <div className="pt-8">
                <img src={Book1} className='h-80 w-80 hover:opacity-50'/>

            </div>




            <div className="pt-8">
                <img src={Product1} className='h-80 w-80 hover:opacity-50'/>

            </div>





            <div className="pt-8">

                <img src={App2} className='h-80 w-80 hover:opacity-50'/>

            </div>

            <div className="pt-8">
                <img src={Book2} className='h-80 w-80 hover:opacity-50'/>

            </div>

            <div classname="pt-8">
                <img src={Product2} className='h-80 w-80 hover:opacity-50'/>

            </div>


            <div >
                <img src={App3} className='h-80 w-80 hover:opacity-50'/>
            </div>
            <div className="pt-8">
                <img src={Book3} className='h-80 w-80 hover:opacity-50'/>

            </div>




            <div className="pt-8">
                <img src={Product3} className='h-80 w-80 hover:opacity-50'/>

            </div>



            <div className="pt-8">
                <img src={Brand1} className='h-80 w-80 hover:opacity-50'/>

            </div>

            <div className="pt-8" >
                <img src={Brand2} className='h-80 w-80 hover:opacity-50'/>

            </div>



            <div className="pt-8">
                <img src={Brand3} className='h-80 w-80 hover:opacity-50'/>

            </div>
        </div></div></div>
  </>
  )
}
