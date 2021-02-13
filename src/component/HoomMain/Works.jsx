import React, { useState } from 'react'
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
import { MiniSpecer, PrimaryButton } from '../../Uikit'
import { FormDialog } from '..'
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
const AppWrap = styled.div`
    display: inline;
    width:250px;
    height:530px;
    text-align:center;
`


const LinkContent = styled.a`
    width:250px;
    height:470px;
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
const AppDeteil = styled.p`
    height:150px;
    margin:0;
    text-align:left;
`

const [openFirst,setOpenFirst]=useState(false)
const [openSecond,setOpenSecond]=useState(false)
const [openThird,setOpenThird]=useState(false)

const handleOpenFirst = () => {
    setOpenFirst(true)
}
const handleOpenSecond = () => {
    setOpenSecond(true)
}
const handleOpenThird = () => {
    setOpenThird(true)
}

const handleClose = () => {
    setOpenFirst(false)
    setOpenSecond(false)
    setOpenThird(false)
}


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
            <p>各アプリケーションをクリックするとページに移動します</p>
            <AppImageWrap>
                <AppWrap>
                    <LinkContent　href='https://yuki-takahashi-0723.github.io/HDS-R/#/'　target='_blank'>
                        <AppImage src={HDSRPhoto} alt='二人の御老人の手が重なり合っている画像'/>   
                        <AppTitle>認知症進行度測定アプリ</AppTitle>
                        <AppDeteil>過去に勤続していた施設で使用されていたスケールを元に手軽にパソコン１台スマホ１台で認知症の進行度を測定するアプリケーション</AppDeteil>
                    </LinkContent>
                    <MiniSpecer/>
                    <PrimaryButton onClick={()=>handleOpenFirst()}　label={'開発の詳細'}/>
                    <FormDialog 
                        open={openFirst} 
                        handleClose={handleClose}
                        usetecs={['React']}
                        styles={['MATERIAL-UI','styled-components']}
                        points={[
                            '介護現場の高い年齢層のスタッフでも安心して使用できるように、userの認識や、登録といった複雑な機能を搭載せずに、純粋に一つの目的を果たすためのアプリケーション設計を行った',
                            '実際のスケールと照らし合わせながら使用感をチェックして作成する',
                            '実際に現場のスタッフがスマホ片手にでも使用できるようにレスポンシブデザインで作成する'
                        ]}
                        giturl={'https://github.com/yuki-takahashi-0723/HDS-R/tree/deploy'}
                    />
                </AppWrap>
                <AppWrap>
                    <LinkContent href='https://yuki-takahashi-0723.github.io/kakarinweb/#/' target='_blank'>
                        <AppImage　src={HumstarPhoto} alt='キンクマハムスターとジャンガリアンハムスターのイラスト'/>   
                        <AppTitle>ReactWebPage</AppTitle>
                        <AppDeteil>イラストを書く知人にウェブページを作成。写真投稿機能付きの日記や簡単な受け答えができるchatBot機能とSlackにメッセージを送る質問用フォームを実装</AppDeteil>
                    </LinkContent>
                    <MiniSpecer/>
                    <PrimaryButton onClick={()=>handleOpenSecond()}　label={'開発の詳細'}/>
                    <FormDialog
                         open={openSecond}
                    　　　handleClose={handleClose}
                         usetecs={['React','FireBase',]}
                         styles={['MATERIAL-UI','styled-components']}
                         points={[
                             '実際に知人をクライアントとして、イラストの配置などを細かに調整しながら作業を行った',
                             '日記の機能を導入するためにFireBaseのFireStore,storageとの連携をとり実装する',
                             'お問い合わせ欄に ChatBotの機能を搭載し、ユーザーが気軽にアクセスしやすい環境を作る',
                             '気軽にスマホからも投稿、閲覧ができるようにレスポンシブデザインで作成する'
                         ]}
                         giturl={'https://github.com/yuki-takahashi-0723/kakarinweb'}
                    />
                </AppWrap>
                <AppWrap>
                    <LinkContent href='https://yuki-takahashi-0723.github.io/code-villege-chatapp/' target='_blank'>
                        <AppImage src={ChatPhoto} alt='スマートフォンを操作する手の画像'/>   
                        <AppTitle>Chatアプリ</AppTitle>
                        <AppDeteil>学習の過程で作成したchatアプリですが、機能を拡張して、画像投稿機能やイイねをつける機能を実装。また自分自身ちょっとしたドライブや小旅行が好なことからテーマを設定し作成した。</AppDeteil>
                    </LinkContent>
                    <MiniSpecer/>
                    <PrimaryButton 
                        onClick={()=>handleOpenThird()}
                     　　label={'開発の詳細'}
                    />
                    <FormDialog 
                        open={openThird}
                        handleClose={handleClose}
                        usetecs={['React','FireBase',]}
                        styles={['MATERIAL-UI','styled-components']}
                        points={[
                            '学習の中で作成したchatアプリを自らカスタマイズして、画像投稿機能やページネーション機能、いいね機能を実装する',
                            'スマホからも操作できるようにレスポンシブデザインで作成'
                        ]}
                        giturl={'https://github.com/yuki-takahashi-0723/code-villege-chatapp/tree/Deploy/chat'}
                    />
                </AppWrap>
            </AppImageWrap>
        </>
    )
}

export default Works