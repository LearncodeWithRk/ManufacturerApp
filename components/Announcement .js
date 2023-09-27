import React from 'react'

function Announcement () {
  return (

   
    <div className="bg-gradient-to-r from-blue-600 via-blue-600 to-blue-600">
      <div className="max-w-[85rem] px-4 py-4 sm:px-6 lg:px-8 mx-auto">
      
        <div className="grid justify-center md:grid-cols-2 md:justify-between md:items-center gap-2">
          <div className="text-center md:text-left">
            <p className="text-xs text-white/[.8] uppercase tracking-wider">
              Furniture For Saleing
            </p>
            <p className="mt-1 text-white font-medium">
            Get Discount From Membership
            </p>
          </div>
      
    
          <div className="mt-3 text-center md:text-left md:flex md:justify-end md:items-center">
            <a className="py-3 px-6 inline-flex justify-center items-center gap-2 rounded-full font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm" href="#">
            BOOK NOW
            </a>
          </div>
        
        </div>
      
      </div>
    </div>
  


  

  )
}

export default Announcement