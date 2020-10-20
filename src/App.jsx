import React, {Fragment} from 'react';
import Navegacion from './components/Navegacion'
import Cuerpo from './components/Cuerpo'
import Footer from './components/Footer'

const App = () => {

  return (
    <Fragment>
      <Navegacion/>
      <Cuerpo/>
      <Footer/>
    </Fragment>
  );

}

export default App;
