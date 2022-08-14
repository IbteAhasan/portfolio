import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyles =createGlobalStyle`
${normalize}
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: ${props=>props.theme.fonts.main};
  }
  html {
    font-size: 62.5%;
  }
body{
    position: relative;
    background-color: ${(props) => props.theme.colors.background1};
    overflow: hidden;
}

/* width */
::-webkit-scrollbar {
  width: 5px;
  
}

/* Track */
::-webkit-scrollbar-track {
  background: ${(props) => props.theme.colors.faded};
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background:${(props) => props.theme.colors.primary};
  border-radius: 2px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background:#6D83F2; 
}

h1{
    margin:4px 0;
}
`
export default GlobalStyles