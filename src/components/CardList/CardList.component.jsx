import React from "react";

import "./CardList.styles.css";

const CardList = ({ monsters }) => {
  return (
    <div className="card-list">
      <div>
        {monsters.map((monster) => {
          return <h1 key={monster.id}>{monster.name}</h1>;
        })}
      </div>
    </div>
  );
};

export default CardList;
