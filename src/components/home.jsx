import React from "react";
import styled from "styled-components";
import Github from "./icons/github";
import Facebook from "./icons/facebook";
import Codepen from "./icons/codepen";
import Linkedin from "./icons/linkedin";
import { WaveAnimate } from "../styles/keyframes";
import { StaticImage } from "gatsby-plugin-image";
const HomeSection = styled.section`
  min-height: calc(100vh - 80px);
  height: max-content;
  margin-bottom: 80px;
`;
const HomeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 13vh;

  @media ${(props) => props.theme.breakpoints.sm} {
    flex-direction: column-reverse;
    margin-top: 4vh;
    .avatar {
      width: 80px !important;
      height: 80px !important;
    }
  }
`;
const TextWrapper = styled.div`
  max-width: 70%;
  @media ${(props) => props.theme.breakpoints.sm} {
    max-width: 100%;
    margin-top: 30px;
  }
`;
const BigHeading = styled.h1`
  font-size: calc(3.2vw + 12px);
  background: linear-gradient(90deg, rgb(251, 113, 199), rgb(102, 160, 254));
  -webkit-background-clip: text;
  color: transparent;
`;
const Para = styled.p`
  font-size: 2rem;
  font-weight: 400;
  margin: 30px 0;
  line-height: 150%;
  color: ${(props) => props.theme.colors.secondary};
  white-space: pre-wrap;
`;
const AnimatedText = styled.p`
  display: flex;
  font-size: 2rem;
  font-weight: 500;
  margin: 15px 0;
  line-height: 150%;
  color: ${(props) => props.theme.colors.primary};
  white-space: pre-wrap;
  @media ${(props) => props.theme.breakpoints.lg} {
  }
`;
const Letter = styled.span`
  animation: ${WaveAnimate} 2.2s ease-out;
  animation-delay: calc(0.1s * ${(props) => props.i});
`;
const SocialWrapper = styled.div`
  display: flex;
  margin: 40px 0;
  svg {
    height: 22px;
    width: 22px;
    color: ${(props) => props.theme.colors.secondary};
    margin-right: 20px;
    transition: all 0.15s ease-out;
    cursor: pointer;
    &:hover {
      color: ${(props) => props.theme.colors.primary};
      transform: scale(1.25);
    }
  }
`;

export default function Home() {
  const para = `I like building interactive web applications that need both front-end and back-end programming.
  
This is the place where I share and visualize whatever projects i've been working/worked on.`;

  const subtext = [
    "f",
    "u",
    "l",
    "l",
    " ",
    "s",
    "t",
    "a",
    "c",
    "k",
    " ",
    "w",
    "e",
    "b",
    " ",
    "d",
    "e",
    "v",
    "e",
    "l",
    "o",
    "p",
    "e",
    "r",
  ];

  return (
    <HomeSection>
      <HomeWrapper>
        <TextWrapper>
          <BigHeading>Ibte Ahasan</BigHeading>
          <AnimatedText>
            {subtext.map((letter, i) => (
              <Letter i={i} key={i}>
                {letter}
              </Letter>
            ))}
          </AnimatedText>
          <Para faded>{para}</Para>
          <SocialWrapper>
            <a href="https://facebook.com/ibte.nzs" className="">
              <Facebook />
            </a>

            <a href="https://github.com/IbteAhasan" className="">
              <Github />
            </a>

            <a
              href="https://www.linkedin.com/in/k-a-m-ibteshum-ab5578213"
              className=""
            >
              <Linkedin />
            </a>

            <a
              href="https://www.linkedin.com/in/k-a-m-ibteshum-ab5578213"
              className=""
            >
              <Codepen />
            </a>
          </SocialWrapper>
        </TextWrapper>

        <StaticImage
          imgStyle={{ filter: "grayScale(100%)" }}
          className="avatar"
          imgClassName="avatarImg"
          src="https://avatars.githubusercontent.com/u/97447382?v=4"
          alt="A dinosaur"
          placeholder="blurred"
          layout="fixed"
          objectFit="contain"
          width={120}
          height={120}
          style={{ borderRadius: "50%" }}
        />
      </HomeWrapper>
    </HomeSection>
  );
}
