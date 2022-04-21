import React from "react";
import { CKground, CKground2, CKground3 } from "../../components/Sidebar/styles";
import '../../styles/home/HomePage.css'
import Calender from './Calender';
import { Button } from 'react-bootstrap'
const Dashboard = () => {
    return (
        <div /* className="container" */>
            <div className="dashboar-flex-res" >
                <CKground>
                    <div className="cadre-paye">
                        <h4>Total</h4>
                        <h3>TND0.000</h3>
                    </div>

                </CKground>
                <CKground2>
                    <div className="cadre-paye">
                        <h4>Paye</h4>
                        <h3>TND0.000</h3>
                    </div>
                </CKground2>
                <CKground3>
                    <div className="cadre-nonpaye">
                        <h4>Non Paye</h4>
                        <h3>TND0.000</h3>
                    </div>
                </CKground3>

            </div>
            <Calender />
        </div>

    )
};

export default Dashboard;