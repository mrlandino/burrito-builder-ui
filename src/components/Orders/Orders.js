import React from 'react';
import './Orders.css';
import Order from '../Order/Order'

const Orders = ({allOrders}) => {
  const orderEls = allOrders.map(order => {
    return (
      <Order
        key={order.id}
        name={order.name}
        ingredients={order.ingredients}
        id={order.id}
      />
    )
  });

  return (
    <section>
      { allOrders.length ? orderEls : <p>No orders yet!</p> }
    </section>
  )
}

export default Orders;