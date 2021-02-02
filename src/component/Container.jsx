import React from 'react'
import styled from 'styled-components'

const ContainerWrap = styled.div`
    max-width:1110px;
    padding-left:15px;
    padding-right:15px;
    margin-left:auto;
    margin-right:auto;
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
       
`


const Container = ({children}) =>{
    return(
        <ContainerWrap>
            {children}
        </ContainerWrap>
          
    )
}

export default Container