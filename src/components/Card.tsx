import React from 'react';
import { type Card as CardType } from '../types/Card';
import { Vertical, Horizontal, Box } from '../components/atoms';
import { gridCellWidth, gridCellHeight } from '../constants';

const Card = ({}: CardType) => {
  return (
    <Vertical
      border="1px solid black"
      borderRadius={7}
      width={gridCellWidth}
      height={gridCellHeight}
    >
      card
    </Vertical>
  );
};

export default Card;
