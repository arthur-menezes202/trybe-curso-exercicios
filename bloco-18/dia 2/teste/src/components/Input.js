import React, { useState } from "react";

function Input() {
  const [lista, newLista] = useState('');

  const handleChange = (event) => {
    newLista(event.target.value);
  }

  const clickElemente = () => {
    newLista('');
  }
  return (
    <div>
      <input type="text" value={ lista } onChange={handleChange()} />
      <button type="button" onClick={clickElemente() } >
        adicionar
      </button>
    </div>
  );
}

export default Input;