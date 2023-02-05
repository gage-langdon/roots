import React from 'react';
import { type Card as CardType } from '../../types/Card';
import { Box } from '../atoms';
import { gridCellWidth, gridCellHeight } from '../../constants';
import CardDevOverlay from '../CardDevOverlay';
import ArtRender from './ArtRender';

const DEV_MODE = true;

type Props = {
  card: CardType;
  onClick?: () => void;
};

const Card = ({ card, onClick }: Props) => {
  return (
    <Box
      border="1px solid rgba(0,0,0,0.5)"
      borderRadius={7}
      overflow="hidden"
      width={gridCellWidth}
      height={gridCellHeight}
      onClick={onClick}
    >
      <Box
        position="relative"
        backgroundColor="rgba(0,0,0,0.1)"
        height="100%"
        width="100%"
        fontSize={12}
      >
        {DEV_MODE && <CardDevOverlay nodes={card.nodes} />}
        <ArtRender card={card} />
      </Box>
    </Box>
  );
};

export default Card;
