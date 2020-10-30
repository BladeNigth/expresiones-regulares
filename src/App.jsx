import React, {Fragment, useState, useEffect} from 'react';
import Navegacion from './components/Navegacion'
import Cuerpo from './components/Cuerpo'
import Footer from './components/Footer'
import VentanaModal from './components/ventanaModal';
import { Asistente } from './components/reconocimientoVoz/artyom';

const App = () => {

  const [mostrarIndicaciones, setMostrarIndicaciones] = useState(false);

  useEffect(() => {
    console.log("En este momento se muestra la ventana");
    setMostrarIndicaciones(true);
  },[])
  
  
  


  //Al quitar las indicaciones se activa artyom
  const quitarIndicaciones = () => {
    const asistente = new Asistente();
    asistente.presentacion();
    asistente.comandosEstaticos();
    asistente.montarValidadorDeVoz();
    
    setMostrarIndicaciones(false)
  }

  const renderisa = () => {
    
    if(mostrarIndicaciones){
      return <VentanaModal quitarIndicaciones={quitarIndicaciones} />
    }
    else{
      return (
          <Fragment>
          <Navegacion/>
          <Cuerpo/>
          <Footer/>
        </Fragment>
      );
    }
    
  }

  return renderisa();

}


export default App;

/*
    console.log(/a+/.test("blah"));        // true
    console.log(/a+$/.test("blah"));       // false
    console.log(/a+$/.test("blahaa"));     // true
    
    console.log("//////////////////////////////////");


    console.log(/a+/.test("blah"));        // true
    console.log(/^a+/.test("blah"));       // false
    console.log(/^a+/.test("aaaablah"));     // true
    

    console.log("//////////////////////////////////");
    var holyCow = /(sacred|holy) (cow|bovine|bull|taurus)/i;
    console.log(holyCow.test("holy bovine!"));      // true

    console.log("//////////////////////////////////");
    var nov = /Nov(\.|iembre|ember)?/i;
    console.log(nov.test("dov"));             // true
    console.log(nov.test("nov."));            // true
    console.log(nov.test("Noviembre"));       // true
    console.log(nov.test("November"));        // true



    const regex=/^[A-Z]{1}[0-9]{3}[a-zA-Z]{3}[!-/,:-@,[-`,{-~]{3}$/
    console.log(regex.test("A324gfd{-~"));
*/