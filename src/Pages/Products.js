import React, { useEffect, useState } from "react"

function Products() {
  const [users, setUsers] = useState([])

  const fetchData = () => {
    fetch("https://fakestoreapi.com/products")
      .then(response => { return response.json()})
      .then(data => { setUsers(data)})
  }

  useEffect(() => { fetchData()}, [])

  return (
    <div>
      {users.length > 0 && (
        <ul>
          {users.map(user => (
            <li key={user.id} className="border border-solid py-20 px-10 flex justify-center align-middle gap-8">
              <div className="w-1/2 mx-auto my-auto space-y-8">
                  <div className="font-bold text-2xl">{user.title}</div>
                  <div className="font-bold text-2xl">${user.price}</div>
                  <button className="bg-amber-600 text-yellow-100 font-bold p-4 text-lg rounded-lg">Add to Cart</button>
                  <p>{user.description}</p>
              </div>
              <img className="w-80 h-64" src={user.image} alt="img"/>
              </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Products;