import React from 'react'
import {useDispatch} from 'react-redux';
import {login,logout} from './Features/user';
function Login() {

  const dispatch = useDispatch()


  return (
    <div>
        <button
        onClick={()=>{
          dispatch(login({name: "Avinash",age:20 ,email : "avi@gmail.com"}));
        }}
        >Login</button>
        <button
        onClick={()=> {
          dispatch(logout());
        }}

        >
          LOGOUT
        </button>
    </div>
  )
}

export default Login