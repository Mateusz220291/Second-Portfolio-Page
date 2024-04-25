import React, { useEffect } from "react";
import ProjectCard from "./ProjectCard";
import Aos from "aos";
import "aos/dist/aos.css";
import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import ImageOne from "../images/flowers.jpg";
import ImageTwo from "../images/Wedding.jpg";
import ImageThree from "../images/array.jpg";
import ImageFour from "../images/fishing.jpg";

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
        <ProjectsTitle data-aos="fade-up" data-aos-once="true">
          Moje projekty
        </ProjectsTitle>
        <ProjectsContainer>
          <ProjectCard
            src={ImageOne}
            title="Made of flowers"
            text="Strona wizytówka zaprojektowana i wykonana na zamówienie klienta zajmującego się dekoracjami kwiatowymi."
            live="https://mateusz220291.github.io/Made-Of-Flowers/"
            code="https://github.com/Mateusz220291/Made-Of-Flowers"
          />
          <ProjectCard
            src={ImageTwo}
            title="Wedding Day"
            text="Strona internetowa przygotowana na potrzeby imprezy okolicznościowej. Celem było przekazanie jak największej liczby szczegółów, których nie da się zmieścić w standardowych zaproszeniach."
            live="https://mateusz220291.github.io/Wedding-Website/"
            code="https://github.com/Mateusz220291/Wedding-Website"
          />
          <ProjectCard
            src={ImageThree}
            title="Tablica tagów"
            text="Prosta aplikacja na potrzeby zadania rekrutacyjnego polegająca na pobraniu z API i wyświetlenia konfigurowalnej tablicy. Technologie: Tanstack Query, React, Taiwind.css "
            live="https://mateusz220291.github.io/Recruitment-Task/"
            code="https://github.com/Mateusz220291/Recruitment-Task"
          />
          <ProjectCard
            src={ImageFour}
            title="FishTrckr App"
            text="Obecnie skupiam się na stworzeniu aplikacji wędkarskiej, która pozwoli katalogować i przeglądać złowione przeze mnie ryby. Technologie: Next.js"
            live="#"
            code="https://github.com/Mateusz220291/Fishing-App-Next"
          />
        </ProjectsContainer>
        <RecruiterInfo data-aos="fade-right" data-aos-once="true">
          <TextContainer>
            <RecrutierTitle>
              Poszukujesz zdolnego Front-end Developera do swojego zespołu?
            </RecrutierTitle>
            <RecruiterText>
              Jeżeli chcesz porozmawiać o możliwościach współpracy i dowiedzieć
              się więcej o moich umiejętnościach - zobacz moje CV
            </RecruiterText>
          </TextContainer>
          <ButtonWrapper>
            <Button href="#" download>
              pobierz CV
            </Button>
          </ButtonWrapper>
        </RecruiterInfo>
      </SectionProjects>
    </>
  );
}

export default MyProjects;
