// develop
// export const strapiURL = 'https://strapi-test-rockstar.herokuapp.com';
// export const googleAnalyticsTrackId = 'UA-203061377-1';

// production
export const strapiURL = 'https://lascenter-sport.herokuapp.com';
export const googleAnalyticsTrackId = 'UA-203153942-1';

export const sportHeader1 = [
  'Time', '#', 'Team', 'M.L', 'Total', '(O/U)$', 'RL', 'Y-N', 'SRL', 'Solo'
]

export const sportHeader1Extended = [
  'Time', '#', 'Team', 'H-1 M.L', 'Runs', '(O/U)$', 'H-1 RL', 'S.O.', 'ALT RL', 'RHE'
]

export const sportHeader1FirstThird = [
  'Time', '#', 'Team', 'T-1 M.L.', 'T-1 R.L', 'T1 Runs', 'T1 (O/U)$'
]

export const sportHeader2 = [
  'Time', '#', 'Team', 'M.L'
]

export const sportHeader3 = [
  'Time', '#', 'Team', 'M.L', 'Spread', 'Solo', 'H1', 'H-Solo'
]

export const sportHeader3Periods = [
  'Time', '#', 'Team', 'Q1', 'Q1-S', 'Q2', 'Q2-S', 'Q3', 'Q3-S', 'Q4', 'Q4-S'
]

export const sportHeader7 = [
  'Time', '#', 'Team', 'M.L', 'R.L', 'R.L$', 'Total', '(O/U)$', 'Tie'
]

export const sportHeader9 = [
  'Time', '#', 'Team', 'M.L'
]

export const sportHeader10 = [
  'Time', '#', 'Team', 'Category', 'Total', '(O/U)$'
]

export const filterSport1 = (item) => {
  const filterMatchUps = {
    time: item.time,
    fourDigitCode: {
      awayTeam: item.information.awayTeam.fourDigitCode,
      homeTeam: item.information.home_team.fourDigitCode,
    },
    team: {
      awayTeam: {
        img: item.information.awayTeam.image.url,
        name: item.information.awayTeam.name,
      },
      homeTeam: {
        img: item.information.home_team.image.url,
        name: item.information.home_team.name,
      },
    },
    moneyLine: {
      awayTeam: item.lines.fullGame.awayTeam.moneyLine>0?`+${item.lines.fullGame.awayTeam.moneyLine}`:item.lines.fullGame.awayTeam.moneyLine,
      homeTeam: item.lines.fullGame.homeTeam.moneyLine>0?`+${item.lines.fullGame.homeTeam.moneyLine}`:item.lines.fullGame.homeTeam.moneyLine,
    },
    spread: item.lines.fullGame.spread,
    overUnder: {
      over: item.lines.fullGame.over>0?`+${item.lines.fullGame.over}`:item.lines.fullGame.over,
      under: item.lines.fullGame.under>0?`+${item.lines.fullGame.under}`:item.lines.fullGame.under,
    },
    rl: {
      awayTeam: {
        runLineSpread: item.lines.fullGame.awayTeam.runLineSpread>0?`+${item.lines.fullGame.awayTeam.runLineSpread}`:item.lines.fullGame.awayTeam.runLineSpread,
        runLineMoneyLine: item.lines.fullGame.awayTeam.runLineMoneyLine>0?`+${item.lines.fullGame.awayTeam.runLineMoneyLine}`:item.lines.fullGame.awayTeam.runLineMoneyLine,
      },
      homeTeam: {
        runLineSpread: item.lines.fullGame.homeTeam.runLineSpread>0?`+${item.lines.fullGame.homeTeam.runLineSpread}`:item.lines.fullGame.homeTeam.runLineSpread,
        runLineMoneyLine: item.lines.fullGame.homeTeam.runLineMoneyLine>0?`+${item.lines.fullGame.homeTeam.runLineMoneyLine}`:item.lines.fullGame.homeTeam.runLineMoneyLine,
      }
    },
    yn: {
      scoreOnFirstInning: item.lines.otherLines.scoreOnFirstInning>0?`+${item.lines.otherLines.scoreOnFirstInning}`:item.lines.otherLines.scoreOnFirstInning,
      noScoreOnFirstInning: item.lines.otherLines.noScoreOnFirstInning>0?`+${item.lines.otherLines.noScoreOnFirstInning}`:item.lines.otherLines.noScoreOnFirstInning,
    },
    srl: {
      awayTeam: {
        superRunLineSpread: item.lines.fullGame.awayTeam.superRunLineSpread>0?`+${item.lines.fullGame.awayTeam.superRunLineSpread}`:item.lines.fullGame.awayTeam.superRunLineSpread,
        superRunLineMoneyLine: item.lines.fullGame.awayTeam.superRunLineMoneyLine>0?`+${item.lines.fullGame.awayTeam.superRunLineMoneyLine}`:item.lines.fullGame.awayTeam.superRunLineMoneyLine
      },
      homeTeam: {
        superRunLineSpread: item.lines.fullGame.homeTeam.superRunLineSpread>0?`+${item.lines.fullGame.homeTeam.superRunLineSpread}`:item.lines.fullGame.homeTeam.superRunLineSpread,
        superRunLineMoneyLine: item.lines.fullGame.homeTeam.superRunLineMoneyLine>0?`+${item.lines.fullGame.homeTeam.superRunLineMoneyLine}`:item.lines.fullGame.homeTeam.superRunLineMoneyLine
      }      
    },
    solo: {
      awayTeam: item.lines.fullGame.awayTeam.spread,
      homeTeam: item.lines.fullGame.homeTeam.spread,
    }
  }
  return filterMatchUps;
} 

