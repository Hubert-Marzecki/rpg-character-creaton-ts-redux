import React, { useState, useRef, useImperativeHandle } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Checkbox, Form, Statistic, Confirm, Reveal } from "semantic-ui-react";

import {
  changeRace,
  changeRaces,
  AppStateRace,
} from "./raceSlice";
import {
  incrementStr, incrementDex, incrementInt, incrementCon, incrementWin, incrementChar, 
  decrementStr, decrementDex, decrementInt, decrementCon, decrementWin, decrementChar,
  selectStats, dwarfStats, elfStats, gnomeStats, halfElfStats, halfOrcStats, 
  halflingStats, humanStats,

  AppState,
} from "../stats/statsSlice";

import styles from "./Race.module.css";
import stylesStats from "./Stats.module.css";



export function Race() {
  const race: AppState = useSelector(changeRaces);
  const dispatch = useDispatch();
  const [state, setState] = useState(false);

  function display () {
    setState(!state)
  }
  // function open () { setState(true) }
  // const close = () => setState(false)

  return (
    <div>
      <h1> CHOOSE RACE!</h1>
      <Button
      onClick={() => dispatch(dwarfStats())}
      > Dwarf </Button>

      <Button 
      onClick={() => dispatch(elfStats())}
      >  Elf </Button>

      <Button 
      onClick={() => dispatch(gnomeStats())}
      >  Gnome </Button>

<Button 
      onClick={() => dispatch(halflingStats())}
      > Halfling </Button>
      
      <Button 
      onClick={() => dispatch(humanStats())}
      > Human </Button>
  
        

    <Button.Group  buttons={['Dwarf', 'Elf', 'Gnome','Half Elf', 'Half Orc', 'Halfling', 'Human']} />

 
    </div>
  );
}
