import React, { Component } from 'react';
import FaSearch from 'react-icons/lib/fa/search';


class Nav extends Component {
  handleSearch(e){
    let data;
    data={
        key: this.refs.search.value
    }
    console.log(data);
   
    
    e.preventDefault();
}
  render() {
    return (
     <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">ShopATon</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"> </span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="/Home">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/shoppingcart">Cart</a>
      </li>
      <li className="nav-item" style={{marginLeft:'470px'}}>
      <form onSubmit={this.handleSearch.bind(this)}>
        <input type="text" ref="search" placeholder="Search"/>
        <button><FaSearch/></button>
      </form>
      </li>
      </ul>
      
    </div>
        </nav>
            
    </div>
    );
  }
}

export default Nav;