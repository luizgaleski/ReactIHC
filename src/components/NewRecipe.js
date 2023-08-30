// src/components/NewRecipe.js
import React, { useState } from 'react';

function NewRecipe({ addRecipe }) {
  const [name, setName] = useState('');
  const [instructions, setInstructions] = useState('');

  const handleSubmit = event => {
    event.preventDefault();

    // Crie um objeto de receita com os valores do estado
    const newRecipe = {
      id: Date.now(),
      name,
      instructions,
    };

   
    addRecipe(newRecipe);

  
    setName('');
    setInstructions('');
  };

  return (
    <div>
      <h2>Adicionar Nova Receita</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nome da Receita:
          <input type="text" value={name} onChange={e => setName(e.target.value)} />
        </label>
        <label>
          Instruções:
          <textarea value={instructions} onChange={e => setInstructions(e.target.value)} />
        </label>
        <button type="submit">Adicionar Receita</button>
      </form>
    </div>
  );
}

export default NewRecipe;
