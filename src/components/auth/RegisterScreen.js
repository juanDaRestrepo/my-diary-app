import React from 'react';
import { Link } from 'react-router-dom';

export const RegisterScreen = () => {
  return (
      <>
            <h3 className='auth__title'>Register</h3>

            <form>
              <input 
                type="text"
                placeholder='Name'
                name="name"
                className='auth__input'
              />

              <input 
                type="text"
                placeholder='Email'
                name="email"
                className='auth__input'
              />

              <input 
                type="password"
                placeholder='Password'
                name="password"
                className='auth__input'
              />

              <input 
                type="password"
                placeholder='Comfirm password'
                name="password"
                className='auth__input'
              />

              <button 
                type="submit"
                className='btn btn-primary btn-block'
              >
                Register
              </button>

              <hr />
              
              <Link
                to="/auth/login"
                className='link'
              >
                Already Registered?
              </Link>
            </form>
        </>
  )
};
