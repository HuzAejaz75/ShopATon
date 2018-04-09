import React, { Component } from 'react';
import ls from 'local-storage';
import DisplayItem from './DisplayItem';

class Cart extends Component {
  constructor(){
    super();
    this.state = {
      ordered :ls.get('ordered')
    }
  }
  handleCancel(id){
   console.log(id);
    let orderedItems = this.state.ordered;
    orderedItems.splice(id,1);
    this.setState({ordered:orderedItems})
    ls.set('ordered', this.state.ordered);
  }
  handleSubmit(e){
    console.log(this.state.ordered);
   alert(this.state.ordered.length + " items have been checked out");
   //ls.clear();
   e.preventDefault();
  }
  render() {
    
    let displayCart = this.state.ordered.map((item)=>{
      return(
      
        <tr>
          <th>{item.id}</th>
          <td>{item.name}</td>
          <td>{item.quantity}<button  style={{marginLeft:'2px'}}>+</button><button>-</button></td>
          <td>{(item.status)?"available": "Not available"}</td>
          <td>{item.price}</td>
          <td><button onClick={this.handleCancel.bind(this,item.id)}>X</button></td>
        
        </tr>
      )    
    });

    return (
     <div className="container">
       <table class="table">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Quantity</th>
                <th scope="col">Status</th>
                <th scope="col">Price</th>
                <th scope="col">cancel</th>
                </tr>
            </thead>
            <tbody>
              {displayCart} 
             
            </tbody>
          </table>
          <form onSubmit={this.handleSubmit.bind(this)}>
              <button style={{float:'right'}} className="btn btn-lg btn-success" >Check Out</button>
          </form>
    </div>
    );
  }
}

export default Cart;