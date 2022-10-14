import React, { Component } from 'react'
import { ProductContext } from './Context'
import Product from './Product';

export default class ProductList extends Component {
  render() {
    return (
      <div className='container'>
        <div className='row'>
            <ProductContext.Consumer>
                {
                    value => {
                        return value.products.map(p => <Product key={p.id} product={p} />)
                    }
                }
            </ProductContext.Consumer>
        </div>
    </div>
    )
  }
}

//go to Product.jsx now