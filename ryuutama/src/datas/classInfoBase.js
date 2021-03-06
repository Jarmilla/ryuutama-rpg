const classInfo = {
  minstrel: {
    skills: [
      {
        name: "Well-traveled",
        effect: "+1 Travel/Direction/Camping Checks; always in effect",
        usableCircumstances: "",
        statsUsed: "",
        targetNumber: "",
      },
      {
        name: "Knowledge of tradition",
        effect: "You can get more information about the things you see and hear.",
        usableCircumstances: "Anytime you come across something interesting",
        statsUsed: "[INT + INT]",
        targetNumber: "GM’s discretion",
      },
      {
        name: "Music",
        effect:
          "Give all party members a +1 bonus to their next roll. Critical: +3 bonus Fumble: Any PCs with Condition of 6 or less gain the [Muddled: 6] status effect. ",
        usableCircumstances: "Usable when in a suitable area. Each use reduces the Minstrel’s HP by 1",
        statsUsed: "[DEX + SPI]",
        targetNumber: "Topography",
        extra: "Once per scenario you may choose one terrain or weather type you are currently traveling through and gain it as a song.",
      },
    ],
  },
  merchant: {
    skills: [
      {
        name: "Well-spoken",
        effect: "Negotiation Check [INT + SPI] gets +1, always in effect",
        usableCircumstances: "Any Negotiation Check",
        statsUsed: "[INT + SPI]",
        targetNumber: "",
      },
      {
        name: "Animal Owner",
        effect: "You can keep 2 more animals for a total of 3 without paying for their food and water.",
        usableCircumstances: "",
        statsUsed: "",
        targetNumber: "",
      },
      {
        name: "Trader",
        effect: "You may buy items at a reduced price or sell items at an increased value.",
        usableCircumstances: "When selling/buying 4 or more of the same item",
        statsUsed: "[INT + SPI]",
        targetNumber: "See table",
        extra: "Check Result => When purchasing reduce; when selling increase the price.  6-7 => 10%; 8-9 => 20%; 10-13 => 40%; 14-17 => 60%; 18+ => 80%",
      },
    ],
  },
  hunter: {
    skills: [
      {
        name: "Animal Tracking",
        effect: "Find a monster’s location. +1 bonus to damage against any monsters found.",
        usableCircumstances: "When finding an animal’s tracks (animal, phantom beast, demonstone, or phantom plant)",
        statsUsed: "[STR + INT]",
        targetNumber: "Topography",
      },
      {
        name: "Trapping",
        effect: "Harvest materials from a defeated Monster. Look up in the Monster’s entry in the Dragonica.",
        usableCircumstances: "After defeating a monster",
        statsUsed: "[DEX + INT]",
        targetNumber: "Monster level x2",
      },
      {
        name: "Hunting",
        effect:
          "Receive a number of rations equal to [Check result – target number], but cannot participate in the camp check. Critical: All food is Delicious. Fumble: Afflicted by [Injury: 6] status effect",
        usableCircumstances: "Before camp check, once per day",
        statsUsed: "[DEX + INT]",
        targetNumber: "Topography",
      },
    ],
  },
  healer: {
    skills: [
      {
        name: "Healing",
        effect: "Target character recovers HP equal to the result of [INT + SPI]. During combat, only roll with [INT] (only 1 die.)",
        usableCircumstances: "Spend 1 Healing Herb",
        statsUsed: "[INT + SPI]",
        targetNumber: "",
      },
      {
        name: "First Aid",
        effect:
          "Relieve a character’s status effect for 1 hour. Then, reduce that status effect’s strength permanently by a number equal to the Healer’s level.",
        usableCircumstances: "A character with a status effect who has not yet received First aid today",
        statsUsed: "[INT + SPI]",
        targetNumber: "Status effect’s strength",
      },
      {
        name: "Herb Gathering",
        effect: "Find a single Healing Herb. Critical: Find 3 Healing Herbs. Fumble: Afflicted with [Poison: 6]",
        usableCircumstances: "Once each morning, before the Travel check",
        statsUsed: "[STR + INT]",
        targetNumber: "Topography",
        extra:
          "Healing Herb obtained depends on the current terrain. Look up in the Healing Herb list in the Item Section. Healing Herbs are only good for one day, unless you use a disposable herb bottle to keep it fresh for up to a week.",
      },
    ],
  },
  farmer: {
    skills: [
      {
        name: "Robust",
        effect: "+1 bonus to Condition Checks. +3 bonus to Carrying Capacity",
        usableCircumstances: "",
        statsUsed: "",
        targetNumber: "",
      },
      {
        name: "Animal Owner",
        effect: "You can keep 2 more animals for a total of 3 without paying for their food and water.",
        usableCircumstances: "",
        statsUsed: "",
        targetNumber: "",
      },
      {
        name: "Side-Job",
        effect: "Use a single skill from another class with a -1 penalty",
        usableCircumstances: "Depends on the skill",
        statsUsed: "Depends on the skill",
        targetNumber: "Depends on the skill",
      },
    ],
  },
  artisan: {
    skills: [
      {
        name: "Trapping",
        effect: "Harvest materials from a defeated Monster. Look up in the Monster’s entry in the Dragonica.",
        usableCircumstances: "After defeating a monster",
        statsUsed: "[DEX + INT]",
        targetNumber: "Monster level x2",
      },
      {
        name: "Crafting",
        effect:
          "Make an item from your specialization: Weapons, Armor, Shoes, Capes, Staves, Hats, Accessories, Food, Sundries, Camping Equipment, or Containers",
        usableCircumstances: "Anytime you have the time (1 day per size) and materials (1/2 the gold cost)",
        statsUsed: "[STR + DEX]",
        targetNumber: "See table",
        table: ["Item Price  Targer number", "100g or less  6", "1000g or less  8", "10,000g or less  10", "100,000g or less  14", "More  18"],
        extra: "If you fail this check, you may try again; the materials won’t be lost, but the time will.",
      },
      {
        name: "Repair",
        effect: "Repair an item and return its durability to its original value",
        usableCircumstances: "Anytime you have the time (1 day per size) and materials (10% the gold cost)",
        statsUsed: "[STR + DEX]",
        targetNumber: "See table",
        table: ["Item Price  Targer number", "100g or less  6", "1000g or less  8", "10,000g or less  10", "100,000g or less  14", "More  18"],
        extra: "This costs 10% of the item’s value, regardless of success or failure. You may retry a failed skill check, but you must pay the cost again.",
      },
    ],
  },
  noble: {
    skills: [
      {
        name: "Etiquette",
        effect: "Leave a positive impression on someone of high rank or status.",
        usableCircumstances: "Conversing with someone of rank or status",
        statsUsed: "[DEX + INT]",
        targetNumber: "Contested",
      },
      {
        name: "Refined Education",
        effect: "Know detailed information about the things you see or hear.",
        usableCircumstances: "Seeing or hearing something.",
        statsUsed: "[INT + INT]",
        targetNumber: "GM’s discretion",
      },
      {
        name: "Weapon Grace",
        effect:
          "Choose Blade/Polearm/Bow; it becomes an additional Mastered Weapon. If chosen category is already a Mastered Weapon, gain +1 bonus to Accuracy checks.",
        usableCircumstances: "",
        statsUsed: "",
        targetNumber: "",
      },
    ],
  },
};

export default classInfo;
