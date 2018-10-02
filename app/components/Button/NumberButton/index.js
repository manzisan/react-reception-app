import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { compose } from "redux";
import styled from 'styled-components';


import InputTextBox from 'components/FormParts/InputText';
import {
  Form,
  FormGroup,
  Col,
  ControlLabel,
  Button,
  ButtonToolbar,
} from 'react-bootstrap';
// conponents

import { ButtonColumn } from 'containers/Top';

function NumberButton({number, ...rest}) {
  return (
    <Button>
      <Field
        id={'name'}
        name={"code"}
        width={'100%'}
        component={InputTextBox}
        type="text"
        placeholder="Name"
      />
      {
        number.map((n, key)=> {
          return <div key={key}>{n}</div>
        })
      }
    </Button>
  )
}

export default compose(
  reduxForm({
    form: 'ReceptionCode',
  })
)(ReceptionCode);