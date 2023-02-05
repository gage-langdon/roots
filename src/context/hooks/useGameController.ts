import React, { useState } from 'react';
import { type Card } from '../../types/Card';
import useCard from './useCard';
import { Coord } from '../../types/Coord';
import { playingFieldSize, handSize } from '../../constants';

export type GameControllerContextType = {
  playersHand: Card[];
};

const useGameController = () => {
  const [playersHand, setPlayersHand] = useState<Array<Card>>([]);
  const [playingField, setPlayingField] = useState<Array<Array<Card | null>>>([]);
  const [timeLeft, setTimeLeft] = useState<string>();
  const [gameActive, setGameActive] = useState<boolean>();
  const [gameStarted, setGameStarted] = useState<string>();
  const [cardSelectedIndex, setCardSelected] = useState<number>();
  const { generateCard } = useCard();


  console.log({ playingField })
  console.log({ playersHand })

  React.useEffect(
    () => {
      startGame()
      // do something
    },
    [

      /* any change to a var you put in this array will rerun this function */
    ]
  );

  React.useEffect(
    () => {  ///// test

      if (!playingField.length) return

      const newPos: Coord = {
        x: 3,
        y: 7
      };
      console.log('hit useeffect', playingField)
      onCardPlace(newPos)
      ///// test

      // do something
    },
    [
      playingField
      /* any change to a var you put in this array will rerun this function */
    ]
  );




  const startGame = () => {
    // start timer
    // generate playfield
    //  const emptyPlayingField = new Array(playingFieldSize.height).fill(new Array(playingFieldSize.width).fill(null));

    let emptyPlayingField = [];
    for (let i = 0; i < playingFieldSize.height; i++) {
      console.log('test', i, ' ', emptyPlayingField)
      emptyPlayingField[i] = new Array(playingFieldSize.width).fill(null);
    }
   


    setPlayingField(emptyPlayingField)
    setPlayersHand( new Array(handSize).fill(generateCard()))
  }

  const onCardSelect = (index: number) => {
    setCardSelected(index)
  }

  const onCardPlace = (coordinate: Coord) => {
    // place cardSelectedId from players hand and place in coord location of playing field
    let newPlayingField = playingField;







    newPlayingField[coordinate.x][coordinate.y] = cardSelectedIndex !== undefined ? playersHand[cardSelectedIndex] : null;

    setPlayingField(newPlayingField)
    onCardSelect(2)


  }





  return {
    playersHand,
    playingField,
    timeLeft,
    gameActive,
    cardSelectedIndex,
    gameStarted,
    onCardSelect,
    onCardPlace,
    startGame,
  };
};

export default useGameController;
