import React from 'react';
import { Vertical } from '../components/atoms';
import { type Card as CardType } from '../types/Card';
import Card from '../components/Card';
import useCard from '../context/hooks/useCard';

const IndexPage = () => {
  const { generateCard } = useCard();
  const [card, setCard] = React.useState<CardType>();

  React.useEffect(() => {
    const newCard = generateCard();
    setCard(newCard);
  }, [generateCard]);

  return <Vertical>{card && <Card {...card} />}</Vertical>;
};

export default IndexPage;
