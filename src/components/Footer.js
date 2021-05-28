import React from "react";
import { Button } from "./GlobalStyle";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { animateScroll as scroll } from "react-scroll";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaMagento,
} from "react-icons/fa";

const FooterSection = styled.section`
  display: flex;
  flex-direction: column;
  background: var(--maincolor);
  background: linear-gradient(to right top, var(--dark), var(--maincolor));
  text-align: center;
  padding: 0 120px;

  @media screen and (max-width: 820px) {
    padding: 0 0;
  }
`;
const InfoWrapper = styled.div``;
const InfoTitle = styled.h2`
  color: white;
  font-size: 40px;
  padding: 3rem 0;
  text-align: center;
  @media screen and (max-width: 820px) {
    padding: 1rem 0;
  }
`;
const InfoSubtitle = styled.h3`
  color: white;
`;
const ContactContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem 0;

  @media screen and (max-width: 820px) {
    flex-direction: column;
    align-items: center;
  }
`;
const ContactWrapper = styled.div`
  padding: 30px;
  height: 200px;
  display: flex;
  flex-direction: column;
  /* align-it ems: flex-start; */
  justify-content: space-between;
  color: white;
  @media screen and (max-width: 820px) {
    align-items: center;
  }
`;
const ContactTitle = styled.h3`
  font-weight: 400;
`;
const ContactSubtitle = styled.p`
  font-weight: 200;
`;
const ContactText = styled.p`
  font-weight: 400;
`;
const Form = styled.form`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: start;

  @media screen and (max-width: 820px) {
    flex-direction: column;
    width: 80%;
  }
`;
const FormLabel = styled.label`
  color: #fff;
  padding: 5px 0 0 0;
`;
const FormInput = styled.input`
  width: 100%;
  padding: 10px 20px;
  border-radius: 2px;
  margin-right: 10px;
  outline: none;
  border: none;
  font-size: 16px;
  border: 1px solid #fff;

  &::placeholder {
    color: #242424;
  }

  @media screen and (max-width: 820px) {
    width: 100%;
    margin: 0 0 16px 0;
  }
`;
const FormTextarea = styled.textarea`
  width: 100%;
  height: 200px;
  padding: 10px 20px;
  border-radius: 2px;
  margin-right: 10px;
  outline: none;
  border: none;
  font-size: 16px;
  border: 1px solid #fff;
  margin: 0 0 5px 0;

  &::placeholder {
    color: #242424;
  }

  @media screen and (max-width: 820px) {
    width: 100%;
    margin: 0 0 16px 0;
  }
`;
const FormSubmitButton = styled(Button)`
  ${Button}
`;
const SocialMedia = styled.div``;
const SocialMediaWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  max-width: 1000px;
  margin: 40px auto 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;
const Logo = styled(Link)`
  color: #fff;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;
const SocialIcon = styled(FaMagento)`
  margin-right: 10px;
`;
const Copyright = styled.div`
  color: #fff;
  margin-bottom: 16px;
`;
const SocialWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`;
const Social = styled.a`
  color: #fff;
  font-size: 24px;
`;
function Footer() {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <>
      <FooterSection id="contact">
        <InfoWrapper>
          <InfoTitle>Kontakt</InfoTitle>
          <InfoSubtitle>Porozmawiajmy o Twoim projekcie</InfoSubtitle>
        </InfoWrapper>
        <ContactContainer>
          <ContactWrapper>
            <ContactTitle>
              Skontaktuj się ze mną w dowolnej chwili za pomocą formularza
            </ContactTitle>
            <ContactSubtitle>
              Lub napisz do mnie bezpośrednio na mój e-mail:
            </ContactSubtitle>
            <ContactText>mateuszmikla@wp.pl</ContactText>
          </ContactWrapper>

          <Form action="https://formspree.io/f/mrgrqpqa" method="POST">
            <FormLabel for="name">IMIE</FormLabel>
            <FormInput
              name="name"
              id="name"
              type="text"
              placeholder="imię"
              required="required"
            />
            <FormLabel for="email">EMAIL</FormLabel>
            <FormInput
              name="email"
              id="email"
              type="email"
              placeholder="email"
              required="required"
            />
            <FormLabel for="message">WIADOMOŚĆ</FormLabel>
            <FormTextarea name="message" id="message" placeholder="wiadomość" />
            <FormSubmitButton type="submit">Wyśłij</FormSubmitButton>
          </Form>
        </ContactContainer>
        <SocialMedia>
          <SocialMediaWrapper>
            <Logo to="/" onClick={toggleHome}>
              <SocialIcon />
              Software Matt
            </Logo>
            <Copyright>Software Matt © 2021</Copyright>
            <SocialWrapper>
              <Social
                href="https://www.facebook.com/mateuszmikla"
                target="_blank"
                aria-label="Facebook"
              >
                <FaFacebook />
              </Social>
              <Social
                href="https://www.linkedin.com/in/mateusz-mik%C5%82a-2266791a3/"
                target="_blank"
                aria-label="Linkedin"
              >
                <FaLinkedin />
              </Social>
              <Social href="/" target="_blank" aria-label="Instagram">
                <FaInstagram />
              </Social>
              <Social href="/" target="_blank" aria-label="Twitter">
                <FaTwitter />
              </Social>
            </SocialWrapper>
          </SocialMediaWrapper>
        </SocialMedia>
      </FooterSection>
    </>
  );
}

export default Footer;
