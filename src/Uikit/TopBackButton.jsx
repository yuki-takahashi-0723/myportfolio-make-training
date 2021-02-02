import React from 'react'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import styled from 'styled-components'

const ButtonCustom = styled.a`
    color:#ffffff;
    background-color:#50360d;
    text-decoration:none;
    width:40px;
    height:40px;
    display:flex;
    justify-content:center;
    align-items:center;
`


const TopBackButton = () =>{
    return(
        <>
            <ButtonCustom href='#top'>
                <ArrowUpwardIcon/>
            </ButtonCustom>
        </>
    )
}

export default TopBackButton