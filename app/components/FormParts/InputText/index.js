import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { compose } from "redux";
import styled from 'styled-components';
import {
  Form,
  FormGroup,
  Col,
  ControlLabel,
  Button,
  ButtonToolbar,
} from 'react-bootstrap';

const StyledInput = styled('input').attrs({
  type: 'text',
})`
  padding: 0px 18px;
  border-radius: 5.4px;
  color: #333;
  font-size: 100px;
  background: #fff;
`

function InputTextBox({name, value, placeholder, width, height}) {
  return (
    <StyledInput
      type="text"
      name={name}
      value={value}
      placeholder={null}
      maxLength={4}
      className={'form-control'}
      style={{
        width: width,
        height: height,
      }}
    />
  );
}

export default InputTextBox;