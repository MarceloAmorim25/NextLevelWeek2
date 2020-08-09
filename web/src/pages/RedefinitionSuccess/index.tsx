import React from 'react'
import background from '../../assets/images/success-background.svg'
import successIcon from '../../assets/images/icons/success-check-icon.svg'
import './styles.css'

const RedefinitionSuccess = () => {

    return(
        <div className="redefinitionContainer">

            <img src={successIcon} id="successIcon"></img>

            <p>Redefinição enviada</p>

            <p> Boa, agora é só checar o e-mail que foi enviado para você <br/>
                redefinir sua senha e aproveitar os estudos
            </p>

            <button></button>

            <img src={background} className="background"></img>

        </div>
    );
}

export default RedefinitionSuccess