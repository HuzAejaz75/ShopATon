import React, { Component } from 'react';
import Nav from './Nav';
import MainPage from './MainPage';
import ls from 'local-storage';
import axios from 'axios'
class Home extends Component {
  constructor(){
    super();
    this.state= {
      default:[],
      ordered:[],
      spunk:[]
    }
  }

  componentWillMount(){
    axios.get("http://localhost:8080/products/getallproducts").then((resp)=>{
      this.setState({spunk:resp.data.data})
    });
    this.setState({
      default:[
        {
          id: 'prod001',
          name:"Samsung Galaxy S9",
          price:700,
          available:10,
          quantity:0,
          status:true,
          description: "Samsung phone"
        },
        {
          id: 'prod002',
          name:"iPhone 10",
          price:700,
          available:10,
          quantity:0,
          status:true,
          description: "Apple",

        },
        {
          id: 'prod003',
          name:"iPhone 10",
          price:700,
          available:10,
          quantity:0,
          status:true,
          description: "Apple",

        },
        {
          id: 'prod004',
          name:"iPhone 10",
          price:700,
          available:10,
          quantity:0,
          status:true,
          description: "Apple",

        },
        {
          id: 'prod005',
          name:"iPhone 10",
          price:700,
          available:10,
          quantity:0,
          status:true,
          description: "Apple",

        },
        {
          id: 'prod006',
          name:"iPhone 10",
          price:700,
          available:10,
          quantity:0,
          status:true,
          description: "Apple",

        },
        {
          id: 'prod007',
          name:"iPhone 10",
          price:700,
          available:10,
          quantity:0,
          status:true,
          description: "Apple",

        },
        {
          id: 'prod008',
          name:"iPhone 10",
          price:700,
          available:10,
          quantity:0,
          status:true,
          description: "Apple",

        }
      ]
    })
  }
  handleOrder(item){
    let orderedItems = this.state.ordered;
    let found = false;
    item.quantity+=1;
    item.status= (item.available > item.quantity)?true:false;
  
    if(orderedItems.length===0){
      orderedItems.push(item);
     console.log("added item 1")
    }
    else{
      orderedItems.find((x)=>{
        if(x.id===item.id){
            found = true;
        }

      });
      if(found===true){
          
        this.setState({ordered:orderedItems})
    }
    else{
        orderedItems.push(item);
        this.setState({ordered:orderedItems})
    }
    }
    
    
    //ls.clear();
    ls.set('ordered',this.state.ordered);
  }
  render() {
    
    
    return (
     <div className="container">
        <MainPage defaultDisplay={this.state.default} handleItem={this.handleOrder.bind(this)}/>
    </div>
    );
  }
}

export default Home;