import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { Button, Table, Form } from 'react-bootstrap'
import { FaFileInvoiceDollar } from "react-icons/fa";
import { MdDeleteForever, MdOutlineModeEdit } from "react-icons/md";
import '../../styles/client/Client.css'
import ClientRegistre from './ClientRegistre';
import ClientUpdate from './ClientUpdate';
import { Del_client, Show_client_byCompany, Show_invoice_byClient } from '../../store/client/action';
import Facture_client from './Facture_client';
import { Link } from 'react-router-dom';
import ModalAlert from '../modal/ModalAlert';

function Client() {

  const dispatch = useDispatch();

  const Idcopany = useSelector(state => state?.Show_company_byUser?.data[0]?._id)
  const client = useSelector(state => state?.Show_client_byCompany?.data)
  /* const Idclient = useSelector(state => state?.Show_client_byCompany?.data?._id) */
  const [clients, setClients] = useState('')
  const [modalShow, setModalShow] = useState(false);
  const [updShow, setUpdShow] = useState(false);
  const [show, setShow] = useState(false)
  const [deletes, setDeletes] = useState({})
  const [selectedElement, setSelecetedElement] = React.useState()
  const [filtredClient, setFiltredClient] = React.useState([])
  const keys = [
    "raison_sociale",
    "respensable",
    "address",
    "tle",
    "email",
    "fax"
  ]
  const update = () => {
    dispatch(Del_client(deletes?._id, deletes?.companyId._id))
    handerClose()
  }

  const handerClose = () => {
    setShow(false)
  }

  useEffect(() => {
    dispatch(Show_client_byCompany(Idcopany))
  }, [Idcopany])

  useEffect(() => {
    if (clients?.length > 0) {
      setFiltredClient(client?.filter((el) => {
        return (
          keys.some((key) => el[key]?.toLowerCase()?.includes(String(clients)) === true)
        )
      }))
      /* (String(el?.raison_sociale) ||
        String(el?.respensable) ||
        String(el?.address) ||
        String(el?.tle) ||
        String(el?.email) ||
        String(el?.fax)) )?.includes(String(clients)) === true
      */


    }
    else
      setFiltredClient(client)
  }, [clients, client])

  console.log('client map', client)
  return (



    <div className='container' style={{ marginTop: '60px' }}>
      <div className="serachh">
        <Form.Group value={clients} onChange={(e) => setClients(e.target.value)} style={{ marginTop: '40px' }} controlId="text">
          <Form.Control className="input-search" type="text" placeholder="search..." />
        </Form.Group>
      </div>
      <div className="add">

        <Button onClick={() => setModalShow(true)} className='btnn' variant="outline-primary">Ajouter Client</Button>
        <ClientRegistre
          show={modalShow}
          onHide={() => setModalShow(false)}
        />



      </div>

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
            <th  >RAISON SOCIALE</th>
            <th >RESPENSABLE</th>
            <th >TELEPHONE</th>
            <th >ADDRESS</th>
            <th >EMAIL</th>
            <th >FAX</th>
            {/* <th >MT TTC</th> */}
            <th >ACTIONS</th>
          </tr>
        </thead>

        <tbody className="tbody-service">
          {filtredClient?.length > 0 && filtredClient?.map((el) => {
            return (
              <tr key={el?._id}>
                <td>{el?.raison_sociale}</td>
                <td>{el?.respensable}</td>
                <td>{el?.tle}</td>
                <td>{el?.address}</td>
                <td>{el?.email}</td>
                <td>{el?.fax}</td>
                <td>
                  <div className='accbt'>
                    <Button onClick={() => {
                      setUpdShow(true)
                      setSelecetedElement(el)
                    }

                    } variant="outline-info" ><MdOutlineModeEdit /></Button>
                    <ClientUpdate
                      show={updShow}
                      element={selectedElement}
                      onHide={() => setUpdShow(false)}
                    />
                    <Link className="linkC-to" to={'client/facture'}>
                      <Button onClick={() => {
                        dispatch(Show_invoice_byClient(el?._id))
                      }

                      } variant="outline-info" ><FaFileInvoiceDollar /></Button></Link>


                    <Button onClick={() => {
                      setDeletes(el)
                      setShow(true)
                      /* props?.change && props.change() */
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
        btnClicked={update}
        handleClose={handerClose}
        header={"supprimer clients"}
        body={"Voulez vous supprimer cette client?"}
        valider={"supprimer"}
        variants={"outline-danger"}
      />
    </div>
  )
}

export default Client