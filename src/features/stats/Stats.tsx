import React, { useState, useImperativeHandle, useRef  } from "react";
import { useSelector, useDispatch, } from "react-redux";
import { Button, Checkbox, Form, Statistic, Grid, Segment, Container } from "semantic-ui-react";

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

  // var carRef = React.createRef(); //create ref
  // const [value, setValue] = useState(false);
  // const changeStyle = () => {
  //   setValue(true)
  // }

  // useImperativeHandle(carRef, () => {
  //   return {
  //     changeStyle: changeStyle
  //   }
  // })

  // const display = () => {
  //   var field = styles.stats.styleButtonDisplay;
  // }
  return (
    <div>
  {/* STR */}
        <h1> TOTAL POINTS: {stats.points} </h1> 
     

      <Grid columns={6}>
      <Grid.Row >
           <Grid.Column>
             <Segment>
             <h1> Strenght </h1> 
     

                   
                    <button
                      className={styles.button}
                      aria-label="Increment value"
                      onClick={ () => dispatch(decrementStr())}
                    >
                      -
                    </button>


                    <Statistic>
                <Statistic.Value>{stats.str}</Statistic.Value>
                <Statistic.Label>Modi: {stats.strModi}</Statistic.Label>
                  </Statistic>

                    <button
                      className={styles.button}
                      aria-label="Decrement value"
                      onClick={() => dispatch(incrementStr())}
                    >
                      +
                    </button>
             </Segment>
             </Grid.Column>
           
      
    
   
{/* DEX */}
<Grid.Column>
             <Segment>
        <h1> Dexterity </h1> 
    

       
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(decrementDex())}
        >
          -
        </button>
         <Statistic>
    <Statistic.Value>{stats.dex}</Statistic.Value>
    <Statistic.Label>Modi:  {stats.dexModi}</Statistic.Label>
  </Statistic>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(incrementDex())}
        >
          +
        </button>
        </Segment>
             </Grid.Column>
  {/* INT */}
  <Grid.Column>
             <Segment> 
        <h1> Intelligence </h1> 
   

      
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(decrementInt())}
        >
          -
        </button>
    <Statistic>
      <Statistic.Value>{stats.int}</Statistic.Value>
      <Statistic.Label>Modi:  {stats.intModi}</Statistic.Label>
    </Statistic>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(incrementInt())}
        >
          +
        </button>
        </Segment>
             </Grid.Column>
{/* CON */}
<Grid.Column>
             <Segment> 
        <h1> Consituition </h1> 
   

        
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(decrementCon())}
        >
          -
        </button>
        <Statistic>
          <Statistic.Value>{stats.con}</Statistic.Value>
          <Statistic.Label>Modi:  {stats.conModi}</Statistic.Label>
        </Statistic>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(incrementCon())}
        >
          +
        </button>
        </Segment>
             </Grid.Column>
{/* WIN */}
<Grid.Column>
             <Segment> 
        <h1> Windsom </h1> 

        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(decrementWin())}
        >
          -
        </button>
        <Statistic>
          <Statistic.Value>{stats.win}</Statistic.Value>
          <Statistic.Label>Modi:  {stats.winModi}</Statistic.Label>
         </Statistic>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(incrementWin())}
        >
          +
        </button>
        </Segment>
             </Grid.Column>
{/* Char */}
<Grid.Column>
             <Segment> 
        <h1> Charisma </h1> 
     

     
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(decrementChar())}
        >
          -
        </button>
        <Statistic>
          <Statistic.Value>{stats.char}</Statistic.Value>
          <Statistic.Label>Modi:  {stats.charModi}</Statistic.Label>
       </Statistic>
        <button
         
          aria-label="Decrement value"
          onClick={() => dispatch(incrementChar())}
        >
          +
        </button>
        <Button 
        // className={styles.stats.styleButtonDisplay}
       
        > Add + 2 
          </Button> 
        </Segment>
             </Grid.Column>
             </Grid.Row>
             </Grid>

</div>

  );
}
