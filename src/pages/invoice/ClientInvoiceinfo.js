import React, { useState, useEffect } from 'react'
import { Container, Row, Col, FormControl, Button } from 'react-bootstrap'
import { BiHide } from 'react-icons/bi'

import { MdDeleteOutline } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux';
import { Show_client_byCompany } from '../../store/client/action';
function ClientInvoiceinfo({ dataFilter, ...props }) {


    const [addingInput, setAddingInput] = useState([])
    const [idInput, setIdInput] = useState(null)
    const elimanateId = () => {
        setAddingInput(addingInput.filter(el => el?.id !== idInput))
    }
    console.log("refref", addingInput)


    return (
        <Container >
            <Row style={{ marginTop: '10px' }}>
                <Col sm={2}>
                    Entreprise:
                </Col>
                <Col style={{ marginLeft: '25px' }} sm={2}>
                    {dataFilter?.raison_sociale}
                </Col>
                <Col sm={{ offset: 2 }}>
                    <BiHide />
                </Col>
            </Row>
            <Row style={{ marginTop: '10px' }}>
                <Col sm={2}>
                    Matricule fiscal:
                </Col>
                <Col style={{ marginLeft: '25px' }} sm={2}>
                    {dataFilter?.mf}
                </Col>
                <Col sm={{ offset: 2 }}>
                    <BiHide />
                </Col>
            </Row>
            <Row style={{ marginTop: '10px' }}>
                <Col sm={2}>
                    Email:
                </Col>
                <Col style={{ marginLeft: '25px' }} sm={2}>
                    {dataFilter?.email}
                </Col>
                <Col sm={{ offset: 2 }}>
                    <BiHide />
                </Col>
            </Row>
            <Row style={{ marginTop: '10px' }}>
                <Col sm={2}>
                    Responsable:
                </Col>
                <Col style={{ marginLeft: '25px' }} sm={2}>
                    {dataFilter?.respensable}
                </Col>
                <Col sm={{ offset: 2 }}>
                    <BiHide />
                </Col>
            </Row>
            <Row style={{ marginTop: '10px' }}>
                <Col sm={2}>
                    Numéro mobile:
                </Col>
                <Col style={{ marginLeft: '25px' }} sm={2}>
                    {dataFilter?.tle}
                </Col>
                <Col sm={{ offset: 2 }}>
                    <BiHide />
                </Col>
            </Row>
            <Row style={{ marginTop: '10px' }}>
                <Col sm={2}>
                    Fax:
                </Col>
                <Col style={{ marginLeft: '25px' }} sm={2}>
                    {dataFilter?.fax}
                </Col>
                <Col sm={{ offset: 2 }}>
                    <BiHide />
                </Col>
            </Row>
            <Row style={{ marginTop: '10px' }}>
                <Col sm={2}>
                    Adresse:
                </Col>
                <Col style={{ marginLeft: '25px' }} sm={2}>
                    {dataFilter?.address}
                </Col>
                <Col sm={{ offset: 2 }}>
                    <BiHide />
                </Col>
            </Row>
            <Row>
                <Row>
                    {addingInput?.length > 0 &&
                        addingInput?.map((el) => {
                            return (
                                <Row key={el?.id} style={{ marginBottom: '10px' }}>
                                    <Col sm={2}>
                                        <FormControl
                                            style={{ height: "30px" }}
                                            type="text"
                                        />
                                    </Col>
                                    <Col sm={2}>
                                        <FormControl
                                            style={{ height: "30px" }}
                                            type="text"
                                        />
                                    </Col>
                                    <Col style={{ cursor: 'pointer' }} onMouseOver={() => {
                                        setIdInput(el.id)
                                    }} onClick={() => {
                                        elimanateId()
                                    }} sm={2}>
                                        <MdDeleteOutline style={{ fontSize: "1.5rem" }} />
                                    </Col>
                                </Row>
                            )
                        })

                    }
                </Row>
                <Col onClick={() => {
                    setAddingInput([...addingInput, { id: Math.floor(Math.random() * 100) }])
                }} style={{ marginTop: '25px', cursor: 'pointer' }} sm={{ offset: 3 }}>
                    <Button variant='outline-primary'>Ajouter un champ</Button>
                </Col>
            </Row>
        </Container>
    )
}
export default ClientInvoiceinfo