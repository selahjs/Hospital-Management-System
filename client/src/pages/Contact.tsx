import React, { useState } from "react";
import { Header } from "../components";

const ContactPage = () =>{
    const [counter, setCounter] = useState(0);

    const increment = () =>{
        setCounter(counter => counter+1)
    }

    const decrement = () => {
        setCounter(counter => counter -1)
    }
    return(
        <div>
            <Header />
            <h1>Contact</h1>
            <button onClick={decrement} className="border px-2">-</button>
            <span> {counter} </span>
            <button onClick={increment} className="border px-2">+</button>


        </div>
    );
}

export default ContactPage;