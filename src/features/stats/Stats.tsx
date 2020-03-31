import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Checkbox, Form, Statistic } from "semantic-ui-react";

import {
  incrementStr, incrementDex, incrementInt, incrementCon, incrementWin, incrementChar, 
  decrementStr, decrementDex, decrementInt, decrementCon, decrementWin, decrementChar,
  selectStats,
  AppState,
} from "./statsSlice";
import styles from "./Counter.module.css";


export function Stats() {
  const stats: AppState = useSelector(selectStats);
  const dispatch = useDispatch();
  var [points, setPoints] = useState(30);

  // Chciałbym dodać + przed modify jak jest 
//   const plusIMinus = () => {
//     if (stats.str > 10) {
//      return (
//        "+"
//      )
//   }
// }

// Ok, wydaje mi się że mogłyby to być osobne slice-y dotyczące rodzaju danych (na pewno str, strModi, reszta trzeba się zastanowić).
// https://redux-toolkit.js.org/usage/usage-guide...
// Wtedy wyglądałoby to tak że:
// 1. Po kliknięciu przycisku wykonuje się dispatch(incrementStr()) (tutaj bez parametru, ale można ujednolicić to, żeby jak się wrzuci parametr, to o tyle go zwiększał
// 2. Po czym useEffect z tym `str` w zależnościach wykonuje robi dispatch(updateStrModi(strValue)), który aktualizuje strModi
// Dodatkowo jeśli chodzi o resztę typów danych, to może warto by było zrobić taki ogólny reducer do nich:
// increment: (state, action) => {
// state[action.payload.dataType] += 1;
// }
// I tak samo dekrementacja, aczkolwiek tego nie jestem pewien, trzeba poeksperymentować :)
// Mam nadzieję że cokolwiek pomogłem. Nie korzystałem z Redux Toolkit, ale tyle na szybko udało mi się wyciągnąć z dokumentacji.


function pointLeft() {
  setPoints(points += 1 )
}

function clickedPlus () {
  dispatch(incrementStr());
  pointLeft();
}
  // changeStat(stat: Stat) => (newValue: number) => dispatch(statChanged(stat, newValue)) 

  // function strStat(field:string) {
  //   return(
  //      <div>
  //     <div className={styles.row}>
  //       <h1> TOTAL POINTS: 30 </h1> 
  //     </div>
  //     <div className={styles.row}>
  //       <h1> Strenght (rolls modify: {stats.field} </h1> 
  //     </div>
  //     </div>
  //   )
  // }
  // Próba powielenia rzeczy - dupa


  return (
    <div>
      <div className={styles.row}>
        <h1> TOTAL POINTS: 30 </h1> 
      </div>
      <div className={styles.row}>
        <h1> Roll modificator: {stats.strModi} </h1> 
      </div>

         <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={ () => dispatch(decrementStr())}
        >
          -
        </button>


        <Statistic>
    <Statistic.Value>{stats.str}</Statistic.Value>
    <Statistic.Label>Strenght</Statistic.Label>
  </Statistic>

        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => clickedPlus()}
        >
          +
        </button>
      </div>

      <div className={styles.row}>
        <h1> Dexterity (rolls modify: {stats.dexModi}) </h1> 
      </div>

         <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(decrementDex())}
        >
          -
        </button>
        <span className={styles.value}>{stats.dex} </span>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(incrementDex())}
        >
          +
        </button>
      </div>

 
    </div>
  );
}
