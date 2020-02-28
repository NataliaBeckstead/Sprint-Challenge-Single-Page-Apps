import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

const CharHodor = styled.div `
  display: flex;
  align-items: center;
  margin: 3%;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
`;

const Avatar = styled.img `
margin: 3rem;  
margin-right: 5rem;
`;

export default function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    axios
      .get(`https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/`)
      .then(response => {
        console.log("characters", response.data.results);
        const charactersList = response.data.results.filter(char =>
          char.name.toLowerCase().includes(query.toLowerCase())
        );
        setCharacters(charactersList);
      })
      .catch(error => {
        console.log("the data was not return", error);
      });
  }, [query]);
  
  const handleInputChange = event => {
    setQuery(event.target.value);
  };

  return (
    <section className="character-list">
      <form className="search">
        <input
          type="text"
          onChange={handleInputChange}
          value={query}
          name="name"
          tabIndex="0"
          className="prompt search-name"
          placeholder="search by name"
          autoComplete="off"
        />
      </form>
      <div>
        {characters.map(item => (
          <CharHodor key={item.id} >
            <Avatar
              className="item-list-image"
              src={item.image}
              alt={item.name}
            />
            <div>
              <h3>{item.name}</h3>
              <p>Status: {item.status}</p>
              <p>Species: {item.species}</p>
              <p>Gender: {item.gender}</p>
              <p>Origin: {item.origin.name}</p>
              <p>Location: {item.location.name}</p>
            </div>
          </CharHodor>
      ))}
    </div>
    </section>
  );
}
