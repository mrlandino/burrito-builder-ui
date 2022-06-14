import React, { Component } from 'react';
import './App.css';
import { getOrders, postOrder } from '../../apiCalls';
import Orders from '../../components/Orders/Orders';
import OrderForm from '../../components/OrderForm/OrderForm';

class App extends Component {
  constructor() {
    super();
    this.state = {
      orders: []
    }
  }

  componentDidMount = () => {
    getOrders()
      .then(data => this.setState({orders: data.orders}))
      .catch(err => console.error('Error fetching:', err));
  }

  addOrder = (name, ingredients) => {
    const id= this.state.orders.length + 1
    const newOrder = {
      id: id,
      name: name,
      ingredients: ingredients
    }

    this.setState({orders: [...this.state.orders, newOrder]})
    if (postOrder(newOrder)){
      this.setState({orders: [...this.state.orders, newOrder]})
    }
    
    
  }

  render() {
    return (
      <main className="App">
        <header>
          <h1>Burrito Builder</h1>
          <OrderForm addOrder={this.addOrder}/>
        </header>

        <Orders allOrders={this.state.orders}/>
      </main>
    );
  }
}

export default App;
