import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { Button, Table, Form } from 'react-bootstrap'
import { FaFileInvoiceDollar } from "react-icons/fa";
import { MdDeleteForever, MdOutlineModeEdit } from "react-icons/md";
import '../../styles/client/Client.css'
import { Del_client, Show_client_byCompany, Show_invoice_byClient } from '../../store/client/action';
import ModalAlert from '../modal/ModalAlert';
import { del_Invoice_byclient } from '../../store/invoice/action';


function Facture_client() {

    const dispatch = useDispatch();
    const [show, setShow] = useState(false)
    const [deletes, setDeletes] = useState({})
    const clientId = useSelector(state => state?.Show_client_byCompany?.data?._id)
    const Idcopany = useSelector(state => state?.Show_company_byUser?.data[0]?._id)
    const InvoiceClient = useSelector(state => state?.Show_invoice_byClient?.data?.result)
    const sum = useSelector(state => state?.Show_invoice_byClient?.data?.sum)


    const delate = () => {
        dispatch(del_Invoice_byclient(deletes?._id, deletes?.clientId?._id))
        handerClose()
    }
    const handerClose = () => {
        setShow(false)
    }


    console.log('client map', InvoiceClient)
    return (



        <div className='container' style={{ marginTop: '60px' }}>
            <div className="serachh">
                <Form.Group style={{ marginTop: '40px' }} controlId="text">
                    <Form.Control className="input-search" type="text" placeholder="search..." />
                </Form.Group>
            </div>
            {/*  <div className="add">

        <Button onClick={() => setModalShow(true)} className='btnn' variant="outline-primary">Ajouter Client</Button>
        <ClientRegistre
          show={modalShow}
          onHide={() => setModalShow(false)}
        />



      </div> */}

            <div className="d-grid gap-2">





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
                        <th  >CLIENT</th>
                        <th >NUM FACTURE</th>
                        <th >MONTANT HT</th>
                        <th >ÉTAT</th>
                        <th >DATE</th>
                        <th >ACTION</th>
                    </tr>
                </thead>

                <tbody className="tbody-service">
                    {InvoiceClient?.length > 0 && InvoiceClient?.map((el) => {
                        return (
                            <tr key={el?._id}>
                                <td>{el?.clientId?.raison_sociale}</td>
                                <td>N°{el?.num}</td>
                                <td>{sum.montantHT} DT</td>
                                <td>{el?.etats === true ? "payé" : "non payé"}</td>
                                <td>{el?.createdAt?.slice(0, 10)}</td>
                                <td>
                                    <div className='accbt'>
                                        <Button onClick={() => {
                                            setShow(true)
                                            setDeletes(el)
                                        }} variant='outline-danger'><div className='delicon'><MdDeleteForever /></div> </Button>
                                    </div>

                                </td>

                            </tr>
                        )
                    })}
                </tbody>


            </Table>
            <ModalAlert
                show={show}
                btnClicked={delate}
                handleClose={handerClose}
                header={"supprimer factures"}
                body={"Voulez vous supprimer cette facture?"}
                valider={"supprimer"}
                variants={"outline-danger"}
            />
        </div>
    )
}

export default Facture_client