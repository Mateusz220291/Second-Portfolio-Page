import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import styled from "styled-components";
import { Button } from "./GlobalStyle";
import { FaGithub } from "react-icons/fa";

const CardWrapper = styled.div`
  position: relative;
  width: 250px;
  height: 450px;
  margin: 35px;
  box-shadow: 20px 20px 20px rgba(0, 0, 0, 0.5);
  border-radius: 15px;
  background: linear-gradient(
    to right top,
    rgba(255, 255, 255),
    rgba(230, 230, 230)
  );
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  border-left: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
  color: black;
  transition: 0.3s;
`;

const CardImg = styled.img`
  height: 45%;
`;

const CardTitle = styled.h2`
  padding: 8px;
  height: 50px;
`;

const CardText = styled.p`
  text-align: left;
  padding: 0 10px;
  font-size: 0.8rem;
  font-weight: 400;
  height: 130px;
`;

const ButtonsWrapper = styled.div`
  padding: 1rem 2rem;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const ButtonLink = styled.a`
  text-decoration: none;
  color: white;
`;

function ProjectCard({ src, title, text, code, live }) {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <CardWrapper data-aos="zoom-in" data-aos-once="true">
        <CardImg src={src}></CardImg>
        <CardTitle>{title}</CardTitle>
        <CardText>{text}</CardText>
        <ButtonsWrapper>
          <ButtonLink href={live} target="_blank">
            <Button primary>Live</Button>
          </ButtonLink>
          <ButtonLink href={code} target="_blank">
            <Button primary>
              <FaGithub />
            </Button>
          </ButtonLink>
        </ButtonsWrapper>
      </CardWrapper>
    </>
  );
}

export default ProjectCard;
