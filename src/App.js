import Notas from './components/Notas';
import './App.css';
import Home from './Home';
import { useState } from 'react';
import Rotas from './components/Rotas';
import { Switch, Route, Link } from 'react-router-dom';

function App() {

  const [nota, setNota] = useState(0);
  const [nota2, setNota2,] = useState(0);

  function MostrarValor() {
    let num1 = parseInt(nota); 
    let num2 = parseInt(nota2);
    let c = num1+=num2
    console.log(c)
  }

  return(
    <div>
     <header>
       <Link to="/">Home</Link>
       <Link to="/components/Notas">Notas</Link>
       <Link to="/components/Rotas">Rotas</Link>
     </header>
     <Switch> 
       <Route exact path="/" component={Home}></Route>
       <Route path="/components/Notas" component={Notas}></Route>
       <Route path="/components/Rotas" component={Rotas}></Route>
     </Switch>
    </div>
  )

}

export default App;