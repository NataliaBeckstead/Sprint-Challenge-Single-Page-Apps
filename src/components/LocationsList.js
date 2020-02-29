import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Earth from "../images/earth.png";
import Cable from "../images/cable.jpg";
import Anatomy from "../images/anatomy.jpg";
import Citadel from "../images/citadel.jpg";
import Worldender from "../images/worldender.png";
import Monster from "../images/monster.jpg";


const LocationHodor = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 3rem 30%;
    margin: 3%;
    box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
`;

// const Avatar = styled.img `
// margin: 3rem;  
// margin-right: 5rem;
// `;

export default function LocationList() {

    const data = [
        {
            id: 1,
            name: "Earth",
            picture: Earth
        },
        {
            id: 2,
            name: "Interdimensional Cable",
            picture: Cable
        },
        {
            id: 3,
            name: "Anatomy Park",
            picture: Anatomy
        },
        {
            id: 4,
            name: "Citadel of Ricks",
            picture: Citadel
        },
        {
            id: 5,
            name: "Worldender's lair",
            picture: Worldender
        },
        {
            id: 6,
            name: "Testicle Monster Dimension",
            picture: Monster
        }
    ];

  const [locations, setLocations] = useState([]);
  const [query1, setQuery1] = useState("");

  useEffect(() => {
    
        const LocationList = data.filter(loc =>
          loc.name.toLowerCase().includes(query1.toLowerCase())
        );
        setLocations(LocationList);
      
  }, [query1]);

  const handleInputChange1 = event => {
    setQuery1(event.target.value);
  };

  return (
    <section className="character-list">
      <form className="search">
        <label htmlFor="search">Find location:
        <input
          id="search"
          type="text"
          onChange={handleInputChange1}
          value={query1}
          name="name"
          tabIndex="0"
          className="prompt search-name"
          placeholder="search by name"
          autoComplete="off"
        />
        </label>
      </form>
      <div>
        {locations.map(item => (
          <LocationHodor key={item.id} >
            <div>
              <h3>{item.name}</h3>
            </div>
            <img
              className="item-list-image"
              src={item.picture}
              alt={item.name}
            />
          </LocationHodor>
      ))}
    </div>
    </section>
  );
}
