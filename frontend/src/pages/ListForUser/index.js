import React , {useState ,useEffect} from 'react';
import { Link} from 'react-router-dom';


import api from '../../services/api';
import './styles.css';

import logoImg from '../../assets/logo.svg';

export default function ListForUser() {
    const [incidents, setIncidents] = useState([]);
    
    useEffect(() => {
        api.get('incidents/user', {
            ListForUser: {
                
            }
        }).then(response => {
            setIncidents(response.data);
        })
    }, [incidents]);

    
    return (
        <div className="listForUser-container">
            <header>
            <img src={logoImg} alt="Be The Hero" />
            <span>Bem vindo(a) </span>

                <Link className="button" to="/">Voltar</Link>

            </header>

            <h1>Casos cadastrados</h1>

            <ul>
                {incidents.map(incident =>(
                       <li key={incident.id}>
                       <strong>ONG:</strong>
                       <p>{incident.name}</p>

                       <strong>CASO:</strong>
                       <p>{incident.title}</p>
    
                       <strong>DESCRIÇÃO:</strong>
                       <p>{incident.description}</p>
    
                       <strong>VALOR:</strong>
                       <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(incident.value)}</p>
    
                       <strong>E-MAIL:</strong>
                       <p>{incident.email}</p>

                       <strong>WHATSAPP:</strong>
                       <p>{incident.whatsapp}</p>

                       <strong>CIDADE:</strong>
                       <p>{incident.city}</p>

                       <strong>UF:</strong>
                       <p>{incident.name}</p>
                   </li>
                ))}
            </ul>
        </div>
    )
}