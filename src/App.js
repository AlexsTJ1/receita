
import './App.css';

import react from "react"
import receita from "./assets/receita.jpg"


function App() {
  return (
    <div>
      <h1 className='titulo'>Omelete rápido</h1>
      
      <img src={receita}></img>
      <h2>Ingredientes</h2>
      <ul>
        <li>2 ovos</li>
        <li>1 fatia de presunto</li>
        <li>tempero verde a gosto</li>
        <li>1 pitada de sal</li>
        <li>2 fatias de queijo</li>
        <li>caldo de galinha a gosto</li>

      </ul>

      <h2>Modo de Preparo</h2>
      <p> 1 - Bata os 2 ovos, pode ser na batedeira ou não.</p>
        <p>2 -Após ter batido bem, coloque-o na frigideira já untada com óleo, acrescente o sal, o presunto picado em quadradinhos e as duas fatias de queijo (não precisa picar o queijo).</p>
        <p>3 - Coloque os temperos a gosto, espere ficar firme, e vire o omelete.</p>
        <p>4 -Está pronto um omelete delicioso, bom apetite!</p>
    </div>
  );
}

export default App;
