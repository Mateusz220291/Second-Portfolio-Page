import React, { useEffect } from "react";
import styled from "styled-components";
import OfferCard from "./OfferCard";
import Aos from "aos";
import "aos/dist/aos.css";
import Img1 from "../images/Design.svg";
import Img2 from "../images/Responsive.svg";
import Img3 from "../images/Functionality.svg";
import Img4 from "../images/SEO.svg";

const OfferSection = styled.section`
  display: flex;
  background: var(--maincolor);
  background: linear-gradient(to right top, var(--dark), var(--maincolor));
  text-align: center;
  padding: 0 3rem 100px 3rem;
`;
const OfferContainer = styled.div`
  display: flex;
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
const OfferWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`;

function Offer() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <OfferSection id="offer">
      <OfferContainer>
        <OfferTitle data-aos="fade-up">Co oferuje?</OfferTitle>
        <OfferText data-aos="fade-up">
          Nieustanne zmiany w strefie technologii informatycznych wymagają
          ciągłego rozwoju i szybkiej adaptacji do zmieniającego się środowiska.
          Znając najnowsze standardy projektuje nowoczesne strony dostępne na
          każdym urządzeniu.
        </OfferText>
        <OfferWrapper>
          <OfferCard
            src={Img1}
            title="Design"
            text="Nowoczesne strony z zastosowaniem ciekawych animacji i oryginalnych efektów."
          />
          <OfferCard
            src={Img2}
            title="Responsywność"
            text="Dopasowane projekty pod względem wyświetlania na ekranach różnych rozdzielczości zgodnie z techniką RWD."
          />
          <OfferCard
            src={Img3}
            title="Funkcjonalność"
            text="Przyjazny układ strony pozytywnie wpływa na interakcję z użytkownikiem - zachęca do korzystania z witryny."
          />
          <OfferCard
            src={Img4}
            title="Optymalizacja"
            text="Projektowane przeze mnie strony dają gwarancję skutecznego pozycjonowania w  najpopularniejszych wyszukiwarkach."
          />
        </OfferWrapper>
      </OfferContainer>
    </OfferSection>
  );
}

export default Offer;
