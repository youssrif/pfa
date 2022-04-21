import React, { useState } from 'react'
import '../../styles/Auth/RegisterCompany.css'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useSelector } from "react-redux";
import validator from 'validator';
import { RegiSCompany } from '../../store/user/registre/company/action'
import { Form, InputGroup } from 'react-bootstrap';

function RegisterCompany({ setvalues, createAccount, ...props }) {
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
    const [email, setEmail] = useState('')
    const [rib, setRib] = useState('')
    const [c_tva, setC_tva] = useState('')

    const data_company = {
        raison_sociale: raison_sociale,
        activite: activite,
        pays: pays,
        fax: fax,
        tle: tle,
        web: web,
        mf: mf,
        email: email,
        address: address,
        rib: rib,
        //c_tva: "hjjlkjqj68766",
    }

    //validation state
    const [validated, setValidated] = useState(false);
    const [raison_socialeerror, setRaison_socialeerror] = useState("");
    const [mferror, setMferror] = useState("");
    const [tleerror, setTleerror] = useState("");
    const [adresserror, setAdresserror] = useState("");
    const [emailerror, setEmailerror] = useState("");
    const [riberror, setRiberror] = useState("");

    const valid = () => {
        let count = 0;


        if (!raison_sociale) {
            count++;
            setRaison_socialeerror("Remplir le Raison socialeerror SVP! ");
        }
        if (!address) {
            count++;
            setAdresserror("Remplir l'adress SVP! ");
        }
        if (!mf) {
            count++;
            setMferror("Remplir le matricule fiscal SVP! ");
        }

        if (!tle) {
            count++;
            setTleerror("Remplir le Numero de telephone SVP ");
        }
        if (tle.length > 8 || tle.length < 8) {
            count++;
            setTleerror("Numero de telephone incorrect ");
        } else if (!(validator.isMobilePhone(tle))) {
            count++;
            setTleerror("Entrez un numéro de téléphone valide!");
        }
        if (!email) {
            count++;
            setEmailerror("L'email du client doit étre remplir ");

        } else if (!(validator.isEmail(email))) {
            count++;
            setEmailerror("Entrez une adresse email valide!");
        }
        if (!rib) {
            count++;
            setRiberror("Le rib du client doit étre remplir ");
        }
        if (count > 0) {
            setValidated(false);
            return false;
        }
        return true;
    };

    const close = () => {

        setRaison_socialeerror('')
        setMferror('')
        setTleerror('')
        setEmailerror('')
        setRiberror('')
        setAdresserror('')



    }

    return (
        <div className="  container-fluid ">
            <div className="Login">
                <div className=" add  signup-formC">
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"></link>
                    <Form validated={validated}>
                        <h2>Créez votre compte</h2>
                        {/*         <p className="hint-text">Create your account. It's free and only takes a minute.</p>
           */}
                        <div className="form-group">
                            <InputGroup hasValidation>
                                <Form.Control type="email" className="form-control" name="raison_sociale" placeholder="Raison Sociale*" required="required" isInvalid={raison_socialeerror} value={raison_sociale} onChange={(e) => { setRaison_sociale(e.target.value); setRaison_socialeerror('') }} />
                                <Form.Control.Feedback type="invalid">
                                    {raison_socialeerror}
                                </Form.Control.Feedback>
                            </InputGroup>
                        </div>
                        <div className="form-group">
                            <InputGroup hasValidation>
                                <Form.Control type="text" className="form-control" name="mf" placeholder="Matricule Fiscal* " required="required" isInvalid={mferror} value={mf} onChange={(e) => { setMf(e.target.value); setMferror('') }} />
                                <Form.Control.Feedback type="invalid">
                                    {mferror}
                                </Form.Control.Feedback>
                            </InputGroup>
                        </div>
                        <div className="form-group">
                            <InputGroup hasValidation>
                                <Form.Control type="text" className="form-control" name="rib" placeholder="Rib* " required="required" isInvalid={riberror} value={rib} onChange={(e) => { setRib(e.target.value); setRiberror('') }} />
                                <Form.Control.Feedback type="invalid">
                                    {riberror}
                                </Form.Control.Feedback>
                            </InputGroup>
                        </div>
                        <div className="form-group">
                            <InputGroup hasValidation>
                                <Form.Control type="text" className="form-control" name="address" placeholder="Address* " required="required" isInvalid={adresserror} value={address} onChange={(e) => { setAddress(e.target.value); setAdresserror('') }} />
                                <Form.Control.Feedback type="invalid">
                                    {adresserror}
                                </Form.Control.Feedback>
                            </InputGroup>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" name="fax" placeholder="Fax " required="required" value={fax} onChange={(e) => setFax(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <InputGroup hasValidation>
                                <Form.Control type="email" className="form-control" name="Email" placeholder="Email* " required="required" isInvalid={emailerror} value={email} onChange={(e) => { setEmail(e.target.value); setEmailerror('') }} />
                                <Form.Control.Feedback type="invalid">
                                    {emailerror}
                                </Form.Control.Feedback>
                            </InputGroup>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" name="fax" placeholder="Code Tva " required="required" value={c_tva} onChange={(e) => setC_tva(e.target.value)} />
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
                                    <InputGroup hasValidation>
                                        <Form.Control type="text" className="form-control" name="phone" placeholder="Téléphone* " required="required" isInvalid={tleerror} value={tle} onChange={(e) => { setTle(e.target.value); setTleerror('') }} />
                                        <Form.Control.Feedback type="invalid">
                                            {tleerror}
                                        </Form.Control.Feedback>
                                    </InputGroup>
                                </div>
                            </div>
                        </div>


                        <div className="form-group">
                            <button type="button" onClick={() => {
                                const isValid = valid();
                                if (isValid) {
                                    setvalues(prev => { return { ...prev, company: data_company } })
                                    close()
                                }
                            }} className="btn btn-primary btn-lg btn-block ">
                                <h5>  Créer mon compte  </h5>
                            </button>
                        </div>
                        <div className="form-groupp">
                            <button type="button" onClick={() => {

                                props?.change2()
                            }} className="btn btn-primary btn-lg btn-block ">
                                <h5>  Retoure  </h5>
                            </button>
                        </div>
                    </Form >
                    <div className="text-center">Vous avez déjà un compte? <Link to="/login">Se connecter</Link></div>
                </div>

            </div>
        </div >
    )

}
export default RegisterCompany