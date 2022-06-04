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
    scroll-behavior: smooth;

  }
body{
    position: relative;
    background-color: #F9FAFB;
}

/* width */
::-webkit-scrollbar {
  width: 5px;
  
}

/* Track */
::-webkit-scrollbar-track {
  background: rgb(248, 248, 248);
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background:black;
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