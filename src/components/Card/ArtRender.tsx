import React from "react";
import { Box } from "../atoms";
import { type Card, type CardNode } from "../../types/Card";
import { gridCellWidth, gridCellHeight } from "../../constants";

type Props = {
  card: Card;
};

const ArtRender = ({ card }: Props) => {
  return <Box height={gridCellHeight} width={gridCellWidth}></Box>;
};

export default ArtRender;
