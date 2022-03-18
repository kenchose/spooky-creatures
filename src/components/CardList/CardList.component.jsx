import React from "react";

import "./CardList.styles.css";

import Card from "../Card/Card.component";

const CardList = ({ monsters }) => {
  return (
    <div className="card-list">
      {monsters.map((monster) => {
        return <Card key={monster.id} {...monster} />;
      })}
    </div>
  );
};

export default CardList;