export const filterSport1Extended = (item) => {
  const filterMatchUps = {
    time: item.time,
    fourDigitCode: {
      awayTeam: item.information.awayTeam.fourDigitCode,
      homeTeam: item.information.home_team.fourDigitCode,
    },
    team: {
      awayTeam: {
        alphabeticCode: item.information.awayTeam.alphabeticCode,
        pitcherName: item.lines.otherLines.awayTeam.pitcherName,
      },
      homeTeam: {
        alphabeticCode: item.information.home_team.alphabeticCode,
        pitcherName: item.lines.otherLines.homeTeam.pitcherName,
      },
    },
    firstHalfMoneyLine: {
      awayTeam: item.lines.firstHalf.awayTeam.moneyLine>0?`+${item.lines.firstHalf.awayTeam.moneyLine}`:item.lines.firstHalf.awayTeam.moneyLine,
      homeTeam: item.lines.firstHalf.homeTeam.moneyLine>0?`+${item.lines.firstHalf.homeTeam.moneyLine}`:item.lines.firstHalf.homeTeam.moneyLine,
    },
    firstHalfSpread: item.lines.firstHalf.spread,
    firstHalfOverUnder: {
      over: item.lines.firstHalf.over>0?`+${item.lines.firstHalf.over}`:item.lines.firstHalf.over,
      under: item.lines.firstHalf.under>0?`+${item.lines.firstHalf.under}`:item.lines.firstHalf.under,
    },
    firstHalfRL: {
      awayTeam: {
        runLineSpread: item.lines.firstHalf.awayTeam.runLineSpread>0?`+${item.lines.firstHalf.awayTeam.runLineSpread}`:item.lines.firstHalf.awayTeam.runLineSpread,
        runLineMoneyLine: item.lines.firstHalf.awayTeam.runLineMoneyLine>0?`+${item.lines.firstHalf.awayTeam.runLineMoneyLine}`:item.lines.firstHalf.awayTeam.runLineMoneyLine,
      },
      homeTeam: {
        runLineSpread: item.lines.firstHalf.homeTeam.runLineSpread>0?`+${item.lines.firstHalf.homeTeam.runLineSpread}`:item.lines.firstHalf.homeTeam.runLineSpread,
        runLineMoneyLine: item.lines.firstHalf.homeTeam.runLineMoneyLine>0?`+${item.lines.firstHalf.homeTeam.runLineMoneyLine}`:item.lines.firstHalf.homeTeam.runLineMoneyLine,
      }
    },
    so: '', // ???
    altRL: {
      awayTeam: {
        alternativeRunLineSpread: item.lines.otherLines.awayTeam.alternativeRunLineSpread>0?`+${item.lines.otherLines.awayTeam.alternativeRunLineSpread}`:item.lines.otherLines.awayTeam.alternativeRunLineSpread,
        alternativeRunLineMoneyLine: item.lines.otherLines.awayTeam.alternativeRunLineMoneyLine>0?`+${item.lines.otherLines.awayTeam.alternativeRunLineMoneyLine}`:item.lines.otherLines.awayTeam.alternativeRunLineMoneyLine
      },
      homeTeam: {
        alternativeRunLineSpread: item.lines.otherLines.homeTeam.alternativeRunLineSpread>0?`+${item.lines.otherLines.homeTeam.alternativeRunLineSpread}`:item.lines.otherLines.homeTeam.alternativeRunLineSpread,
        alternativeRunLineMoneyLine: item.lines.otherLines.homeTeam.alternativeRunLineMoneyLine>0?`+${item.lines.otherLines.homeTeam.alternativeRunLineMoneyLine}`:item.lines.otherLines.homeTeam.alternativeRunLineMoneyLine
      }      
    },
    rhe: item.lines.otherLines.rheSpread
  }
  return filterMatchUps;
} 

