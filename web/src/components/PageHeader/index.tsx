import React from 'react';
import backIcon from '../../assets/images/icons/back.svg'
import logoImg from '../../assets/images/logo.svg'
import perfil from '../../assets/images/icons/smile.svg'
import logoff from '../../assets/images/icons/warning.svg'
import { Link } from 'react-router-dom'

import './styles.css'

interface PageHeaderProps {
    title: string;
    description?: string;
}

const PageHeader: React.FC<PageHeaderProps> = (props) => {
    return(
        <header className="page-header">

        <div className="top-bar-container">

            <Link to="/">
                <img src={backIcon} alt="Voltar" />
            </Link>

            <Link to="/">
                <img src={`https://avatars3.githubusercontent.com/u/58489782?s=460&u=291b87747816b6d6d6962cadc378b5850c7262ee&v=4`} alt="Profile" id="perfil"/>
            </Link>

            <img src={logoImg} alt="Proffy" />
        </div>

        <div className="header-content">
            <strong>{props.title}</strong>

            {props.description && <p>{props.description}</p>}

            {props.children}

       </div>
       
    </header>

    );
}

export default PageHeader        
        
       