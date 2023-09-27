import React from 'react'

function About() {
  return (
<>
<div className="relative overflow-hidden">
  <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10">
    <div className="max-w-2xl text-center mx-auto">
      <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl md:text-5xl dark:text-white">Best Designs Of Saleing <span className="text-blue-600">Funiture Collection</span></h1>
      <p className="mt-3 text-lg text-gray-800 dark:text-gray-400">Get Discount From Membership</p>
    </div>

    <div className="mt-10 relative max-w-5xl mx-auto">
      <div className="w-full object-cover h-96 sm:h-[480px] bg-[url('https://res.cloudinary.com/dysxcljt2/image/upload/v1695453187/manufacturer/pexels-martin-p%C3%A9chy-1866149_1_ltl3lo.jpg')] bg-no-repeat bg-center bg-cover rounded-xl"></div>

      <div className="absolute inset-0 w-full h-full">
        <div className="flex flex-col justify-center items-center w-full h-full">
          <a className="inline-flex justify-center items-center gap-x-1.5 text-center text-sm bg-white text-gray-800 hover:text-gray-600 rounded-full transition focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white  py-3 px-4 dark:bg-black dark:text-gray-200 dark:hover:text-gray-400 dark:focus:ring-offset-black" href="#">
            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M10.804 8 5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z"/>
            </svg>
            Play the overview
          </a>
        </div>
      </div>

      <div className="absolute bottom-12 -left-20 -z-[1] w-48 h-48 bg-gradient-to-b from-orange-500 to-white p-px rounded-lg dark:to-slate-900">
        <div className="bg-white w-48 h-48 rounded-lg dark:bg-slate-900"></div>
      </div>

      <div className="absolute -top-12 -right-20 -z-[1] w-48 h-48 bg-gradient-to-t from-blue-600 to-cyan-400 p-px rounded-full">
        <div className="bg-white w-48 h-48 rounded-full dark:bg-slate-900"></div>
      </div>
    </div>
  </div>
</div>

<section className="py-10 bg-white sm:py-16 lg:py-2">
    <div className="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
      
        <div className="flow-root mt-12 sm:mt-16">
            <div className="divide-y divide-gray--200 -my-9">
                <div className="py-9">
                    <p className="text-xl font-semibold text-black">How to create an account?</p>
                    <p className="mt-3 text-base text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    <p className="mt-3 text-base text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>

                <div className="py-9">
                    <p className="text-xl font-semibold text-black">What payment method do you support?</p>
                    <p className="mt-3 text-base text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam.</p>
                </div>

                <div className="py-9">
                    <p className="text-xl font-semibold text-black">What payment method do you support?</p>
                    <p className="mt-3 text-base text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>

                <div className="py-9">
                    <p className="text-xl font-semibold text-black">How do you provide support?</p>
                    <p className="mt-3 text-base text-gray-600">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt <a href="#" title="" className="text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline">support@learncodewithrk.com</a>
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>
</>


  )
}

export default About