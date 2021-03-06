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

function Header({ isSaved, ryubito, setRyubito, creationDate, setCreationDate, class1 }) {
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
    <div>
      <header>
        <div>
          <img src={title} alt="Ryuutama" />
          <h1>Charcter Sheet</h1>
        </div>

        <div>
          <img src={imageChooser[class1]} alt={class1} />
        </div>
      </header>

      <div className="character-rows">
        <div className="input-area">
          <h2>Ryubito</h2>
          {isSaved ? <p>{ryubito}</p> : <input type="text" value={ryubito} required onChange={passTargetValueTo(setRyubito)} />}
        </div>

        <div className="input-area">
          <h2>Created</h2>
          {isSaved ? <p>{creationDate}</p> : <input type="date" value={creationDate} required onChange={passTargetValueTo(setCreationDate)} />}
        </div>
      </div>
    </div>
  );
}

export default Header;
