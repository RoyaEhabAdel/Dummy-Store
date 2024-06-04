import React from 'react';
import '../App.css'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const SearchBar = () => {
    const [searchInput, setSearchInput] = useState("");
    const [products, setProducts] = useState([]);
    
    useEffect(() =>{
        const fetchProducts = async ()=>{
            try {
                const res = await fetch(`https://dummyjson.com/products`);
                const data = await res.json();
                setProducts(data.products)
            } catch (error) {
                console.log("The error is", error)
            }
            
        }
        fetchProducts()
        
        }, []);
        const filtered = 
        products.filter((searchResult) => {
                return searchResult && searchResult.title && searchResult.title.includes(searchInput)
            })
        console.log(filtered)
        console.log(searchInput)
        const handleChange = (value) =>{
            setSearchInput(value);
            
        }
  return (
    <div className='search'>
        <div className='search-bar'>
            <i class="fa fa-search"></i>
            <input type='text' placeholder='Type to search ...' value={searchInput} onChange={(e)=> handleChange(e.target.value)} />
        </div>
        <div className='search-results'>
            <ul className={`${searchInput? "exist" : ""}`}>
                {
                    filtered.map((result)=>{
                        if(searchInput){
                        return(
                            <li>
                                <Link to={`/products/${result.id}`} className='search-item' >{result.title}</Link>
                                 
                                </li>
                        )
                    }
                    return (<div></div>)
                    })
                }
            </ul>
        </div>
    </div>
  )
}

export default SearchBar