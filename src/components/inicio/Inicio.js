import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'
import {faLinkedin, faGithub, faInstagram, faFacebook} from '@fortawesome/free-brands-svg-icons'
import { Link } from "react-router-dom";
import style from '../inicio/Inicio.module.css'
import AboutMe from "../AboutMe/AboutMe";
import Services from "../Services/Services";
import Habilities from "../Habilities/Habilities";
import Portafolio from "../Portafolio/Portafolio";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";


export default function Inicio(){
    return(
        <div>
          <section id={style.inicio}>
           <div className={style.contenido}>
            <div className={style.header}>
              <div className={style.contenidoheader}>
              <h1>PORTAFOLIO</h1>
              <nav id={style.nav} className="">
                <ul id={style.links}>
                <li>INICIO</li>
                <Link to='/aboutme'>
                <li>SOBRE MI</li>
                </Link>
                  <li>PORTFOLIO</li>
                  <li>CONTACTO</li>
                </ul>
              </nav>

              <div id={style.iconNav}>
              <FontAwesomeIcon icon={faBars} />
              </div>

              <div className={style.redes}>
              <Link to='https://www.linkedin.com/in/daniela-gomez-aaa839239/' >
              <FontAwesomeIcon icon={faLinkedin}/>
              </Link>
              <Link to='https://github.com/DaniGomezSanta' >
              <FontAwesomeIcon icon={faGithub}/>
              </Link>
              <Link to='https://www.instagram.com/daniigomez124/' >
              <FontAwesomeIcon icon={faInstagram}/>
              </Link>
              <Link to='https://www.facebook.com/profile.php?id=1237419847' >
              <FontAwesomeIcon icon={faFacebook}/>
              </Link>
              </div>
              </div>
            </div>
            <div className={style.presentacion}>
             <p className={style.bienvenida}>Bienvenidos</p>
             <h2>Soy <span>Daniela Gomez</span>, Desarrolladora Web Full Stack</h2>
             <p className={style.descripcion}> | CSS | Html | React | JavaScript | Express | Git | Node js | Postrgesql | Postman | Redux | Tailwin</p>
             <Link to="#portfolio">Ir a Portfolio</Link>
            </div>
           </div>
          </section>
          <AboutMe id='#sobremi'/>
          <Services/>
          <Habilities/>
          <Portafolio/>
          <Contact/>
          <Footer/>
        </div>
    )
}; 