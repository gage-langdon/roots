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
  selected?: boolean;
};

const Card = ({ card, onClick, selected = false }: Props) => {
  return (
    <Box
      borderRadius={7}
      overflow="hidden"
      width={gridCellWidth}
      height={gridCellHeight}
      onClick={onClick}
      css={`
        border: 1px solid rgba(0, 0, 0, 0.2);

        &:hover {
          box-shadow: 0 3px 3px 3px rgba(0, 0, 0, 0.1);
          /* border: 1px solid rgba(0, 0, 0, 0.4); */
        }

        ${selected && 'border: 1px solid rgba(15, 85, 249, 0.2);'}
        ${selected && 'box-shadow: 0 3px 5px 2px rgba(0, 0, 0, 0.2);'}
      `}
    >
      <Box
        position="relative"
        // backgroundColor="rgba(0,0,0,0.1)"
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
