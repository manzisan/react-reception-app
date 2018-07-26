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

class ReceptionCode extends React.Component {
  render () {
    const { handleSubmit, pristine, reset, submitting } = this.props;
    const number = [1,2,3,4,5,6,7,8,9,0];
    return (
      <Form horizontal onSubmit={ null }>
        <ButtonColumn>
          <Field
            id={'name'}
            name={"code"}
            width={'100%'}
            component={InputTextBox}
            type="text"
            placeholder="Name"
          />
          {
            number.map((n, key)=>{
              return <div key={key}>{n}</div>
            })
          }
        </ButtonColumn>
      </Form>
    )
  }
}

export default compose(
  reduxForm({
    form: 'ReceptionCode',
  })
)(ReceptionCode);