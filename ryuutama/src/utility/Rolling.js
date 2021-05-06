export function rolling(dice1, dice2) {
  let rolling1 = roll(parseInt(dice1));
  let rolling2 = roll(parseInt(dice2));
  console.log(dice1, dice2, rolling1, rolling2);
  return rolling1 + rolling2;
}

function roll(sides) {
  return sides === 0 ? 0 : Math.floor(Math.random() * sides + 1);
}
