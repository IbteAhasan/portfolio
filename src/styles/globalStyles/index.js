import styled from "styled-components";
export const StyledHeading = styled.h2`
  text-align: ${(props) => props.align?props.align:'left'};
  font-size: 3.25rem;
  color: ${(props) => props.theme.colors.primary};
  margin: 20px 0;
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 2.4rem;
  }
`;
export const Subtext = styled.p`
  font-size: 1.8rem;
  text-align: ${(props) => props.align?props.align:'left'};
  font-weight: 400;
  line-height: 150%;
  margin: 15px 0;
  color: ${(props) => props.theme.colors.secondary};
`;
export const Wrapper = styled.div`
  max-width: 1280px;
  width: 65%;
  margin: auto;
  @media ${(props) => props.theme.breakpoints.lg} {
    width: 85%;
  }
`;
