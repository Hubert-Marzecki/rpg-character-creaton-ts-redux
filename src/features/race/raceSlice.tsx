import { createSlice } from "@reduxjs/toolkit";
import { Dispatch } from "react";

export interface AppStateRace {
 race:string

}

let initState = (): AppStateRace => {
  return {
   race: "dwarf"

  };
};

export const slice = createSlice({
  name: "race",
  initialState: initState(),
  reducers: {


    // INCREMENT STATS + MODIFY VALUE

    changeRace: (state) => {
     
      state.race = "dwarf"

    }
}
});

export const { 
    changeRace
 } = slice.actions;

export const changeRaces = (state: any) => state.race;

export default slice.reducer;
