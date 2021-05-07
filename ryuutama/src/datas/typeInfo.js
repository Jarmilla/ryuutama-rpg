import typeAttack from "../img/type attack.png";
import typeTechnical from "../img/type technical.png";
import typeMagic from "../img/type magic.png";

const typeInfo = {
  Attack: {
    description: "This type specializes in combat and using weapons.",
    img: typeAttack,
    extras: ["Toughness: Maximum HP is increased by 4.", "Power: +1 bonus to all damage rolls.", "Focus: Gain proficiency in an additional weapon category."],
  },
  Technical: {
    description: "This type can quickly assess a situation and find clever ways to solve problems.",
    img: typeTechnical,
    extras: [
      "Accurate: When using Concentration, you get a +2 bonus instead of a +1 bonus.",
      "Quick: +1 to Initiative Checks.",
      "Pocket: +3 Carrying Capacity.",
    ],
  },
  Magic: {
    description: "This type enables the use of various types of magic.",
    img: typeMagic,
    extras: [
      "Will: Maximum MP increased by 4.",
      "Spellbook: Each level, you learn 2 spells from the Incantation Magic list.",
      "Seasonal Sorcery: Pick one of the four seasons, and gain a set of special magic related to it.",
    ],
  },
};

export default typeInfo;
