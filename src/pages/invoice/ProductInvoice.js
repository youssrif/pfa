import React, { useState, useEffect } from 'react'
import { Container, Col, Row, Button, Table, FormControl } from "react-bootstrap"
import { useDispatch, useSelector } from 'react-redux'

import { Show_material_byCompany } from '../../store/material/action'
import { Show_service_byCompany } from '../../store/service/action'
import { FiEdit } from 'react-icons/fi'
import { BiEdit } from 'react-icons/bi'
import { MdOutlineSplitscreen } from 'react-icons/md'
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import ModalAddAmout from './ModalAddAmout'
import CustomDropdown from './CustomDropdown'
import ModalModifyPrice from './ModalModifyPrice'
import { RiCustomerService2Fill } from 'react-icons/ri'

function ProductInvoice({ settingTable, setServiceArray, setMaterielArray, ...props }) {
    const dispatch = useDispatch()
    const [addingProduct, setAddingProduct] = useState(0)
    const [addingService, setAddingService] = useState(0)
    const [factureItems, setFactureItems] = useState([])
    const [selectedMateriel, setSelectedMaterie] = useState({})
    const [selectedMaterielForPrice, setSelectedMaterielForPrice] = useState({})
    const [count, setCount] = useState(0)
    const [showModal, setShowModal] = useState(false)
    const [showModalPrice, setShowModalPrice] = useState(false)
    const companyId = useSelector(state => state?.Show_company_byUser?.data[0]?._id)
    const materiels = useSelector(state => state?.Show_material_byCompany?.data)
    const services = useSelector(state => state?.Show_service_byCompany?.data)
    useEffect(() => {
        dispatch(Show_material_byCompany(companyId))
        dispatch(Show_service_byCompany(companyId))
    }, [companyId])
    useEffect(() => {
        setAddingProduct(0)
        setAddingService(0)
    }, [factureItems, count])

    useEffect(() => {
        if (factureItems?.length > 0) {
            let ttht = 0
            let ttva = 0
            let tttc = 0
            factureItems?.map((el) => {
                ttht = el?.amount !== undefined ? ((parseInt(el?.prix) * parseInt(el?.amount))) + ttht : (parseInt(el?.prix)) + ttht;
                ttva = parseFloat(el?.mt_tva) + ttva
                tttc = parseInt(el?.ttc) + tttc
                console.log('parssen', ((parseInt(el?.prix) * parseInt(el?.amount))));
            })
            settingTable({
                totalHt: ttht,
                TotalTVA: ttva,
                TotalTTc: tttc,
                Tmf: 0.600,
                net: tttc + 0.600,
            })
        }
        else {
            settingTable({
                totalHt: 0.000,
                TotalTVA: 0.000,
                TotalTTc: 0.000,
                Tmf: 0.600,
                net: 0.600,
            })
        }
    }, [factureItems])
    useEffect(() => {
        if (selectedMateriel?._id !== undefined)
            setShowModal(true)
    }, [selectedMateriel])
    const CloseModalAount = (id) => {
        setFactureItems(factureItems.filter(el => el?._id !== id))
        setShowModal(false)
    }
    const CloseModalPrice = () => {
        setShowModalPrice(false)
    }
    const handelChange = (id, val) => {
        var arr = factureItems.filter((el) => {
            return el?._id === id
        })[0]
        arr['amount'] = val
        console.log('array is', arr)
        setFactureItems((prev) => {
            return [...prev.filter(el => el?._id !== id), arr]
        })
        setShowModal(false)
        setSelectedMaterie({})
    }
    const handeChangePrice = (id, val) => {
        var arr = factureItems.filter((el) => {
            return el?._id === id
        })[0]
        arr['prix'] = val
        console.log('array is', arr)
        setFactureItems((prev) => {
            return [...prev.filter(el => el?._id !== id), arr]
        })
        setShowModalPrice(false)
        setSelectedMaterie({})
    }
    console.log("les isdq", factureItems);
    return (
        <Container>
            <Row>
                <Col sm={{ span: 1, offset: '10' }}>
                    <Button onClick={() => {
                        setAddingProduct(prev => prev + 1)
                        setAddingService(0)
                    }} variant='outline-primary'><MdOutlineProductionQuantityLimits />+</Button>
                </Col>
                <Col sm={{ span: 1 }}>
                    <Button onClick={() => {
                        setAddingService(prev => prev + 1)
                        setAddingProduct(0)
                    }} variant='outline-primary'><RiCustomerService2Fill />+</Button>
                </Col>
            </Row>
            <Row>
                <Table striped borderless="true" hover responsive size="lg" className="calender-table"  >
                    <thead className="thead-invoice">
                        <tr >
                            <th>{/* <MdOutlineSplitscreen style={{ fontSize: '1.6rem', cursor: 'pointer' }} /> */}</th>
                            <th>Désignation</th>
                            <th>Quantité</th>
                            <th>PU HT</th>
                            <th>TVA</th>
                            <th>MT TVA</th>
                            <th>MT TTC</th>
                        </tr>
                        <tr>
                            {addingProduct > 0 ? (
                                <CustomDropdown
                                    data={materiels}
                                    name={"Matériel"}
                                    setFacture={setFactureItems}
                                    Facture={factureItems}
                                    count={setCount}
                                    selectedMateriel={setSelectedMaterie}
                                    MaterielSelected={setMaterielArray}
                                />
                            ) : addingService > 0 ? (
                                <CustomDropdown
                                    data={services}
                                    setFacture={setFactureItems}
                                    name={"Service"}
                                    Facture={factureItems}
                                    count={setCount}
                                    ServiceSelected={setServiceArray}
                                />
                            ) : (null)/* addingService>0?(): */
                            }
                        </tr>
                    </thead>
                    <tbody className="tbody-invoice">
                        {factureItems?.length > 0 && factureItems.map(el => (
                            <tr key={el?._id}>
                                <td></td>
                                <td>{el?.nom}</td>
                                <td> <FormControl
                                    type="number"
                                    disabled='true'
                                    style={{ height: '30px', width: '100px', alignSelf: 'center' }}
                                    value={el?.amount ? el?.amount : "-"}
                                    onChange={() => {
                                        handelChange(el?._id)
                                    }} />  </td>
                                <td>{el?.prix} <BiEdit size={'20'} style={{ cursor: 'pointer' }} onClick={() => {
                                    setSelectedMaterielForPrice(el)
                                    setShowModalPrice(true)
                                }} /></td>
                                <td>{Math.round(parseFloat(el?.tva) * 100)}%</td>
                                <td>{el?.mt_tva}</td>
                                <td>{el?.ttc}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Row>
            <Row>
            </Row>
            <ModalAddAmout
                show={showModal}
                selectedMateriel={selectedMateriel}
                changeAmount={handelChange}
                onHide={CloseModalAount}
            />
            <ModalModifyPrice
                show={showModalPrice}
                selectedMateriel={selectedMaterielForPrice}
                changePrice={handeChangePrice}
                onHide={CloseModalPrice}
            />

        </Container>
    )
}
export default ProductInvoice