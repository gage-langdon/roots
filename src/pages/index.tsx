import React from "react";
import { Box, Vertical } from "../components/atoms";
import { GameControllerProvider } from "../context/gameController";
import PlayerHand from "../components/PlayerHand";
import PlayingField from "../components/PlayingField";

const IndexPage = () => {
  return (
    <GameControllerProvider>
      <Vertical>
        <h1>Roots routes</h1>
        <Box display={"flex"} justifyContent={"center"} paddingBottom={3}>
          <PlayingField />
        </Box>

        <PlayerHand />
      </Vertical>
    </GameControllerProvider>
  );
};

export default IndexPage;
