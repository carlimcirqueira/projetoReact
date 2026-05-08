import React from 'react';

// 1. Recebemos a nova prop 'onAdicionar'
const ItemCardapio = ({ nome, preco, onAdicionar }) => {
  return (
    <li className="lanche-item">
      <div className="lanche-info">
        <h2>{nome}</h2>
        <span className="lanche-preco">
          {preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
        </span>
      </div>
      
      {/* 2. No clique, executamos a função que veio do Pai */}
      <button className="btn-adicionar" onClick={onAdicionar}>
        Adicionar ao pedido
      </button>
    </li>
  );
};

export default ItemCardapio;