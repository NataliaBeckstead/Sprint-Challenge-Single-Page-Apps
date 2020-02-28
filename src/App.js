import React from "react";
import {Route} from "react-router-dom";
import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage";
import Navbar from "./components/Navbar";
import CharacterList from "./components/CharacterList";
import LocationsList from "./components/LocationsList";
import CharacterCard from "./components/CharacterCard";


export default function App() {
  return (
    <main>
      <Header />
      <Navbar />

      <Route exact path="/">
          <WelcomePage />
      </Route>

      <Route path="/characters">
          <CharacterList />
      </Route>

      <Route path="/characters/:characterID">
          <CharacterCard />
        </Route>

      <Route path="/locations">
          <LocationsList />
      </Route>

    </main>
  );
}
