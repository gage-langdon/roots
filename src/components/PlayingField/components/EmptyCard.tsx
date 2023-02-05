import React from "react";
import useGameController from "../../../context/hooks/useGameController";
import { gridCellHeight, gridCellWidth, showDebug } from "../../../constants";
import { numbersToCoord } from "../../../types/Coord";
import { Box } from "../../atoms";

export default function EmptyCard({ x, y }: { x: number; y: number }) {
  const { onCardPlace } = useGameController();

  const debugCss = {
    border: showDebug.playingField.showOutline
      ? "1px solid rgba(0,0,0,0.5)"
      : "",
  };

  return (
    <Box
      border={debugCss.border}
      backgroundColor={"tan"}
      //
      height={gridCellHeight}
      width={gridCellWidth}
      //
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      //
      // make (0,0)(0,9)(9,0)(9,9) have a border radius in the corners of the playing field?

      onClick={() => onCardPlace(numbersToCoord(x, y))}
    >
      {showDebug.playingField.showCoord ? `(${x},${y})` : ""}
    </Box>
  );
}
