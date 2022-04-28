import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;

::-webkit-scrollbar {
    width: 10px;
}

::-webkit-scrollbar-track-piece {
    background-color: #EEE;
    border-left: 1px solid #CCC
}

::-webkit-scrollbar-thumb:vertical,
::-webkit-scrollbar-thumb:horizontal {
    background-color: #BAC0C4
}

::-webkit-scrollbar-thumb:vertical:hover,

::-webkit-scrollbar-thumb:horizontal:hover {
    background-color: #717171
    }
    }

    html{
        @media(max-width: 1080px){
            font-size: 93.75%;
        }
        @media (max-width: 720px){
            font-size: 87.5%;
        }
    }
    body{
        background: rgb(2,0,36);
background: linear-gradient(135deg, rgba(2,0,36,1) 28%, rgba(121,9,89,1) 100%);

        -webkit-font-smoothing: antialiased;

        input[type=number]::-webkit-inner-spin-button { 
        -webkit-appearance: none; 
        }
        input[type=number] { 
        -moz-appearance: textfield;
        appearance: textfield;
        }
    }

    body, input, textarea, button{
        font-family: 'Poppins', sans-serif !important;
        font-weight: 400;
    }

    button{
        cursor: pointer;
    }

`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  min-height: 100vh;
  padding: 3rem 0.5rem;
  h1{
      color: white;
      cursor: pointer;
  }
  
.pokemon-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
}
.all-container {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-top: 35px
}

.container-options{
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-evenly;
    margin-top: 23px;
}

.container-favorite{
    color: white;
    cursor: pointer;
}
`;
