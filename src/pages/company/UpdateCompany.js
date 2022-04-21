import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Form, InputGroup, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Up_company } from '../../store/company/action'
import '../../styles/company/UpdateCompany.css'
import { MdOutlineModeEdit } from "react-icons/md";
import validator from 'validator';

import ModalAlert from '../modal/ModalAlert'
function UpdateCompany() {
    const dispatch = useDispatch();
    const userId = useSelector(state => state?.LoginUser?.data?.new?._id)
    const company = useSelector(state => state?.Show_company_byUser?.data[0])
    const [raison_sociale, setRaison_sociale] = useState(company?.raison_sociale)
    const [mf, setMf] = useState()
    const [tle, setTle] = useState()
    const [fax, setFax] = useState()
    const [email, setEmail] = useState()
    const [address, setAddress] = useState()
    const [rib, setRib] = useState()
    const [pays, setPays] = useState()
    const [activity, setActivity] = useState()
    const [web, setWeb] = useState()
    const [c_tva, setC_tva] = useState()
    const [show, setShow] = useState(false)

    const update_company = {
        raison_sociale: raison_sociale,
        mf: mf,
        tle: tle,
        email: email,
        address: address,
        rib: rib,
        pays: pays,
        activite: activity,
        web: web,
        c_tva: c_tva,
        fax: fax,


    }

    const update = () => {
        dispatch(Up_company(company?._id, update_company, userId))
        handerClose()
    }

    useEffect(() => {
        setRaison_sociale(company?.raison_sociale)
        setMf(company?.mf)
        setTle(company?.tle)
        setFax(company?.fax)
        setEmail(company?.email)
        setAddress(company?.address)
        setRib(company?.rib)
        setPays(company?.pays)
        setActivity(company?.activite)
        setWeb(company?.web)
        setC_tva(company?.c_tva)
    }, [userId])

    const handerClose = () => {
        setShow(false)
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
    const registerc = async () => {
        const isValid = valid();
        if (isValid) {
            setShow(true)
            close()
        }
    };

    return (



        <Container className='containerCM'>
            <Row>
                <Col className='col_raison'>{company?.raison_sociale}</Col>
            </Row>
            <Row>
                <Form validated={validated}>

                    <Form.Group className=" mb-3" >
                        <Form.Label  >Raison Sociale <MdOutlineModeEdit /></Form.Label>
                        <InputGroup hasValidation>
                            <Form.Control className='height' type="email" name="raison_sociale" placeholder="Raison Sociale*" required="required" isInvalid={raison_socialeerror} value={raison_sociale} onChange={(e) => { setRaison_sociale(e.target.value); setRaison_socialeerror('') }} />
                            <Form.Control.Feedback type="invalid">
                                {raison_socialeerror}
                            </Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>


                    <Form.Group className=" mb-3" controlId="formBasicEmail">
                        <Form.Label  >Email<MdOutlineModeEdit /></Form.Label>
                        <InputGroup hasValidation>
                            <Form.Control type="email" className="height form-control" name="Email" placeholder="Email* " required="required" isInvalid={emailerror} value={email} onChange={(e) => { setEmail(e.target.value); setEmailerror('') }} />
                            <Form.Control.Feedback type="invalid">
                                {emailerror}
                            </Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Matricule Fiscal<MdOutlineModeEdit /></Form.Label>
                        <InputGroup hasValidation>
                            <Form.Control type="text" className="height form-control" name="mf" placeholder="Matricule Fiscal* " required="required" isInvalid={mferror} value={mf} onChange={(e) => { setMf(e.target.value); setMferror('') }} />
                            <Form.Control.Feedback type="invalid">
                                {mferror}
                            </Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Code Tva<MdOutlineModeEdit /></Form.Label>
                        <Form.Control className='height' type="text" placeholder="Code Tva" value={c_tva} onChange={(e) => setC_tva(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Rib<MdOutlineModeEdit />
                        </Form.Label>
                        <InputGroup hasValidation>
                            <Form.Control type="text" className="height form-control" name="rib" placeholder="Rib* " required="required" isInvalid={riberror} value={rib} onChange={(e) => { setRib(e.target.value); setRiberror('') }} />
                            <Form.Control.Feedback type="invalid">
                                {riberror}
                            </Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Address<MdOutlineModeEdit /></Form.Label>
                        <InputGroup hasValidation>
                            <Form.Control type="text" className="height form-control" name="address" placeholder="Address* " required="required" isInvalid={adresserror} value={address} onChange={(e) => { setAddress(e.target.value); setAdresserror('') }} />
                            <Form.Control.Feedback type="invalid">
                                {adresserror}
                            </Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Fax<MdOutlineModeEdit /></Form.Label>
                        <Form.Control className='height' type="text" placeholder="Fax" value={fax} onChange={(e) => setFax(e.target.value)} />
                    </Form.Group>
                </Form>
            </Row>
            <Row>
                <Form.Group className='margin'>
                    <Row>
                        <Col>
                            <Form.Label>Activité<MdOutlineModeEdit /></Form.Label>
                            <Form.Control className='height' type="text" placeholder="Activité" value={activity} onChange={(e) => setActivity(e.target.value)} />
                        </Col>
                        <Col>
                            <Form.Label>Pays<MdOutlineModeEdit /></Form.Label>
                            <Form.Control className='height' type="text" placeholder="Pays" value={pays} onChange={(e) => setPays(e.target.value)} />
                        </Col>
                    </Row>
                </Form.Group>
            </Row>
            <Row>
                <Form.Group className='margin'>
                    <Row>
                        <Col>
                            <Form.Label>Site Web<MdOutlineModeEdit /></Form.Label>
                            <Form.Control className='height' type="text" placeholder="Site Web" value={web} onChange={(e) => setWeb(e.target.value)} />
                        </Col>
                        <Col>
                            <Form.Label>Numéro de téléphone<MdOutlineModeEdit /></Form.Label>
                            <InputGroup hasValidation>
                                <Form.Control type="text" className="height form-control" name="phone" placeholder="Téléphone* " required="required" isInvalid={tleerror} value={tle} onChange={(e) => { setTle(e.target.value); setTleerror('') }} />
                                <Form.Control.Feedback type="invalid">
                                    {tleerror}
                                </Form.Control.Feedback>
                            </InputGroup>                        </Col>
                    </Row>
                </Form.Group>
            </Row>
            <Row className='margin' >
                <Col md={{ span: 4, offset: 10 }}>
                    <Button onClick={registerc} variant="outline-success" type="submit">Modifier</Button>
                </Col>

            </Row>
            <ModalAlert
                show={show}
                btnClicked={update}
                handleClose={handerClose}
                header={"Modifier les données du sosite"}
                body={"Voulez vous modifier les données du sosite?"}
                valider={"valider"}
                variants={"outline-primary"}
            />
        </Container>
    )
}

export default UpdateCompany