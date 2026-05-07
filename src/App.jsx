import React from 'react';
import './App.css';

function App() {
  // Array agora apenas com id, nome e preço
  const menuItems = [
    { id: 1, name: '🍔 X-Tudo Monstro', price: 28.50 },
    { id: 2, name: '🌭 Cachorro Quente Prensado', price: 18.00 },
    { id: 3, name: '🍟 Porção de Batata Especial', price: 25.00 },
    { id: 4, name: '🍗 Coxinha com Catupiry', price: 9.00 },
    { id: 5, name: '🥤 Suco de Laranja Natural', price: 12.00 },
    { id: 6, name: '🥤 Suco de Laranja Natural', price: 12.00 },
    { id: 7, name: '🥤 Suco de Laranja Natural', price: 12.00 },
    { id: 8, name: '🥤 Suco de Laranja Natural', price: 12.00 },
    { id: 9, name: '🥤 Suco de Laranja Natural', price: 12.00 }
  ];

  return (
    <div className="cardapio-container">
      <h1>Menu da Lanchonete</h1>

      <ul className="lista-lanches">
        {menuItems.map((item) => (
          <li key={item.id} className="lanche-item">
            <h2>{item.name}</h2>
            <span className="lanche-preco">
              {item.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;