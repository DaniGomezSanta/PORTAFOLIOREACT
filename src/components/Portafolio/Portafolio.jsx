import React from "react"
import style from '../Portafolio/portafolio.module.css'
import pokemon from '../../images/pokemonapi.jpeg';
import ecommerce from '../../images/e-commerce shoes.jpeg'
import gifApp from '../../images/gifsApp.jpeg';
import heroeApp from '../../images/HeroesApp.jpeg'; 

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
                         <a href="https://pokemon-api-kappa-fawn.vercel.app/">ver mas</a>
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
            
            <div className={style.proyecto}>
                <div className={style.overlay}></div>
                <img src={gifApp} alt=""/>
                <div className={style.info}>
                    <h4>Api Gifs</h4>
                    <p>Es una pagina en la cual puedes divertir buscando diferentes gifs. 
                        <a href="https://gif-expert-daniela.netlify.app/">ver mas</a>
                    </p>
                </div>
            </div>

                 
            <div className={style.proyecto}>
                <div className={style.overlay}></div>
                <img src={heroeApp} alt=""/>
                <div className={style.info}>
                    <h4>Heroes App</h4>
                    <p>Aplicacion en la que puedes ver super heroes de Marvel y DC, te puedes logear, buscar un super heroe en especifico 
                        y si das click sobre el super heroe encontrar mas detalles como su alter ego, su primera aparicion, y quien lo protagoniza. 
                        <a href="https://heroesdani.netlify.app/marvel">ver mas</a>
                    </p>
                </div>
            </div>
         
        </div>
    </seccion>
    )
}