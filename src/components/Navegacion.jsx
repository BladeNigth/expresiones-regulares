import React from 'react'
import img from '../images/Logo.svg'

function Navegacion() {

    const handleOver = e => {
        document.getElementById("submenu").classList.add("submenu")
    }
    
    const handleOut = e => {
        document.getElementById("submenu").classList.remove("submenu")
    }

    return ( 
        <div className="navegacion">
            <div className="navegacion__left">
                <img src={img} alt="password"/>
                <h1>R<span>e</span>g<span>e</span>x<span>_</span></h1>
            </div>
            <div className="navegacion__right">
                <h2> <span>U</span>nimagdalena <span>2</span>0<span>2</span>0</h2>
                <ul className="nav-tabs">
                    <li  onMouseOver={handleOver} onMouseOut={handleOut} ><a href="#">Comandos de voz</a></li>
                    <ul id="submenu" /*className="submenu"*/>
                        <li><a href="#">" Llévame al repositorio "</a></li>
                        <li><a href="#">" Evalúa la contraseña "</a></li>
                        <li><a href="#">" Requisitos de la contraseña "</a></li>
                    </ul>
                </ul>
            </div>
        </div>
)

}

export default Navegacion