import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'

// components
import LoadAnimation from 'components/LoadAnimation';

export const ButtonColumn = styled.div`
  width: 800px;
  margin: 0 auto;
  display: flex;
  position: absolute;
  z-index: 1;
  top: 300px;
  right: 0;
  left: 0;
  a {
    flex: 1;
    padding: 56px;
    margin: 16px;
    border: solid 2px #333;
    border-radius: 4px;
    color: #333;
    background-color: #fff;
    text-decoration: none;
    text-align: center;
    font-size: 20px;
  }
`;

class Top extends React.PureComponent {
  render() {
    return (
      <ButtonColumn>
        <Link to="/code" onClick={null}>アポイントメント有りの方</Link>
        <Link to="/other">アポイントメント無しの方</Link>
      </ButtonColumn>
    );
  }
}

export default Top;
