import React from 'react'
import Navbar from './Navbar';
import { useState, useEffect } from 'react';
import '../App.css'
import { Link } from 'react-router-dom';


const Categories = () => {
    const [products, setProducts] = useState([]);
    const [selectedCat, setSelectedCat] = useState("beauty");
    const [isLoading, setIsLoading] = useState(false);

    const categoriesList =[
        "beauty",
        "fragrances",
        "furniture",
        "groceries",
        "home-decoration",
        "kitchen-accessories",
        "laptops",
        "mens-shirts",
        "mens-shoes",
        "mens-watches",
        "mobile-accessories",
        "motorcycle",
        "skin-care",
        "smartphones",
        "sports-accessories",
        "sunglasses",
        "tablets",
        "tops",
        "vehicle",
        "womens-bags",
        "womens-dresses",
        "womens-jewellery",
        "womens-shoes",
        "womens-watches"
      ]

    useEffect(() =>{
    const fetchProducts = async ()=>{
        try {
            setIsLoading(true)
            const res = await fetch(`https://dummyjson.com/products/category/${selectedCat}`);
            const data = await res.json();
            const items = data.products
            console.log(items)
            setProducts(items)
            setIsLoading(false)
        } catch (error) {
            console.log("The error is", error)
            setIsLoading(false)
        }
        
    }
    fetchProducts()
    }, [selectedCat]);
    console.log(products)
  return (
    <div>

    <Navbar />

    <div>
    <div className='categories'>
            <h1>Categories</h1>

            {categoriesList.map(item =>{
                return(
                    <button key={item} className={`catBtns ${selectedCat === item? 'active': ''}`} onClick={() => setSelectedCat(item)} >{item}</button>
                )
            })}

            {isLoading ? <h1>Loading...</h1>: (
        <div className='products'>
            
            {
                products.length>0 ? products.map((product)=>{
                    return(
                        <div className='products-items'> 
                            <h3>{product.title}</h3>
                            <img alt='' src={product.images[0]} />
                            <p>{product.description}</p>
                            <Link to={`/products/${product.id}`} className='readMore'>Read more...</Link>
                        </div>
                )
                }):<h1>No Products here</h1>
            }
            
        </div>
        )}

            
        </div>
    </div>
    </div>
  )
}

export default Categories