import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

// const CharHodor = styled.div `
//   display: flex;
//   align-items: center;
//   margin: 3%;
//   box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
// `;

// const Avatar = styled.img `
// margin: 3rem;  
// margin-right: 5rem;
// `;

export default function LocationList() {
  const [locations, setLocations] = useState([]);
  //const [query, setQuery] = useState("");

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/location/`)
      .then(response => {
        console.log(response);
        // const charactersList = response.data.results.filter(char =>
        //   char.name.toLowerCase().includes(query.toLowerCase())
        // );
        setLocations(response);
      })
      .catch(error => {
        console.log("the data was not return", error);
      });
  }, []);

//   const handleInputChange = event => {
//     setQuery(event.target.value);
//   };

  return (
    <section className="character-list">
      {/* <form className="search">
        <label htmlFor="search">Find character:
        <input
          id="search"
          type="text"
          onChange={handleInputChange}
          value={query}
          name="name"
          tabIndex="0"
          className="prompt search-name"
          placeholder="search by name"
          autoComplete="off"
        />
        </label>
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
    </div> */}
    </section>
  );
}
