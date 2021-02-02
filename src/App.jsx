import React from 'react'
import { Hoom } from './pages'
import styled from 'styled-components'
import './App.css'
const CommonStyles = styled.div`
    box-sizing:border-box;
    font-family:"Helvetica Neue",Arial, 
    "Hiragino Kaku Gothic ProN",Meiryo,sans-serif;
    font-size:16px;
    color:#50360d;
    line-height:1.6;
    margin:0;
    height:100%;
   
    

`

const App = () => {
    return(
        <CommonStyles>
            <Hoom/>
        </CommonStyles>
    )
}

export default App