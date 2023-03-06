import React from "react";
import foto from '../../images/Foto.jpeg';
import { Link } from "react-router-dom";
import style from '../AboutMe/About.module.css'

export default function AboutMe(){
    return(
        <section id={style.sobremi}>
        <div className={style.contenedorFoto}>
            <img src={foto} alt="" />
        </div>
        <div className={style.sobremi}>
            <p className={style.tituloSeccion}>sobre Mi</p>
            <h2>Hola, soy <span>Daniela Gomez</span></h2>
            <h3>Desarrolladora Web Full Stack</h3>
            <p>Actualmente termine mis estudios como full-stack Web Developer, 
                un sueño cumplido después de un año de mucho estudio, que requirió de mucho esfuerzo y dedicación.
                <p>

                    Antes de emprender este camino en el desarrollo web, estudie comercio Internacional y 
                    posteriormente trabaje en una entidad del estado, un lugar en el que aprendí mucho, 
                    sin embargo el estar en este lugar me permitió darme cuenta que mis aspiraciones, 
                    mis sueños y mis gustos eran muy diferentes, así que un día decidí tomar una decisión radical 
                    y darle ese giro profesional a mi vida y empezar a estudiar algo que me apasiona 
                    y que desde hace mucho tiempo quería pero no me atrevía por el miedo, pero que logre vencer.
                </p>
                 <p>

                     En este momento aspiro encontrar una empresa en la cual pueda aportar los conocimientos adquiridos
                      a lo largo de este año, que a pesar de que no tengo experiencia laboral, 
                      si tengo experiencia realizando diferentes proyectos tanto individual como grupalmente, 
                      los cuales me han permitido mejorar mis habilidades y conocimientos, 
                      por lo tanto siento que estoy en la capacidad de enfrentarme a un reto laboral en donde 
                      espero aprender y entregar lo mejor de mi.
                 </p>
                </p>
                <Link to="#">Descargar CV</Link>
        </div>
    </section>
    )
}