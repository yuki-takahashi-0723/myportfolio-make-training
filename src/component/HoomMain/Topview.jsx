import React from 'react'
import TopPhoto from'../../img/xps-6uneKLGrJPs-unsplash.jpg'
import styled from 'styled-components'
const TopView = () =>{

    const FirstViewWrap = styled.div`
        margin:0 calc((100% - 100vw)/2);
        width:100vw;
        background-image:url(${TopPhoto});
        background-size:cover;
        height:100vh;
        position:relative;
        display:flex;
        justify-content:center;
        align-items:center;
        @media (min-width:600px){
            background-position: right 10% bottom 25%;
        }
    `


    const FirstCatch = styled.h2`
        position:absolute;
        top:20%;
        
        font-size:18px;
        font-weight:bold;
        background-color:rgba(255,255,255,0.5);
        margin:0 auto;
        @media (min-width:600px){
            font-size:27px;
            top:40%;
            right:10%
           
        }
    `



    return(
       <FirstViewWrap>
           
                <FirstCatch>誰のそばにも寄り添える<br></br>テクノロジーを開発したい</FirstCatch>
          
       </FirstViewWrap>
    )
}

export default TopView