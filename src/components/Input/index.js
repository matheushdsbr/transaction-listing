import React from 'react';
import { InputContainer } from './styles';

const Input = ({ name, onChange, value }) => (
  <>
    <InputContainer>
      <input type="text" id={name} value={value} onChange={onChange} required />
      <label htmlFor={name}>{name}</label>
    </InputContainer>
  </>
);

export default Input;
