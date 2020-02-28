import React from "react";
import styled from "styled-components";
import Season1 from "../images/season1.jpg";
import Season2 from "../images/season2.jpg";
import Season3 from "../images/season3.jpg";
import Season4 from "../images/season4.jpg";

const Title = styled.h2 `
  font-family: 'Lacquer', Arial, Helvetica, sans-serif;
  font-size: 3rem;
  color: green;
  margin-bottom: 5rem;
  text-shadow: 0 7px 7px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
`;
const Page = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const ImageHodor = styled.div `
  display: flex;
  justify-content: space-around;
`;
const Poster = styled.img `
  max-width: 20%;
  height: auto;
`;

export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <Page>
        <Title>Welcome to the ultimate fan site!</Title>
        <ImageHodor>
          <Poster src={Season1} alt="season 1 poster" />
          <Poster src={Season2} alt="season 2 poster" />
          <Poster src={Season3} alt="season 3 poster" />
          <Poster src={Season4} alt="season 4 poster" />
        </ImageHodor>
        
      </Page>
    </section>
  );
}
