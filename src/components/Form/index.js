import React from 'react';
import { FormField } from './styles';

const Form = ({ onSubmit, children }) => (
  <>
    <FormField onSubmit={onSubmit}>{children}</FormField>
  </>
);

export default Form;
