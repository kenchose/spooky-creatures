import React, { useEffect, useState } from "react";

import Searchbox from "./components/Searchbox/Searchbox.component";
import CardList from "./components/CardList/CardList.component";

import "./App.styles.css";

const App = () => {
  const [monsters, setMonsters] = useState([]);
  const [searchMonster, setSearchMonster] = useState("");
  const [filterdMonsters, setFilterdMonsters] = useState(monsters);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((monsterList) => {
        setMonsters(monsterList);
      });
  }, []);

  useEffect(() => {
    const newFilteredSearch = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchMonster);
    });
    setFilterdMonsters(newFilteredSearch);
  }, [monsters, searchMonster]);

  const handleChange = (event) => {
    setSearchMonster(event.target.value.toLowerCase());
  };

  return (
    <div>
      <h1 className="app-title">Monsters Rolodex</h1>
      <Searchbox
        className={"search-box"}
        placeholder={"search monster"}
        handleChange={handleChange}
      />
      <CardList monsters={filterdMonsters} />
    </div>
  );
};

export default App;
