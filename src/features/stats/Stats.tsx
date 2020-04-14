import React, { useState, useImperativeHandle, useRef  } from "react";
import { useSelector, useDispatch, } from "react-redux";
import { Button, Checkbox, Form, Statistic, Grid, Segment, Container } from "semantic-ui-react";

import {
  incrementStr, incrementDex, incrementInt, incrementCon, incrementWin, incrementChar, 
  decrementStr, decrementDex, decrementInt, decrementCon, decrementWin, decrementChar,
  selectStats, Stat, AppState, RaceInfo, getStat, Race, StatModification, modifierFromStat,
  initRaceInfo,
} from "./statsSlice";
import styles from "./Counter.module.css";
import { stat } from "fs";

// Zwracamy pierwszą wartość tablicy, która jest typu X
function unsafeFirst<X>(array: X[]): X {
  return array[0];
}

function sum(a: number, b: number): number {
  return a + b;
}
 
function statDisplayValue(stat: Stat, state: AppState): number {
  let currentRace: Race = state.chosenRace;
  // unsafe index access 
  // filtrowanie wszystkich dostepnych ras, w poszukiwaniu currentRace
  let raceInfo: RaceInfo = state.races.filter((it) => it.race == currentRace)[0];
  
  let modificator: number = raceInfo.statModifications
    // filtrujemy do tych co pasują do aktualnego stata ktorego obliczamy
    .filter((it: StatModification) => it.stat == stat)
    // Bierze całą tablicę i zwraca same modyfikatory
    .map((it: StatModification) => it.modifier)
    // sumujemy tablice modyfikatorów
    .reduce(sum, 0); 
    // branie tego ,tóry spełnia nasze warunki
  let currentStat: number = getStat(stat, state);
  return currentStat + modificator;
}




function showStatName (statType:Stat) {
  var displayStr:string= "STR";
  var displayDex:string= "DEX";
  var displayCon:string= "CON";
  var displayInt:string= "INT";
  var displayWin:string= "WIN";
  var displayCha:string= "CHA";

  if ( statType === 0) {
    return displayStr
  }
  if ( statType === 1) {
    return displayDex
  }
  if ( statType === 2) {
    return displayCon
  }
  if ( statType === 3) {
    return displayInt
  }
  if ( statType === 4) {
    return displayWin
  }
  if ( statType === 5) {
    return displayCha
  }
}

// Funkcja, która przy zmianie nazwy tworzy cały komponent
function placedStat (statType:Stat, stats:AppState) {


  
  return (
    <div>
        <Grid.Column>
            <Segment>
              <h1> {showStatName(statType)} </h1>
              <Button
                className={styles.button}
                aria-label="Increment value"
              >
                -
              </Button>
              <Statistic>
                <Statistic.Value>{statDisplayValue( statType, stats)}</Statistic.Value>
                <Statistic.Label>Modi: {modifierFromStat(statDisplayValue(statType, stats))}</Statistic.Label>
              </Statistic>
              <Button
                className={styles.button}
                aria-label="Decrement value"
              
              >
                +
              </Button>
            </Segment>
          </Grid.Column>
    </div>
  )
}
export function Stats() {
  const stats: AppState = useSelector(selectStats);
  const dispatch = useDispatch();


 
  return (


    <div>
        

      {/* STR */}
      <h1> TOTAL POINTS: {stats.points} </h1>
      <Grid columns={6}>
        <Grid.Row>
        {placedStat(Stat.STR, stats)}
        {placedStat(Stat.DEX, stats)}
        {placedStat(Stat.CON, stats)}
        {placedStat(Stat.INT, stats)}
        {placedStat(Stat.WIS, stats)}
        {placedStat(Stat.CHA, stats)}


        
        </Grid.Row>
      </Grid>
    </div>
  );
}
