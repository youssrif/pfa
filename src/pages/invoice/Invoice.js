import React, { useState, useEffect } from 'react'
import { Button, Container, Col, Row, Alert } from 'react-bootstrap'
import AddClientInvoice from './AddClientInvoice'
import InvoiceDetail from './InvoiceDetail'
import ProductInvoice from './ProductInvoice'
import { useSelector, useDispatch } from 'react-redux'
import TableTotal2 from './TableTotal2'
import { BsTelephone } from 'react-icons/bs'
import { GiRotaryPhone } from 'react-icons/gi'
import { FiMail } from 'react-icons/fi'
import axios from 'axios'
import { baseUrl } from '../../config/base'
import { Add_Invoice } from '../../store/invoice/action'
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min'
function Invoice() {
    const dispatch = useDispatch()
    const [showAdd, setShowAdd] = useState(false)
    const [selectedClient, setSelectedClient] = useState({})
    const [selectedService, setSelectedService] = useState([])
    const [selectedMateriel, setSelectedMateriel] = useState([])
    const [showAlertClient, setShowAlertClient] = useState(false)
    const [lastFacture, setLastFacture] = useState(null)
    const [showAlertProduct, setShowAlertProduct] = useState(false)
    const company = useSelector(state => state?.Show_company_byUser?.data[0])
    const [tableValues, setTableValues] = useState({
        totalHt: 0.000,
        TotalTVA: 0.000,
        TotalTTc: 0.000,
        Tmf: 0.600,
        net: 0.600,
    })
    const AddInvocie = () => {

        const obj = {
            companyId: company?._id,
            clientId: selectedClient?._id,
            materialId: selectedMateriel,
            serviceId: selectedService,
            num: lastFacture,
            etats: false,
            emontantHT: tableValues?.totalHt,
            tTVA: tableValues?.TotalTVA,
            montantTTC: tableValues?.TotalTTc,
            netapayer: tableValues?.net,
            tfc: tableValues?.Tmf
        }
        if (!obj?.clientId) {
            setShowAlertClient(true)
            setTimeout(() => {
                setShowAlertClient(false)
            }, 2000)
            return false
        }
        if (obj?.materialId?.length === 0 && obj?.serviceId?.length === 0) {
            setShowAlertProduct(true)
            setTimeout(() => {
                setShowAlertProduct(false)
            }, 2000)
            return false
        }
        if (obj?.clientId && (obj?.materialId?.length > 0 || obj?.serviceId?.length > 0)) {
            dispatch(Add_Invoice(obj))
            return true
        }
    }
    useEffect(() => {
        if (company?._id !== undefined) {
            axios.get(`${baseUrl}/invoice/show/last/facture/company/${company?._id}`)
                .then((res) => {

                    if (res.data.result?.num === undefined)
                        setLastFacture("0000001")
                    else {

                        var lasNum = String(res.data.result.num + 1)

                        while (lasNum.length <= 6) {
                            lasNum = "0" + lasNum
                        }
                        setLastFacture(lasNum)
                    }
                })
                .catch((err) => {
                    console.error(err)
                })
        }
    }, [company])
    console.log('service and materif', lastFacture)
    return (
        <Container style={{ marginTop: '60px'/* , border: '1px solid red' */, overflowY: 'scroll !important' }}>
            <Row>
                <Col md={{ span: 4, offset: 10 }} style={{ marginBottom: '90px' }}><h1>Facture</h1>
                    <div style={{ display: 'flex', alignItems: 'center' }}><strong style={{ fontSize: '30px', margin: '4px', lineHeight: '60px' }}>N°:</strong><h3>{lastFacture}</h3></div>
                </Col>
            </Row>
            <Row style={{ marginTop: '40px' }}>
                <Col lg='8'>
                    <AddClientInvoice
                        setClientObject={setSelectedClient}
                    />
                </Col>
                <Col lg='3'>
                    <InvoiceDetail />
                </Col>
            </Row>
            <hr style={{ height: '3px' }}></hr>
            <Row>
                <ProductInvoice
                    settingTable={setTableValues}
                    setServiceArray={setSelectedService}
                    setMaterielArray={setSelectedMateriel}
                />
            </Row>
            <hr style={{ height: '3px' }}></hr>
            <Row>
                <Col sm={{ span: 5, offset: "6" }} >
                    <TableTotal2
                        values={tableValues}
                    />
                </Col>
            </Row>
            <hr style={{ height: '3px' }}></hr>
            <Row>
                <Col >
                    <div><strong>Raison sociale:</strong> {company?.raison_sociale}</div>
                    <div><strong>Adresse:</strong> {company?.address}</div>
                    <div><strong>MF:</strong> {company?.mf}</div>
                </Col>
                <Col>
                    <div> <BsTelephone size={20} /> {company?.tle}</div>
                    <div><GiRotaryPhone size={20} /> {company?.fax}</div>
                    <div><FiMail size={20} /> {company?.email}</div>
                </Col>
            </Row>
            <Row>
                <Col md={{ span: 4, offset: 10 }}>
                    <Button variant='outline-success' onClick={() =>
                        AddInvocie()

                    }> Ajouter</Button>
                </Col>
            </Row>
            <Row>
                <Col sm={4} style={{ position: 'absolute', bottom: '0', marginTop: '30px' }}>
                    {showAlertClient && (
                        <Alert size="small" variant="danger" >
                            <Alert.Heading>Attention!</Alert.Heading>
                            <p>
                                Séléctionner un client SVP
                            </p>
                        </Alert>
                    )}
                    {showAlertProduct && (
                        <Alert size="small" variant="danger" >
                            <Alert.Heading>Attention!</Alert.Heading>
                            <p>
                                Séléctionner un produit ou un service SVP
                            </p>
                        </Alert>
                    )}
                </Col>


            </Row>

        </Container>
    )
}
export default Invoice