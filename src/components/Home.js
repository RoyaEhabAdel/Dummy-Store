import React from 'react'
import '../App.css'
import Navbar from './Navbar';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Products from './Products';

const Home = () => {

    const [products, setProducts] = useState([])

    useEffect(() =>{
    const fetchProducts = async ()=>{
        try {
            const res = await fetch('https://dummyjson.com/products?_limit=3');
            const data = await res.json();
            console.log(data)
            setProducts(data.products)
        } catch (error) {
            console.log("The error is", error)
        }
        
    }
    fetchProducts()
    }, []);
    
    console.log(products)
  return (
    <div>
        <div>
        <Navbar />
    </div>
    <div className='home-component'>

        <div className='home-component-headings'>
            <h2>Dummy Store</h2>
            <h5>Explore your beauty</h5>
        </div>

        <div className='products-section'>
        <h2>Products</h2>
        
        <div className='products'>
            
            {
                products.slice(0,3).map((product)=>{
                    return(
                        <div className='products-items'> 
                            <h3>{product.title}</h3>
                            <img alt='' src={product.images} />
                            <p>{product.description}</p>
                            <button>Read more...</button>
                        </div>
                )
                })
            }
            
        </div>
        <div className='all-btn'>
         <Link to='/products' className='link'> All Products </Link>
        </div>
        
        </div>
    </div>
    </div>
  )
}

export default Home