import React, { useContext, useRef, useState } from "react";

import '../../styles/layout/sidebar.css'
import { logoSVG } from "../../assets";
import logo from "../../assets/logo.png"

import {

    AiOutlineHome,
    AiOutlineLeft,
    AiOutlineSearch,
    AiOutlineSetting,
} from "react-icons/ai";
import { FaFileInvoiceDollar } from "react-icons/fa";
import { MdLogout, MdOutlineProductionQuantityLimits } from "react-icons/md";
import { BsPeople } from "react-icons/bs";
import { RiCustomerService2Fill } from 'react-icons/ri'
import { useDispatch } from "react-redux";
import { ThemeContext } from "../../App";
import { useLocation, Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import Homeadmin from "../../pages/admin/Homeadmin";

const Sidebar = () => {
    const dispatch = useDispatch()
    const searchRef = useRef(null);
    const [clicked, setClicked] = useState(false)
    const [indexx, setIndex] = useState(null)
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const { pathname } = useLocation();
    const linksArray = [
        {
            label: "Home",
            iconss: <AiOutlineHome />,
            to: "/",
            /* notification: 0, */
        },
        {
            label: "Facture",
            iconss: <FaFileInvoiceDollar />,
            to: "/facture",
        },
        {
            label: "Client",
            iconss: <BsPeople />,
            to: "/client",
            /*  notification: 0, */
        },
        {
            label: "Matériel",
            iconss: <MdOutlineProductionQuantityLimits />,
            to: "/materiel",
            /* notification: 1, */
        },
        {
            label: "Service",
            iconss: <RiCustomerService2Fill />,
            to: "/service",
            /* notification: 1, */
        },
        {
            label: "Paramètres",
            iconss: <AiOutlineSetting />,
            to: "/company/parametre",
        },
        /*    {
               label: "Déconnecter",
               iconss: <MdLogout />,
               to: "/deconneter"
           }, */

        {
            label: "Admin",
            to: "/admin"
        },
    ];



    const searchClickHandler = () => {
        if (!sidebarOpen) {
            setSidebarOpen(true);
            searchRef.current.focus();
        } else {
            // search functionality
        }
    };

    return (
        <div className="container-sidebar">
            <div style={{ marginTop: "90px" }} className="company-logo">

            </div>
            {/* <div className="sidebar-itemm"> */}


            <ul className="div-lili">
                {linksArray?.map((el, index) => (
                    <div className="div-li" key={index}>
                        <Link className="link-to" to={el.to}>
                            <div className={clicked === true && index === indexx ? 'div_li2 clicked' : 'div_li2'} onClick={() => { setClicked(true); setIndex(index) }}>
                                <li className="lii"> <span className="icone-type">{el?.iconss}</span>  <span className="namess">{el.label}</span></li>
                            </div>
                        </Link>
                    </div>
                ))}


            </ul>

            <ul className="div-lili">
                <div className="div-li">
                    <div className={clicked === true === indexx ? 'div_li2 clicked' : 'div_li2'} onClick={() => {
                        setClicked(true); dispatch({
                            type: 'LOGOUT',
                            payload: {}
                        })
                    }}>
                        <li className="lii"> <span className="icone-type"></span> <MdLogout /> <span className="namess">Déconnecter</span></li>
                    </div>
                </div>
            </ul>


        </div>
        /* </div> */
    );
};
export default Sidebar;
