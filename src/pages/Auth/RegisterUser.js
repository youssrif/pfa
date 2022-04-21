import React, { useState } from 'react'
import '../../styles/Auth/RegisterClient.css'
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {RegisterUser} from '../../store/user/registre/user/action'



function RegisterClient({setvalues,...props}) {
    const dispatch = useDispatch()
    const [nom, setNom] = useState('')
    const [prenom, setPrenom] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confPassword, setConfPassword] = useState('')
    const [tle, setTle] = useState('')
    const data_user = {
        nom:nom,
        prenom:prenom,
        email:email,
        password:password,
        tle:tle,
        role:1
    
    } 
    return (
        <div className="  container-fluid ">
            <div className="Login">
                <div className=" signup-form">
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"></link>
                    <form className='mar' action="/examples/actions/confirmation.php" method="post" >
                        <h2>Créez votre compte</h2>

                        {/*         <p className="hint-text">Create your account. It's free and only takes a minute.</p>
           */}
                        <div className="form-group">
                            <div className="row">
                                <div className="col"><input type="text" className="form-control" name="nom" placeholder="Prenom" required="required" value={nom} onChange={(e) => setNom(e.target.value)} /></div>
                                <div className="col"><input type="text" className="form-control" name="prenom" placeholder="Nom" required="required" value={prenom} onChange={(e) => setPrenom(e.target.value)} /></div>
                            </div>
                        </div>
                        <div className="form-group">
                            <input type="email" className="form-control" name="email" placeholder="Email" required="required" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" name="password" placeholder="Mot de passe" required="required" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>

                        <div className="form-group">
                            <input type="password" className="form-control" name="password" placeholder="Confirm Mot de passe "/*  required="required" */ value={confPassword} onChange={(e) => setConfPassword(e.target.value)} />
                        </div>

                        <div className="form-group">
                            <input type="text" className="form-control" name="tle" placeholder="Numéro de téléphone " required="required" value={tle} onChange={(e) => setTle(e.target.value)} />
                        </div>
                        <div className="form-group">
                        </div>
                        <div className="form-group">
                            <button type="button" onClick={() => {
                                  /* props?.change */
                                  setvalues(prev=> {return{...prev,user:data_user}})
                                  props?.change && props.change()
                            }}
                                className="btn btn-primary btn-lg btn-block ">
                                <h5> Suivant </h5>
                            </button>
                        </div>
                    </form >
                    <div className="text-center">Vous avez déjà un compte? <Link to="/login">Se connecter</Link></div>
                </div>

            </div>

        </div >


    )
}

export default RegisterClient