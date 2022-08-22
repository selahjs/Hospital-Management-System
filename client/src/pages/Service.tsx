import React from "react";
import { Footer, Header, ServiceCard } from "../components";

const ServicePage = () =>{
    return(
        <div>
            <Header />
            <h1>Service</h1>
            <ServiceCard />
            <Footer />
        </div>
    );
}

export default ServicePage;