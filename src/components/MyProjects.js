import React, { useEffect } from "react";
import ProjectCard from "./ProjectCard";
import Aos from "aos";
import "aos/dist/aos.css";
import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import ImageOne from "../images/fishing.jpg";
import ImageTwo from "../images/service.jpg";
import ImageThree from "../images/fish.png";

const SectionProjects = styled.div`
  display: flex;
  flex-direction: column;
  background: var(--maincolor);
  background: #ffffff;
  text-align: center;
`;
const ProjectsTitle = styled.h2`
  color: black;
  font-size: 40px;
  padding: 3rem 0;
`;

const ProjectsContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  z-index: 1;
`;
const RecruiterInfo = styled.div`
  width: 90%;
  max-width: 1300px;
  background: linear-gradient(to right top, var(--dark), var(--maincolor));
  border-radius: 25px;
  display: flex;
  justify-content: space-between;
  color: white;
  margin: 20px auto;
  padding: 30px;
  text-align: start;
  @media screen and (max-width: 960px) {
    flex-direction: column;
  }
`;
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  max-width: 600px;
`;
const RecrutierTitle = styled.h3`
  padding: 10px 0;
`;
const RecruiterText = styled.p`
  text-align: justify;
  font-weight: 200;
`;
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
`;
const Button = styled(LinkR)`
  border-radius: 4px;
  background: ${({ primary }) => (primary ? "#e62eb5" : "#0467FB")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "12px 64px" : "10px 20px")};
  color: #fff;
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    transition: all 0.3s ease-out;
    background: #fff;
    background: ${({ primary }) => (primary ? "#0467FB" : "#e62eb5")};
  }

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;
function MyProjects() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <SectionProjects id="projects">
        <ProjectsTitle data-aos="fade-up">Moje projekty</ProjectsTitle>
        <ProjectsContainer>
          <ProjectCard
            src={ImageOne}
            title="Wyjazdy na ryby"
            text="Oprócz programowania lubie kontakt z naturą i wędkowanie. W wolnej chwili stworzyłem stronę o tematyce wędkarskiej - organizacja wyjazdów wędkarskich."
            live="https://mateusz220291.github.io/FishingTrips/"
            code="https://github.com/Mateusz220291/Fishing-association"
          />
          <ProjectCard
            src={ImageTwo}
            title="Montaż podłóg"
            text="Strona internetowa wykonana na zlecenie firmiy specjalizującej się w sprzedaży i montażu podłóg. Strona zbudowana za pomocą technologi HTML5, SCSS, JavaScript i JQuery"
            live="https://mateusz220291.github.io/Floormaker/"
            code="https://github.com/Mateusz220291/Floormaker"
          />
          <ProjectCard
            src={ImageThree}
            title="Złów i wypuść"
            text="Obecnie skupiam się na stworzeniu aplikacji, która będzie pomagała skatalogować złowione ryby. W kolejnym etapie projekt zostanie rozwinięty do aplikacji mobilnej "
            live="#"
            code="#"
          />
        </ProjectsContainer>
        <RecruiterInfo data-aos="fade-right">
          <TextContainer>
            <RecrutierTitle>
              Poszukujesz zleceniobiorcy do stałej współpracy?
            </RecrutierTitle>
            <RecruiterText>
              Jeżeli chcesz zrekrutować mnie do swojej firmy i dowiedzieć się
              więcej o moich umiejętnościach - kliknij przycisk
            </RecruiterText>
          </TextContainer>
          <ButtonWrapper>
            <Button to="/aboutme">Dowiedz się więcej!</Button>
          </ButtonWrapper>
        </RecruiterInfo>
      </SectionProjects>
    </>
  );
}

export default MyProjects;
