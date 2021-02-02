import React from 'react'
import styled from 'styled-components'
import htmlIcon from '../../img/html_original_wordmark_logo_icon_146478.png'
import cssIcon from '../../img/css_original_wordmark_logo_icon_146576.png'
import javascriptIcon from '../../img/javascript_icon_130900 (1).png'
import reactIcon from '../../img/react_original_wordmark_logo_icon_146375.png'
import firebaseIcon from '../../img/google_firebase_icon-icons.com_61474.png'
import gitIcon from '../../img/git_original_wordmark_logo_icon_146510.png'
const Works = () => {
    const Title = styled.h2`
    text-align:center;
`

const IconsWrap = styled.div`
    display:flex;
    flex-wrap:wrap;
    justify-content:space-around;
    align-items:center;
`

const IconImage = styled.img`
    width: 100px;
    height: 100px;
    margin-top:10px;
    @media(min-width:600px){
        width: 150px;
        height:150px;
    }
`

const AppImageWrap = styled.div`
    display:flex;
    flex-wrap:wrap;
    justify-content:space-around;
    align-items:center;


`
const LinkContent = styled.a`
    width:250px;
    height:450px;
`


const AppImage = styled.img`
    width: 230px;
    height:230px;
`
const AppTitle = styled.h3`
    text-align:center;
`

    return(
        <>
            <Title id='works'>WORKS</Title>
            <p>My Skill Set</p>
            <IconsWrap>
                    <IconImage src={htmlIcon} alt='htmlのIcon'/>
                    <IconImage src={cssIcon} alt='cssのIcon'/>
                    <IconImage src={javascriptIcon} alt='java'/>
                    <IconImage src={reactIcon} alt='htmlのIcon'/>
                    <IconImage src={firebaseIcon} alt='htmlのIcon'/>
                    <IconImage src={gitIcon} alt='htmlのIcon'/>
            </IconsWrap>
            <p>MyApp</p>
            <AppImageWrap>
                <LinkContent>
                    <AppImage/>   
                    <AppTitle>認知症進行度測定アプリ</AppTitle>
                    <p>過去に勤続していた施設で称されていたスケールを下に手軽にパソコン１台で認知症の進行度を測定するアプリケーション</p>
                </LinkContent>
                <LinkContent>
                    <AppImage/>   
                    <AppTitle>ChatBotアプリ</AppTitle>
                    <p>簡単な受け答えができるchatBotアプリケーション。質問用フォームが実装されており、そこから私の個人のSlackにメッセージを通知します</p>
                </LinkContent>
                <LinkContent>
                    <AppImage/>   
                    <AppTitle>Chatアプリ</AppTitle>
                    <p>学習の過程で作成したchatアプリですが、機能を拡張してインスタグラムのように、画像を投稿できるものにしました。</p>
                </LinkContent>
            </AppImageWrap>
        </>
    )
}

export default Works