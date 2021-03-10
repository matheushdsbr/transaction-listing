import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, FormContainer } from './styles';
import api from '../../config';
import HeroText from '../HeroText';
import Form from '../Form';
import Input from '../Input';
import Icon from '../../images/icon-search.svg';
import Redirect from '../Redirect';

const SearchForm = () => {
  const [CNPJ, setCNPJ] = useState('');
  const [transactions, setTransactions] = useState([]);

  const handleChange = (event) => {
    setCNPJ(event.target.value);
  };

  const searchCNPJ = async () => {
    fetch(`${api.baseUrl}?estabelecimento=${CNPJ}`)
      .then((response) => response.json())
      .then((data) => (data.message ? 'deu pau' : setTransactions(data)));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    searchCNPJ();
  };

  return (
    <div className="container">
      <div className="row">
        <Container>
          <div className="d-flex justify-content-center">
            <HeroText>Buscar dados de transação</HeroText>
          </div>

          <div className="col-12 col-md-4 offset-md-4">
            <FormContainer>
              <Form onSubmit={handleSubmit}>
                <Input name="Estabelecimento" onChange={handleChange} search />
                <img src={Icon} alt="ícone-de-busca" />
              </Form>
            </FormContainer>

            <Redirect>
              <Link to="/register">Clique aqui</Link> para cadastrar uma
              transação.
            </Redirect>
          </div>

          {transactions.map((item) => (
            <div key={item.id}>
              <p>Cliente: {item.cliente}</p>
              <p>Preço: {item.valor}</p>
              <p>Descrição: {item.descricao}</p>
              <hr />
            </div>
          ))}
        </Container>
      </div>
    </div>
  );
};

export default SearchForm;
