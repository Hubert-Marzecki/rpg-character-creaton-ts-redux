import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import ReactDOM from 'react-dom';
import { Dispatch } from "react";
import { Stats } from "./Stats";
import { Visibility } from "semantic-ui-react";

// Modyfikator liczony od wartości stats
export function modifierFromStat(stat: number): number {
  return -5 + Math.floor(stat/2); 
}

export enum Stat {
  STR,
  DEX,
  CON,
  INT,
  WIS,
  CHA,
}

export enum Race {
  DWARF,
  ELF,
  GNOME,
  HALFLING,
  HUMAN,
  HALF_ELF,
  HALF_ORC,
}

export interface StatModification {
  stat: Stat,
  modifier: number
}

function statModification(stat: Stat, modifier: number ): StatModification {
  return {
    stat: stat,
    modifier: modifier
  };
}
// Pisząc to w ten sposób możemy zagnieździć KONKRETNE/NAZWANE krształby to których 
// Możemy się potem bezpośredio odnosić

export interface RaceInfo {
  // abilities, size, etc.
  race: Race;
  name: string,

  // Przyjmuje tablice o1biektów o kszrtałcie StatModification
  statModifications: StatModification[]
}


export function initRaceInfo(): RaceInfo[] {
  return [
    {
      race: Race.DWARF,
      name: "Dwarf",
      statModifications: [
        statModification(Stat.CHA,-2),
        statModification(Stat.CON, 2),
        statModification(Stat.WIS, 2),
      ],
    },
    {
      race: Race.HUMAN,
      name: "Human",
      statModifications: [
        statModification(Stat.STR, 2),
      ],
    },
    {
      race: Race.ELF,
      name: "Elf",
      statModifications: [
        statModification(Stat.DEX, 2),
        statModification(Stat.INT, 2),
        statModification(Stat.CON, -2),
      ],
    },
    {
      race: Race.GNOME,
      name: "Gnome",
      statModifications: [
        statModification(Stat.CON, 2),
        statModification(Stat.CHA, 2),
        statModification(Stat.STR, -2),
      ],
    },
    {
      race: Race.HALFLING,
      name: "Halfling",
      statModifications: [
        statModification(Stat.DEX, 2),
        statModification(Stat.CHA, 2),
        statModification(Stat.STR, -2),
      ],
    },
    
  ];
}

// CO TO ROBI DOKŁADNIE
export function getStat(stat: Stat, state:AppState): number {
  switch (stat) {
    case Stat.STR: {
      return state.str;
    }
    case Stat.DEX: {
      return state.str;
    }
    case Stat.INT: {
      return state.str;
    }
    case Stat.CON: {
      return state.str;
    }
    case Stat.WIS: {
      return state.str;
    }
    case Stat.CHA: {
      return state.str;
    }
  }
}


export interface AppState {
  // all avaliable races
  races: RaceInfo[];
  chosenRace: Race,
 
  str: number;
  dex: number;
  int: number;
  con: number;
  win: number;
  char: number;

  strModi: number;
  dexModi: number;
  intModi: number;
  conModi: number;
  winModi: number;
  charModi: number;

  points: number;
 
  
}

let initState = (): AppState => {
  return {
    races : initRaceInfo(),
    chosenRace: Race.HUMAN,
    
    str: 10,  
    dex: 10,
    int: 10,
    con: 10,
    win: 10,
    char: 10,

    strModi: 0,
    dexModi: 0,
    intModi: 0,
    conModi: 0,
    winModi: 0,
    charModi: 0,

    points: 30,
    
    
  };
};

export const slice = createSlice({
  name: "stats",
  initialState: initState(),
  reducers: {


    // INCREMENT STATS + MODIFY VALUE
    // typu funkcja ktora przyjmuje aktualny stan i event ktory został wywołany przez użytkownika
    // w tym wypadku, event trzyma w sobie rasę typuRace
    // Podmień stan (chosenRace) na to co wybrał użytkownik
    changeRace: (state: AppState, action: PayloadAction<Race>) => {
      state.chosenRace = action.payload;
    },

  riseStat: (state:AppState) => {
      
    },
  dropStat: (state:AppState, action: PayloadAction<Race>)  => {

    },

    incrementStr: state => {
      if (state.str === 18 || 
        (state.str + state.dex+ state.int + state.con + state.win + state.char) === 90 ) {
        return
      }
      state.str += 1;
      state.points -= 1;
      state.strModi = 0;
    },
    incrementDex: state => {
      if (state.dex === 18 || 
        (state.str + state.dex+ state.int + state.con + state.win + state.char) === 90 ) {
        return 
      }
      state.dex += 1;
      state.points -= 1;
      state.dexModi = modifierFromStat(state.dex);
    },
    incrementInt: state => {
 
      if (state.int === 18 || 
        (state.str + state.dex+ state.int + state.con + state.win + state.char) === 90 ) {
        return 
      
      }
      state.int += 1;
      state.points -= 1;

      state.intModi = modifierFromStat(state.int);
    },
    incrementCon: state => {

      if (state.con === 18 || 
        (state.str + state.dex+ state.con + state.int + state.win + state.char) === 90 ) {
        return
      }
      state.con += 1;
      state.points -= 1;

      state.conModi = modifierFromStat(state.con);
    },
    incrementWin: state => {
 
      if (state.win === 18 || 
        (state.int + state.dex+ state.str + state.con + state.win + state.char) === 90 ) {
        return
      }
      state.win += 1;
      state.points -= 1;
      state.winModi = modifierFromStat(state.win);

    },
    incrementChar: state => {
 
      if (state.int === 18 || 
        (state.str + state.dex+ state.int + state.con + state.win + state.char) === 90 ) {
        return
      }
      state.char += 1;
      state.points -= 1;
      state.charModi = modifierFromStat(state.char);

    },


// DECREMENT STATS + MODIFY VALUE

    decrementStr: state => {

      if (state.str === 3) {
        return
      }
      state.str -= 1;
      state.points += 1;
      state.strModi = modifierFromStat(state.str);
    },
    decrementDex: state => {
      if (state.dex === 3) {
        return
      }
      state.dex -= 1;
      state.points += 1;

      state.dexModi = modifierFromStat(state.dex);

    },
    decrementInt: state => {
      if (state.int === 3) {
        return
      }
      state.int -= 1;
      state.points += 1;

      state.intModi = modifierFromStat(state.int);

    },
    decrementWin: state => {
      if (state.win === 3) {
        return
      }
      state.win -= 1;
      state.points += 1;

      state.winModi = modifierFromStat(state.win);

    },
    decrementCon: state => {
      if (state.con === 3) {
        return
      }
      state.con -= 1;
      state.points += 1;
      state.conModi = modifierFromStat(state.con);
    },
    decrementChar: state => {
      if (state.char === 3) {
        return
      }
      state.char -= 1;
      state.points += 1;
      state.charModi = modifierFromStat(state.char);
    },
  }
});

export const { 
  incrementStr, incrementDex, incrementInt, incrementCon, incrementWin, incrementChar, 
  decrementStr, decrementDex, decrementInt, decrementCon, decrementWin, decrementChar,
  changeRace
} = slice.actions;

export const selectStats = (state: any) => state.stats;

export default slice.reducer;
