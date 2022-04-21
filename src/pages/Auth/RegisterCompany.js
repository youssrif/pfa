import React, { useState } from 'react'
import '../../styles/Auth/RegisterCompany.css'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useSelector } from "react-redux";
import {RegiSCompany}from '../../store/user/registre/company/action'
import { Redirect } from 'react-router-dom';

function RegisterCompany({setvalues,createAccount,...props}) {
    const dispatch = useDispatch()
    const userId = useSelector(state => state?.RegisterUser?.data?.user)
    console.log(userId)
    const [raison_sociale, setRaison_sociale] = useState('')
    const [activite, setActivite] = useState('')
    const [pays, setPays] = useState('')
    const [fax, setFax] = useState('')
    const [web, setWeb] = useState('')
    const [tle, setTle] = useState('')
    const [mf, setMf] = useState('')
    const [address, setAddress] = useState('')
    const [rib, setRib] = useState('')

    const data_company = {
        raison_sociale:raison_sociale,
        activite:activite,
        pays:pays,
        fax:fax,
        tle:tle,
        web:web,
        mf:mf,
        address:address,
        rib:rib,
        //c_tva: "hjjlkjqj68766",
    } 
   

    return (
        <div className="  container-fluid ">
            <div className="Login">
                <div className=" add  signup-formR">
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"></link>
                    <form className='mar' action="/examples/actions/confirmation.php" method="post" >
                        <h2>Créez votre compte</h2>
                        {/*         <p className="hint-text">Create your account. It's free and only takes a minute.</p>
           */}
                        <div className="form-group">
                            <input type="email" className="form-control" name="raison_sociale" placeholder="Raison Sociale" required="required" value={raison_sociale} onChange={(e) => setRaison_sociale(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" name="mf" placeholder="Matricule Fiscal " required="required" value={mf} onChange={(e) => setMf(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" name="rib" placeholder="Rib " required="required" value={rib} onChange={(e) => setRib(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" name="address" placeholder="Address " required="required" value={address} onChange={(e) => setAddress(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" name="fax" placeholder="Fax " required="required" value={fax} onChange={(e) => setFax(e.target.value)}/>
                        </div>

                        <div className="form-group">
                            <div className="row">
                                {/*        <div className="col"><input type="text" className="form-control" name="first_name" placeholder="Prenom" required="required" value={nom} onChange={(e) => setNom(e.target.value)} /></div>
                                <div className="col"><input type="text" className="form-control" name="last_name" placeholder="Nom" required="required" value={prenom} onChange={(e) => setPrenom(e.target.value)} /></div> */}
                                <div className="col">
                                    <input type="text" className="form-control" name="activite" placeholder="activité" required="required" value={activite} onChange={(e) => setActivite(e.target.value)} />
                                </div>
                                <div className="col">
                                    <input type="text" className="form-control" name="pays" placeholder="Pays " required="required" value={pays} onChange={(e) => setPays(e.target.value)} />
                                </div>

                            </div>
                        </div>

                        <div className="form-group">
                            <div className="row">
                                <div className="col">

                                    <input type="text" className="form-control" name="web" placeholder="Site Web " required="required" value={web} onChange={(e) => setWeb(e.target.value)} />

                                </div>
                                <div className="col">

                                    <input type="text" className="form-control" name="phone" placeholder="Numéro de téléphone " required="required" value={tle} onChange={(e) => setTle(e.target.value)} />

                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <button type="button" onClick={async()=>{
                              await setvalues(prev=>{return{...prev,company:data_company}})  /* ((props?.change3) && dispatch(RegiSCompany(data_company))) */
                              createAccount()
                            }} className="btn btn-primary btn-lg btn-block ">
                                <h5>  Créer mon compte  </h5>
                            </button>
                        </div>
                        <div className="form-groupp">
                            <button type="button" onClick={()=>{
                                
                                props?.change2()}} className="btn btn-primary btn-lg btn-block ">
                                <h5>  Retoure  </h5>
                            </button>
                        </div>
                    </form >
                    <div className="text-center">Vous avez déjà un compte? <Link to="/login">Se connecter</Link></div>
                </div>

            </div>
        </div >
    )

}
export default RegisterCompany