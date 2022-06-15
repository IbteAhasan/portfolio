import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Night from "./icons/night";
import Light from "./icons/light";
import { Link } from "gatsby";
import { NavFadeIn, NavSlideIn } from "../styles/keyframes";
const NavWrapper = styled.nav`
  height: 100px;
  display: flex;
  align-items: center;
  width: 100%;
`;
const Toggler = styled.button`
  cursor: pointer;
  border: none;
  border-radius: 8px;
  padding: 8px;
  background-color: ${(props) => props.theme.colors.border};
  z-index: 50;
  transition: transform 0.1s ease;
  &:hover {
    transform: scale(1.075);
  }
  svg {
    color: ${(props) => props.theme.colors.primary};
    height: 18px;
    width: 18px;
  }
`;
const NavItemsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
const NavItems = styled.ul`
  display: flex;
  align-items: center;
  font-size: 17px;
  @media ${(props) => props.theme.breakpoints.md} {
    display: none;
  }
`;
const NavItem = styled.li`
  list-style-type: none;
  margin-right: 25px;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.colors.secondary};
  font-weight: 400;
  &.active {
    color: ${(props) => props.theme.colors.primary};
    font-weight: 600;
  }
`;

const HamBtn = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  display: none;
  z-index: 1000;
  @media ${(props) => props.theme.breakpoints.md} {
    display: block;
  }
`;
const Hamburger = styled.div`
  height: 20px;
  width: 25px;
  position: relative;
  .bar {
    height: 3px;
    width: 25px;
    position: absolute;
    top: 50%;
    background-color: ${(props) => props.theme.colors.primary};
    border-radius: 8px;
    transform: ${(props) =>
      props.openMenu ? "rotate(-225deg)" : "rotate(0deg)"};
    transition: all 0.35s ease-out;
    &:first-of-type {
      width: 49%;
      top: 0;
      left: 0;

      transform: ${(props) =>
        props.openMenu ? "translate(1px ,5px) rotate(45deg)" : "rotate(0deg)"};
      transition: all 0.35s ease-out;
    }
    &:last-of-type {
      width: 49%;
      top: 100%;
      right: 0;
      transform: ${(props) =>
        props.openMenu ? "translate(-1px,-5px) rotate(45deg)" : "rotate(0deg)"};
      transition: all 0.35s ease-out;
    }
  }
`;

const HamMenu = styled.div`
  height: 100vh;
  width: 100%;
  top: 0;
  left: 0;
  position: absolute;
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background-color: ${(props) => props.theme.colors.background1};
  z-index: 30;
  @media ${(props) => props.theme.breakpoints.md} {
    display: ${(props) => (props.openMenu ? "flex" : "none")};
    animation: ${NavFadeIn} 0.35s ease-out;
  }
`;
const MNavLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.colors.secondary};
  font-size: 19px;
  line-height: 130%;
  padding: 1.3rem 2.8rem;
  animation: ${NavSlideIn} 0.5s ease-in-out;
  animation-delay: calc(0.15s * ${(props) => props.index});
  animation-fill-mode: both;
`;
export default function Navbar({ themeToggler, theme }) {
  const [menuState, setmenuState] = useState(false);
  const mobileMenu = () => {
    setmenuState(!menuState);
  };
  useEffect(() => {
    const clickListner = document.querySelectorAll(".mLink");
    for (let i = 0; i < clickListner.length; i++) {
      clickListner[i].addEventListener("click", () => {
        setmenuState(false);
      });
    }

    if (menuState) {
      document.querySelector("body").style.overflow = "hidden";
    } else {
      document.querySelector("body").style.overflow = "visible";
    }
  }, [menuState]);

  const navMenuItems = [
    { name: "Home", link: "/" },
    { name: "Projects", link: "/projects" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <>
      <NavWrapper>
        <NavItemsWrapper>
          <HamBtn onClick={mobileMenu}>
            <Hamburger openMenu={menuState}>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </Hamburger>
          </HamBtn>
          <NavItems>
            {navMenuItems.map((item, i) => (
              <NavItem key={i}>
                <NavLink activeClassName="active" to={item.link}>
                  {item.name}
                </NavLink>
              </NavItem>
            ))}
          </NavItems>

          <Toggler onClick={themeToggler}>
            {theme === "Light" ? <Night /> : <Light />}
          </Toggler>
        </NavItemsWrapper>
        <HamMenu openMenu={menuState}>
          {navMenuItems.map((item, i) => (
            <MNavLink className="mLink" to={item.link} index={i} key={i}>
              {item.name}
            </MNavLink>
          ))}
        </HamMenu>
      </NavWrapper>
    </>
  );
}
