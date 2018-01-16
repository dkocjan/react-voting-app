import React from 'react';
import styled, { keyframes } from 'styled-components';

const animation = keyframes`
  0% {
    background-position: 100% 0;
  }
  100% {
    background-position: -100% 0;
  }
`;

const AnimatedBackground = styled.div`
  animation-duration: 1s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-name: ${animation};
  animation-timing-function: linear;
  background: #f6f7f8;
  background: linear-gradient(to right, #eeeeee 8%, #dddddd 18%, #eeeeee 33%);
  background-size: 800px 104px;
  height: 10em;
  position: relative;
`;

const ItemsLoading = () => (
  <div className="item">
    <div className="image">
      <AnimatedBackground style={{ height: `${9.5}em` }} />
    </div>
    <div className="middle aligned content">
      <AnimatedBackground
        style={{ width: `${100 + Math.floor(Math.random() * 100)}px`, height: `${1.4}em`, marginBottom: `${0.85}em` }}
      />
      <div className="meta">
        <AnimatedBackground style={{ width: `${110}px`, height: `${1}em`, marginBottom: `${0.85}em` }} />
      </div>
      <div className="description">
        <AnimatedBackground
          style={{ width: `${85 + Math.floor(Math.random() * 10)}%`, height: `${1}em`, marginBottom: `${0.4}em` }}
        />
        <AnimatedBackground
          style={{ width: `${90 + Math.floor(Math.random() * 10)}%`, height: `${1}em`, marginBottom: `${0.4}em` }}
        />
        <AnimatedBackground
          style={{ width: `${90 + Math.floor(Math.random() * 10)}%`, height: `${1}em`, marginBottom: `${0.4}em` }}
        />
        <AnimatedBackground
          style={{ width: `${90 + Math.floor(Math.random() * 10)}%`, height: `${1}em`, marginBottom: `${0.4}em` }}
        />
        <AnimatedBackground
          style={{ width: `${90 + Math.floor(Math.random() * 10)}%`, height: `${1}em`, marginBottom: `${0.4}em` }}
        />
        <AnimatedBackground
          style={{ width: `${30 + Math.floor(Math.random() * 60)}%`, height: `${1}em`, marginBottom: `${0.5}em` }}
        />
        <AnimatedBackground
          style={{ width: `${10 + Math.floor(Math.random() * 15)}%`, height: `${1}em`, marginBottom: `${0.4}em` }}
        />
      </div>
    </div>
  </div>
);

export default ItemsLoading;
