import styled from 'styled-components'
export const Btn = styled.button`
display: block;
width: auto;
height: auto;
padding: 12px;
background:linear-gradient(134deg, rgb(106, 152, 240) 0%, rgb(73, 97, 220) 99%);
border:none;
color: white;
font-size:1.3rem;
border-radius: 4px;
margin: 30px 0;
`
export const SubsButton= styled.button`
padding: 2rem;
background-color: #F2F2F2;
border: none;
border-top-right-radius:10px;
border-bottom-right-radius:10px;
font-size: 14px;
cursor: pointer;
transition:all .05s ease-in-out;
&:hover{
    background-color:darkgray;
}
`