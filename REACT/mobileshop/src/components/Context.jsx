import { Component, createContext } from 'react';
//import {storeProducts} from '../data'; //replace this with RESTAPI call..contains the data

import axios from 'axios'; // making an api call from axios
import { redirect } from 'react-router-dom';

const ProductContext = createContext(); //creates a central placeholder
//provider --- puts the data
//consumer --- takes the data

//class to dump the data into the context
class ProductProvider extends Component{

    state={
        products:[],
        cart:[]
    }
    //for FCP, dump the data here and not in the constructor
    componentDidMount(){
        this.setProducts();
    }

    //make an API CALL -- product controlller
    setProducts() {
       // let prds = []
        // storeProducts.forEach(p => {
        //     prds.push({...p});
        // });

        // this.setState({
        //     products:prds
        // })

        /******************/
        //with axios
        axios.get("http://localhost:1234/products").then(response => {
            this.setState({
                products: response.data
            })
        })
    }

    addToCart = (id) => {
        let prd = this.state.products.find(p => p.id === id);

        prd.count = 1;
        prd.total = prd.price;
        prd.inCart = true;

        let cartCopy = this.state.cart;
        cartCopy.push(prd);
        this.setState({
            cart: cartCopy
        })
    }

    increment = (id) => {
        let prd = this.state.products.find(p => p.id === id);
        prd.count++;
        prd.total = prd.price*prd.count;

        this.setState({
            cart: this.state.cart
        })
        
    }
    decrement = (id) => {
        let prd = this.state.products.find(p => p.id === id);
        
        if(prd.count <= 0)
        {
            prd.count = 0
            prd.total = 0

        }else{
            prd.count--;
            prd.total = prd.price*prd.count;
        }
        

        this.setState({
            cart: this.state.cart
        })
    }

    checkOut() {
        let order = {};
        let email = window.sessionStorage.getItem("email");
        order.customer = email;
        order.order_date = new Date();
        let items = this.state.cart.map(p => {return {"id" : p.id, "count" : p.count}});
        order.items = items;
        axios.post("http://localhost:1234/orders", order)
        .then(() => {console.log("Order placed!!")});

        this.setState({
            cart: []
        },() => window.location.href = "/") ;

       
    }
    render() {

        //provider puts the data into the context
        //children consume it
        //go to ProductList now
        return <ProductContext.Provider value={{...this.state,
         addToCart : this.addToCart,
         increment : this.increment,
         decrement : this.decrement,
         checkOut: this.checkOut.bind(this)
         }}>

            {this.props.children}
        </ProductContext.Provider>
    }
}

export{ ProductContext, ProductProvider}



