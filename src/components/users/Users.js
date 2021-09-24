import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {useParams,Link} from 'react-router-dom'

const Users = () => {
    const [user,setUser] = useState({
        name:'',
        username:'',
        email:'',
        phone:'',
        website:''
    })

    useEffect(()=>{
        loadUsers();
      },[])

     let {id} = useParams();
      const loadUsers = async ()=>{
          const res = await axios.get(`http://localhost:3003/users/${id}`)
          setUser(res.data);
      }
    return (
       
      <div className="container users mt-4">
      <div className="row">
      <div className="col-lg-4"></div>
      <div className="col-lg-4">
      <div className="card">
      <div className="card-header">
      <h4>User id:{id}</h4>
      <div className="card-body">
      <p>Name: <span>{user.name}</span></p>
      <hr></hr>
      <p>Username: <span>{user.username}</span></p>
      <hr></hr>
      <p>Email: <span>{user.email}</span></p>
      <hr></hr>
      <p>Phone: <span>{user.phone}</span></p>
      <hr></hr>
      <p>Website: <span>{user.website}</span></p>
      <hr></hr>
      </div> 
      <div className="card-footer">
      <Link className="" to="/">Go Back</Link>
      </div>
      </div>
      </div>
      </div>
      <div className="col-lg-4"></div>
      </div>
      </div>
       
    )
}

export default Users
