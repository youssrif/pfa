import React, { useState, useEffect } from 'react'
import { Button, Modal, Container, Col, Row, FormControl, Alert } from 'react-bootstrap'
function ModalAddAmout({ selectedMateriel, changeAmount, ...props }) {

    const [amountValue, setAmountValue] = useState(0)
    const [MaterielAmounts, setMaterielAmount] = useState(selectedMateriel?.amount)
    const [showAlertAmount, setShowAlertAmount] = useState(false)
    useEffect(() => {
        if (selectedMateriel?._id !== undefined)
            setMaterielAmount(selectedMateriel?.amount)
    }, [selectedMateriel])
    useEffect(() => {
        if (amountValue > MaterielAmounts) {
            setShowAlertAmount(true)
        }
    }, [amountValue])
    useEffect(() => {
        if (showAlertAmount === true) {
            setTimeout(() => {
                setShowAlertAmount(false)
            }, 2000)
        }
    }, [showAlertAmount])
    return (
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            onHide={props?.onHide}
            backdrop="static"
        >
            <Modal.Header >
                <Modal.Title>Ajouter Quantité</Modal.Title>
            </Modal.Header>
            <Modal.Body >
                <Container style={{ width: "fit-content" }} >
                    <Row >
                        <Col sm={6}>
                            <FormControl
                                style={{ height: '40px' }}
                                type="Number"
                                value={amountValue}
                                onChange={(e) => {
                                    if (amountValue < selectedMateriel?.amount && e.target.value >= 0) {
                                        setAmountValue(e.target.value)
                                        setMaterielAmount(selectedMateriel?.amount - e.target.value)
                                    }
                                    else {
                                        setMaterielAmount(selectedMateriel?.amount)
                                        setAmountValue(0)
                                        setShowAlertAmount(true)
                                    }


                                }}
                            />
                        </Col>
                        <Col sm={6}>
                            <FormControl
                                style={{ height: '40px' }}
                                type="text"
                                value={MaterielAmounts}
                                disabled="true"

                            />
                        </Col>
                    </Row>
                    <Row style={{ margin: '10px' }}>
                        <Col sm="12">
                            {showAlertAmount &&
                                (<Alert variant="danger" >
                                    <Alert.Heading>Attention!</Alert.Heading>
                                    <p>
                                        La Quantité choisi et invalide
                                    </p>
                                </Alert>)}
                        </Col>

                    </Row>
                </Container>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='outline-success' onClick={() => {
                    if (amountValue > 0 && amountValue <= MaterielAmounts)
                        changeAmount(selectedMateriel?._id, amountValue)
                    else
                        setShowAlertAmount(true)
                }
                }>Valider</Button>
                <Button variant='outline-danger' onClick={() => props?.onHide(selectedMateriel?._id)}>Close</Button>
            </Modal.Footer>
        </Modal >
    )
}
export default ModalAddAmout