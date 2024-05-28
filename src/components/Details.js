import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../App.css'
import Navbar from './Navbar';

const Details = () => {
    const {id} = useParams();
    const [products, setProducts] = useState([]);
   

    useEffect(() =>{
    const fetchProducts = async ()=>{
        try {
            const res = await fetch(`https://dummyjson.com/products/${id}`);
            const data = await res.json();
            const productValues = Object.values(data)
            console.log(data)
            setProducts(productValues)
        } catch (error) {
            console.log("The error is", error)
        }
        
    }
    fetchProducts()
    }, []);
   
    console.log(products);

    const cost = products[4] - ((products[5]/100)*products[4])
  return (
    <div>
        <div>
            <Navbar />
        </div>
    <div className='details'>
        <h2>{products[1]}</h2>
        <p>{products[2]}</p>
        <span><span className='category'>Category:</span>{products[3]}</span>
         <br></br>
        <span><span className='category'>Price:</span><span className='price'>{products[4]}</span></span>
         <br></br>
         <span><span className='category'>Discount:</span><span className='dis'>{products[5]} %</span></span>
        <br></br>
        <span><span className='category'>Price after discount:</span>{cost}</span>
         <br></br>
        <img alt='' src={products[20]} />
        <button>Add</button>
    </div>
    </div>
  )
}

export default Details
