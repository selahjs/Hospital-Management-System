import React from "react";
import {
    Routes,
    Route,
  } from "react-router-dom";
import { AboutPage, ContactPage, HomePage, LoginPage, ServicePage } from "./pages";

const App = () =>{
    return <div>
        <Routes>
            <Route path="/" element={ <LoginPage />} />
            <Route path="/login" element={ <LoginPage />} />
            <Route path="/home" element={ <HomePage />} />
            <Route path="/contact" element={ <ContactPage />} />
            <Route path="/about" element={ <AboutPage />} />
            <Route path="/service" element={ <ServicePage />} />
        </Routes>
    </div>
}

export default App;