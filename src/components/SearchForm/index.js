import React, { useState } from 'react';
import { Container, FormContainer } from './styles';
import api from '../../config';
import Form from '../Form';
import Input from '../Input';

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
            <h1>Buscar dados de transação</h1>
          </div>

          <div className="col-4 offset-4">
            <FormContainer>
              <Form onSubmit={handleSubmit}>
                <Input name="Estabelecimento" onChange={handleChange} />
              </Form>
            </FormContainer>
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
