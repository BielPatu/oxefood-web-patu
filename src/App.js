import { Segment } from 'semantic-ui-react';
import './App.css';
import Home from './views/home/Home';
import FormCliente from './views/client/FormClient';
import Product from './Product/Product';

function App() {
  return (
    <div className="App">
      <div className="App">
      
      <Product />

      <div style={{marginTop: '6%'}}>
        <Segment vertical color='grey' size='tiny' textAlign='center'>
          &copy; 2023 - Projeto WEB III - IFPE Jaboatão dos Guararapes
        </Segment>
      </div>

    </div>
    </div>
  );
}

export default App;
