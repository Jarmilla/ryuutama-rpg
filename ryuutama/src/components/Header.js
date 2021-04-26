import React from "react";
import title from "../img/title.png";
import artisan from "../img/artisan.png";
import farmer from "../img/farmer.png";
import healer from "../img/healer.png";
import hunter from "../img/hunter.png";
import merchant from "../img/merchant.png";
import minstrel from "../img/minstrel.png";
import noble from "../img/noble.png";

function Header({ class1 }) {
  const imageChooser = {
    Artisan: artisan,
    Farmer: farmer,
    Healer: healer,
    Hunter: hunter,
    Merchant: merchant,
    Minstrel: minstrel,
    Noble: noble,
  };

  return (
    <header className="character-rows">
      <div>
        <img src={title} alt="Ryuutama" />
        <h3>Charcter Sheet</h3>
        <span>Ryubito</span>
        <input type="text" />
        <span>Created</span>
        <input type="date" />
      </div>
      <div>
        {" "}
        <img src={imageChooser[class1]} alt={class1} />
      </div>
    </header>
  );
}

export default Header;
