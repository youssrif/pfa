import React, { useState, useEffect } from 'react'
import '../../styles/home/Calender.css'
import { AiOutlineCaretRight, AiOutlineCaretLeft } from "react-icons/ai";
import { CKground3 } from "../../components/Sidebar/styles";
import { baseUrl } from '../../config/base';
import CalenderIteam from './CalenderIteam';
import { Home } from '../../store/home/action';
import { useSelector, useDispatch } from "react-redux";
import { Button, ButtonGroup, Table } from 'react-bootstrap'
import axios from 'axios';
function Calender() {
    const dispatch = useDispatch();
    const Idinvoice = useSelector(state => state?.Home?.result?.data[0]?._id)
    /* const user = useSelector(state => state?.Home?.data?.data) */
    const Idcopany=useSelector(state =>state?.Show_company_byUser?.data[0]?._id)
    const invoice = useSelector(state => state?.Home?.data?.result)
    const sum=useSelector(state=>state?.Home?.data?.sum)
    /* const [month, setMonth] = useState(null); */
    const [Month, setMonth] = useState([
        { id: 1, month: 'Jan', num: '01' },
        { id: 2, month: 'Feb', num: '02' },
        { id: 3, month: 'Mar', num: '03' },
        { id: 4, month: 'Apr', num: '04' },
        { id: 5, month: 'May', num: '05' },
        { id: 6, month: 'Jun', num: '06' },
        { id: 7, month: 'Jul', num: '07' },
        { id: 8, month: 'Aug', num: '08' },
        { id: 9, month: 'Sep', num: '09' },
        { id: 10, month: 'Oct', num: '10' },
        { id: 11, month: 'Nov', num: '11' },
        { id: 12, month: 'Dec', num: '12' },
    ])
    useEffect(() => {
       dispatch(Home(Idcopany))
    }, [Idcopany])

    /*  console.log('mothsqsd', month) */
    /*   useEffect(() => {
          axios.get(`${baseUrl}/invoice/show/price/facture/${"62335aecf5eef1518583b505"}`)
              .then((res) => {
                  console.log('responce of api', res)
                  setListfacture(res.data.result)
                  setSum(res.data.sum)
              })
              .catch((e) => {
                  console.log(e)
              })
      }, []) *//* 
     */
    return (
        <div style={{ marginTop: '60px' }}>
            <div className="d-grid gap-2">
                {/*   <div class="left">
                    <AiOutlineCaretLeft />
                </div> */}


                <ButtonGroup className="mb-2" size="lg" aria-label="First group">
                    {Month.map((el) => {
                        return (
                            <Button className='test' size='lg' variant="secondary" key={el.id}>{el.month}</Button>
                        )
                    }
                    )}
                </ButtonGroup>
            </div>
            <Table striped borderless hover size="lg"  >
                <thead>
                    <tr >
                        <th >CLIENT</th>
                        <th >NUM FACTURE</th>
                        <th >MONTANT HT</th>
                        <th >ÉTAT</th>
                        <th >DATE</th>
                        <th >ACTION</th>
                    </tr>
                </thead>

                <tbody>
                    {invoice?.map((el) => {
                        return (
                            <tr key={el?._id}>
                                <td>{el?.clientId?.raison_sociale}</td>
                                <td>{el?.num}</td>
                                <td>{sum.montantHT} DT</td>
                                <td>{el?.etats === true ? "payé" : "non payé"}</td>
                                <td>{el?.createdAt?.slice(0, 10)}</td>
                                <td>
                                    <Button variant='danger'>Supprimer </Button>

                                </td>

                            </tr>
                        )
                    })}
                </tbody>


            </Table>
        </div>

    )
}

export default Calender