import React from 'react'

export const Skill = () => {
  return (
    
    <div className=" pt-20 sm:pl-2 md:pl-2 lg:pl-72">
      <h2 className='text-4xl font-bold underline decoration-blue-400  '>Skills</h2>
      <p className="mb-6 pt-7">Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      <div className="space-y-6 pt-7">
        <div className='sm:flex-shrink md:flex-shrink lg:flex-grow'>
          <div className="flex justify-between mb-2">
            <p className="font-medium">HTML</p>
            <p>100%</p>
          </div>
          <div className="w-full bg-gray-200 h-2 rounded">
            <div className="bg-blue-600 h-2 rounded" style={{ width: '100%' }}></div>
          </div>
        </div>
        <div>
          <div className="flex justify-between mb-2">
            <p className="font-medium">CSS</p>
            <p>90%</p>
          </div>
          <div className="w-full bg-gray-200 h-2 rounded">
            <div className="bg-blue-600 h-2 rounded" style={{ width: '90%' }}></div>
          </div>
        </div>
        <div>
          <div className="flex justify-between mb-2">
            <p className="font-medium">JavaScript</p>
            <p>75%</p>
          </div>
          <div className="w-full bg-gray-200 h-2 rounded">
            <div className="bg-blue-600 h-2 rounded" style={{ width: '75%' }}></div>
          </div>
        </div>
        <div>
          <div className="flex justify-between mb-2">
            <p className="font-medium">PHP</p>
            <p>60%</p>
          </div>
          <div className="w-full bg-gray-200 h-2 rounded">
            <div className="bg-blue-600 h-2 rounded" style={{ width: '60%' }}></div>
          </div>
        </div>
        <div>
          <div className="flex justify-between mb-2">
            <p className="font-medium">WordPress</p>
            <p>90%</p>
          </div>
          <div className="w-full bg-gray-200 h-2 rounded">
            <div className="bg-blue-600 h-2 rounded" style={{ width: '90%' }}></div>
          </div>
        </div>
        <div>
          <div className="flex justify-between mb-2">
            <p className="font-medium">Photoshop</p>
            <p>55%</p>
          </div>
          <div className="w-full bg-gray-200 h-2 rounded">
            <div className="bg-blue-600 h-2 rounded" style={{ width: '55%' }}></div>
          </div>
        </div>
      </div>
    </div>
  )
}
