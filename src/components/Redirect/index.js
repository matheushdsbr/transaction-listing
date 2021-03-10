import React from 'react';
import { ContainerRedirect } from './styles';

const Redirect = ({ children }) => (
  <ContainerRedirect>
    <p>{children}</p>
  </ContainerRedirect>
);

export default Redirect;
