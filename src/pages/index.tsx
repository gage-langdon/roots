import React from 'react';
import { Vertical } from '../components/atoms';
import { GameControllerProvider } from '../context/gameController';
import PlayerHand from '../components/PlayerHand';
import PlayingField from '../components/PlayingField';

const IndexPage = () => {
  return (
    <GameControllerProvider>
      <Vertical>
        <h1>Roots routes</h1>
        <PlayingField />
        <PlayerHand />
      </Vertical>
    </GameControllerProvider>
  );
};

export default IndexPage;
