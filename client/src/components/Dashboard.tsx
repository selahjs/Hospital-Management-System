import { useState } from "react";
import React from "react";
import { DashboardHeader } from ".";
import { Calendar,Chat,Setting,User,Search,Chart,Folder,Chart_fill,logo } from "../utils/images";
const App = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Inbox", src: Chat },
    { title: "Accounts", src: User, gap: true },
    { title: "Schedule ", src: Chart_fill },
    { title: "Search", src: Search },
    { title: "Analytics", src: Chart },
    { title: "Files ", src: Folder, gap: true },
    { title: "Setting", src: Setting },
  ];

  return (
    <>
    
    {/* <script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.min.js" defer></script> */}
    <div className="flex">
      <div
        className={` ${
          open ? "w-72" : "w-20 "
        } bg-dark-purple h-screen p-5  pt-8 relative duration-300`}
      >
        <img
          alt="something"
          src={ Calendar }
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <img
            alt="something"
            src={logo}
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            Dashboard
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                index === 0 && "bg-light-white"
              } `}
            >
              <img alt="something" src={`${Menu.src}`} />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="h-screen flex-1 p-7">
        <h1 className="text-2xl font-semibold text-center bg-gray-300">Hospital Management System</h1>
        <DashboardHeader />

        <main className="">
                <div className="grid mb-4 pb-10 px-8 mx-4 rounded-3xl bg-gray-100 border-4 border-green-400">

                    <div className="grid grid-cols-12 gap-6">
                        <div className="grid grid-cols-12 col-span-12 gap-6 xxl:col-span-9">
                            <div className="col-span-12 mt-8">
                                <div className="flex items-center h-10 intro-y">
                                    <h2 className="mr-5 text-lg font-medium truncate">Admin Dashboard</h2>
                                </div>
                                <div className="grid grid-cols-12 gap-6 mt-5">
                                    <a className="transform  hover:scale-105 transition duration-300 shadow-xl rounded-lg col-span-12 sm:col-span-6 xl:col-span-3 intro-y bg-white"
                                        href="#Card">
                                        <div className="p-5">
                                            <div className="flex justify-between">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-blue-400"
                                                    fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round"
                                                        strokeWidth="2"
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
                                    <a className="transform  hover:scale-105 transition duration-300 shadow-xl rounded-lg col-span-12 sm:col-span-6 xl:col-span-3 intro-y bg-white"
                                        href="#Card">
                                        <div className="p-5">
                                            <div className="flex justify-between">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-yellow-400"
                                                    fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                                </svg>
                                                <div
                                                    className="bg-red-500 rounded-full h-6 px-2 flex justify-items-center text-white font-semibold text-sm">
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
                                    <a className="transform  hover:scale-105 transition duration-300 shadow-xl rounded-lg col-span-12 sm:col-span-6 xl:col-span-3 intro-y bg-white"
                                        href="#Card">
                                        <div className="p-5">
                                            <div className="flex justify-between">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-pink-600"
                                                    fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                                                </svg>
                                                <div
                                                    className="bg-yellow-500 rounded-full h-6 px-2 flex justify-items-center text-white font-semibold text-sm">
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
                                    <a className="transform  hover:scale-105 transition duration-300 shadow-xl rounded-lg col-span-12 sm:col-span-6 xl:col-span-3 intro-y bg-white"
                                        href="#Card">
                                        <div className="p-5">
                                            <div className="flex justify-between">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-green-400"
                                                    fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                                                </svg>
                                                <div
                                                    className="bg-blue-500 rounded-full h-6 px-2 flex justify-items-center text-white font-semibold text-sm">
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
                            </div>
                            <div className="col-span-12 mt-5">
                                <div className="grid gap-2 grid-cols-1 lg:grid-cols-2">
                                    <div className="bg-white shadow-lg p-4" id="chartline"></div>
                                    <div className="bg-white shadow-lg" id="chartpie"></div>
                                </div>
                            </div>
                            <div className="col-span-12 mt-5">
                                <div className="grid gap-2 grid-cols-1 lg:grid-cols-1">
                                    <div className="bg-white p-4 shadow-lg rounded-lg">
                                        <h1 className="font-bold text-base">Table</h1>
                                        <div className="mt-4">
                                            <div className="flex flex-col">
                                                <div className="-my-2 overflow-x-auto">
                                                    <div className="py-2 align-middle inline-block min-w-full">
                                                        <div
                                                            className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg bg-white">
                                                            <table className="min-w-full divide-y divide-gray-200">
                                                                <thead>
                                                                    <tr>
                                                                        <th
                                                                            className="px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                                                            <div className="flex cursor-pointer">
                                                                                <span className="mr-2">PRODUCT NAME</span>
                                                                            </div>
                                                                        </th>
                                                                        <th
                                                                            className="px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                                                            <div className="flex cursor-pointer">
                                                                                <span className="mr-2">Stock</span>
                                                                            </div>
                                                                        </th>
                                                                        <th
                                                                            className="px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                                                            <div className="flex cursor-pointer">
                                                                                <span className="mr-2">STATUS</span>
                                                                            </div>
                                                                        </th>
                                                                        <th
                                                                            className="px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                                                            <div className="flex cursor-pointer">
                                                                                <span className="mr-2">ACTION</span>
                                                                            </div>
                                                                        </th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody className="bg-white divide-y divide-gray-200">
                                                                    <tr>
                                                                        <td
                                                                            className="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                                                                            <p>Apple MacBook Pro 13</p>
                                                                            <p className="text-xs text-gray-400">PC & Laptop
                                                                            </p>
                                                                        </td>
                                                                        <td
                                                                            className="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                                                                            <p>77</p>
                                                                        </td>
                                                                        <td
                                                                            className="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                                                                            <div className="flex text-green-500">
                                                                                <svg xmlns="http://www.w3.org/2000/svg"
                                                                                    className="w-5 h-5 mr-1" fill="none"
                                                                                    viewBox="0 0 24 24"
                                                                                    stroke="currentColor">
                                                                                    <path strokeLinecap="round"
                                                                                        strokeLinejoin="round"
                                                                                        strokeWidth="2"
                                                                                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                                                </svg>
                                                                                <p>Active</p>
                                                                            </div>
                                                                        </td>
                                                                        <td
                                                                            className="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                                                                            <div className="flex space-x-4">
                                                                                <a href="#Edit" className="text-blue-500 hover:text-blue-600">
                                                                                <svg xmlns="http://www.w3.org/2000/svg"
                                                                                    className="w-5 h-5 mr-1"
                                                                                    fill="none" viewBox="0 0 24 24"
                                                                                    stroke="currentColor">
                                                                                    <path strokeLinecap="round"
                                                                                        strokeLinejoin="round"
                                                                                        strokeWidth="2"
                                                                                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                                                                </svg>
                                                                                <p>Edit</p>
                                                                                </a>
                                                                                <a href="#Delete" className="text-red-500 hover:text-red-600">
                                                                                <svg xmlns="http://www.w3.org/2000/svg"
                                                                                    className="w-5 h-5 mr-1 ml-3"
                                                                                    fill="none" viewBox="0 0 24 24"
                                                                                    stroke="currentColor">
                                                                                    <path strokeLinecap="round"
                                                                                        strokeLinejoin="round"
                                                                                        strokeWidth="2"
                                                                                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                                                </svg>
                                                                                <p>Delete</p>
                                                                                </a>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

      </div>
    
    </div>
    </>
  );
};
export default App;