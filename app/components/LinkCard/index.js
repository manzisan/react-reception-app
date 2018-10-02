import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'

const Card = styled(Link)`
  flex: 1;
  padding: 56px 0;
  margin: 16px;
  background-color: rgba(255,255,255, .4);
  border: 1px solid #fff;
  color: #666;
  text-align: center;
  text-decoration: none;
  transition: all .3s;
  border-radius: 4px;
  font-size: 18px;
  &:hover {
    box-shadow: 0 0 45px rgba(255,255,255,.6);
  }
`;

function LinkCard({ text, link, clickMethod, ...rest }) {
  return (
    <Card to={link} onClick={clickMethod || ''}>
      { text }
    </Card>
  )
}

export default LinkCard;