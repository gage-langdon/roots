import React from 'react';
import { Vertical, Horizontal } from '../components/atoms';
import { GameControllerProvider } from '../context/gameController';
import PlayerHand from '../components/PlayerHand';
import PlayingField from '../components/PlayingField';

const IndexPage = () => {
  return (
    <GameControllerProvider>
      <Vertical alignItems="center">
        <Vertical width="900px" maxWidth="100%" p={24}>
          <Vertical gap={24}>
            <Horizontal>
              <h1>Roots routes</h1>
            </Horizontal>
            <Vertical alignItems="center">
              <PlayingField />
            </Vertical>
            <PlayerHand />
          </Vertical>
        </Vertical>
      </Vertical>
    </GameControllerProvider>
  );
};

export default IndexPage;
