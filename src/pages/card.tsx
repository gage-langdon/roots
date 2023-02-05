import React from 'react';
import { Vertical } from '../components/atoms';
import { type Card as CardType } from '../types/Card';
import Card from '../components/Card';
import useCard from '../context/hooks/useCard';
import { isCardCompatible } from '../utils/card-utils';

const IndexPage = () => {
  //   const { generateCard } = useCard();
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

  //   React.useEffect(() => {
  //     setCardA(generateCard());
  //     setCardB(generateCard());
  //   }, [generateCard]);

  const areCardsCompatible = isCardCompatible({
    existingCard: cardA,
    newCard: cardB,
    offsetFromExistingCard: {
      x: 0,
      y: 1,
    },
  });

  return (
    <Vertical alignItems="center" mt="25%">
      {cardA && <Card {...cardA} />}
      {cardB && <Card {...cardB} />}
      <div>{areCardsCompatible ? 'compatible' : 'not compatible'}</div>
    </Vertical>
  );
};

export default IndexPage;
