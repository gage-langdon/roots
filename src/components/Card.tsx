import React from 'react';
import { type Card as CardType } from '../types/Card';
import { Box } from '../components/atoms';
import { gridCellWidth, gridCellHeight } from '../constants';
import CardDevOverlay from './CardDevOverlay';

const DEV_MODE = true;
const Card = ({ nodes }: CardType) => {
  return (
    <Box
      border="1px solid rgba(0,0,0,0.5)"
      borderRadius={7}
      overflow="hidden"
      width={gridCellWidth}
      height={gridCellHeight}
    >
      <Box
        position="relative"
        backgroundColor="rgba(0,0,0,0.1)"
        height="100%"
        width="100%"
        fontSize={12}
      >
        {DEV_MODE && <CardDevOverlay nodes={nodes} />}
      </Box>
    </Box>
  );
};

export default Card;
