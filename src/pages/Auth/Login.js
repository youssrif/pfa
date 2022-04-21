import React, { useEffect, useState } from 'react'
import '../../styles/Auth/Login.css'
import back from '../../assets/back.jpg'
import { AiOutlineCaretRight } from "react-icons/ai";
import { LoginUser } from '../../store/user/login/action'
import { ShowUser } from '../../store/user/actionUser/action'
import { useDispatch } from 'react-redux'
import validator from 'validator';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { Form, InputGroup } from 'react-bootstrap';
function Login(props) {
  const dispatch = useDispatch()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  //validation
  const [validated, setValidated] = useState(false);
  const [emailerror, setEmailerror] = useState("");
  const [passerror, setPasserror] = useState("");

  const valid = (err) => {
    let count = 0;

    /* if (!password) {
      count++;
      setPasserror();
    } /* else if (password.length < 8) {
      count++;
      setPasserror("Au minimum 8 caractères! ");
    } else if (!(validator.isStrongPassword(password))) {
      count++;
      setPasserror("N'est pas un mot de passe fort! ");
    } */

    if (!email) {
      count++;
      setEmailerror("L'email du client doit étre remplir ");

    } else if (!(validator.isEmail(email))) {
      count++;
      setEmailerror("Entrez une adresse email valide!");
    }

    if (count > 0) {
      setValidated(false);
      return false;
    }
    return true;
  };

  /* const close = () => {
      props.onHide()
      setRaison_socialeerror('')
      setMferror('')
      setTleerror('')
      setEmailerror('')
      setRiberror('')
      setRespensableerror('')
  
  
  } */

  const close = () => {


    setEmailerror('')
    setPasserror('')



  }

  const login = async () => {
    const isValid = valid();
    if (isValid) {
      dispatch(LoginUser({ email, password }))
      close()

    }
  };


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
          <Form validated={validated}>
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
              <InputGroup hasValidation>
                <Form.Control type="email" className="form-control" name="email" placeholder="Email*" required="required" isInvalid={emailerror} value={email} onChange={(e) => { setEmail(e.target.value); setEmailerror('') }} />
                <Form.Control.Feedback type="invalid">
                  {emailerror}
                </Form.Control.Feedback>
              </InputGroup>
            </div>
            <div className="form-group">
              <InputGroup hasValidation>
                <Form.Control type="password" className="form-control" name="password" placeholder="Mot de passe*" required="required" isInvalid={passerror} value={password} onChange={(e) => { setPassword(e.target.value); setPasserror('') }} />
                <Form.Control.Feedback type="invalid">
                  {passerror}
                </Form.Control.Feedback>
              </InputGroup>
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
              <button type="button" onClick={login} className="btn btn-primary btn-lg btn-block ">
                <h5> S'identifier </h5>
              </button>
            </div>
          </Form >
          <div className="text-center"> Vous n'avez pas de compte ?  <Link to="/register"> Créer un compte</Link></div>
        </div>

      </div>

    </div >


  )
}

export default Login