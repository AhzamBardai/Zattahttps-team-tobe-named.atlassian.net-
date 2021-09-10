import React from 'react'
import zattaSignup from '../../Videos/Zatta Signup Cropped.gif'

function LandingTwo() {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="grid gap-12 row-gap-8 lg:grid-cols-2 ">
                
                <div className=''>
                    <img
                        className="object-contain w-full h-56 rounded-lg  sm:h-96 transform hover:scale-110 transition duration-500"
                        src={zattaSignup}
                        alt=""
                        />
                </div>


                <div className="flex flex-col justify-center">
                    <div className="max-w-xl mb-6 sm:mt-15">

                        <div className="flex-shrink-0">
                            <div className="flex items-center  justify-center h-12 w-12 rounded-md bg-black text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill='currentColor'viewBox="0 0 24 24">
                                    <path d="M8.793 8.951c1.062-.757 2.542-.239 2.912 1-.655-.502-1.528-.482-2.2-.002-.677.482-.976 1.303-.716 2.082-1.05-.755-1.055-2.325.004-3.08zm3.164 10.8c.841.283 3.443 1.003 6.458 3.249l5.585-3.984c-1.448-2.031-1.05-3.452-2.489-5.471-.726-1.017-1.222-1.294-1.845-1.294-.22 0-.456.035-.724.084l.507.71c.306.428-.34.889-.646.46l-.452-.634c-.149-.21-.357-.281-.596-.281-.345 0-.753.148-1.141.237l.615.862c.304.428-.34.889-.646.46l-.533-.747c-.148-.208-.353-.28-.586-.28-.359 0-.787.17-1.186.271l.65.912c.306.429-.343.887-.646.46l-2.638-3.693c-.817-1.148-2.612.07-1.765 1.259l3.895 5.461c-.418-.154-1.152-.295-1.632-.295-1.481.003-2.051 1.628-.185 2.254zm-2.715-2.751h-6.242v-14h18v7.516c1.359.555 2.391 2.046 3 3.372v-10.888c0-1.104-.896-2-2-2h-20c-1.104 0-2 .896-2 2v14c0 1.104.896 2 2 2h6.825c-.111-.69.002-1.358.417-2z"/>
                                </svg>
                            </div>
                        </div>
                
                
                        <h2 className="flex-row max-w-lg mt-6 mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                            Sign Up
                        </h2>

                        <p className="text-base text-gray-700 md:text-lg">
                            Click the Sign Up Button to create an account with a username and password.
                        </p>

                    </div>
            
                </div>


            </div>
        </div>
)
}

export default LandingTwo
