import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import "./Login.css"
const Login = () => {

    const [flag,setFlag] = useState(true);

    const signIn = () =>{
        setFlag(true);
    }
    const signUp = () =>{
        setFlag(false);
    }

    const submit = (e) =>{
       e.preventDefault();
    }
    return (
        	<form id="register-form" onSubmit = {submit} >
              <div className="cont">
              <button onClick = {signIn}>
                    Sign In
                </button>
              
                <button onClick = {signUp}>
                    Sign Up
                </button>
              </div>
              
            
                
                <div >
                    <input type="email" name="email" id="email" tabindex="1" class="form-control" placeholder="Email Address" value="" />
                </div>
                <div >
                    <input type="password" name="password" id="password" tabindex="2" class="form-control" placeholder="Password" />
            </div>
                <button> {flag===true?"Sign in":"Sign Up"} </button>
            </form>
    )
}

export default Login