import React from "react";
import style from '../Footer/footer.module.css';
import { Link } from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLinkedin, faGithub, faInstagram, faFacebook} from '@fortawesome/free-brands-svg-icons'


export default function Footer(){
    return(
        <footer>
        <p>Todos los derechos reservados - 2023</p>
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
    </footer>
    )
}