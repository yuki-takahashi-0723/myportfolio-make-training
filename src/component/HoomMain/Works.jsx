import React from 'react'
import styled from 'styled-components'
import htmlIcon from '../../img/html_original_wordmark_logo_icon_146478.png'
import cssIcon from '../../img/css_original_wordmark_logo_icon_146576.png'
import javascriptIcon from '../../img/javascript_icon_130900 (1).png'
import reactIcon from '../../img/react_original_wordmark_logo_icon_146375.png'
import firebaseIcon from '../../img/google_firebase_icon-icons.com_61474.png'
import gitIcon from '../../img/git_original_wordmark_logo_icon_146510.png'
import HDSRPhoto from '/Users/takahashiyuusei/myportfolio/portfolio/src/img/hands-2906458_1920.jpg'
import ChatPhoto from '/Users/takahashiyuusei/myportfolio/portfolio/src/img/iphone-642999_1920.jpg'
import HumstarPhoto from '/Users/takahashiyuusei/myportfolio/portfolio/src/img/736418F0-D7D3-4BC4-AB83-360CF25A684E_1_105_c.jpeg'
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
    text-decoration:none;
    color:inherit;
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
                <LinkContent　href='https://yuki-takahashi-0723.github.io/HDS-R/#/'　target='_blank'>
                    <AppImage src={HDSRPhoto} alt='二人の御老人の手が重なり合っている画像'/>   
                    <AppTitle>認知症進行度測定アプリ</AppTitle>
                    <p>過去に勤続していた施設で使用されていたスケールを元に手軽にパソコン１台スマホ１台で認知症の進行度を測定するアプリケーション</p>
                </LinkContent>
                <LinkContent href='https://yuki-takahashi-0723.github.io/kakarinweb/#/' target='_blank'>
                    <AppImage　src={HumstarPhoto} alt='キンクマハムスターとジャンガリアンハムスターのイラスト'/>   
                    <AppTitle>ReactWebPage</AppTitle>
                    <p>イラストを書く知人にウェブページを作成。写真投稿機能付きの日記や簡単な受け答えができるchatBot機能とSlackにメッセージを送る質問用フォームを実装</p>
                </LinkContent>
                <LinkContent href='https://yuki-takahashi-0723.github.io/code-villege-chatapp/' target='_blank'>
                    <AppImage src={ChatPhoto} alt='スマートフォンを操作する手の画像'/>   
                    <AppTitle>Chatアプリ</AppTitle>
                    <p>学習の過程で作成したchatアプリですが、機能を拡張して、画像投稿機能やイイねをつける機能を実装。また自分自身ちょっとしたドライブや小旅行が好なことからテーマを設定し作成した。</p>
                </LinkContent>
            </AppImageWrap>
        </>
    )
}

export default Works