import React, { useState } from 'react'; // 1. Importando o useState
import './App.css';
import ItemCardapio from './itenscardapio';

function App() {
  // 2. Criando o Estado. Começa com 0.
  // 'totalItens' é o valor, 'setTotalItens' é a função que atualiza esse valor.
  const [totalItens, setTotalItens] = useState(0);

  // 3. Função que será executada quando qualquer botão for clicado
  const adicionarAoPedido = () => {
    setTotalItens(totalItens + 1);
  };

  const menuItems = [
    { id: 1, name: '🍔 X-Tudo Monstro', price: 28.50 },
    { id: 2, name: '🌭 Cachorro Quente Prensado', price: 18.00 },
    { id: 3, name: '🍟 Porção de Batata Especial', price: 25.00 },
    { id: 4, name: '🍗 Coxinha com Catupiry', price: 9.00 },
    { id: 5, name: '🥤 Suco de Laranja Natural', price: 12.00 }
  ];

  return (
    <div className="cardapio-container">
      {/* 4. Exibindo o contador no topo da página */}
      <div className="contador-pedido">
        Total de itens no pedido: <strong>{totalItens}</strong>
      </div>
      <h1>----------------------------------------</h1>
      <h1>Menu da Lanchonete</h1>

      <ul className="lista-lanches">
        {menuItems.map((item) => (
          <ItemCardapio 
            key={item.id} 
            nome={item.name} 
            preco={item.price} 
            // 5. Passando a função como "propriedade" para o componente filho
            onAdicionar={adicionarAoPedido} 
          />
        ))}
      </ul>
    </div>
  );
}

export default App;