import React from "react";
import passTargetValueTo from "../utility/passTargetValueTo";

import title from "../img/title.png";
import artisan from "../img/artisan.png";
import farmer from "../img/farmer.png";
import healer from "../img/healer.png";
import hunter from "../img/hunter.png";
import merchant from "../img/merchant.png";
import minstrel from "../img/minstrel.png";
import noble from "../img/noble.png";

function Header({ setRyubito, setCreationDate, class1 }) {
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
      <div className="image-container">
        <img src={title} alt="Ryuutama" />
        <h3>Charcter Sheet</h3>
        <span>Ryubito</span>
        <input type="text" required onChange={passTargetValueTo(setRyubito)} />
        <span>Created</span>
        <input type="date" required onChange={passTargetValueTo(setCreationDate)} />
      </div>
      <div className="image-container">
        {" "}
        <img src={imageChooser[class1]} alt={class1} />
      </div>
    </header>
  );
}

export default Header;
