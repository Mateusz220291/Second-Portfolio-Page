import React from "react";
import styled from "styled-components";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaBootstrap,
  FaGitSquare,
  FaNpm,
} from "react-icons/fa";
import { SiStyledComponents, SiJquery, SiJavascript } from "react-icons/si";

const SkillsComponent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 100px;

  @media screen and (max-width: 780px) {
    padding: 0 0;
  }
`;
const SkillsTitle = styled.h2`
  font-size: 40px;
  padding: 3rem 0;
  text-align: center;
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  padding: 3rem 0;

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

  @media screen and (max-width: 780px) {
    flex-direction: column;
  }
`;

const Skill = styled.div`
  font-size: 5rem;
  color: #0c014a;
`;

function Skills() {
  return (
    <>
      <SkillsComponent>
        <SkillsTitle>Moje umiejętności</SkillsTitle>
        <SkillsContainer>
          <SkillsWrapper>
            <Skill>
              <FaHtml5 />
            </Skill>
            <Skill>
              <FaCss3Alt />
            </Skill>
            <Skill>
              <FaSass />
            </Skill>
            <Skill>
              <FaBootstrap />
            </Skill>
            <Skill>
              <SiJavascript />
            </Skill>
          </SkillsWrapper>
          <SkillsWrapper>
            <Skill>
              <SiJquery />
            </Skill>
            <Skill>
              <FaReact />
            </Skill>
            <Skill>
              <SiStyledComponents />
            </Skill>
            <Skill>
              <FaGitSquare />
            </Skill>
            <Skill>
              <FaNpm />
            </Skill>
          </SkillsWrapper>
        </SkillsContainer>
      </SkillsComponent>
    </>
  );
}

export default Skills;
