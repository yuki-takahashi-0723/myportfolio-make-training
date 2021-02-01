import React from 'react'
import styled from 'styled-components'


const FooterWrap = styled.footer`
    background-image:linear-gradient(180deg,#76654f,#4c3b25);
    padding-top:15px;
    padding-bottom:15px;
`
const CopyrightP = styled.p`
    text-align:center;
    margin:0;
`

const SmallCopy = styled.small`
    font-size:12px;
    color:#ffffff;
    @media (min-width){
        font-size:15px;
    }
` 

const Footer = () =>{
    return(
        <FooterWrap>
            <CopyrightP>
                <SmallCopy>(c)2020 Y's cafe All Rights Reserved</SmallCopy>
            </CopyrightP>
        </FooterWrap>
    )
}

export default Footer