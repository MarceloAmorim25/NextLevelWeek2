import React, { useEffect, useState } from 'react'
import background from '../../assets/images/success-background.svg'
import proffyLogo from '../../assets/images/logo.svg'
import Input from '../../components/Input'
import './styles.css'

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState(false);

    useEffect(() => {

    }, [])
   
    return(
        <div id="container">

            <div id="esquerda">
                <img src={proffyLogo} id="proffyLogo"></img>
                <p>Sua plataforma de estudos online</p>
                <img src={background}></img>                                        
            </div>

            <div id="direita">
                <Input
                    name="email"
                    label="E-mail"
                    type="email"
                    value={email}
                    onChange={(e) => { setEmail(e.target.value) }}
                />

                <Input
                    name="password"
                    label="Senha"
                    type="password"
                    value={password}
                    onChange={(e) => { setPassword(e.target.value) }} 
                />

                <Input
                    id="rememberButton" 
                    name="remember"
                    label="Lembrar-me"
                    type="checkbox"
                    onClick={e => setRemember(!remember)}
                />

                <a>Esqueci minha senha</a>

                <button 
                onClick={
                    (e) => {}
                }>
                    Entrar
                </button>

            </div>
            
        </div>
    );
}

export default Login