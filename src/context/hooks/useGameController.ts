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
    []
  );

  React.useEffect(
    () => {
      ///// test
      if (!playingField.length) return

      const newPos: Coord = {
        x: 3,
        y: 7
      };
      onCardPlace(newPos);
    },
    [playingField]
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
    setCardSelected(index)
  }

  const onCardPlace = (coordinate: Coord) => {
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
