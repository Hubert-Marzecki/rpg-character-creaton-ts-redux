import { createSlice } from "@reduxjs/toolkit";
import ReactDOM from 'react-dom';
import { Dispatch } from "react";
import {Login} from './Login'

export interface AppStateLogin {
 name: string;
 password:string;

}

let initState = (): AppStateLogin => {
  return {
    name : "dada",
    password: ""
  };
};

export const slice = createSlice({
  name: "login",
  initialState: initState(),
  reducers: {


    // INCREMENT STATS + MODIFY VALUE

    changeLogin: (state, event) => {
     

    }
}
});

export const { 
    changeLogin
 } = slice.actions;

export const changeLogins = (state: any) => state.race;

export default slice.reducer;
