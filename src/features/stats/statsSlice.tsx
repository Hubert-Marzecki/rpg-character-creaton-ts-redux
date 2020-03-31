import { createSlice } from "@reduxjs/toolkit";
import { Dispatch } from "react";

export interface AppState {
  value: number;
  str: number;
  dex :number;
  int: number;
  con: number;
  win: number;
  char: number;
  strModi: number,
  dexModi: number,
  intModi: number,
  conModi: number,
  winModi: number,
  charModi: number,
  field: string,

}

let initState = (): AppState => {
  return {
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
    field: ""

  };
};

export const slice = createSlice({
  name: "stats",
  initialState: initState(),
  reducers: {


    // INCREMENT STATS + MODIFY VALUE

    increment: (state, initState) => {

    },
    incrementStr: state => {
      if (state.str === 18) {
        return
      }
      state.str += 1;
      if (state.str === 3) {
        state.strModi = -4;
      }
      if (state.str === 5) {
        state.strModi = -3;
      }
      if (state.str === 7) {
        state.strModi = -2;
      }
      if (state.str === 9) {
        state.strModi = -1;
      }
      if (state.str === 10 ) {
        state.strModi = 0;
      }
      if (state.str === 12) {
        state.strModi = 1;
      }
      if (state.str === 14) {
        state.strModi = 2;
      }
      if (state.str === 16) {
        state.strModi = 3;
      }
      if (state.str === 18) {
        state.strModi = 4;
      }
    },

    incrementDex: state => {
      if (state.dex === 18) {
        return
      }
      state.dex += 1;

      if (state.dex === 3) {
        state.dexModi = -4;
      }
      if (state.dex === 5) {
        state.dexModi = -3;
      }
      if (state.dex === 7) {
        state.dexModi = -2;
      }
      if (state.dex === 9) {
        state.dexModi = -1;
      }
      if (state.dex === 10 ) {
        state.dexModi = 0;
      }
      if (state.dex === 12) {
        state.dexModi = 1;
      }
      if (state.dex === 14) {
        state.dexModi = 2;
      }
      if (state.dex === 16) {
        state.dexModi = 3;
      }
      if (state.dex === 18) {
        state.dexModi = 4;
      }
    },
    incrementInt: state => {
 
      state.int += 1;
    },
    incrementCon: state => {

      state.con += 1;
    },
    incrementWin: state => {
 
      state.win += 1;
    },
    incrementChar: state => {
 
      state.char += 1;
    },

// DECREMENT STATS + MODIFY VALUE

    decrementStr: state => {

      if (state.str === 3) {
        return
      }
      state.str -= 1;

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
      state.int -= 1;
    },
    decrementWin: state => {
      state.win -= 1;
    },
    decrementCon: state => {
      state.con -= 1;
    },
    decrementChar: state => {
      state.char -= 1;
    },

    incrementByAmount: (state, action) => {
      state.value += action.payload;
    }
  }
});

export const { 
  incrementStr, incrementDex, incrementInt, incrementCon, incrementWin, incrementChar, 
  decrementStr, decrementDex, decrementInt, decrementCon, decrementWin, decrementChar,
  incrementByAmount } = slice.actions;

export const selectStats = (state: any) => state.stats;

export default slice.reducer;
