import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import styled from "styled-components";
import { Button } from "./GlobalStyle";
import { Link as LinkS } from "react-scroll";
import myImage from "../images/ja.jpg";

const Section = styled.section`
  padding: 1rem 0rem;
  background: #f0f0ff;
  /* background: linear-gradient(to right top, var(--secondColor), var(--light)); */
`;
const Container = styled.div`
  padding: 0.2rem calc((100vw - 1300px) / 2);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 600px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
const ColumnLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  line-height: 1.4;
  padding: 0.2rem 2rem;
  order: ${({ reverse }) => (reverse ? "2" : "1")};

  h1 {
    margin-bottom: 1rem;
    font-size: clamp(1.5rem, 6vw, 2rem);
  }

  p {
    margin-bottom: 2rem;
    color: #1b0030;
  }
`;
const ColumnRight = styled.div`
  padding: 0.2rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 70%;
    height: 85%;
    object-fit: cover;

    @media screen and (max-width: 768px) {
      width: 90%;
      height: 90%;
    }
  }
`;

const LinkTo = styled(LinkS)`
  width: 100%;
`;

const InfoSection = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <Section id="aboutme">
      <Container>
        <ColumnRight data-aos="fade-right">
          <img src={myImage} alt="img"></img>
        </ColumnRight>
        <ColumnLeft data-aos="fade-up">
          <h1>Poznajmy się!</h1>
          <p>
            Cześć! Nazywam się Mateusz i zawodowo zajmuje się programowaniem.
            Projektuje funkcjonalne strony internetowe posiadające nowoczesny
            design.
          </p>
          <p>
            Dzięki pasji do programowania ciągle zdobywam nowe umiejętności i
            jestem na bieżąco z obowiązującymi trendami.
          </p>
          <p>
            Potrzebujesz strony internetowej albo chcesz poprawić wygląd
            obecnej? - dobrze trafiłeś!
          </p>{" "}
          <LinkTo
            to="projects"
            primary="true"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            <Button>Zobacz projekty</Button>
          </LinkTo>
        </ColumnLeft>
      </Container>
    </Section>
  );
};

export default InfoSection;
