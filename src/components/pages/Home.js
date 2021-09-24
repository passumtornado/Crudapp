import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {Link,useParams} from 'react-router-dom'

const Home = () => {
    const [users,setUsers] = useState ([])
  
    useEffect(()=>{
      loadUsers();
    },[])

    const loadUsers = async ()=>{
        const res = await axios.get("http://localhost:3003/users")
        setUsers(res.data.reverse());
    }
    const deleteUser = async id =>{

        await axios.delete(`http://localhost:3003/users/${id}`)
        loadUsers()   
    }


 
    return (
        <div className="container">
           <div className="row">
           <div className="col-lg-12 mt-4">
            <div className="card">
            <div className="card-body">
             <div className="text-section">
             <span>Users table</span>
             </div>
            <div className="table-section">
            <table className="table table-striped">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Username</th>
                <th scope="col">Email</th>
                <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
            {
                users.map((user,index)=>(
                 <tr key={users.id}>
                <th scope="row">{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                <Link className="btn btn-primary ml-2" to={`users/view/${user.id}`}>View</Link>
                <Link className="btn btn-success" to={`users/edit/${user.id}`}>Edit</Link>
                <button className="btn btn-danger" onClick={()=>deleteUser(user.id)}><i className="fas fa-trash"></i></button>
                </td>
                </tr>
                ))
            }
               
            </tbody>
            </table>
            </div>
            </div>
            </div>
           </div>
           </div>
        </div>
    )
}

export default Home
