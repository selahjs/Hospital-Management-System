import React, { useState, useEffect } from 'react'

const ServiceCard = () => {
    const [isLoading, setIsLoading] = useState(()=>{
        return false;
    });
    const [name, setName] = useState('Redwan');
    
    // this method is called whenever isLoading is changed...
    useEffect(()=>{
        console.log('something changed!');
    },[name]);

    const handleLoading = () => {
        setIsLoading(!isLoading);
    }
    

  return (
    <div>
        <div>Card for Service</div>
        <h3>
            {
                isLoading? name:'CD'
            }
        </h3>
        <div className='flex flex-col bg-blue-500 justify-start items-start'>
        <button onClick={ handleLoading }>Load Something</button>
        <button onClick={ () => name ==='Redwan'? setName('Sol'):setName('Red')}>change Name</button>
        </div>
    </div>
  )
}

export default ServiceCard