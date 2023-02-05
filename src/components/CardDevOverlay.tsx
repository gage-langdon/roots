import React from 'react';
import { Vertical, Horizontal } from '../components/atoms';

const CardDevOverlay = () => {
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
          <Horizontal position="absolute" transform="translateY(-20px)">
            <b>0</b>
          </Horizontal>
          <span>a</span>
          <span>b</span>
          <span>c</span>
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
          <Vertical position="absolute" transform="translateX(20px)">
            <b>1</b>
          </Vertical>
          <span>a</span>
          <span>b</span>
          <span>c</span>
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
          <Horizontal position="absolute" transform="translateY(20px)">
            <b>2</b>
          </Horizontal>
          <span>a</span>
          <span>b</span>
          <span>c</span>
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
          <Vertical position="absolute" transform="translateX(-20px)">
            <b> 3</b>
          </Vertical>
          <span>a</span>
          <span>b</span>
          <span>c</span>
        </Vertical>
      </>
    </>
  );
};

export default CardDevOverlay;
