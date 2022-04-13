This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Teste PokeApi React

Esse teste tem como objetivo a criação de uma aplicação para exibir uma listagem de pokemons ao 
usuário, para que assim ele consiga ver e favoritar seu time.

Teremos duas telas para tal:
*   Home
    *   Mostra a listagem de pokemons. Cada card de pokemon deve exibir nome e imagem, além de ser possível
    favoritar o pokemon.
    *   A listagem deve possuir paginação, com 20 pokemons por página.
    *   Além disso, deve ter um campo de busca pelo nome. Esse campo deve filtrar no momento do input de cada letra(detalhe a performance)
     se existem correspondências para a página atual.
*   Favoritos
    *   Essa aba exibe os pokemons que o usuário favoritou na listagem(podem ser salvos no localstorage). Não é
    necessário manter os favoritos após recarregar a página.

#### API

Vamos utilizar a [PokeAPI](https://pokeapi.co/)
Todas os requests e docs de ajuda se encontram no link.

#### Desafio(Obrigatório)
*   Após criar a aplicação, todos os componentes devem possuír um coverage de no mínimo 60% de 
testes unitários.

#### Desafio extra (Não obrigatório)
*   100% de coverage de testes.
*   Ao clicar no card do pokemon, abrir uma modal com as informações extras que a API traz(Tipo, habilidades, evoluções).

#### Considerações finais
O boilerplate já possuí todo necessário para realização inicial do teste(React, router, jest, axios).

O design da aplicação fica por conta do dev, seja criativo.
Fica da escolha do dev utilizar ou não frameworks ou libs de componenentes para ajudar na estilização.

Todos os comandos para rodar o boilerplate, testes e coverage estão no package.json
