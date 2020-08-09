import React from 'react'
import background from '../../assets/images/success-background.svg'
import proffyLogo from '../../assets/images/logo.svg'
import Input from '../../components/Input';
import './styles.css'

const Register = () => {
    return(
        <div id="container">
            
            <div id="esquerdaRegister">

                <Input                     
                    name="nome"
                    label="Nome"
                    type="text"
                />

                <Input                     
                    name="sobrenome"
                    label="Sobrenome"
                    type="text"
                />

                <Input
                    name="email"
                    label="E-mail"
                    type="email"
                />

                <Input
                    name="password"
                    label="Senha"
                    type="password" 
                />

                 
                <button>Entrar</button>
              
            </div>

            <div id="direitaRegister">

                <img src={proffyLogo} id="proffyLogo"></img>
                <p>Sua plataforma de estudos online</p>
                <img src={background}></img>
            </div>
            
        </div>
    );
}

export default Register