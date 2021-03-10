import styled from 'styled-components';

export const ContainerRedirect = styled.div`
  margin-top: 20px;

  p {
    margin-bottom: 10px;

    a {
      display: inline-block;
      color: blue;
      text-decoration: none;
      font-weight: 500;

      &::after {
        content: '';
        display: block;
        width: 0;
        height: 2px;
        background: blue;
        transition: width 0.2s;
      }

      &:hover::after {
        width: 100%;
      }
    }
  }
`;
