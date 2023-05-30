import React from 'react'
import './App.css';
import { Context } from './context/globalContext';

function App() {

  const { data } = React.useContext(Context);

  return (
    <div >
      {data.map((element) => {
        <div key={data.id}>
          <div>{element.id}</div>
          <div>{element.descricao}</div>
          <div>{element.edicao}</div>
        </div>
      })}
    </div>
  );
}

export default App;