export const filterSport1FirstThird = (item) => {
  const filterMatchUps = {
    time: item.time,
    fourDigitCode: {
      awayTeam: item.information.awayTeam.fourDigitCode,
      homeTeam: item.information.home_team.fourDigitCode,
    },
    team: {
      awayTeam: {
        alphabeticCode: item.information.awayTeam.alphabeticCode,
        pitcherName: item.lines.otherLines.awayTeam.pitcherName,
      },
      homeTeam: {
        alphabeticCode: item.information.home_team.alphabeticCode,
        pitcherName: item.lines.otherLines.homeTeam.pitcherName,
      },
    },
    t1MoneyLine: {
      awayTeam: item.lines.firstThird.awayTeam.moneyLine>0?`+${item.lines.firstThird.awayTeam.moneyLine}`:item.lines.firstThird.awayTeam.moneyLine,
      homeTeam: item.lines.firstThird.homeTeam.moneyLine>0?`+${item.lines.firstThird.homeTeam.moneyLine}`:item.lines.firstThird.homeTeam.moneyLine,
    },
    t1RL: {
      awayTeam: {
        runLineSpread: item.lines.firstThird.awayTeam.runLineSpread>0?`+${item.lines.firstThird.awayTeam.runLineSpread}`:item.lines.firstThird.awayTeam.runLineSpread,
        runLineMoneyLine: item.lines.firstThird.awayTeam.runLineMoneyLine>0?`+${item.lines.firstThird.awayTeam.runLineMoneyLine}`:item.lines.firstThird.awayTeam.runLineMoneyLine,
      },
      homeTeam: {
        runLineSpread: item.lines.firstThird.homeTeam.runLineSpread>0?`+${item.lines.firstThird.homeTeam.runLineSpread}`:item.lines.firstThird.homeTeam.runLineSpread,
        runLineMoneyLine: item.lines.firstThird.homeTeam.runLineMoneyLine>0?`+${item.lines.firstThird.homeTeam.runLineMoneyLine}`:item.lines.firstThird.homeTeam.runLineMoneyLine,
      }
    },
    t1Spread: item.lines.firstThird.spread,
    t1OverUnder: {
      over: item.lines.firstThird.over>0?`+${item.lines.firstThird.over}`:item.lines.firstThird.over,
      under: item.lines.firstThird.under>0?`+${item.lines.firstThird.under}`:item.lines.firstThird.under,
    },
    
  }
  return filterMatchUps;
} 

export const filterSport2 = (item) => {
  const filterMatchUps = {
    time: item.time,
    fourDigitCode: {
      awayTeam: item.information.awayTeam.fourDigitCode,
      homeTeam: item.information.home_team.fourDigitCode,
    },
    team: {
      awayTeam: {
        img: item.information.awayTeam.image.url,
        name: item.information.awayTeam.displayName,
      },
      homeTeam: {
        img: item.information.home_team.image.url,
        name: item.information.home_team.displayName,
      },
    },
    moneyLine: {
      awayTeam: item.lines.fullGame.awayTeam.moneyLine>0?`+${item.lines.fullGame.awayTeam.moneyLine}`:item.lines.fullGame.awayTeam.moneyLine,
      homeTeam: item.lines.fullGame.homeTeam.moneyLine>0?`+${item.lines.fullGame.homeTeam.moneyLine}`:item.lines.fullGame.homeTeam.moneyLine,
    }
  }
  return filterMatchUps;
} 

