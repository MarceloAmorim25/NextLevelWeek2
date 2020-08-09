import React from 'react'
import background from '../../assets/images/success-background.svg'
import successIcon from '../../assets/images/icons/success-check-icon.svg'
import './styles.css'

const RegisterSuccess = () => {
    return(
        <div className="registerContainer">
            <img src={successIcon} id="successIcon"></img>

            <p>Cadastro salvo!</p>

            <p> Tudo certo, seu cadastro está na nossa lista de professores <br/>
                Agora é só ficar de olho no seu WhatsApp
            </p>

            <button></button>
   
            <img src={background}></img>
        </div>
    );
}

export default RegisterSuccess