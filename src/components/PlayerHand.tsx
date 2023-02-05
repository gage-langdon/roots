import React from 'react';
import useGameController from '../context/hooks/useGameController';
import Card from './Card'
import { Horizontal } from './atoms';


const Component = () => {
  
  const { playersHand, onCardSelect } = useGameController();
  const Cards = playersHand.map((card, index) => <Card onClick={() => onCardSelect(index)} card={card} />)
  
  return (
    <Horizontal justifyContent="center" gap="12px">
      {Cards}
    </Horizontal> 
  )
};

export default Component;
