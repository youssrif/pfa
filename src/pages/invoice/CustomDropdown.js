import React, { useEffect, useState, useRef } from 'react'
import { Container, Col, Row, FormControl, Table, ToastContainer, Toast, Button } from "react-bootstrap"
import { useSelector, useDispatch } from 'react-redux'
import { Show_material_byCompany } from '../../store/material/action'


import { HiTemplate, HiOutlinePlus } from 'react-icons/hi'
import { Show_client_byCompany } from '../../store/client/action'
function CustomDropdown({ data, name, setFacture, Facture, count, selectedMateriel, MaterielSelected, ServiceSelected, ...props }) {
    const dispatch = useDispatch();
    const [item, setItem] = useState('')
    const Idcopany = useSelector(state => state?.Show_company_byUser?.data[0]?._id)

    const ref = useRef()
    const [selectedData, setSelectedData] = useState({})
    const [ShowToast, setShowToast] = useState(false)
    useEffect(() => {
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                setShowToast(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref])
    useEffect(() => {
        dispatch(Show_client_byCompany(Idcopany))
    }, [Idcopany])
    return (

        <Container style={{ marginTop: '20px' }}>
            <Col style={{ display: 'flex' }}>
                <FormControl style={{ height: '38px' }} value={item} onClick={() => {
                    setShowToast(true)
                    setSelectedData({})
                }} onChange={(e) => setItem(e.target.value)} type="text" />

                <Button style={{ marginLeft: '20px' }} onClick={() => {

                }} variant='outline-primary'><HiOutlinePlus /></Button>

            </Col>

            <ToastContainer className="p-3">
                <Toast ref={ref} show={ShowToast} onClose={data?.length === 0}>
                    <Toast.Header closeButton={false}>
                        <HiTemplate style={{ fontSize: '2rem' }} />
                        <strong className="me-auto"></strong>
                        <strong>{name}</strong>
                    </Toast.Header>
                    <Toast.Body style={{ cursor: 'pointer' }}>
                        {data?.length > 0 && data?.map(el => (
                            <>
                                <p onClick={() => {
                                    setShowToast(false)
                                    setSelectedData(el)
                                    if (Facture.map(elm => elm?._id)?.includes(el?._id) === false) {
                                        setFacture(prev => { return [...prev, el] })
                                        count(prev => prev + 1)
                                        selectedMateriel && selectedMateriel(
                                            el
                                        )
                                        if (name === 'Service')
                                            ServiceSelected(prev => [...prev, el?._id])
                                        else
                                            MaterielSelected(prev => [...prev, el?._id])
                                    }
                                }} key={el?._id}>{el?.nom}</p>
                                <hr />
                            </>

                        ))}
                    </Toast.Body>
                </Toast>
            </ToastContainer>
        </Container>
    )
}

export default CustomDropdown