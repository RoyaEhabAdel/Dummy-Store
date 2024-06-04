import React from 'react'
import '../App.css'
import Navbar from './Navbar';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';


const Home = () => {

    const [products, setProducts] = useState([])

    useEffect(() =>{
    const fetchProducts = async ()=>{
        try {
            const res = await fetch('https://dummyjson.com/products');
            const data = await res.json();
            
            setProducts(data.products)
        } catch (error) {
            console.log("The error is", error)
        }
        
    }
    fetchProducts()
    }, []);
    

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

        <SearchBar />
        
        <div className='products-section'>
        <h2>Products</h2>
        
        <div className='products'>
            
            {
                products.slice(0,3).map((product)=>{
                    return(
                        <div className='products-items'> 
                            <h3>{product.title}</h3>
                            <img alt='' src={product.images[0]} />
                            <p>{product.description}</p>
                            <Link to={`/products/${product.id}`} className='readMore'>Read more...</Link>
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
