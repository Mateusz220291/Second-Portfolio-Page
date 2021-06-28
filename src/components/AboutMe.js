import React from "react";
import styled from "styled-components";
import Skills from "./Skills";
import myImage from "../images/head.jpg";

const AboutMeSection = styled.section`
  background: #f0f0ff;
  margin-top: -80px;
  padding: 0 10%;
`;
const AboutMeWrapper = styled.div`
  padding-top: 100px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 600px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
const PhotoContainer = styled.div`
  padding: 0.2rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px) {
    padding: 0 1rem;
  }

  img {
    width: 80%;
    height: 80%;
    object-fit: cover;

    @media screen and (max-width: 768px) {
      width: 100%;
      height: 80%;
    }
  }
`;
const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  line-height: 1.4;
  padding: 5rem 2rem;
  @media screen and (max-width: 768px) {
    padding: 1rem 1rem;
  }

  h1 {
    margin-bottom: 1rem;
    font-size: clamp(1.5rem, 6vw, 2rem);
    width: 100%;
    text-align: center;
  }

  p {
    margin-bottom: 2rem;
    color: #1b0030;
  }
`;
const GitHubContainer = styled.div``;

function AboutMe() {
  return (
    <div>
      <AboutMeSection>
        <AboutMeWrapper>
          <PhotoContainer>
            <img src={myImage} alt="myphoto"></img>
          </PhotoContainer>
          <TextWrapper>
            <h1>O mnie</h1>
            <p>
              Nazywam się Mateusz Mikła, mam 30 lat i mieszkam obecnie w Łodzi.
              Od 2 lat zajmuje się Front-end developmentem i stale rozwijam
              swoje zainteresowania w tej dziedzinie. Jestem prawdziwym fanem
              frameworka React.js.{" "}
            </p>
            <p>
              W swoich projektach dużą wagę przykładam do designu jak i
              funkcjonalności. Tworze przyjazne użytkownikom strony, posiadające
              jednocześnie atrakcyjny wygląd
            </p>
            <p>
              Realizowane przeze mnie projekty dostosowają się do ekranów o
              rożnych przekątnych (RWD) i pracują na najpopularniejszych
              przeglądarkach.
            </p>
            <GitHubContainer></GitHubContainer>
          </TextWrapper>
        </AboutMeWrapper>
        <Skills />
      </AboutMeSection>
    </div>
  );
}

export default AboutMe;
