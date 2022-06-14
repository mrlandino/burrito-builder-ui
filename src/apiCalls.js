const getOrders = () => {
  return fetch('http://localhost:3001/api/v1/orders')
      .then(response => response.json())
}

const postOrder = (order) => {
  fetch ('http://localhost:3001/api/v1/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(order)
    })
    .then((response) => {
      if(response.ok) {
        return (
          response => response.json()
          )
      } else {
        return false;
      }})
}
export { getOrders, postOrder}