import React from 'react';

const Card = () =>{
    return(
        <div className="grid grid-cols-12 gap-6 mt-5">
                                    <a className="transform  hover:scale-105 transition duration-300 shadow-xl rounded-lg col-span-12 sm:col-span-6 xl:col-span-3 intro-y bg-white"
                                        href="#Card">
                                        <div className="p-5">
                                            <div className="flex justify-between">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-blue-400"
                                                    fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        stroke-width="2"
                                                        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                                </svg>
                                                <div
                                                    className="bg-green-500 rounded-full h-6 px-2 flex justify-items-center text-white font-semibold text-sm">
                                                    <span className="flex items-center">30%</span>
                                                </div>
                                            </div>
                                            <div className="ml-2 w-full flex-1">
                                                <div>
                                                    <div className="mt-3 text-3xl font-bold leading-8">4.510</div>

                                                    <div className="mt-1 text-base text-gray-600">Item Sales</div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                    
                                    
                                    
                                </div>
    )
}

export default Card;