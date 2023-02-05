import { type CardNode } from '../types/Card';

export const doesNodeMatch = (nodeA: CardNode, nodeB: CardNode) => {
  return nodeA.side === nodeB.side && nodeA.section === nodeB.section;
};
