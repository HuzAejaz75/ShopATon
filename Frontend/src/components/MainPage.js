import React, { Component } from 'react';
import Nav from './Nav';


class MainPage extends Component {
    handleClick(item){
       this.props.handleItem(item);
    }
  render() {
      let displayItems;
      displayItems = this.props.defaultDisplay.map((item)=>{
         return(
            <div className="itemDisp" key={item.id}>
                 <div style={{marginLeft:'10%',textAlign:'center'}}>{item.name}</div>
                 <img className="images" src={require('./iphone6s.png')}/>
                 <div>           
                    <button onClick={this.handleClick.bind(this, item)} className="btn btn-default" style={{marginLeft:'30%'}} >Add to cart</button>
                 </div>
            </div>
         )
         
      })
    return (
     <div className="container">
        {displayItems}
    </div>
    );
  }
}

export default MainPage;