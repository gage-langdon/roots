import { Card } from '../../types/Card';

export type UseCardType = {
  generateCard: () => Card;
};

const useCard = () => {
  const generateCard = () => {
    const mockCard: Card = {
      id: '1',
      nodes: [
        {
          side: 1,
          section: 'a',
        },
        {
          side: 2,
          section: 'b',
        },
      ],
    };

    return mockCard;
  };

  return {
    generateCard,
  };
};

export default useCard;
