import React, { useCallback, useState } from 'react'
import styled from 'styled-components'
import { MiniSpecer, PrimaryButton, TextInput } from '../../Uikit'


const InputArea = styled.div`
    text-align:center;
`
const ComentArea = styled.div`
    @media(min-width:600px){
        width:60%;
        margin:0 auto;
        
    }
`

const Contact = () =>{
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [coment,setComent]=useState('')

    const inputName = useCallback((e)=>{
        setName(e.target.value)
    },[setName])

    const inputEmail = useCallback((e)=>{
        setEmail(e.target.value)
    },[setEmail])

    const inputComent = useCallback((e)=>{
        setComent(e.target.value)
    },[setComent])

    const handleClick = () =>{
        if(name ==='' || email === '' || coment === ''){
            alert('３つの入力欄のうちどれかの入力がされていません入力してから再度送信を願います')
            return false
        }
        
      const payload = {
        text: 'お問い合わせがありました\n'+
              'お名前：'+ name + '\n'+
              'Email:'+ email + '\n'+
              'お問い合わせ内容:\n'+ coment 
    }
    
    const url = 'https://hooks.slack.com/services/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'
    fetch(url, {
        method:'POST',
        body: JSON.stringify(payload)
    }).then(()=>{
        alert('送信が完了しました')
          setName("")
          setEmail("")
          setComent("")
    })
}

    

   return(
       <InputArea>
            <h2 id='contact'>CONTACT</h2>
            <p>送信した内容は私のSlackに送られます。</p>
            <div>
                <TextInput
                    label={'お名前'} 
                    fullWidth={false}
                    required={true}
                    multiline={false}
                    rows={1}
                    type={'text'}
                    onChange={inputName}
                    value={name}
                />
            </div>
            <div>
                <TextInput
                    label={'メールアドレス'} 
                    fullWidth={false}
                    required={true}
                    multiline={false}
                    rows={1}
                    type={'Email'}
                    onChange={inputEmail}
                    value={email}
                />
            </div>
            <ComentArea>
                <TextInput
                    label={'メッセージ書き込み蘭'} 
                    fullWidth={true}
                    required={true}
                    multiline={true}
                    rows={5}
                    type={'text'}
                    onChange={inputComent}
                    value={coment}
                />
            </ComentArea>
            <MiniSpecer/>
            <PrimaryButton
                label={'送信する'}
                onClick={handleClick}
            />
            <MiniSpecer/>
       </InputArea>
   )
}

export default Contact