import React from 'react'
import styled from 'styled-components'
import { About, Contact, TopView, Works } from './HoomMain'


const MainWrap = styled.main`
    flex:1 0 auto;

`


const Main = () =>{
   return(
       <MainWrap>
           <TopView/>
           <About/>
           <Works/>
           <Contact/>
       </MainWrap>
   )
}

export default Main