import Artyom from 'artyom.js';

export class Asistente {

    constructor(){
        
        this.Asistente = new Artyom();
        this.inicializar();
    
    }

    comandosEstaticos(){
        this.Asistente.addCommands([
            {
                indexes: ["llevame al repositorio","requisitos de la contraseña"],
                action: (i) => {
                    if(i===0){
                        this.Asistente.say("Abriendo repositorio del proyecto");
                        window.open("https://github.com/BladeNigth/expresiones-regulares","_blank");
                    }
                    if(i===1){
                        this.Asistente.say("la contraseña debe tener: Una letra mayúscula, seguida de tres números, seguidos de tres letras minúsculas y por último tres caracteres especiales");
                    }
                }
            }
        ]);
    }

    presentacion(){
        //se presenta
        this.Asistente.say("¡ Bienvenido a tu validador de contraseñas, yo sere tu asistente !");
        this.Asistente.say("No te preocupes si no ves un botón, mientras digitas tu contraseña estaré revisando y el recuadro se marcará dependiendo si es válida o no.");
    }

    inicializar(){

        this.Asistente.initialize({
            lang: "es-ES", // GreatBritain english
            continuous: true, // Listen forever
            soundex: true,// Use the soundex algorithm to increase accuracy
            debug: true, // Show messages in the console
            //executionKeyword: "and do it now",
            listen: true, // Start to listen commands !
            //para darle un nombre al asistente, los comandos se ejecutaran si antes se establece el nombre
            //name: "Jarvis" 
        }).then(() => {
            console.log("Artyom ha sido iniciado satisfactoriamente");
        }).catch((err) => {
            console.error("Ocurrio algo: ", err);
        });    
    
    }

    finalizar(){
        this.Asistente.fatality();
    }

    montarValidadorDeVoz(){
        this.Asistente.addCommands([
                {
                    indexes: ["evalúa la contraseña"],
                    action: (i) => {
                        if(i===0){
                            //console.log("Antes de entrar a la ejecucion: ",statePassword);
                            if(document.getElementById("input__password").classList.contains("input__correcto")){
                                this.Asistente.say("Tu contraseña actual es válida");
                                //alert("Tu contraseña es valida");
                            }
                            else{
                                this.Asistente.say("Tu contraseña no cumple con lo requerimientos, por favor intenta con otra");
                                //alert("Tu contraseña NO es valida");
                            
                            }
                        }
                    }
                }
        ])

    }

}

/*export const iniciarArtyom = () => {
    
    const Asistente = new Artyom();
    
    Asistente.initialize({
        lang: "es-ES", // GreatBritain english
        continuous: true, // Listen forever
        soundex: true,// Use the soundex algorithm to increase accuracy
        debug: true, // Show messages in the console
        //executionKeyword: "and do it now",
        listen: true, // Start to listen commands !
        //para darle un nombre al asistente, los comandos se ejecutaran si antes se establece el nombre
        //name: "Jarvis" 
    }).then(() => {
        console.log("Artyom ha sido iniciado satisfactoriamente");
    }).catch((err) => {
        console.error("Ocurrio algo: ", err);
    });

    //
    
    
    Asistente.fatality();
    //se presenta
    Asistente.say("¡ Bienvenido a tu validador de contraseñas. Yo sere tu asistente !");

    
    Asistente.fatality();
    Asistente.addCommands([
        {
            {
                indexes: ["Ir al repositorio"],
                action: function(i){
                    if(i==0){
                        Asistente.say("Abriendo repositorio del proyecto");
                        window.open("https://github.com/BladeNigth/expresiones-regulares","_blank");
                    }
                }
            }
        },
        {
            indexes: ["Requisitos de la contraseña","Valida contraseña"],
            action: function(i){
                if(i===0){
                    Asistente.say("Los requistos de la contraseña son:");
                    Asistente.say("Una letra mayúscula, seguida de tres números");
                    Asistente.say("seguidos de tres letras minusculas, seguidas de tres caracteres especiales");
                }
                if(i===1){
                    if(stateArtyom){
                        Asistente.say("Tu contraseña actual es válida");
                    }
                    else{
                        Asistente.say("Tu contraseña no cumple con lo requerimientos");
                    }
                }
            }
        }
    ])

}*/