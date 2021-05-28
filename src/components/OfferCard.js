import React, { useEffect } from "react";
import styled from "styled-components";
import Aos from "aos";
import "aos/dist/aos.css";

const Card = styled.div`
  max-width: 500px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  padding: 50px 0;
`;
const CardImg = styled.img`
  display: flex;
  height: 50%;
`;
const CardTitle = styled.h2`
  padding: 1.2rem 0;
`;
const CardText = styled.p`
  line-height: 1.2;
  font-weight: 200;
`;

function OfferCard({ src, title, text }) {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <Card data-aos="flip-left">
      <CardImg src={src}></CardImg>
      <CardTitle>{title}</CardTitle>
      <CardText>{text}</CardText>
    </Card>
  );
}

export default OfferCard;
