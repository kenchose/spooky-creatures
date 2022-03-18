import React, { useEffect, useState } from "react";

import Searchbox from "./components/Searchbox/Searchbox.component";
import CardList from "./components/CardList/CardList.component";

import "./App.styles.css";

const App = () => {
  const [monsters, setMonsters] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((monsterList) => {
        setMonsters(monsterList);
      });
  }, []);

  return (
    <div>
      <Searchbox className={"serach-box"} placeholder={"search monster"} />
      <CardList monsters={monsters} />
    </div>
  );
};

export default App;
