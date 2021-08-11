import React from 'react'

const Register = () => {
    return (
        <div>
             <Link to="/auth">
            <button>
                    Sign In
                </button>
                </Link>
               
                <button>
                    Sign Up
                </button>
               

            <form id="register-form">
          
          <div>
            <input
              type="email"
              name="email"
              id="email"
              tabindex="1"
              class="form-control"
              placeholder="Email Address"
              value=""
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              id="password"
              tabindex="2"
              class="form-control"
              placeholder="Password"
            />
          </div>
          <button> Sign Up </button>
        </form>
        </div>
      
    );
}

export default Register