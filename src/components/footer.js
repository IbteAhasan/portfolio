import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
const FooterSection = styled.section``;
const FooterNavWapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  .flex {
    display: flex;
    flex-direction: column;
    width: calc(100% / 3);
    .navLink {
      text-decoration: none;
      font-size: 15px;
      color: gray;
      margin: 4px 0;
      line-height: 4rem;
      &:hover{
        color: black;
      }
    }
  }
`;
const StyledCredit = styled.div`
  width: max-content;
  margin: auto;

  font-size: 14px;
  color: black;
  p {
    margin: 50px 0;
  }
`;
export default function Footer() {
  return (
    <FooterSection>
      <FooterNavWapper>
        <div className="flex">
          <Link className="navLink" to="/">
            Home
          </Link>
          <Link className="navLink" to="/about">
            About
          </Link>
          <Link className="navLink" to="/project">
            Projects
          </Link>
        </div>
        <div className="flex">
          <a className="navLink" href="https://fb.com/ibte.nzs">
            Facebook
          </a>
          <a className="navLink" href="https://t.me/IbTeAhaSan">
            Telegram
          </a>
          <a className="navLink" href="https://github.com/IbteAhasan">
            Github
          </a>
        </div>
        <div className="flex">
          <Link className="navLink" to="/uses">
            Uses
          </Link>
          <Link className="navLink" to="/guestbook">
            Guestbook
          </Link>
        </div>
      </FooterNavWapper>
      <StyledCredit>
        <p>Made With Gatsby and Styled Components</p>
      </StyledCredit>
    </FooterSection>
  );
}
