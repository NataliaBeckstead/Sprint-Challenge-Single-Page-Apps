import React from "react";
import styled from "styled-components";

const Title = styled.h2 `
  font-family: 'Lacquer', Arial, Helvetica, sans-serif;
  font-size: 2rem;
  color: green;
  text-shadow: 0 3px 4px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
`;

export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <header>
        <Title>Welcome to the ultimate fan site!</Title>
        <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
      </header>
    </section>
  );
}
