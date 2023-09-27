import React from 'react'
import Image from 'next/image'

function Categories() {
  return (
    <section className="py-12 bg-white sm:py-16 lg:py-20">
    <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-md mx-auto text-center">
        <h2 class="text-3xl lg:text-4xl text-gray-800 font-bold dark:text-gray-200">
        Popular Categories
        </h2>
            <p className="mt-4 text-base font-normal leading-7 text-gray-600">Design Your Dream Home With The Perfect Furniture</p>
        </div>

        <div className="grid grid-cols-2 gap-6 mt-10 lg:mt-16 lg:gap-4 lg:grid-cols-4">
            <div className="relative group">
                <div className="overflow-hidden aspect-w-1 aspect-h-1">
                    <Image className="object-cover w-full h-full transition-all duration-300 group-hover:scale-125" src="https://res.cloudinary.com/dysxcljt2/image/upload/v1695459983/manufacturer/furniture2_geetx9.png" alt="" width={1920} height={1920} />
                </div>
                <div className="absolute left-3 top-3">
                  
                </div>
                <div className="flex items-start justify-between mt-4 space-x-4">
                    <div>
                        <h3 className="text-xs font-bold text-gray-900 sm:text-sm md:text-base">
                            <a href="#" title="">
                            Furniture For Sale
                                <span className="absolute inset-0" aria-hidden="true"></span>
                            </a>
                        </h3>
                       
                    </div>

                    <div className="text-right">
                        <p className="text-xs font-bold text-gray-900 sm:text-sm md:text-base">1500.00</p>
                    </div>
                </div>
            </div>

            <div className="relative group">
                <div className="overflow-hidden aspect-w-1 aspect-h-1">
                    <Image className="object-cover w-full h-full transition-all duration-300 group-hover:scale-125" src="https://res.cloudinary.com/dysxcljt2/image/upload/v1695459983/manufacturer/furniture1_t6z341.png" alt="" width={1920} height={1280}/>
                </div>
                <div className="flex items-start justify-between mt-4 space-x-4">
                    <div>
                        <h3 className="text-xs font-bold text-gray-900 sm:text-sm md:text-base">
                            <a href="#" title="">
                            Furniture For Sale
                                <span className="absolute inset-0" aria-hidden="true"></span>
                            </a>
                        </h3>
                        
                    </div>

                    <div className="text-right">
                        <p className="text-xs font-bold text-gray-900 sm:text-sm md:text-base">1999.00</p>
                    </div>
                </div>
            </div>

            <div className="relative group">
                <div className="overflow-hidden aspect-w-1 aspect-h-1">
                    <Image className="object-cover w-full h-full transition-all duration-300 group-hover:scale-125" src="https://res.cloudinary.com/dysxcljt2/image/upload/v1695459983/manufacturer/furniture3_jhuwkf.png" alt="" width={1920} height={1280} />
                </div>
                <div className="absolute left-3 top-3">
                    
                </div>
                <div className="flex items-start justify-between mt-4 space-x-4">
                    <div>
                        <h3 className="text-xs font-bold text-gray-900 sm:text-sm md:text-base">
                            <a href="#" title="">
                           Furniture For Sale
                                <span className="absolute inset-0" aria-hidden="true"></span>
                            </a>
                        </h3>
                       
                    </div>

                    <div className="text-right">
                        <p className="text-xs font-bold text-gray-900 sm:text-sm md:text-base">1899.00</p>
                        <del className="mt-0.5 text-xs sm:text-sm font-bold text-gray-500"> 5999.00 </del>
                    </div>
                </div>
            </div>

            <div className="relative group">
                <div className="overflow-hidden aspect-w-1 aspect-h-1">
                    <Image className="object-cover w-full h-full transition-all duration-300 group-hover:scale-125" src="https://res.cloudinary.com/dysxcljt2/image/upload/v1695459984/manufacturer/furniture4_cqpldo.png" alt="" width={1920} height={1280}/>
                </div>
                <div className="flex items-start justify-between mt-4 space-x-4">
                    <div>
                        <h3 className="text-xs font-bold text-gray-900 sm:text-sm md:text-base">
                            <a href="#" title="">
                            Furniture for Sale
                                <span className="absolute inset-0" aria-hidden="true"></span>
                            </a>
                        </h3>
                        </div>

                    <div className="text-right">
                        <p className="text-xs font-bold text-gray-900 sm:text-sm md:text-base">1799.00</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default Categories