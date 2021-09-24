import React,{useState} from 'react'
import axios from 'axios'
import { useHistory,Link } from 'react-router-dom'

const AddUsers = () => {
    let history = useHistory()
   const [user,setUser] = useState({
       name:'',
       username:'',
       email:'',
       phone:'',
       website:''
   })
    const {name,username,email,phone,website} =user
   const handleUsers = e =>{
       setUser({
           ...user,[e.target.name]:e.target.value
       })
   }

   const handleSubmit = async e =>{
       e.preventDefault()
       await axios.post("http://localhost:3003/users",user)
       history.push("/");
   }
    return (
        <div className="container addusers">
          <div className="row">
          <div className="col-lg-3"></div>
          <div className="col-lg-6">
          <div className="card mt-3">
          <div className="card-header">
          <h4 className="card-title text-center">Add User</h4>
          </div>
          <div className="card-body px-5 py-4">
         <form>
          <div className="form-group">
          <label>Enter name</label>
          <input type="text" className="form-control" name="name" value={name} onChange={e=>handleUsers(e)}/>
          </div>
          <div className="form-group">
          <label>Enter Username</label>
          <input type="text" className="form-control" name="username" value={username} onChange={e=>handleUsers(e)}/>
          </div>
          <div className="form-group">
          <label>Enter email</label>
          <input type="email" className="form-control" name="email" value={email} onChange={e=>handleUsers(e)} />
          </div>
          <div className="form-group">
          <label>Enter phone</label>
          <input type="text" className="form-control" name="phone" value={phone} onChange={e=>handleUsers(e)}/>
          </div>
          <div className="form-group">
          <label>Enter website </label>
          <input type="text" className="form-control" name="website" value={website} onChange={handleUsers}/>
          </div>
          <div className="submit-section d-flex justify-content-around mt-3">
          <button type="button" className="btn btn-primary" onClick={handleSubmit}>Save</button>
          <Link type="button" className="btn btn-darker" to="/">Cancel</Link>
          </div>
         </form>
          </div>
          </div>
          </div>
          <div className="col-lg-3"></div>
          </div>
        </div>
    )
}

export default AddUsers
