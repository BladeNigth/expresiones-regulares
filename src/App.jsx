import React, {Fragment} from 'react';
import Navegacion from './components/Navegacion'
import Cuerpo from './components/Cuerpo'
import Footer from './components/Footer'

const App = () => {
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
  return (
    <Fragment>
      <Navegacion/>
      <Cuerpo/>
      <Footer/>
    </Fragment>
  );

}

export default App;
