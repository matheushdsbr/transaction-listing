// import React from 'react';
import React from 'react';
import Input from '../Input';
import { FormContainer } from './styles';

const Form = () => (
  <>
    <FormContainer>
      <span>Estabelecimento: </span>
      <Input />

      <hr />

      <span>Client: </span>
      <Input />

      <hr />

      <span>Value: </span>
      <Input />

      <hr />

      <span>Description: </span>
      <Input />

      <hr />

      <button type="button">Adicionar Objetos no array</button>
    </FormContainer>
  </>
);
export default Form;
