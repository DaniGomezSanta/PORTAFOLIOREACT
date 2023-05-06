import React from 'react';
import style from '../Contact/contact.module.css';
import emailjs from 'emailjs-com';
import swal from 'sweetalert';


export default function Contact(){

    function enviarEmail(e){
        e.preventDefault();
        emailjs.sendForm('service_8qq2mp7', 'template_hheslyf', e.target, '2R_669TM3ugdYxHfN' )
        .then(response => console.log(response))
        .catch(error=> console.log(error))
        swal({
            title: "Email enviado correctamente",
            icon: "succes",
            button: "Ok"
        })
        e.target.reset()
    }

    return(
        <section id={style.contacto}>
        <h3 className={style.tituloSeccion}>Contactame</h3>
        <div className={style.contenedorForm}>
            <form onSubmit={enviarEmail}>
                <div className={style.mitad}>
                    <input type="text" placeholder="Nombre Completo" className={style.fila} name="name" required/>
                </div>
                <div className={style.mitad}>
                    <input type="email" placeholder="Direccion de Email" className={style.fila} name="email" required/>
                </div>
                <div className={style.fila}>
                    <input type="text" placeholder="Tema..." className={style.inputFull} name="tema" required/>
                </div>
                <div className={style.fila}>
                    <textarea name="mensaje" id="" cols="30" rows="10" placeholder="Tu mensaje..." className={style.inputFull} required ></textarea>
                </div>
                {/* <input type="hidden" name="_autoresponse" value="Gracias por tu mensaje. Pronto me pondré en contacto contigo." />
                <input type="hidden" name="subject" value="Nuevo mensaje del sitio web" /> */}
                <input type="submit" value="Enviar Mensaje" className={style.btnEnviar}/>
            </form>
        </div>
    </section>
    )
}