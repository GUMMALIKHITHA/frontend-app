import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
function Register() {
  const [user,setUser] = useState({});
  const API_URL = import.meta.env.VITE_API_URL;
  const Navigate = useNavigate
  const handleSubmit = async () => {}
  return (
    <div>
      <h2>Registration Page</h2>
      <p><input type="text"onChange={(e)=>setUser({...user,name:e.target.value})} placeholder="Name" /></p>
      <p><input type="text" placeholder="Email" /></p>
      <p><input type="password" placeholder="Password" /></p>
      <p><button>Submit</button></p>
      <p>
        <Link to="/login">Already a member? Login here</Link>
      </p>
    </div>
  );
}
export default Register;