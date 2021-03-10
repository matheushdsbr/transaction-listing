import React from 'react';
import { ButtonField } from './styles';

const Button = ({ onClick, children }) => (
  <ButtonField type="button" onClick={onClick}>
    {children}
  </ButtonField>
);

export default Button;