export const filterSport3 = (item) => {
  const filterMatchUps = {
    time: item.time,
    fourDigitCode: {
      awayTeam: item.information.awayTeam.fourDigitCode,
      homeTeam: item.information.home_team.fourDigitCode,
    },
    team: {
      awayTeam: {
        img: item.information.awayTeam.image.url,
        name: item.information.awayTeam.displayName,
      },
      homeTeam: {
        img: item.information.home_team.image.url,
        name: item.information.home_team.displayName,
      },
    },
    moneyLine: {
      awayTeam: item.lines.fullGame.awayTeam.moneyLine>0?`+${item.lines.fullGame.awayTeam.moneyLine}`:item.lines.fullGame.awayTeam.moneyLine,
      homeTeam: item.lines.fullGame.homeTeam.moneyLine>0?`+${item.lines.fullGame.homeTeam.moneyLine}`:item.lines.fullGame.homeTeam.moneyLine,
    },
    spread: {
     one: item.lines.fullGame.spread.toFixed(1),
     two: item.lines.fullGame.homeTeam.runLineSpread.toFixed(1) 
    },
    solo: {
      awayTeam: item.lines.fullGame.awayTeam.spread,
      homeTeam: item.lines.fullGame.homeTeam.spread,
    },
    h1: {
      one: item.lines.firstHalf.spread.toFixed(1),
      two: item.lines.firstHalf.homeTeam.runLineSpread.toFixed(1)
    },
    hSolo: {
      awayTeam: item.lines.firstHalf.awayTeam.spread,
      homeTeam: item.lines.firstHalf.homeTeam.spread,
    }
  }
  return filterMatchUps;
} 

export const filterSport3Periods = (item) => {
  const filterMatchUps = {
    time: item.time,
    fourDigitCode: {
      awayTeam: item.information.awayTeam.fourDigitCode,
      homeTeam: item.information.home_team.fourDigitCode,
    },
    team: {
      awayTeam: {
        img: item.information.awayTeam.image.url,
        name: item.information.awayTeam.displayName,
      },
      homeTeam: {
        img: item.information.home_team.image.url,
        name: item.information.home_team.displayName,
      },
    },
    q1: {
      awayTeam: item.lines.firstPeriod.awayTeam.runLineSpread>0?`+${item.lines.firstPeriod.awayTeam.runLineSpread}`:item.lines.firstPeriod.awayTeam.runLineSpread,
      homeTeam: item.lines.firstPeriod.homeTeam.runLineSpread>0?`+${item.lines.firstPeriod.homeTeam.runLineSpread}`:item.lines.firstPeriod.homeTeam.runLineSpread,
    },
    q1S: {
      awayTeam: item.lines.firstPeriod.awayTeam.spread.toFixed(1),
      homeTeam: item.lines.firstPeriod.homeTeam.spread.toFixed(1),
    },
    q2: {
      awayTeam: item.lines.secondPeriod.awayTeam.runLineSpread>0?`+${item.lines.secondPeriod.awayTeam.runLineSpread}`:item.lines.secondPeriod.awayTeam.runLineSpread,
      homeTeam: item.lines.secondPeriod.homeTeam.runLineSpread>0?`+${item.lines.secondPeriod.homeTeam.runLineSpread}`:item.lines.secondPeriod.homeTeam.runLineSpread,
    },
    q2S: {
      awayTeam: item.lines.secondPeriod.awayTeam.spread.toFixed(1),
      homeTeam: item.lines.secondPeriod.homeTeam.spread.toFixed(1),
    },
    q3: {
      awayTeam: item.lines.thirdPeriod.awayTeam.runLineSpread>0?`+${item.lines.thirdPeriod.awayTeam.runLineSpread}`:item.lines.thirdPeriod.awayTeam.runLineSpread,
      homeTeam: item.lines.thirdPeriod.homeTeam.runLineSpread>0?`+${item.lines.thirdPeriod.homeTeam.runLineSpread}`:item.lines.thirdPeriod.homeTeam.runLineSpread,
    },
    q3S: {
      awayTeam: item.lines.thirdPeriod.awayTeam.spread.toFixed(1),
      homeTeam: item.lines.thirdPeriod.homeTeam.spread.toFixed(1),
    },
    q4: {
      awayTeam: item.lines.fourthPeriod.awayTeam.runLineSpread>0?`+${item.lines.fourthPeriod.awayTeam.runLineSpread}`:item.lines.fourthPeriod.awayTeam.runLineSpread,
      homeTeam: item.lines.fourthPeriod.homeTeam.runLineSpread>0?`+${item.lines.fourthPeriod.homeTeam.runLineSpread}`:item.lines.fourthPeriod.homeTeam.runLineSpread,
    },
    q4S: {
      awayTeam: item.lines.fourthPeriod.awayTeam.spread.toFixed(1),
      homeTeam: item.lines.fourthPeriod.homeTeam.spread.toFixed(1),
    },
  }
  return filterMatchUps;
} 

