import React, { useState } from "react";
import { logo1 } from "../utils/images";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();
  let [email, setEmail] = useState('')
  let [password, setPassword] = useState('')
  let [errorResponse, setErrorResponse] = useState('');
  
  // function getUser() {
  //   const baseUrl = "https://localhost:7110/";
  //   axios.get(baseUrl + "account").then((response) => {
  //     if(response){
  //       // user = response.data.first_name
  //       console.log(response.data)
  //       // setField(()=> fieldState = user)
  //     }
      
  //   });
  // }
  const handleSubmit = event => {
    console.log('handleSubmit ran');
    event.preventDefault(); }

  function logIn(){
    axios.post("https://localhost:7110/account/login",{
      username: email,
      password: password
    }).then((response) => {
      if(response){
        console.log(response.data)
        navigate("/home");

      }
      
    }).catch(erro => {
      setErrorResponse(errorResponse = erro.response.data)
      console.error(errorResponse)}
    );
  }

  
  return (
    <div className="font-family-karla h-screen bg-white">
      <div className="flex w-full flex-wrap bg-white">
        <div className="flex w-full flex-col sm:w-1/2">
          <div className="flex justify-center pt-12">
            <a href="/home" className=" p-4 text-xl font-bold">
              <img className="h-[60px]" src={logo1} alt="" />
            </a>
          </div>

          <div className="my-auto flex flex-col justify-center px-8 pt-8 md:justify-start md:px-24 md:pt-0 lg:px-32">
            <p className="text-center text-3xl">Hospital Management System</p>

            <form onSubmit={handleSubmit} className="flex flex-col pt-3 md:pt-8">
              <div className="flex flex-col pt-4">
                <input
                  type="username"
                  id="email"
                  placeholder="Email"
                  onChange={event => setEmail(event.target.value)}
                  value={email}
                  className="focus:shadow-outline mt-1 w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
                />
              </div>

              <div className="flex flex-col pt-4">
                <input
                  type="password"
                  id="password"
                  placeholder="Password"
                  onChange={event => setPassword(event.target.value)}
                  value={password}
                  className="focus:shadow-outline mt-1 w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
                />
              </div>

              <p className="text-red-700">{errorResponse}</p>

              <button
                onClick={logIn}
                className=" bg-black text-white p-2 mt-8 hover:bg-gray-700 font-bold text-lg"
              >
                Log In
                <svg
                  aria-hidden="true"
                  className="h-5 w-5 inline"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  ></path>
                </svg>
              </button>
            </form>

            <div className="pt-12 pb-12 text-center">
              <p>
                <a
                  href="#register.html"
                  className="font-semibold text-gray-500 hover:text-black"
                >
                  Forgot your password?
                </a>
              </p>
            </div>
            <div className="flex flex-wrap justify-center">
              <button onClick={()=> {setEmail(email = "admin"); setPassword(password = "admin") }} className="bg-gray-300 hover:bg-gray-50 rounded p-1 m-1">
                Admin
              </button>
              <button className="bg-gray-300 hover:bg-gray-50 rounded p-1 m-1">
                Doctor
              </button>
              <button className="bg-gray-300 hover:bg-gray-50 rounded p-1 m-1">
                Patient
              </button>
              <button className="bg-gray-300 hover:bg-gray-50 rounded p-1 m-1">
                Nurse
              </button>
              <button className="bg-gray-300 hover:bg-gray-50 rounded p-1 m-1">
                Receptionist
              </button>
              <button className="bg-gray-300 hover:bg-gray-50 rounded p-1 m-1">
                Laboratorist
              </button>
              <button className="bg-gray-300 hover:bg-gray-50 rounded p-1 m-1">
                Pharmasist
              </button>
              <button className="bg-gray-300 hover:bg-gray-50 rounded p-1 m-1">
                Acountant
              </button>
            </div>
          </div>
        </div>

        <div className="hidden sm:w-1/2 sm:block shadow-2xl ">
          <img
            className="h-screen w-full object-cover md:block"
            src="https://source.unsplash.com/IXUM4cJynP0"
            alt="something"
          />
          {/* <Card/> */}
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
