import React from 'react'
import styled from 'styled-components'
import { StyledHeading, Subtext } from '../styles/globalStyles'
import { SubsButton } from '../styles/buttons'
const LetterSection = styled.section`
margin: 180px 0;
`
const LetterWrapper = styled.div`
background-color: ${(props) => props.theme.colors.background2};
border:1px solid #03A9F4;
border-radius: 5px;
padding: 5rem;
margin:30px 0;
@media ${(props) => props.theme.breakpoints.sm} {
   padding:2.6rem;
  }
`
const LetterForm =styled.form`
display: flex;
`
const StyledInput = styled.input.attrs({type:"email"})`
background-color: ${(props) => props.theme.colors.background1};
padding: 2rem;
width: 100%;
border: none;
border-top-left-radius: 8px;
border-bottom-left-radius:8px;
font-size: 16px;
::placeholder{
    color:${(props) => props.theme.colors.faded};
}
&:focus{
    border: none;
    outline: none;
    color:${(props) => props.theme.colors.faded};
}
`

export default function NewsLetter() {
  return (
   <LetterSection>
<LetterWrapper>
    <StyledHeading style={{margin:"0"}}>Join my newsletter!</StyledHeading>
    <Subtext>Get emails from me about my latest projects whenever I publish them.</Subtext>
    <LetterForm>
<StyledInput placeholder="example@gmail.com"/>
<SubsButton>Subscribe</SubsButton>


    </LetterForm>
</LetterWrapper>

   </LetterSection>
  )
}
