const ItemCardapio = ({ nome, preco }) => {
  return (
    <li className="lanche-item">
      <h2>{nome}</h2>
      <span className="lanche-preco">
        {preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
      </span>
    </li>
  );
};

export default ItemCardapio;