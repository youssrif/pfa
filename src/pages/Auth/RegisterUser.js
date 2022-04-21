import React, { useState } from 'react'
import '../../styles/Auth/RegisterClient.css'
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import validator from 'validator';
import { Form, InputGroup } from 'react-bootstrap'




function RegisterClient({ setvalues, ...props }) {
    const dispatch = useDispatch()
    const [nom, setNom] = useState('')
    const [prenom, setPrenom] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confPassword, setConfPassword] = useState('')
    const [tle, setTle] = useState('')
    const [date, setDate] = useState(new Date().toISOString())
    const data_user = {
        nom: nom,
        prenom: prenom,
        email: email,
        password: password,
        tle: tle,
        role: 1,
        abon: date.slice(0, 10),
        etats: true,

    }

    //validation state
    const [validated, setValidated] = useState(false);
    const [nomerror, setNomerror] = useState("");
    const [prenomerror, setPrenomerror] = useState("");
    const [emailerror, setEmailerror] = useState("");
    const [passerror, setPasserror] = useState("");
    const [pass2error, setPass2error] = useState("");
    const [tleerror, setTleerror] = useState("");

    const valid = () => {
        let count = 0;


        if (!prenom) {
            count++;
            setPrenomerror("Remplir le prenom SVP! ");
        } else if (prenom.length < 3) {
            count++;
            setPrenomerror("Le prenom doit être au moins 4 caractères! ");
        }
        if (!nom) {
            count++;
            setNomerror("Remplir le nom SVP! ");
        } else if (nom.length < 3) {
            count++;
            setNomerror("Le nom doit être au moins 4 caractères! ");
        }

        if (!password) {
            count++;
            setPasserror("Remplir mot de passe SVP! ");
        } else if (password.length < 8) {
            count++;
            setPasserror("Au minimum 8 caractères! ");
        } else if (!(validator.isStrongPassword(password))) {
            count++;
            setPasserror("N'est pas un mot de passe fort! ");
        }



        if (confPassword != password) {
            count++;
            setPass2error("Mot de passe incorrect ");
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

        setNomerror('')
        setPrenomerror('')
        setTleerror('')
        setEmailerror('')
        setPasserror('')
        setPass2error('')


    }

    const suivant = async () => {
        const isValid = valid();
        if (isValid) {
            setvalues(prev => { return { ...prev, user: data_user } })
            props?.change && props.change()
            close()

        }
    };



    return (
        <div className="  container-fluid ">
            <div className="Login">
                <div className=" signup-formR">
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"></link>
                    <Form validated={validated}>
                        <h2>Créez votre compte</h2>

                        {/*         <p className="hint-text">Create your account. It's free and only takes a minute.</p>
           */}

                        <div className="form-group">
                            <div className="row">
                                <div className="col">
                                    <InputGroup hasValidation>
                                        <Form.Control type="text" className="form-control" name="nom" placeholder="Nom*" required="required" isInvalid={nomerror} value={nom} onChange={(e) => { setNom(e.target.value); setNomerror('') }} />
                                        <Form.Control.Feedback type="invalid">
                                            {nomerror}
                                        </Form.Control.Feedback>
                                    </InputGroup>

                                </div>
                                <div className="col">
                                    <InputGroup hasValidation>
                                        <Form.Control type="text" className="form-control" name="prenom" placeholder="Prenom*" required="required" isInvalid={prenomerror} value={prenom} onChange={(e) => { setPrenom(e.target.value); setPrenomerror('') }} />
                                        <Form.Control.Feedback type="invalid">
                                            {prenomerror}
                                        </Form.Control.Feedback>
                                    </InputGroup>
                                </div>
                            </div>
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

                        <div className="form-group">
                            <InputGroup hasValidation>
                                <Form.Control type="password" className="form-control" name="password" placeholder="Confirm Mot de passe* "/*  required="required" */ isInvalid={pass2error} value={confPassword} onChange={(e) => { setConfPassword(e.target.value); setPass2error('') }} />
                                <Form.Control.Feedback type="invalid">
                                    {pass2error}
                                </Form.Control.Feedback>
                            </InputGroup>
                        </div>

                        <div className="form-group">
                            <InputGroup hasValidation>
                                <Form.Control type="text" className="form-control" name="tle" placeholder="Numéro de téléphone* " required="required" isInvalid={tleerror} value={tle} onChange={(e) => { setTle(e.target.value); setTleerror('') }} />
                                <Form.Control.Feedback type="invalid">
                                    {tleerror}
                                </Form.Control.Feedback>
                            </InputGroup>
                        </div >
                        <div className="form-group">
                        </div>
                        <div className="form-group">
                            <button type="button" onClick={suivant} className="btn btn-primary btn-lg btn-block ">
                                <h5> Suivant </h5>
                            </button>
                        </div>
                    </Form >
                    <div className="text-center">Vous avez déjà un compte? <Link to="/login">Se connecter</Link></div>
                </div >

            </div >

        </div >


    )
}

export default RegisterClient