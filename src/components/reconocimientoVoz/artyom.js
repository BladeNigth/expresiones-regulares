import artyom from 'artyom.js';

export const iniciarArtyom = () => {
    artyom.initialize({
        lang: "es-ES", // idioma
        continuous: true, // reconoce un companod y deja de escuchar
        listen: true,
        debug: true,
        speed: 1
    })

    artyom.say("Bienvenido a tu validador")

}


export const finalizarReconocimiento = () => {
    artyom.fatality();
}

export const responderAcomandos = () => {
    artyom.addCommands([
        {
            indexes: ["Hola"],
            action: function(i) {
                if(i==0){
                    artyom.say("Hola Luis, como te va");
                }
            }
        }
    ])
}