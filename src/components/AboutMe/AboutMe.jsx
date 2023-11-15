import React from "react";
import foto from '../../images/Foto.jpeg';
// import { Link } from "react-router-dom";
import style from '../AboutMe/About.module.css';
import CvSpanish from '../../CV/CVESPAÑOL2023.pdf';
import CvEnglish from '../../CV/CVENGLISH2023.pdf';


export default function AboutMe(){
    return(
        <section id="#aboutme">
        <div id={style.sobremi}>
            <div className={style.contenedorFoto}>
                <img src={foto} alt="" />
            </div>
            <div className={style.sobremi}>
                <p className={style.tituloSeccion}>sobre Mi</p>
                <h2>Hola, soy <span>Daniela Gomez</span></h2>
                <h3>Desarrolladora Web Full Stack</h3>
                <p>Hola a todos 👋
                <p>Soy Daniela y les quisiera contar un poco más sobre mi.</p>

                <p>Soy full stack web developer, después de haber estudiado comercio internacional decidí dar un giro a mi vida profesional 
                    para trabajar en desarrollo de software, donde busco aportar también mis conocimientos previos. 💻</p>
                <p>Mis principales skills son:</p>
                <p>🎈React 🎈React Native 🎈Redux 🎈JavaScript 🎈HTML 🎈CSS 🎈Node.js 🎈Express🎈SQL</p>
                <p>Actualmente sigo mejorando en mis skills y estoy introduciéndome a:</p>
                <p>🔸React Native y 🔸Azure Devops.</p>
                <p>📚Disciplinada, responsable, proactiva, dedicada.</p>
                <p>💡Me adaptó fácil a nuevos entornos, autodidacta y me gusta el trabajo en equipo.</p>
                    </p>
                    <a href={CvSpanish} download='CV'>CV ESPAÑOL</a>
                    <a href={CvEnglish} download='CV'>CV ENGLISH</a>
            </div>
        </div>
    </section>
    )
}