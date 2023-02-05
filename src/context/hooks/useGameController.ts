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
  const [cardSelectedIndex, setCardSelected] = useState<number>(3);
  const { generateCard } = useCard();


  console.log({ playingField })
  // console.log({ playersHand })

  React.useEffect(
    () => {
      startGame()
      // do something
    },
    []
  );

  const startGame = () => {
    let emptyPlayingField = [];
    for (let i = 0; i < playingFieldSize.height; i++) {
      emptyPlayingField[i] = new Array(playingFieldSize.width).fill(null);
    }

    setPlayingField(emptyPlayingField)
    setPlayersHand(new Array(handSize).fill(null).map(() => generateCard()))

    // start timer
  }

  const onCardSelect = (index: number) => {
    console.log(`onCardSelect(index: ${index})` )
    setCardSelected(index)
  }

  const onCardPlace = (coordinate: Coord) => {
    console.log(`onCardPlace(${coordinate.x}, ${coordinate.y}). The current selected card index is ${cardSelectedIndex}` )
    let newPlayingField = playingField;
    newPlayingField[coordinate.x][coordinate.y] = cardSelectedIndex !== undefined ? playersHand[cardSelectedIndex] : null;
    setPlayingField(newPlayingField)
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
