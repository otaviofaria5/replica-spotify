import React from "react";
import ItemList from "./ItemList";
import { artistArray } from "../assets/database/artists";
import { songsArray } from "../assets/database/songs";

const Main = () => {
  return (
    <div className="main">
      <ItemList
        title="Artistas"
        items={5}
        itemsArry={artistArray}
        path="/artists"
        idPath="/artist"
      />

      <ItemList
        title="Músicas"
        items={10}
        itemsArry={songsArray}
        path="/songs"
        idPath="/song"
      />
    </div>
  );
};

export default Main;
