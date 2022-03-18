import React, { useEffect, useState } from "react";

import Searchbox from "./components/Searchbox/Searchbox.component";
import CardList from "./components/CardList/CardList.component";

import "./App.styles.css";

const App = () => {
  const [monsters, setMonsters] = useState([]);
  const [searchMonster, setSearchMonster] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((monsterList) => {
        setMonsters(monsterList);
      });
  }, []);

  const handleChange = (event) => {
    setSearchMonster(event.target.value.toLowerCase());
  };

  const filteredSearch = monsters.filter((monster) => {
    return monster.name.toLowerCase().includes(searchMonster);
  });

  return (
    <div>
      <Searchbox
        className={"search-box"}
        placeholder={"search monster"}
        handleChange={handleChange}
      />
      <CardList monsters={filteredSearch} />
    </div>
  );
};

export default App;
