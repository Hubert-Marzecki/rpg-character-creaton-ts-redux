import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import ReactDOM from 'react-dom';
import { Dispatch } from "react";
import { Stats } from "./Stats";
import { Visibility } from "semantic-ui-react";

function modifierFromStat(stat: number): number {
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

export interface RaceInfo {
  // abilities, size, etc.
  race: Race;
  name: string,
  statModifications: StatModification[]
}


function initRaceInfo(): RaceInfo[] {
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
  ];
}



export interface AppState {
  races: RaceInfo[];
  chosenRace: Race,
  value: number;
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
  race: string;
  styleButtonDisplay: string;
}

let initState = (): AppState => {
  return {
    races : initRaceInfo(),
    chosenRace: Race.HUMAN,
    value: 0,
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
    race: "",
    styleButtonDisplay: "hidden_button",
  };
};

export const slice = createSlice({
  name: "stats",
  initialState: initState(),
  reducers: {


    // INCREMENT STATS + MODIFY VALUE
    changeRace: (state, action: PayloadAction<Race>) => {
      state.chosenRace = action.payload;
    },

    incrementStr: state => {
      if (state.str === 18 || 
        (state.str + state.dex+ state.int + state.con + state.win + state.char) === 90 ) {
        return
      }
      state.str += 1;
      state.points -= 1;
      state.strModi = modifierFromStat(state.str);
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

    dwarfStats: state => {
      state.str = 10;
      state.strModi = 0;
      state.dex = 10;
      state.dexModi = 0;
      state.con = 12;
      state.conModi = 1;
      state.int = 10;
      state.intModi = 0;
      state.win = 12;
      state.winModi =1;
      state.char = 8;
      state.charModi = -1;
    
    },

    elfStats: state => {
      state.str = 10;
      state.strModi = 0;
      state.dex = 12;
      state.dexModi = 1;
      state.con = 8;
      state.conModi = -1;
      state.int = 12;
      state.intModi =1;
      state.win = 10;
      state.winModi =0;
      state.char = 10;
      state.charModi = 0;
    
    },
    gnomeStats: state => {
      state.str = 8;
      state.strModi = -1;
      state.dex = 10;
      state.dexModi = 0;
      state.con = 12;
      state.conModi = 1;
      state.int = 10;
      state.intModi =0;
      state.win = 10;
      state.winModi =0;
      state.char = 12;
      state.charModi =1;
   
    
    },
    halfElfStats: state => {
      state.str = 10;
      state.strModi = 0;
      state.dex = 10;
      state.dexModi = 0;
      state.con = 10;
      state.conModi = 0;
      state.int = 10;
      state.intModi =0;
      state.win = 10;
      state.winModi =0;
      state.char = 10;
      state.charModi =0;
    },
    halfOrcStats: state => {
      state.str = 10;
      state.strModi = 0;
      state.dex = 10;
      state.dexModi = 0;
      state.con = 10;
      state.conModi = 0;
      state.int = 10;
      state.intModi =0;
      state.win = 10;
      state.winModi =0;
      state.char = 10;
      state.charModi =0;
    },
    halflingStats: state => {
      state.str = 8;
      state.strModi = -1;
      state.dex = 12;
      state.dexModi = 1;
      state.con = 10;
      state.conModi = 0;
      state.int = 10;
      state.intModi =0;
      state.win = 10;
      state.winModi =0;
      state.char = 12;
      state.charModi =1;
    },
    humanStats: state => {
      state.str = 10;
      state.strModi = 0;
      state.dex = 10;
      state.dexModi = 0;
      state.con = 10;
      state.conModi = 0;
      state.int = 10;
      state.intModi =0;
      state.win = 10;
      state.winModi =0;
      state.char = 10;
      state.charModi = 0;
      state.styleButtonDisplay = "button_visible";
      // ReactDOM.findDOMNode(<instance-o-outermost-component>).getElementsByClassName('snap');
    },


// DECREMENT STATS + MODIFY VALUE

    decrementStr: state => {

      if (state.str === 3) {
        return
      }
      state.str -= 1;
      state.points += 1;

      if (state.str === 16) {
        state.strModi = 3;
      }
      if (state.str === 14) {
        state.strModi = 2;
      }
      if (state.str === 12) {
        state.strModi = 1;
      }
      if (state.str === 11) {
        state.strModi = 0;
      }
      if (state.str === 9) {
        state.strModi = -1;
      }
      if (state.str === 7) {
        state.strModi = -2;
      }
      if (state.str === 5) {
        state.strModi = -3;
      }
      if (state.str === 3 ) {
        state.strModi = -4;
      }
    
    },
    decrementDex: state => {
      if (state.dex === 3) {
        return
      }
      state.dex -= 1;
      state.points += 1;

      if (state.dex === 18) {
        state.dexModi = 4;
      }

      if (state.dex === 16) {
        state.dexModi = 3;
      }
      if (state.dex === 14) {
        state.dexModi = 2;
      }
      if (state.dex === 12) {
        state.dexModi = 1;
      }
      if (state.dex === 11) {
        state.dexModi = 0;
      }
      if (state.dex === 9) {
        state.dexModi = -1;
      }
      if (state.dex === 7) {
        state.dexModi = -2;
      }
      if (state.dex === 5) {
        state.dexModi = -3;
      }
      if (state.dex === 3 ) {
        state.dexModi = -4;
      }
    },
    decrementInt: state => {
      if (state.int === 3) {
        return
      }
      state.int -= 1;
      state.points += 1;

      if (state.int === 16) {
        state.intModi = 3;
      }
      if (state.int === 14) {
        state.intModi = 2;
      }
      if (state.int === 12) {
        state.intModi = 1;
      }
      if (state.int === 11) {
        state.intModi = 0;
      }
      if (state.int === 9) {
        state.intModi = -1;
      }
      if (state.int === 7) {
        state.intModi = -2;
      }
      if (state.int === 5) {
        state.intModi = -3;
      }
      if (state.int === 3 ) {
        state.intModi = -4;
      }
    },
    decrementWin: state => {
      if (state.win === 3) {
        return
      }
      state.win -= 1;
      state.points += 1;

      if (state.win === 16) {
        state.winModi = 3;
      }
      if (state.win === 14) {
        state.winModi = 2;
      }
      if (state.win === 12) {
        state.winModi = 1;
      }
      if (state.win === 11) {
        state.winModi = 0;
      }
      if (state.win === 9) {
        state.winModi = -1;
      }
      if (state.win === 7) {
        state.winModi = -2;
      }
      if (state.win === 5) {
        state.winModi = -3;
      }
      if (state.win === 3 ) {
        state.winModi = -4;
      }
    },
    decrementCon: state => {
      if (state.con === 3) {
        return
      }
      state.con -= 1;
      state.points += 1;

      if (state.con === 16) {
        state.conModi = 3;
      }
      if (state.con === 14) {
        state.conModi = 2;
      }
      if (state.con === 12) {
        state.conModi = 1;
      }
      if (state.con === 11) {
        state.conModi = 0;
      }
      if (state.con === 9) {
        state.conModi = -1;
      }
      if (state.con === 7) {
        state.conModi = -2;
      }
      if (state.con === 5) {
        state.conModi = -3;
      }
      if (state.con === 3 ) {
        state.conModi = -4;
      }
    },
    decrementChar: state => {
      if (state.char === 3) {
        return
      }
      state.char -= 1;
      state.points += 1;

      if (state.char === 16) {
        state.charModi = 3;
      }
      if (state.char === 14) {
        state.charModi = 2;
      }
      if (state.char === 12) {
        state.charModi = 1;
      }
      if (state.char === 11) {
        state.charModi = 0;
      }
      if (state.char === 9) {
        state.charModi = -1;
      }
      if (state.char === 7) {
        state.charModi = -2;
      }
      if (state.char === 5) {
        state.charModi = -3;
      }
      if (state.char === 3 ) {
        state.charModi = -4;
      }
    },



  }
});

export const { 
  incrementStr, incrementDex, incrementInt, incrementCon, incrementWin, incrementChar, 
  decrementStr, decrementDex, decrementInt, decrementCon, decrementWin, decrementChar,
  dwarfStats, elfStats, gnomeStats, halfElfStats, halfOrcStats, halflingStats, humanStats, changeRace
} = slice.actions;

export const selectStats = (state: any) => state.stats;

export default slice.reducer;
