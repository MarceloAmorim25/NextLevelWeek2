import React from 'react'
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import './styles.css'

const TeacherItem = () => {
    
    return(

            <article className="teacher-item">
                <header>
                    <img />
                    <strong>Nome do professor</strong>
                    <span>Química</span>
                </header>
                <p>
                    Texto...
                </p>
                <footer>
                    
                    <p>
                        Preço/hora
                        <strong>RS 20</strong>
                    </p>

                    <button type="button">
                        <img src={whatsappIcon} alt="WhatsApp"/>
                        Entrar em contato
                    </button>

                </footer>

                </article>
        );
}

export default TeacherItem