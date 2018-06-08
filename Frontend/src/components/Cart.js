import React, { Component } from 'react';
import ls from 'local-storage';
import DisplayItem from './DisplayItem';
import axios from 'axios'
import CartItem from './CartItem';

class Cart extends Component {
  constructor(){
    super();
    this.state = {
      ordered : []
    }
    
  }
  componentWillMount(){
    axios.get("http://localhost:8080/cart/getallproducts").then((res)=>{
      this.setState({ordered:res.data.items})
      
  });
  }
 
  remove(item){
    console.log("oh");
    console.log(item);
    axios.post("http://localhost:8080/cart/removeproducts",{username:item.username,name:item.name}).then((res)=>{
      
      this.componentWillMount();
    });
  }

  render() {
  

    return (
     <div className="container">
        <CartItem cartData = {this.state.ordered} handleCancels = {this.remove.bind(this)}/>
    </div>
    );
  }
}

export default Cart;
