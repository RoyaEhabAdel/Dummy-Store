import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../App.css'
import Navbar from './Navbar';
import ImagePopUp from './imagePopUp';

const Details = () => {
    const {id} = useParams();
    const [products, setProducts] = useState(null);
    const [showPopUp, setShowPopUp] = useState(false)

    useEffect(() =>{
    const fetchProducts = async ()=>{
        try {
            const res = await fetch(`https://dummyjson.com/products/${id}`);
            const data = await res.json();
            console.log(data)
            setProducts(data)
        } catch (error) {
            console.log("The error is", error)
        }
        
    }
    fetchProducts()
    }, [id]);
   
   console.log(products)

    const cost = products?.price - ((products?.price/100)*products?.price);
    const finalCost = cost?.toFixed(2);

    function handlePopUp(){
        let newPopUp = showPopUp;
        newPopUp = true
        setShowPopUp(newPopUp)
    }
    function handlehidePopUp(){
        let newPopUp = showPopUp;
        newPopUp = !showPopUp
        setShowPopUp(newPopUp)
    }
  return (
    <div onClick={handlehidePopUp}>
        <div>
            <Navbar />
        </div>
        {products && (
    <div className='details'>
        <div className='images'>
           <img className='mainImg' alt='' src={products.images[0]} />

           <div className='subImg'>
            {products && products?.images?.length>0 && products?.images.slice(1).map((image)=> (<img alt='' src={image} onClick={handlePopUp} />))}
             </div>
        </div>

        <div className='product-details'>
        <h2>{products.title}</h2>
        <p>{products.description}</p>
        
        <span><span className='category'>Category:</span>{products.category}</span>
         <br></br>
        <span><span className='category'>Price:</span><span className='price'>{products.price}$</span></span>
         <br></br>
         <span><span className='category'>Discount:</span><span className='dis'>{products.price} %</span></span>
        <br></br>
        <span><span className='category'>Price after discount:</span>{finalCost}$</span>
         <br></br>
        <button>
            <span className="material-symbols-outlined">
                shopping_cart
            </span>
            Add
        </button>
         </div>
        
        
    </div>
        )}

        <div>
            {showPopUp && <ImagePopUp />}
        </div>
    </div>
  )
}

export default Details
