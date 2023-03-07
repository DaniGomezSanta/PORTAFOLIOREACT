import React from "react";
import style from '../Services/service.module.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCode} from '@fortawesome/free-solid-svg-icons'



export default function Services(){
    return(
        <section id={style.servicios}>
        <h3 className={style.tituloSeccion}>MIS SERVICIOS</h3>
        <div className={style.fila}>
            <div className={style.servicio}>
                <span className={style.icono}><FontAwesomeIcon icon={faCode}/></span>
                <h4>Front End</h4>
                <hr/>
                <ul className={style.serviciosTag}>
                    <li>React</li> 
                    <li>Javascript</li>
                    <li>Redux</li>
                </ul>
                <p>Javascript, html, css</p>
            </div>
            <div className={style.servicio}>
                <span className={style.icono}><FontAwesomeIcon icon={faCode}/></span>
                <h4>Back End</h4>
                <hr/>
                <ul class="servicios-tag">
                    <li>Node js</li>
                    <li> , </li>
                    <li>Express</li>     
                </ul>
                <p>Express</p>
            </div>
            <div className={style.servicio}>
                <span className={style.icono}><FontAwesomeIcon icon={faCode}/></span>
                <h4>Base De Datos</h4>
                <hr/>
                <ul className={style.serviciosTag}>
                    <li>Postrgesql</li>
                    
                </ul>
                <p>Sequialize</p>
            </div>

        </div>
    </section>
    )
}