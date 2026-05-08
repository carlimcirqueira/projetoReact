1. *Oque ficou repetitivo no codigo ?*
Para cada item na lista de menu o codigo teria que percorrer uma posicao da lista para mostrar o valor na tela, e o formato de cada item ficou igual demais

2. *Se a lanchonete tivesse 30 itens, oque aconteceria?*
Não iria caber na tela e seria necessário scrollar para olhar oque esta faltando mostrar

REFLEXAO APOS MUDANÇAS

1. O código ficou maior ou menor ?
Ele ficou mais limpo no app.jsx, em que a função que puxa os itens do cardapio e coloca em uma caixa ficou mais limpa criando os componentes

2. Se voce mudar a cor de fundo do item cardapio quantos lugares precisa alterar?
Somente no app.css, 1 lugar só. Em que todos os componentes gerados para mostrar um item vao aparecer na cor escolhida

3. Como os dados (nome,preço) chegaram dentro do componente?
Atraves de uma lista que está dentro de app.jsx passada na função do componente que foi importada


REFLEXAO FINAL

1. Por que uma variavel comum let total = 0 nao atualiza a tela?
Por ela não utilizar o useState que é um gancho do react, ela não consegue mostrar efetivamente na tela as mudanças dessa variavel

2. Onde foi necessário guardar o número total - no App.jsx ou no ItemCardapio.jsx? Por quê?
Foi necessario guardar o numero total dentro de "const [totalItens, setTotalItens] = useState(0);"

3. Como o botão filho consegue avisar o App que houve um clique ?