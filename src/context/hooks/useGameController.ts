import React from 'react';
import { type Card } from '../../types/Card';
import useCard from './useCard';
import { Coord } from '../../types/Coord';
import { playingFieldSize } from '../../constants';

export type GameControllerContextType = {
  playersHand: Card[];
};

const useGameController = () => {
  const [playersHand, setPlayersHand] = React.useState<Array<Card>>([]);
  const [playingField, setPlayingField] = React.useState<Array<Array<Card | null>>>([]);
  const [timeLeft, setTimeLeft] = React.useState<String>();
  const [gameActive, setGameActive] = React.useState<Boolean>();
  const [gameStarted, setGameStarted] = React.useState<String>();
  const [cardSelectedId, setCardSelected] = React.useState<Number>();
  const { generateCard } = useCard();

  React.useEffect(
    () => {
      startGame()
      // do something
    },
    [
      /* any change to a var you put in this array will rerun this function */
    ]
  ); 

  const onCardSelect = (index: Number) => {
    setCardSelected(index)
  }

  const onCardPlace = (coordinate: Coord) => {
    //place cardSelectedId from players hand and place in coord location of playing field
  }

  const startGame = () => {
    //start timer
    //generate playfield
    const emptyPlayingField = new Array(playingFieldSize.height).fill(new Array(playingFieldSize.width).fill(null));
    setPlayingField(emptyPlayingField)

    console.log({emptyPlayingField})
    
    //generate hand
    const playersHand = new Array()

  }

  return {
    playersHand,
    playingField,
    timeLeft,
    gameActive,
    cardSelectedId,
    gameStarted,
    onCardSelect,
    onCardPlace,
    startGame,
  };
};

export default useGameController;
