import React from 'react';
import { type Card as CardType } from '../types/Card';
import { Vertical, Box } from '../components/atoms';
import { gridCellWidth, gridCellHeight } from '../constants';
import CardDevOverlay from './CardDevOverlay';

const DEV_MODE = true;
const Card = ({}: CardType) => {
  return (
    <Box
      border="1px solid black"
      borderRadius={7}
      width={gridCellWidth}
      height={gridCellHeight}
    >
      <Box
        position="relative"
        backgroundColor="rgba(0,0,0,0.1)"
        height="100%"
        width="100%"
      >
        {DEV_MODE && <CardDevOverlay />}
      </Box>
    </Box>
  );
};

export default Card;
