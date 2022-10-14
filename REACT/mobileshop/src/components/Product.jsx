import { useContext } from "react";
import { ProductContext } from "./Context";
import {Link} from 'react-router-dom';
import { Button} from "./Button";

export default function Product({product}) {
    let {id, img} = product; //passed from ProductList as props
    let {addToCart} = useContext(ProductContext);
    return (
        <div className='col-md-4 col-lg-3'>
          <div className='card my-2'>
            <div className='img-container'>
              <div className='card-img-top'>
                <Link to={`/details/${id}`}>
                   <img src={img} />
                </Link>
                <Button onClick={() => addToCart(id)} 
                    className='fas fa-cart-plus cart-btn'></Button>
              </div>
            </div>
          </div>     
        </div>
      )
}