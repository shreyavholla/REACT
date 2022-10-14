import React, { Component, useContext } from 'react'
import CartList from './CartList'
import { ProductContext } from './Context'
import { Button } from './Button';
//functional component - cart
export default function Cart() {

    //useContext is a hook used in functional programming
    let {cart, checkOut} = useContext(ProductContext)
    return <div className='container'>
        {
            cart.map( p => <CartList key={p.id} product={p}/>)
        }
        <div className='row'>
            <div className='col-md-8'>&nbsp;</div>
            <div className='col-md-4'><Button onClick={() => checkOut()}>Checkout</Button></div>
        </div>
    </div>
}
