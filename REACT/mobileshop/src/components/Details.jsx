import axios from 'axios';
import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom';
import { ProductContext } from './Context';
import { Button } from './Button';
export default function Details() {
  
  let [product, setProduct] = useState({});
  let {id} = useParams();
  let {addToCart} = useContext(ProductContext);

  useEffect(() => {
    axios.get(`http://localhost:1234/products/${id}`).then(response => {
      setProduct(response.data);
    })
  },[id]);
    return (
      <div className='col-md-8'>
        <h1> Details</h1>
        <h2> Name: {product.title}</h2>
        <h3> Company : {product.company}</h3>
        <h3> Price: {product.price}</h3>
        <img src={`/${product.img}`} />
        <p>   Description : {product.info}</p>
        <Button onClick={() => addToCart(product.id)}> Add To Cart</Button>
      </div>
      
    )
  
}
