import React, { useState, useRef, useImperativeHandle } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Checkbox, Form, Statistic, Confirm, Reveal, ButtonProps } from "semantic-ui-react";


import {
  incrementStr, incrementDex, incrementInt, incrementCon, incrementWin, incrementChar, 
  decrementStr, decrementDex, decrementInt, decrementCon, decrementWin, decrementChar,
  selectStats, dwarfStats, elfStats, gnomeStats, halfElfStats, halfOrcStats, 
  halflingStats, humanStats,changeRace,

  AppState,
  RaceInfo,
} from "../stats/statsSlice";

import styles from "./Race.module.css";
import stylesStats from "./Stats.module.css";



export function Race() {
  const state: AppState = useSelector(selectStats);
  const dispatch = useDispatch();
  // const [state, setState] = useState(false);

  // function display () {
    // setState(!state)
  // }
  // function open () { setState(true) }
  // const close = () => setState(false)

  function raceButton(raceInfo: RaceInfo): JSX.Element {
      return (
        <Button onClick={() => dispatch(changeRace(raceInfo.race))}>
          {raceInfo.name}
        </Button>
      );
  }

  return (
    <div>
      <h1> CHOOSE RACE!</h1>
      {state.races.map(raceButton)}


      ,
        


 
    </div>
  );
}
