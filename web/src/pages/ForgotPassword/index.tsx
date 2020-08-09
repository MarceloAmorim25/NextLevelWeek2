import React from 'react'
import background from '../../assets/images/success-background.svg'
import proffyLogo from '../../assets/images/logo.svg'
import Input from '../../components/Input';
import './styles.css'

const ForgotPassword = () => {
    return(
        <div id="container">
            
            <div id="esquerdaRecovery">

                <p>Eita, esqueceu sua senha?</p>
              
                <Input
                    name="email"
                    label="E-mail"
                    type="email"
                />
       
                 
                <button>Entrar</button>
              
            </div>

            <div id="direitaRecovery">

                <img src={proffyLogo} id="proffyLogo"></img>
                <p>Sua plataforma de <br/> estudos online</p>

                <img src={background}></img>
                                       
            </div>
            
        </div>
    );
}

export default ForgotPassword