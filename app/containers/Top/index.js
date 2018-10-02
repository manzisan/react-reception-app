import React from 'react';
import styled from 'styled-components';
import LinkCard from 'components/LinkCard';
import LoadAnimation from 'components/LoadAnimation';

const Logo = styled.img`
  width: 300px;
`;

const ImageBox = styled.div`
  padding-top: 100px;
  text-align: center;
`;

export const ButtonColumn = styled.div`
  width: 800px;
  margin: 0 auto;
  display: flex;
  position: absolute;
  z-index: 1;
  top: 270px;
  right: 0;
  left: 0;
`;


class Top extends React.PureComponent {
  render() {
    console.log(this.props);
    return (
      <div>
        <ImageBox>
          <Logo src="https://www.google.co.jp/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"/>
        </ImageBox>
        <ButtonColumn>
          <LinkCard link="/code" text={'アポイントメントをお持ちの方'} />
          <LinkCard link="/other" text={'アポイントメントが無い方'} />
        </ButtonColumn>
      </div>
    );
  }
}

export default Top;
