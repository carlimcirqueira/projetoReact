import React from 'react';
import './App.css';
// 1. Importe o componente aqui (ajuste o caminho se não usou a pasta components)
import ItemCardapio from './itenscardapio';

function App() {
  const menuItems = [
    { id: 1, name: '🍔 X-Tudo Monstro', price: 28.50 },
    { id: 2, name: '🌭 Cachorro Quente Prensado', price: 18.00 },
    { id: 3, name: '🍟 Porção de Batata Especial', price: 25.00 },
    { id: 4, name: '🍗 Coxinha com Catupiry', price: 9.00 },
    { id: 5, name: '🥤 Suco de Laranja Natural', price: 12.00 }
  ];

  return (
    <div className="cardapio-container">
      <h1>Menu da Lanchonete</h1>

      <ul className="lista-lanches">
        {menuItems.map((item) => (
          // 2. Use o componente normalmente
          <ItemCardapio 
            key={item.id} 
            nome={item.name} 
            preco={item.price} 
          />
        ))}
      </ul>
    </div>
  );
}

export default App;