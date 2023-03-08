import React from "react"
import style from '../Portafolio/portafolio.module.css'
import pokemon from '../../images/pokemonapi.jpeg';
import ecommerce from '../../images/e-commerce shoes.jpeg'


export default function Portafolio(){
    return(

        <seccion id={style.portfolio}>
        <h3 className={style.tituloSeccion}>MIS PROYECTOS</h3>
        <div className={style.fila}>
            <div className={style.proyecto}>
                <div className={style.overlay}></div>
                <img src={pokemon} alt=""/>
                <div className={style.info}>
                    <h4>Pokemon Api</h4>
                    <p>Es una aplicacion donde puedes filtrar tu pokemon,
                         buscar diferentes pokemons mirar su detalle y crear tu propio pokemon
                         <a href="https://github.com/DaniGomezSanta/POKEMON-PI">ver mas</a>
                        </p>
                </div>
            </div>

            <div className={style.proyecto}>
                <div className={style.overlay}></div>
                <img src={ecommerce} alt=""/>
                <div className={style.info}>
                    <h4>E-commerce shoes</h4>
                    <p>Una tienda en la cual como usuario puedes buscar tu zapato deportivo, mirar su detalle, su precio y comprarlo,
                        te llegara un correo con la descripcion de tu compra.
                        Como administrador, podras tener muchos mas servicios para poder manejar tu tienda virtual.
                        <a href="https://frontend-sneakers.vercel.app/">ver mas</a>
                    </p>
                </div>
            </div>

         
        </div>
    </seccion>
    )
}