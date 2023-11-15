import React from "react";
import style from '../Habilities/habilities.module.css'

export default function Habilities(){
    return(
        <div className={style.contenedorSkills} id={style.skills}>
        <h3>HABILIDADES</h3>
        <div className={style.skill}>
            <div className={style.info}>
                <p><span className={style.lista}>Html & Css</span></p>
                <span className={style.porcentaje}>80%</span>
            </div>
            <div className={style.barra}>
                <div id="htlm" className={style.barraProgreso1}></div>
            </div>
        </div>
        <div className={style.skill}>
            <div className={style.info}>
                <p><span className={style.lista}>React</span></p>
                <span className={style.porcentaje}>80%</span>
            </div>
            <div className={style.barra}>
                <div id="react" className={style.barraProgreso2}></div>
            </div>
        </div>
        <div className={style.skill}>
            <div className={style.info}>
                <p><span className={style.lista}>React Native</span></p>
                <span className={style.porcentaje}>60%</span>
            </div>
            <div className={style.barra}>
                <div id="postman" className={style.barraProgreso9}></div>
            </div>
        </div>
        <div className={style.skill}>
            <div className={style.info}>
                <p><span className={style.lista}>Javascript</span></p>
                <span className={style.porcentaje}>80%</span>
            </div>
            <div className={style.barra}>
                <div id="js" className={style.barraProgreso3}></div>
            </div>
        </div>
        <div className={style.skill}>
            <div className={style.info}>
                <p><span className={style.lista}>Redux</span></p>
                <span className={style.porcentaje}>70%</span>
            </div>
            <div className={style.barra}>
                <div id="redux" className={style.barraProgreso4}></div>
            </div>
        </div>
        <div className={style.skill}>
            <div className={style.info}>
                <p><span className={style.lista}>Express</span></p>
                <span className={style.porcentaje}>50%</span>
            </div>
            <div className={style.barra}>
                <div id="express" className={style.barraProgreso5}></div>
            </div>
        </div>
        <div className={style.skill}>
            <div className={style.info}>
                <p><span className={style.lista}>PostgreSql</span></p>
                <span className={style.porcentaje}>50%</span>
            </div>
            <div className={style.barra}>
                <div id="postgre" className={style.barraProgreso6}></div>
            </div>
        </div>
        <div className={style.skill}>
            <div className={style.info}>
                <p><span className={style.lista}>Node js</span></p>
                <span className={style.porcentaje}>50%</span>
            </div>
            <div className={style.barra}>
                <div id="node" className={style.barraProgreso7}></div>
            </div>
        </div>
        <div className={style.skill}>
            <div className={style.info}>
                <p><span className={style.lista}>Postman</span></p>
                <span className={style.porcentaje}>80%</span>
            </div>
            <div className={style.barra}>
                <div id="postman" className={style.barraProgreso8}></div>
            </div>
        </div>
    </div>

    )
}