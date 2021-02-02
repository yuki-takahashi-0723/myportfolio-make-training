import React from 'react'
import { Cards } from '../../Uikit'
import styled from 'styled-components'

import profilePhoto from '/Users/takahashiyuusei/myportfolio/portfolio/src/img/92CA4322-0982-4F3E-91EB-044BF1F64067.jpeg'
import schoolPhoto from '/Users/takahashiyuusei/myportfolio/portfolio/src/img/school-2051712_1920.jpg'
import carePhoto from '/Users/takahashiyuusei/myportfolio/portfolio/src/img/hospice-1797305_1920.jpg'
import hobyPhoto from '/Users/takahashiyuusei/myportfolio/portfolio/src/img/book-5901941_1920.jpg'
const Title = styled.h2`
    text-align:center;
`


const CardsWrap = styled.div`
    width:100%;
    display:flex;
    flex-wrap:wrap;
    justify-content:center;

`

const TwoCardWrap = styled.div`
    @media (min-width:600px){
            margin-right:10px;
        }
`

const About = () =>{
    return(
        <>
            <Title id='about'>ABOUT</Title>
            <CardsWrap>
                <TwoCardWrap>
                    <Cards title='自己紹介' content='名前：高橋佑生　年齢：２７歳' content2='特徴：これと言ってなし！！' image={profilePhoto} />
                    <Cards title='学歴'
                           content='山形県立酒田工業高校を卒業'　
                           content2='高校でC言語を学ぶも、当時から電気工事の資格を持っていたため、安パイを切ってそちらの方面へ就職。技術に対する意欲も当時はなかったため残念ながら高卒です。' 
                           image={schoolPhoto}
                    />
                </TwoCardWrap>
                <TwoCardWrap>
                    <Cards title='経歴'
                           content='７年間介護士の経験'
                           content2='職場に恵まれ、たくさんの経験豊富な先輩、上司の指導の甲斐あって前職では新人スタッフの教育や施設内の委員会の委員長の役割を任せていただき、施設初のシニアスタッフとなる。'
                           image={carePhoto}
                    />
                    <Cards　title='趣味'
　　　　　　　　　　　　　　　　　content='映画観賞：特に好きなのがヒミズ、凶悪'
                        　 　content2='読書(小説)：おすすめはリングシリーズ'
                　         　content3='ガンダム：プラモもアニメも好き！'
                            content4='GAME：買って帰る瞬間が楽しい'
                            image={hobyPhoto}    
                    />
                </TwoCardWrap>
            </CardsWrap>

            
        </>
    )
}

export default About