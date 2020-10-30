import React from 'react'
import img from '../images/verificacion.png'
import Form from './Form'

const Cuerpo = () => {
    return (

        <div className="contenedor">    
            <h2 className="contenedor__titulo">Bienvenido a tu validador</h2>
            
            <div className="contenedor__body">
                <div className="contenedor__body__left">
                    <img src={img}alt="principal"/>
                </div>
                <div className="contenedor__body__right">
                    <Form/>
                </div>
            </div>

        </div>
    )

}

export default Cuerpo;