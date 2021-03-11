import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, ContainerTitle, ContainerList } from './styles';
import api from '../../config';
import HeroText from '../HeroText';
import Form from '../Form';
import Input from '../Input';
import Icon from '../../images/icon-search.svg';
import Redirect from '../Redirect';

const SearchForm = () => {
  const [CNPJ, setCNPJ] = useState('');
  const [transactions, setTransactions] = useState([]);
  const [resultTitle, setResultTitle] = useState('');

  const handleSucess = (data) => {
    setTransactions(data);
    setResultTitle(CNPJ);
  };

  const handleChange = (event) => {
    setCNPJ(event.target.value);
  };

  const searchCNPJ = async () => {
    fetch(`${api.baseUrl}?estabelecimento=${CNPJ}`)
      .then((response) => response.json())
      .then((data) => handleSucess(data));
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
            <div>
              <Form onSubmit={handleSubmit}>
                <Input name="Estabelecimento" onChange={handleChange} search />
                <img src={Icon} alt="ícone-de-busca" />
              </Form>
            </div>

            <Redirect>
              <Link to="/register">Clique aqui</Link> para cadastrar uma
              transação.
            </Redirect>
          </div>

          {resultTitle && (
            <ContainerTitle>
              <p>
                Transações realizadas pelo estabelecimento:
                <strong> {resultTitle}</strong>
              </p>
            </ContainerTitle>
          )}

          {transactions.map((item) => (
            <div className="col-12 col-md-6 offset-md-3">
              <ContainerList key={item.id}>
                <p>
                  <strong>Cliente:</strong> {item.cliente}
                </p>
                <p>
                  <strong>Preço:</strong> {item.valor}
                </p>
                <p>
                  <strong>Descrição:</strong> {item.descricao}
                </p>
              </ContainerList>
            </div>
          ))}
        </Container>
      </div>
    </div>
  );
};

export default SearchForm;
