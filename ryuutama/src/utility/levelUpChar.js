export function levelUpChar(num) {
    if (num < 100) return 1
    else if (num >= 100  && num < 600) return 2
    else if (num >= 600  && num < 1200) return 3
    else if (num >= 1200 && num < 2000) return 4
    else if (num >= 2000 && num < 3000) return 5
    else if (num >= 3000 && num < 4200) return 6
    else if (num >= 4200 && num < 5800) return 7
    else if (num >= 5800 && num < 7500) return 8
    else if (num >= 7500 && num < 10000) return 9
    else if (num >= 10000) return 10
  }
  