export const filterSport7 = (item) => {
  const filterMatchUps = {
    time: item.time,
    fourDigitCode: {
      awayTeam: item.information.awayTeam.fourDigitCode,
      homeTeam: item.information.home_team.fourDigitCode,
    },
    team: {
      awayTeam: {
        img: item.information.awayTeam.image.url,
        name: item.information.awayTeam.name,
      },
      homeTeam: {
        img: item.information.home_team.image.url,
        name: item.information.home_team.name,
      },
    },
    moneyLine: {
      awayTeam: item.lines.fullGame.awayTeam.moneyLine>0?`+${item.lines.fullGame.awayTeam.moneyLine}`:item.lines.fullGame.awayTeam.moneyLine,
      homeTeam: item.lines.fullGame.homeTeam.moneyLine>0?`+${item.lines.fullGame.homeTeam.moneyLine}`:item.lines.fullGame.homeTeam.moneyLine,
    },
    spread: item.lines.fullGame.spread,
    overUnder: {
      over: item.lines.fullGame.over>0?`+${item.lines.fullGame.over}`:item.lines.fullGame.over,
      under: item.lines.fullGame.under>0?`+${item.lines.fullGame.under}`:item.lines.fullGame.under,
    },
    rl: {
      awayTeam: {
        runLineSpread: item.lines.fullGame.awayTeam.runLineSpread>0?`+${item.lines.fullGame.awayTeam.runLineSpread}`:item.lines.fullGame.awayTeam.runLineSpread,
        runLineMoneyLine: item.lines.fullGame.awayTeam.runLineMoneyLine>0?`+${item.lines.fullGame.awayTeam.runLineMoneyLine}`:item.lines.fullGame.awayTeam.runLineMoneyLine,
      },
      homeTeam: {
        runLineSpread: item.lines.fullGame.homeTeam.runLineSpread>0?`+${item.lines.fullGame.homeTeam.runLineSpread}`:item.lines.fullGame.homeTeam.runLineSpread,
        runLineMoneyLine: item.lines.fullGame.homeTeam.runLineMoneyLine>0?`+${item.lines.fullGame.homeTeam.runLineMoneyLine}`:item.lines.fullGame.homeTeam.runLineMoneyLine,
      }
    },
    tie: item.lines.fullGame.tie>0?`+${item.lines.fullGame.tie}`:item.lines.fullGame.tie
  }
  return filterMatchUps;
} 

export const filterSport9 = (item) => {
  const filterMatchUps = {
    time: item.time,
    fourDigitCode: {
      awayTeam: item.information.awayTeam.fourDigitCode,
      homeTeam: item.information.home_team.fourDigitCode,
    },
    team: {
      awayTeam: {
        img: item.information.awayTeam.image.url,
        name: item.information.awayTeam.displayName,
      },
      homeTeam: {
        img: item.information.home_team.image.url,
        name: item.information.home_team.displayName,
      },
    },
    moneyLine: {
      awayTeam: item.lines.fullGame.awayTeam.moneyLine>0?`+${item.lines.fullGame.awayTeam.moneyLine}`:item.lines.fullGame.awayTeam.moneyLine,
      homeTeam: item.lines.fullGame.homeTeam.moneyLine>0?`+${item.lines.fullGame.homeTeam.moneyLine}`:item.lines.fullGame.homeTeam.moneyLine,
    },
  }
  return filterMatchUps;
} 

export const filterSport10 = (item) => {
  const filterMatchUps = {
    time: item.time,
    fourDigitCode: {
      img: item.information.awayTeam.image.url,
      info: item.information.awayTeam.fourDigitCode,
    },
    team: {
      location: item.information.awayTeam.location,
      name: item.information.awayTeam.name,
    },
    category: item.lines.fullGame.categoryId,
    total: item.lines.fullGame.data,
    overUnder: {
      over: item.lines.fullGame.over,
      under: item.lines.fullGame.under,
    }
  }
  return filterMatchUps;
} 


