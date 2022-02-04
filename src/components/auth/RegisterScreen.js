import React from 'react';
import { Link } from 'react-router-dom';
import validator from 'validator';
import { useDispatch } from 'react-redux';

import { setError, removeError } from '../../actions/ui'; 
import {useForm} from '../../hooks/useForm';


export const RegisterScreen = () => {

  const dispatch = useDispatch();

  const [formValues, handleInputChange] = useForm({
    name: 'Daniel',
    email: 'juan@gmail.com',
    password: '123344',
    password2: '123344'
  })

  const {name,email, password, password2} = formValues;

  const handleRegister = (e) => {
    e.preventDefault();
    
    if( isFormValid()){
      
      dispatch(removeError())

    }
  }

  const isFormValid = () => {
    if( name.trim().length === 0){
      dispatch(setError('Name is required'))
      console.log();
      return false;
    }else if(!validator.isEmail(email)){
      dispatch(setError('Email is not valid'))
      return false;
    }else if(password !== password2 || password.length < 5){
      dispatch(setError('Password should be at least 6 characters and match each other'))
      return false;
    }else{
      return true;
    }
  }
  return (
      <>
            <h3 className='auth__title'>Register</h3>

            <form onSubmit={handleRegister}>

              <div className='auth__alert-error'>
                Hola Mundo
              </div>

              <input 
                type="text"
                placeholder='Name'
                name="name"
                className='auth__input'
                onChange={ handleInputChange}
                value={name}
              />

              <input 
                type="text"
                placeholder='Email'
                name="email"
                className='auth__input'
                onChange={ handleInputChange}
                value={email}
              />

              <input 
                type="password"
                placeholder='Password'
                name="password"
                className='auth__input'
                onChange={ handleInputChange}
                value={password}
              />

              <input 
                type="password"
                placeholder='Comfirm password'
                name="password2"
                className='auth__input'
                onChange={ handleInputChange}
                value={password2}
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
