import { type Card } from '../types/Card';

// check to see if a selected card can be placed next to an existing card
export const isCardCompatible = ({
  existingCard,
  newCard,
  offsetFromExistingCard,
}: {
  existingCard: Card;
  newCard: Card;
  offsetFromExistingCard: { x: number; y: number }; // 1,0 = card just played on right of existing card. 0,1 = card just played on bottom of existing card
}) => {
  const top = offsetFromExistingCard.x === 0 && offsetFromExistingCard.y === -1;
  const bottom =
    offsetFromExistingCard.x === 0 && offsetFromExistingCard.y === 1;
  const left =
    offsetFromExistingCard.x === -1 && offsetFromExistingCard.y === 0;

  // right is defaulted below
  // const right =
  //   offsetFromExistingCard.x === 1 && offsetFromExistingCard.y === 0;

  const CompatibleCardNodesMap: {
    [Key in string]: { [Key in string]: string };
  } = {
    top: {
      // direction of new card being placed in relation to the existing card
      '0a': '2a',
      '0b': '2b',
      '0c': '2c',
    },
    right: {
      '1a': '3a', // existing | right
      '1b': '3b',
      '1c': '3c',
    },
    bottom: {
      '2a': '0a',
      '2b': '0b',
      '2c': '0c',
    },
    left: {
      '3a': '1a',
      '3b': '1b',
      '3c': '1c',
    },
  };

  const respectiveNodeMap =
    CompatibleCardNodesMap[
      top ? 'top' : bottom ? 'bottom' : left ? 'left' : 'right'
    ];

  const foundCompatibleNode = existingCard.nodes.find((existingNode) => {
    const nodeKey = `${existingNode.side}${existingNode.section}`;
    // does the card contain an active node on the side that the new card is being placed?
    if (!Object.keys(respectiveNodeMap).includes(nodeKey)) return false; // NO
    const nodeThatNewCardNeeds = respectiveNodeMap[nodeKey]; // YES

    // does the new card have a node that matches the node that the existing card has?
    const nodeFoundOnNewCard = newCard.nodes.find(
      (node) => `${node.side}${node.section}` === nodeThatNewCardNeeds
    );
    return Boolean(nodeFoundOnNewCard);
  });
  return foundCompatibleNode;
};

export const generateRandomNode = () => {
  const sides = [0, 1, 2, 3];
  const sections = ['a', 'b', 'c'];
  const side = sides[Math.floor(Math.random() * sides.length)];
  const section = sections[Math.floor(Math.random() * sections.length)];
  return {
    side,
    section,
  };
};
