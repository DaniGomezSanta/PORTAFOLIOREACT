import React from 'react';
import style from '../Contact/contact.module.css';


export default function Contact(){
    return(
        <section id={style.contacto}>
        <h3 className={style.tituloSeccion}>Contactame</h3>
        <div className={style.contenedorForm}>
            <form action="https://formsubmit.co/ledangom@gmail.com" method="POST">
                <div className={style.fila}>
                    <input type="text" placeholder="Nombre Completo" className={style.mitad} name="name"/>
                    <input type="text" placeholder="Direccion de Email" className={style.mitad} name="email"/>
                </div>
                <div className={style.fila}>
                    <input type="text" placeholder="Tema..." className={style.inputFull} name="tema"/>
                </div>
                <div className={style.fila}>
                    <textarea name="mensaje" id="" cols="30" rows="10" placeholder="Tu mensaje..." className={style.inputFull} ></textarea>
                </div>
                <input type="submit" value="Enviar Mensaje" className={style.btnEnviar} onclick="sendEmail()"/>
            </form>
        </div>
    </section>
    )
}