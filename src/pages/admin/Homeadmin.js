
import React, { useState, useEffect } from 'react'
import '../../styles/admin/Homeadmin.css'
import DatePicker from 'sassy-datepicker';
import { MdOutlineModeEdit } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { Button, ButtonGroup, Form, FormControl, ModalBody, Table } from 'react-bootstrap'
import { Show_All_company } from '../../store/company/action';
import Homecalander from './Homecalander';
import moment from 'moment'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function Homeadmin() {
    const dispatch = useDispatch();

    const userId = useSelector(state => state?.LoginUser?.data?.new?._id)
    const company = useSelector(state => state?.Show_All_company?.data)
    const [invoices, setInvoices] = React.useState('')
    const [updShow, setUpdShow] = React.useState(false);

    const [changedt, setChangedt] = useState();
    const [elem, setElem] = useState();



    const onChangeDate = (date) => {
        /* let obj = [elem]?.forEach((el) => (el.userId['abon'] = date?.toString()?.slice(4, 15))) */
        console.log('date====', date.toString());

        /*   setElem({
              
           }) */

    };
    const keys = [
        "raison_sociale"
    ]
    /* const keys1 = [
        "emontantHT"
    ] */

    /*     useEffect(() => {
            if (invoices?.length > 0) {
                setFiltredInvoice(invoice?.filter((el) => {
                    return (
                        keys.some((key) => el?.clientId?.[key]?.toLowerCase()?.includes(String(invoices)) === true)
                        keys1.some((key1) => el?.[key1]?.toLowerCase()?.includes(String(invoices)) === true)
                    )
                }))
            }
            else
                setFiltredInvoice(invoice)
        }, [invoices, invoice]) */

    useEffect(() => {
        dispatch(Show_All_company())
    }, [])


    return (
        <div style={{ marginTop: '60px' }}>
            <div className="d-grid gap-2">

                <Form.Group value={invoices} onChange={(e) => setInvoices(e.target.value)} style={{ marginTop: '40px', marginBottom: '40px' }} controlId="text">
                    <Form.Control className="input-search" type="text" placeholder=" search..." />
                </Form.Group>
                {/*   <div class="left">
                <AiOutlineCaretLeft />
            </div> */}


                {/*  <ButtonGroup className="mb-2" size="lg" aria-label="First group">
                {Month.map((el) => {
                    return (
                        <Button className='test' size='lg' variant="secondary" key={el.id}>{el.month}</Button>
                    )
                }
                )}
            </ButtonGroup> */}
            </div>
            <Table striped borderless="true" hover responsive size="lg" className="calender-table"  >
                <thead className="thead-invoice">
                    <tr >
                        <th  >RAISON SOCIAL</th>
                        <th >RESPONSABLE</th>
                        <th >EMAIL</th>
                        <th >TELEPHONE</th>
                        <th >ABONNEMENT</th>
                        <th >ÉTATS</th>
                    </tr>
                </thead>

                <tbody className="tbody-invoice">
                    {company?.length > 0 && company?.map((el) => {
                        return (

                            <tr key={el?._id}>
                                <td>{el?.raison_sociale}</td>
                                <td>{el?.userId.prenom} {el?.userId.nom}</td>
                                <td>{el?.email} </td>
                                <td>+216 {el?.tle}</td>
                                <td style={{ display: 'flex' }}>
                                    <FormControl
                                        type="date"
                                        disabled='false'
                                        style={{ height: '30px', width: '14vh', alignSelf: 'center' }}
                                        value={changedt}
                                        onChange={(e) => { setChangedt(e.target.value) }} />

                                    <span style={{ cursor: 'pointer', color: '#0d6efd' }} onClick={() => {
                                        setUpdShow(true)
                                        setElem(el)
                                    }

                                    }  ><MdOutlineModeEdit /></span>




                                </td>
                                <td> </td>

                            </tr>
                        )
                    })}
                </tbody>

            </Table>
            <Homecalander
                show={updShow}
                element={elem}
                onHide={() => setUpdShow(false)}
                changeDate={onChangeDate}
            />
        </div >
    )
}

export default Homeadmin