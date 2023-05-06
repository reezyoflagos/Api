import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
const App = () => {
  const  [ users, setUsers] = useState([])
  useEffect(()=>{
    // fetch('https://jsonplaceholder.typicode.com/users')
    axios.get('https://jsonplaceholder.typicode.com/users')
    // .then(res => res.json())
    .then(res => setUsers(res.data))
    // .then(res => console.log(res))
    .catch(error => console.log(error))
  },[])
  return (
    <div>
      <table>
        <thead>
          <tr>
           <th>Id</th>
           <th>Name</th>
           <th>E-mail</th>
           <th>username</th>
           
          </tr>
        </thead>
        <tbody>
          {users.map((user,index)=> (
              <tr key={index}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.username}</td>
              </tr>
            )
            )
          }
        </tbody>
      </table>
    </div>

  )
}

export default App
