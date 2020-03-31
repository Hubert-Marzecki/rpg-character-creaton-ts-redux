import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Checkbox, Form, Statistic } from "semantic-ui-react";

import {
  changeRace,
  changeRaces,
  AppState,
} from "./raceSlice";
import styles from "./Race.module.css";


export function Race() {
  // const stats: AppState = useSelector(selectStats);
  const dispatch = useDispatch();
  var [state, setState] = useState(false);

  function handleClick(){
    setState(!state);
    if (state = true) {
     
    }
  }

  return (
    <div>
      <h1> CHOOSE RACE!</h1>
      <Button active= {state}
      onClick={handleClick}
      > Dwarf </Button>

    <Button.Group  buttons={['Dwarf', 'Elf', 'Gnome','Half Elf', 'Half Orc', 'Halfling', 'Human']} />

 
    </div>
  );
}
