import React, { useEffect } from "react";
import styled from "styled-components";
import Aos from "aos";
import "aos/dist/aos.css";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaBootstrap,
  FaGitSquare,
} from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import {
  SiStyledcomponents,
  SiJquery,
  SiJavascript,
  SiTailwindcss,
  SiStorybook,
  SiTypescript,
} from "react-icons/si";
import { IoLogoStencil } from "react-icons/io5";

const OfferSection = styled.section`
  display: flex;
  background: var(--maincolor);
  background: linear-gradient(to right top, var(--dark), var(--maincolor));
  text-align: center;
  justify-content: center;
  padding: 0 3rem 100px 3rem;
`;

const OfferContainer = styled.div`
  display: flex;
  max-width: 1300px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
`;

const OfferTitle = styled.h2`
  color: white;
  font-size: 40px;
  padding: 3rem 0;
`;

const OfferText = styled.p`
  font-size: 17px;
  line-height: 1.5;
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  margin: 5rem auto;

  @media screen and (max-width: 780px) {
    flex-direction: row;
  }
`;

const SkillsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

const Skill = styled.div`
  width: 20%;
  font-size: 5rem;
  color: #e62eb5;

  @media (max-width: 768px) {
    width: 50%;
  }
`;
const SkillText = styled.p`
  font-size: 1rem;
  color: white;
`;

function Offer() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <OfferSection id="offer">
      <OfferContainer>
        <OfferTitle data-aos="fade-up" data-aos-once="true">
          Co potrafię?
        </OfferTitle>
        <OfferText data-aos="fade-up" data-aos-once="true">
          Jako doświadczony front-end developer, stale rozwijam swoje
          umiejętności, aby sprostać dynamicznym zmianom w obszarze technologii.
          Znając zarówno najnowsze trendy, takie jak React i Next.js, jak i
          starsze narzędzia, w tym jQuery i Stencil, projektuję nowoczesne i
          responsywne strony internetowe, które doskonale działają na różnych
          urządzeniach.
        </OfferText>

        <SkillsContainer>
          <SkillsWrapper>
            <Skill data-aos="fade-up" data-aos-once="true">
              <SkillText>JavaScipt</SkillText>
              <SiJavascript />
            </Skill>
            <Skill data-aos="fade-up" data-aos-once="true">
              <SkillText>React</SkillText>
              <FaReact />
            </Skill>

            <Skill data-aos="fade-up" data-aos-once="true">
              <SkillText>TypeScript</SkillText>
              <SiTypescript />
            </Skill>
            <Skill data-aos="fade-up" data-aos-once="true">
              <SkillText>Next.js</SkillText>
              <SiNextdotjs />
            </Skill>
            <Skill data-aos="fade-up" data-aos-once="true">
              <SkillText>Stencil.js</SkillText>
              <IoLogoStencil />
            </Skill>
            <Skill data-aos="fade-up" data-aos-once="true">
              <SkillText>JQuery</SkillText>
              <SiJquery />
            </Skill>
            <Skill data-aos="fade-up" data-aos-once="true">
              <SkillText>HTML</SkillText>
              <FaHtml5 />
            </Skill>
            <Skill data-aos="fade-up" data-aos-once="true">
              <SkillText>CSS</SkillText>
              <FaCss3Alt />
            </Skill>
            <Skill data-aos="fade-up" data-aos-once="true">
              <SkillText>SCSS/SAAS</SkillText>
              <FaSass />
            </Skill>
            <Skill data-aos="fade-up" data-aos-once="true">
              <SkillText>Tailwind.css</SkillText>
              <SiTailwindcss />
            </Skill>
            <Skill data-aos="fade-up" data-aos-once="true">
              <SkillText>Bootstrap</SkillText>
              <FaBootstrap />
            </Skill>
            <Skill data-aos="fade-up" data-aos-once="true">
              <SkillText>Styled components</SkillText>
              <SiStyledcomponents />
            </Skill>
            <Skill data-aos="fade-up" data-aos-once="true">
              <SkillText>GIT</SkillText>
              <FaGitSquare />
            </Skill>
            <Skill data-aos="fade-up" data-aos-once="true">
              <SkillText>Storybook</SkillText>
              <SiStorybook />
            </Skill>
          </SkillsWrapper>
        </SkillsContainer>
      </OfferContainer>
    </OfferSection>
  );
}

export default Offer;
