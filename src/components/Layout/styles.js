import styled from "styled-components";

import { v } from "../../styles/variables";

export const SLayout = styled.div`
    display: flex;
`;

export const SMain = styled.main`
    padding: calc(${v.smSpacing} * 0);
    margin-top: 150px;
    margin-left:120px ;
    width: 76%;
    h1 {
        font-size: 14px;
    }
`;
