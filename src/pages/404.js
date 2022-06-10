import * as React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
// styles
const Wrapper = styled.div`
  .goBack {
    
    font-size: 1.8rem;
    
    text-align: center;
    a{
      text-decoration: none;
      color: ${(props) => props.theme.colors.primary};
      line-height: 170%;
    }
  }
`;
const StyledTitle = styled.h1`
  text-align: center;
  font-size: 8rem;
  color: ${(props) => props.theme.colors.primary};
  line-height: 160%;
`;
const StyledSubtitle = styled.h2`
  text-align: center;
  font-size: 3rem;
  color: ${(props) => props.theme.colors.primary};
  line-height: 160%;
`;
// markup
const NotFoundPage = () => {
  return (
    <Wrapper>
      <StyledTitle>404</StyledTitle>
      <StyledSubtitle>Opps, seems like you are lost!</StyledSubtitle>
      <div className="goBack">
        <Link to="/">Mind going back to home?</Link>
      </div>
    </Wrapper>
  );
};

export default NotFoundPage;
