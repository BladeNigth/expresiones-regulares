import React from 'react'
import imagen from '../images/verificacion.png'
import '../style/ventanaModal.scss';
//import { iniciarArtyom } from './reconocimientoVoz/artyom';

const VentanaModal = ({quitarIndicaciones}) => {

    return(
        <div className="ventana">
            <h2>Hola, bienvenido...!</h2>
            <div className="ventana__contenido">
                <div className="ventana__contenido__left">
                    <p>Mi tarea es revisar que tu contraseña cumpla con los requerimientos establecidos.</p>
                    <p>Cuento con un asistente de voz al que puedes indicarle:</p>
                    <div>
                        <p>* "Requisitos de la contraseña": El asistente te indicara los requisitos para que la contraseña sea valida.</p>
                        <p>* "Evalúa la contraseña": te dira el estado actual de tu contraseña.</p>
                        <p>* "Llévame al repositorio": te enviara a el codigo fuente de esta app web.</p>
                    </div>
                </div>
                <div className="ventana__contenido__right">
                    <img src={imagen} alt="imagen"/>
                </div>
            </div>
            <div className="contenedor__boton">
                <button onClick={quitarIndicaciones} >Entendido</button>
            </div>
        </div>
    )

}

export default VentanaModal