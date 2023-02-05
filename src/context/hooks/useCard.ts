import { Card } from '../../types/Card';
import { generateRandomNode } from '../../utils/card-utils';

export type UseCardType = {
  generateCard: () => Card;
};

const useCard = () => {
  const generateCard = ({ numNodes = 2 }: { numNodes?: 2 | 3 | 4 } = {}) => {
    const newNodes = new Array(numNodes)
      .fill(null)
      .map(() => generateRandomNode());
    const randomId = Math.random().toString(36).substring(7);
    return {
      id: randomId,
      nodes: newNodes,
    } as Card;
  };

  return {
    generateCard,
  };
};

export default useCard;
