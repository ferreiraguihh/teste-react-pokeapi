

## Codeby - Challenge


### Available Scripts

In the project directory, you can run:

### ` npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.



### Table of contents
[Project structure](#project-structure)

[Installation](#installation)

[Configuration](#configuration)

[Technologies used](#technologies-used)

### Project structure

````

src/
|- components/                                # All components

|    |- modalPokemon/ 
        |- ModalPokemon.jsx __________________________ # View Component
        |- ModalPokemon.test.js __________________________ # View Test
        |- styles.js __________________________ # Css modules styles
|    |- pagination/ 
        |- Pagination.jsx __________________________ # View Component
        |- styles.js __________________________ # Css modules styles
|    |- pokemonThumb/ 
|       |- PokemonThumb.jsx __________________________ # Component  
        |- styles.js __________________________ # Css modules styles   
|    |- search/ 
|       |- Search.jsx __________________________ # Component view 
|       |- Search.test.jsx __________________________ # View Test 
        |- styles.js __________________________ # Css modules styles
|
|    |- styles  
        |- global.js __________________________ # Css modules styles  

|- api.js _________________________# API       
|- App.js _________________________ # All Componets
|- index.js _________________________ # Render
````


### Installation

1- Clone the project

`git clone git clone https://github.com/ferreiraguihh/teste-react-pokeapi.git`

2-`npm install` to install npm packages

3- start dev server using `npm start`.

4-`npm test` test project

#### Technologies used

* [Webpack 4](https://github.com/webpack/webpack) 
* [Babel 8](https://github.com/babel/babel) [ transforming JSX and ES6,ES7,ES8 ]
* [React](https://github.com/facebook/react)
* [Styled-Components](https://styled-components.com/)
Create by Guilherme Ferreira dos Santos
