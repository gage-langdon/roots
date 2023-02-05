export type CardNode = {
  side: 0 | 1 | 2 | 3;
  section: 'a' | 'b' | 'c';
};

export type Card = {
  id: string;
  nodes: Array<CardNode>;
};
