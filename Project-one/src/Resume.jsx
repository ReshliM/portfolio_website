import React from 'react'

export const Resume = () => {
  return (
    <>
   <div className='sm:pl-2 md:pl-2 lg:pl-10'>
        <div className='pl-4 sm:pl-10 md:pl-20 lg:pl-72 pt-16'>
          <h2 className='text-4xl font-bold underline decoration-blue-400'>Resume</h2>
          <p className="mb-6 pt-7">Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint
            consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit
            in iste officiis commodi quidem hic quas.</p>
        </div>
        
        <div className='pl-4 sm:pl-10 md:pl-20 lg:pl-72 pt-16'>
          <div className='lg:flex'>
            <div className='lg:w-1/2 w-full mb-10 lg:mb-0'>
              <div>
                <h3 className='text-3xl pb-4 font-semibold'>Summary</h3>
                <div className='border-l-2 border-sky-500 pl-5 space-y-4'>
                  <h4 className='font-semibold text-lg text-gray-500'>JOSHUA AARON</h4>
                  <p className='text-base italic'>Innovative and deadline-driven Graphic Designer with 3+ years of 
                    designing and developing user-centered digital/print marketing material from initial
                    concept to final, polished deliverable.</p>
                  <ul className='list-disc pl-5'>
                    <li>Portland par 127,Orlando, FL</li>
                    <li>(123) 456-7891</li>
                    <li>alice.barkley@example.com</li>
                  </ul>
                </div>
              </div>

              <div className='mt-8'>
                <h3 className='text-3xl pb-4 font-semibold'>Education</h3>
                <div className='border-l-2 border-sky-500 pl-5 space-y-4'>
                  <div>
                    <h4 className='font-semibold text-lg text-gray-500'>MASTER OF FINE ARTS & GRAPHIC DESIGN</h4>
                    <span className='font-bold font-mono'>2015 - 2016</span>
                    <p className='text-lg italic'>Rochester Institute of Technology, Rochester, NY</p>
                    <p className='text-base italic'>Deserunt veniam. Et sed aliquam labore tempore sed quisquam iusto autem sit. Ea vero voluptatum qui ut dignissimos deleniti nerada porti sand markend.</p>
                  </div>
                  <div>
                    <h4 className='font-semibold text-lg text-gray-500'>BACHELOR OF FINE ARTS & GRAPHIC DESIGN</h4>
                    <span className='font-bold font-mono'>2010 - 2014</span>
                    <p className='text-lg italic'>Rochester Institute of Technology, Rochester, NY</p>
                    <p className='text-base italic'>Quia nobis sequi est occaecati aut. Repudiandae et iusto quae reiciendis et quis. Eius vel ratione eius unde vitae rerum voluptates asperiores voluptatem. Earum molestiae consequatur neque etlon sader mart dila.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className='lg:w-1/2 w-full'>
              <div>
                <h3 className='text-2xl pb-4 font-semibold'>Professional Experience</h3>
                <div className='border-l-2 border-sky-500 pl-5 space-y-4'>
                  <div>
                    <h4 className='font-semibold text-lg text-gray-500'>SENIOR GRAPHIC DESIGN SPECIALIST</h4>
                    <span className='font-bold font-mono'>2019 - Present</span>
                    <p className='text-lg italic'>Experion, New York, NY</p>
                    <ul className='list-disc pl-5'>
                      <li>Lead in the design, development, and implementation of the graphic, layout, and production communication materials</li>
                      <li>Delegate tasks to the 7 members of the design team and provide counsel on all aspects of the project.</li>
                      <li>Supervise the assessment of all graphic materials in order to ensure quality and accuracy of the design</li>
                      <li>Oversee the efficient use of production project budgets ranging from $2,000 - $25,000</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className='font-semibold text-lg text-gray-500'>GRAPHIC DESIGN SPECIALIST</h4>
                    <span className='font-bold font-mono'>2017 - 2018</span>
                    <p className='text-lg italic'>Stepping Stone Advertising, New York, NY</p>
                    <ul className='list-disc pl-5'>
                      <li>Developed numerous marketing programs (logos, brochures, infographics, presentations, and advertisements).</li>
                      <li>Managed up to 5 projects or tasks at a given time while under pressure</li>
                      <li>Recommended and consulted with clients on the most appropriate graphic design</li>
                      <li>Created 4+ design presentations and proposals a month for clients and account managers</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>    
     </>
  )
}
