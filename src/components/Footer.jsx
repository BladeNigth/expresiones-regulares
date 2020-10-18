import React from 'react'


const Footer = () => {
    return(
        <div className="footer">
            <div className="footer__left">
                <h2>Taller de expresiones regulares (REGEX)</h2>
                <p>Objetivo: Implementar expresiones regulares para validar entradas a un programa escrito con JavaScript.</p>
                <p>Misión: Construir un programa escrito en JavaScript que valide la construcción de claves  para el registro de usuarios.</p>
                <p>Compiladores</p>
                <p>Universidad del magdalena</p>
                <p>
                    © 2020 Regex, Inc.
                    Todos los derechos reservados
                </p>
            </div>
            <div className="footer__right">
                <div className="footer__right__autores">
                    <h3>Creadores</h3>
                    <p>Jorge Alberto Silva Zambrano</p>
                    <p>Andres Felipe Brieva Pinedo</p>
                    <p>Luis Eduardo Gamez Maldonado</p>
                    <p>Sebastian Troncoso Correa</p>
                </div>
                <div className="footer__right__profesor">
                    <h3>Profesor</h3>
                    <p>Daniel Gonzales Polo</p>
                </div>

            </div>
        </div> 
    )
}
export default Footer