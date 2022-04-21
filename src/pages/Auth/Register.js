import React, { useEffect, useState } from 'react'
import RegisterClient from "./RegisterUser"
import RegisterCompany from "./RegisterCompany"
import { useSelector, useDispatch } from "react-redux";
import { RegisterUser } from '../../store/user/registre/user/action';
import Login from './Login';

import { Alert, Row, Col } from 'react-bootstrap'
function Register() {
    const dispatch = useDispatch()
    const Idcomp = useSelector(state => state?.RegiSCompany?.data?._id)
    const IdUser = useSelector(state => state?.RegisterUser?.data?.user)
    const [company, setCompany] = useState(false)
    const [client, setClient] = useState(true)
    const [showAlertSucess, SetShowAlertSuccess] = useState(false)
    const [log, setLog] = useState(false)
    const [values, setValues] = useState({})
    const changeTocompany = () => {
        setClient(false)
        setCompany(true)
    }
    const changeToClient = () => {
        setClient(true)
        setCompany(false)
    }
    const addUserAccount = () => {
        dispatch(RegisterUser(values, SetShowAlertSuccess))
        setLog(true)
        setTimeout(() => {
            SetShowAlertSuccess(false)
        }, (4000))
    }
    useEffect(() => {
        if (values?.user?.email !== undefined && values?.company?.email !== undefined) {
            addUserAccount()
        }
    }, [values])
    useEffect(() => {
        if (!!IdUser) {
            setCompany(true)
            setClient(false)
        }
    }, [IdUser])

    useEffect(() => {
        if (!!Idcomp) {
            setLog(true)
        }
    }, [Idcomp])
    console.log('logs of values ====', values)
    return (
        <div>

            {client === true && (
                <RegisterClient change={changeTocompany} setvalues={setValues} />
            )}
            {
                company === true && (
                    <RegisterCompany change2={changeToClient} setvalues={setValues} createAccount={addUserAccount} />
                )
            }
            {
                log === true && (
                    <Login change3={setLog} />
                )
            }
            {showAlertSucess &&
                (<Row style={{ position: 'absolute', right: '0', margin: '20px', zIndex: "444", width: '500px' }}>
                    <Col lg={12}>
                        <Alert variant="success" >
                            <Alert.Heading>Success!</Alert.Heading>
                            <p>
                                Vous ête enregistrer avec succeer
                            </p>
                        </Alert>
                    </Col>
                </Row>)}

        </div>
    )
}

export default Register
