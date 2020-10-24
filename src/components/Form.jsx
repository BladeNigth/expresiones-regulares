import React,{ useState, useEffect } from 'react'

const Form = () =>{

    const [estadoDelInput,setEstadoDelInput] = useState('');

    const regex=/^[A-Z\u00d1]{1}[0-9]{3}[a-z,á-ú\u00f1]{3}\W{3}$/
    console.log(regex.test("A324gfd{-~"));

    const handleChange= (e) =>{
        console.log(e.target.value);
        if(regex.test(e.target.value)){
           document.getElementById("input__password").classList.add("input__correcto");
           document.getElementById("input__password").classList.remove("input__incorrecto");
           document.querySelector("#input__password i").classList.add("fa-check-circle");
           document.querySelector("#input__password i").classList.remove("fa-times-circle");
           document.querySelector("#input__password .input__message__error").classList.add("input__message__error__inactivo");
           document.querySelector("#input__password .input__message__error").classList.remove("input__message__error__activo");
           setEstadoDelInput('OK, tu contraseña es válida...!'); 
        }
        else{
           document.getElementById("input__password").classList.add("input__incorrecto");
           document.getElementById("input__password").classList.remove("input__correcto");
           document.querySelector("#input__password i").classList.add("fa-times-circle");
           document.querySelector("#input__password i").classList.remove("fa-check-circle");
           document.querySelector("#input__password .input__message__error").classList.add("input__message__error__activo");
           document.querySelector("#input__password .input__message__error").classList.remove("input__message__error__inactivo");
           setEstadoDelInput('Esta contraseña no cumple con las condiciones establecidas...!');
        }
    }

    return(
        <div className="contenedor__body__right__target">
                        
            <h3>Ingresa tu password</h3>
            <p>Teniendo en cuenta la sigiente indicación:</p>
            <p className="indicaciones">Una mayúscula seguida de tres números, seguidos de tres caracteres y luego seguidos de tres caracteres especiales.</p>
            <p>Digite en el siguiente input su password</p>

            <div className="input" id="input__password" >
                <label htmlFor="password" className="input__label">Password</label>
                <div className="grupo__input">
                    <input onChange={handleChange} type="text" className="input__form" name="password" id="password" placeholder="Ejemplo: A123xyz$%&"/>
                    <i className="validacion__estado fas fa-times-circle"></i>
                </div>
                <p className="input__message__error">{estadoDelInput}</p>
            </div>

        </div>
    )
}
export default Form