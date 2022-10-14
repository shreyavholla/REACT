import React, { Component, useContext } from 'react'
import { Button } from './Button';
import { ProductContext } from './Context';

export default function CartList({product}) {
   let {id,company, img, title, price, count, total} = product;
   let {increment,decrement} = useContext(ProductContext);
    return (
      <div className='row'>
        <div className='col-md-2'><img src={img} style={{"width":"100px"}} /></div>
        <div className='col-md-2'>{title}</div>
        <div className='col-md-2'>Company : {company}</div>
        <div className='col-md-2'>
          <Button onClick={() => decrement(id)}>-</Button>
          &nbsp; Count :{count} &nbsp;
          <Button onClick={() => increment(id)}>+</Button>
        </div>
        <div className='col-md-2'>Price : {price}</div>
        <div className='col-md-2'>Total: {total}</div>
      
      </div>
    )
  
}