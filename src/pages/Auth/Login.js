import React, { useEffect, useState } from 'react'
import '../../styles/Auth/Login.css'
import back from '../../assets/back.jpg'
import { AiOutlineCaretRight } from "react-icons/ai";
import {LoginUser, ShowUser} from '../../store/user/login/action'
import {useDispatch} from 'react-redux'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
function Login(props) {
  const dispatch=useDispatch()

   const[email,setEmail]=useState('')
   const[password,setPassword]=useState('')

/*    useEffect(() => {
    dispatch(ShowUser())

 }, []) */

/* let ofb={
  e
} */
  return (
    <div className="  container-fluid ">
      {/* <div className='image' ><img className="Login" src={back} alt="img" /></div>
       */}
      <div className="Login">
        <div className=" signup-form">
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"></link>
          <form className='mar' action="/examples/actions/confirmation.php" method="post" >
            <h2>Connexion</h2>
            {/*         <p className="hint-text">Create your account. It's free and only takes a minute.</p>
         */}
            <div className="form-group">
              {/*   <div className="row">
            <div className="col"><input type="text" className="form-control" name="first_name" placeholder="First Name" required="required" /></div>
            <div className="col"><input type="text" className="form-control" name="last_name" placeholder="Last Name" required="required" /></div>
          </div> */}
            </div>
            <div className="form-group">
              <input type="email" className="form-control" name="email" placeholder="Email" required="required" value={email} onChange={(e)=>setEmail(e.target.value)} />
            </div>
            <div className="form-group">
              <input type="password" className="form-control" name="password" placeholder="Password" required="required" value={password} onChange={(e)=>setPassword(e.target.value)} />
            </div>
            <div className="clearfix">
              <label className="float-left form-check-label"><input type="checkbox" /> Remember me</label>
              <a href="#" className="float-right">Forgot Password?</a>
            </div>
            {/*  <div className="form-group">
          <input type="password" className="form-control" name="confirm_password" placeholder="Confirm Password" required="required" />
        </div> */}
            <div className="form-group">
            </div>
            <div className="form-group">
              <button type="button" onClick={()=>{
                 dispatch(LoginUser({email,password}) )
               /*  props?.logged */}} className="btn btn-primary btn-lg btn-block ">
                <h5> S'identifier </h5>
              </button>
            </div>
          </form >
          <div className="text-center"> Vous n'avez pas de compte ?  <Link to="/register"> Créer un compte</Link></div>
        </div>

      </div>

    </div >


  )
}

export default Login