import React from 'react';
import useGameController, {
  type GameControllerContextType,
} from './hooks/useGameController';

export const GameControllerContext =
  React.createContext<GameControllerContextType>({
    // default values according to the type
    playersHand: [],
  });

export const GameControllerProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const gameController = useGameController();
  return (
    <GameControllerContext.Provider value={gameController}>
      {children}
    </GameControllerContext.Provider>
  );
};

export const useGameControllerContext = () =>
  React.useContext(GameControllerContext);
