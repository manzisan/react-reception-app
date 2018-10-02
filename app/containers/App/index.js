/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Particles from 'react-particles-js';

import Top from 'containers/Top';
import ReceptionCode from 'containers/ReceptionCode';
import LoadAnimation from 'components/LoadAnimation';
import pcImage from "images/pcImage.jpg";


const AppWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  flex-direction: column;
  background-color: #ddd;
  height: 100%;
`;

const params = {
  "particles": {
    color_random: true,
    "number": {
      "value": 5,
      "density": {
        "enable": true,
        "value_area": 800
      },
    },
    "color": {
      "value": "#fff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        //ボーダー幅
        "width": 0.5,
        //ボーダー色
        "color": "#333"
      },
    },
    "size": {
      "value": 50,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 80,
        "size_min": 0.1,
        "sync": false
      }
    },
    "move": {
      "enable": true,
      "speed": 5,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "retina_detect": true
}

export default function App() {
  return (
    <AppWrapper>
      <Helmet
        titleTemplate="%s - React.js Boilerplate"
        defaultTitle="React.js Boilerplate"
      >
        <meta name="description" content="A React.js Boilerplate application" />
      </Helmet>
        <Particles 
          params={params}
          style={{position: 'absolute', zIndex: '0'}}
        />
      <BrowserRouter>
        <div>
          <Route exact path='/' component={Top} />
          <Route path='/code' component={ReceptionCode} />
        </div>
      </BrowserRouter>
    </AppWrapper>
  );
}
