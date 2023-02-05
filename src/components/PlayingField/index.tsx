import React from "react";
// Hooks
import useGameController from "../../context/hooks/useGameController";
// componets
import Card from "../Card";
import { Box } from "../atoms";
import EmptyCard from "./components/EmptyCard";
// utils
import { type Card as CardType } from "../../types/Card";

const PlayingField = () => {
  const { playingField } = useGameController();

  return (
    <Box display={"grid"}>
      {playingField?.map((row, y: number) => (
        <Box display={"flex"} key={`row:${y}`}>
          {row?.map((card: CardType | null, x: number) =>
            card ? (
              <Card card={card} key={`${x},${y}`} />
            ) : (
              <EmptyCard x={x} y={y} key={`${x},${y}`} />
            )
          )}
        </Box>
      ))}
    </Box>
  );
};
export default PlayingField;
