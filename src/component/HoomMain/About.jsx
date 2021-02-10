import React from 'react'
import { Cards } from '../../Uikit'
import styled from 'styled-components'


import schoolPhoto from '/Users/takahashiyuusei/myportfolio/portfolio/src/img/school-2051712_1920.jpg'
import carePhoto from '/Users/takahashiyuusei/myportfolio/portfolio/src/img/hospice-1797305_1920.jpg'
import hobyPhoto from '/Users/takahashiyuusei/myportfolio/portfolio/src/img/book-5901941_1920.jpg'
import profilePhoto from '/Users/takahashiyuusei/myportfolio/portfolio/src/img/CC01FD33-D6DA-4455-95C0-D4362C9E5636_1_105_c.jpeg'
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
                    <Cards title='自己紹介'
                           content='名前：高橋佑生　年齢：２７歳' 
                           content2='特徴：天然パーマ＋メガネ'
                           content3='良いところ：責任感強めです！'
                           content4='React、firebaseを用いた開発を中心に行っています！コードが動いた瞬間が最高に達成感を感じられて好きです！'
                           image={profilePhoto} 
                    
                    />
                    <Cards title='学歴'
                           content='山形県立酒田工業高校を卒業'　
                           content2='高校ではC言語を学び、実際にラジコンにCCDカメラを搭載して映像をTVに出力しグランツーリスモのステアリングコントローラーで動かすシステムを構築していました。' 
                           image={schoolPhoto}
                    />
                </TwoCardWrap>
                <TwoCardWrap>
                    <Cards title='経歴'
                           content='７年間介護士の経験'
                           content2='職場に恵まれ、たくさんの経験豊富な先輩、上司の指導の甲斐あって前職では新人スタッフの教育や施設内の委員会の委員長の役割を任せていただき、施設初のシニアスタッフを任せていただきました。'
                           image={carePhoto}
                    />
                    <Cards　title='趣味'
　　　　　　　　　　　　　　　　　content='映画観賞：おすすめ　ヒミズ、凶悪'
                        　 　content2='読書(小説)：おすすめ リングシリーズ'
                　         　content3='ガンダム：人生です。'
                            content4='ドライブ：少し遠くに車で行くのが好きです'
                            image={hobyPhoto}    
                    />
                </TwoCardWrap>
            </CardsWrap>

            
        </>
    )
}

export default About