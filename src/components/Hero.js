import React from "react";
import styled from "styled-components";
import { Button } from "./GlobalStyle";
import Programmer from "../images/Programmer.svg";
import { Link as LinkS } from "react-scroll";

const HeroContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100vh - 80px);
  position: relative;
  background: var(--maincolor);
  background: linear-gradient(to right top, var(--dark), var(--maincolor));
  color: white;
  overflow: hidden;

  &::before {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(#f00, #f0f);
    clip-path: circle(25% at right 50%);
    animation: slideDown 16s linear infinite;
  }
  &::after {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(#2196f3, #e91e63);
    clip-path: circle(18% at 10% 50%);
    animation: slideUp 8s linear infinite;
  }
  @keyframes slideDown {
    from {
      transform: translateY(-100vh);
    }
    to {
      transform: translateY(100vh);
    }
  }

  @keyframes slideUp {
    from {
      transform: translateY(100vh);
    }
    to {
      transform: translateY(-100vh);
    }
  }
`;

const HeaderContainer = styled.div`
  z-index: 10;
  width: 90%;
  position: absolute;
  height: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 0 20px;
  background: red;
  background: rgba(0, 0, 0, 0.7);
  background: linear-gradient(
    to right top,
    rgba(0, 0, 0, 0.75),
    rgba(0, 0, 0, 0.25)
  );
  position: relative;
  border-radius: 20px;
  backdrop-filter: blur(8px);

  @media (min-width: 680px) {
    padding: 0 100px;
  }
`;
const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  height: 40%;
  @media (orientation: landscape) and (max-width: 700px) {
    height: 70%;
  }
`;
const HeaderTitle = styled.h1`
  font-size: 70px;
  font-weight: 700;

  @media screen and (max-width: 370px) {
    font-size: 50px;
  }
`;
const HeaderText = styled.h3`
  font-size: 30px;
  font-weight: 200;
  padding-bottom: 15px;
  @media screen and (max-width: 370px) {
    font-size: 20px;
  }
`;
const ImgWrapper = styled.div`
  img {
    width: 300px;
  }

  @media screen and (max-width: 1150px) {
    display: none;
  }
`;

const LinkTo = styled(LinkS)`
  width: 100%;
`;

const Hero = () => {
  return (
    <>
      <HeroContainer>
        <HeaderContainer>
          <HeaderWrapper>
            <HeaderTitle>Mateusz Mikła</HeaderTitle>
            <HeaderText>Front-end developer </HeaderText>
            <LinkTo
              width="100%"
              to="aboutme"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
            >
              <Button>O mnie</Button>
            </LinkTo>
          </HeaderWrapper>
          <ImgWrapper>
            {" "}
            <img src={Programmer} alt="programista"></img>
          </ImgWrapper>
        </HeaderContainer>
      </HeroContainer>
    </>
  );
};

export default Hero;
