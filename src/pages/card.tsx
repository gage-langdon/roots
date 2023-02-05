import React from 'react';
import { Vertical, Box } from '../components/atoms';
import { type Card as CardType } from '../types/Card';
import Card from '../components/Card';
import useCard from '../context/hooks/useCard';
import { isCardCompatible } from '../utils/card-utils';

const IndexPage = () => {
  const { generateCard } = useCard();
  const [cardA, setCardA] = React.useState<CardType>({
    id: '1',
    nodes: [
      { side: 2, section: 'b' },
      { side: 1, section: 'a' },
    ],
  });
  const [cardB, setCardB] = React.useState<CardType>({
    id: '1',
    nodes: [
      { side: 0, section: 'b' },
      { side: 3, section: 'c' },
    ],
  });

  const generate = React.useCallback(() => {
    setCardA(generateCard());
    setCardB(generateCard());
  }, [generateCard]);

  React.useEffect(() => {
    generate();
  }, []);

  const areCardsCompatible = isCardCompatible({
    existingCard: cardA,
    newCard: cardB,
    offsetFromExistingCard: {
      x: 0,
      y: 1,
    },
  });

  return (
    <Vertical alignItems="center" mt="5%">
      {cardA && <Card card={cardA} />}
      {cardB && <Card card={cardB} />}
      <div>{areCardsCompatible ? 'compatible' : 'not compatible'}</div>
      <Box mt={24}>
        <button onClick={generate}>Re-generate</button>
      </Box>
    </Vertical>
  );
};

export default IndexPage;
