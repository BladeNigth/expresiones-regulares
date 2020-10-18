import React from 'react'

const Form = () =>{

    const regex=/^[A-Z\u00d1]{1}[0-9]{3}[a-zA-ZÀ-ÿ\u00f1\u00d1]{3}\W{3}$/
    console.log(regex.test("A324gfd{-~"));

    const handleKeyUp= (e) =>{
        console.log(e.target.value);
        if(regex.test(e.target.value)){
           document.getElementById("input__password").classList.add("input__correcto");
           document.getElementById("input__password").classList.remove("input__incorrecto");
           document.querySelector("#input__password i").classList.add("fa-check-circle");
           document.querySelector("#input__password i").classList.remove("fa-times-circle");
           document.querySelector("#input__password .input__message__error").classList.remove("input__message__error__activo");
        }
        else{
           document.getElementById("input__password").classList.add("input__incorrecto");
           document.getElementById("input__password").classList.remove("input__correcto");
           document.querySelector("#input__password i").classList.add("fa-times-circle");
           document.querySelector("#input__password i").classList.remove("fa-check-circle");
           document.querySelector("#input__password .input__message__error").classList.add("input__message__error__activo");
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
                    <input onKeyUp={handleKeyUp} type="text" className="input__form" name="password" id="password" placeholder="Ejemplo: A123xyz$%&"/>
                    <i className="validacion__estado fas fa-times-circle"></i>
                </div>
                <p className="input__message__error">Esta contraseña no cumple con las condiciones establecidas...!</p>
            </div>

        </div>
    )
}
export default Form