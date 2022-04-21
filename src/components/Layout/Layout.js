import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import { SLayout, SMain } from "./styles";
import '../../styles/layout/layout.css'
import { AiOutlineUser } from 'react-icons/ai'
const Layout = ({ children }) => {
    return (
        <SLayout>
            <Sidebar />
            <SMain>
                <div className="profile-icone" >
                    <AiOutlineUser size={40} />
                </div>
                <div>
                    {children}
                </div>
            </SMain>
        </SLayout>
    );
};

export default Layout;
