import React from 'react';
import { Vertical, Horizontal } from '../components/atoms';
import { type CardNode } from '../types/Card';
import { doesNodeMatch } from '../utils/card-utils';

type Props = {
  nodes: Array<CardNode>;
};

const CardDevOverlay = ({ nodes }: Props) => {
  const nodeMap = nodes.map((node) => `${node.side}${node.section}`, []);
  const getStyle = (side: 0 | 1 | 2 | 3, section: 'a' | 'b' | 'c') => {
    if (nodeMap.includes(`${side}${section}`))
      return {
        color: 'rgba(0,0,0,1)',
        fontWeight: 'bold',
        fontSize: '1.2em',
      };
    return {
      color: 'rgba(0,0,0,0.2)',
    };
  };

  return (
    <>
      <>
        <Horizontal
          position="absolute"
          top={0}
          left={0}
          width="100%"
          justifyContent={'space-around'}
        >
          <span style={getStyle(0, 'a')}>0a</span>
          <span style={getStyle(0, 'b')}>0b</span>
          <span style={getStyle(0, 'c')}>0c</span>
        </Horizontal>
      </>
      <>
        <Vertical
          position="absolute"
          top={0}
          right={0}
          height="100%"
          justifyContent={'space-around'}
          transform="translateX(-3px)"
        >
          <span style={getStyle(1, 'a')}>1a</span>
          <span style={getStyle(1, 'b')}>1b</span>
          <span style={getStyle(1, 'c')}>1c</span>
        </Vertical>
      </>
      <>
        <Horizontal
          position="absolute"
          bottom={0}
          left={0}
          width="100%"
          justifyContent={'space-around'}
        >
          <span style={getStyle(2, 'a')}>2a</span>
          <span style={getStyle(2, 'b')}>2b</span>
          <span style={getStyle(2, 'c')}>2c</span>
        </Horizontal>
      </>
      <>
        <Vertical
          position="absolute"
          height="100%"
          justifyContent={'space-around'}
          top={0}
          left={0}
          transform="translateX(3px)"
        >
          <span style={getStyle(3, 'a')}>3a</span>
          <span style={getStyle(3, 'b')}>3b</span>
          <span style={getStyle(3, 'c')}>3c</span>
        </Vertical>
      </>
    </>
  );
};

export default CardDevOverlay;
