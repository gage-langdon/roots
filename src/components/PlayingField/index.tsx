import React from "react";
// Hooks
import useGameController from "../../context/hooks/useGameController";
// componets
import Card from "../Card";
import { Box } from "../atoms";
// utils
import { gridCellWidth, gridCellHeight } from "../../constants";
import { numbersToCoord } from "../../types/Coord";
import { type Card as CardType } from "../../types/Card";

const PlayingField = () => {
  const { playingField, onCardPlace } = useGameController();

  const EmptyCard = ({ x, y }: { x: number; y: number }) => {
    return (
      <Box
        border="1px solid rgba(0,0,0,0.5)"
        backgroundColor={"tan"}
        //
        height={gridCellHeight}
        width={gridCellWidth}
        //
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        //

        onClick={() => onCardPlace(numbersToCoord(x, y))}
      >
        {`${x},${y}`}
      </Box>
    );
  };

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
