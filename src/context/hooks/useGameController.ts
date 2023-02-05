import React from 'react';
import { type Card } from '../../types/Card';
import useCard from './useCard';

export type GameControllerContextType = {
  playersHand: Card[];
};

const useGameController = () => {
  const [playersHand, setPlayersHand] = React.useState<Array<Card>>([]);
  const { generateCard } = useCard();

  React.useEffect(
    () => {
      // do something
    },
    [
      /* any change to a var you put in this array will rerun this function */
    ]
  );

  return {
    playersHand,
  };
};

export default useGameController;
