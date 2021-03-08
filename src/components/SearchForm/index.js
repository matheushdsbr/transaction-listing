import React, { useState } from 'react';
import api from '../../config';

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
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Buscar dados de transação</h1>
        <span>CNPJ: </span>
        <input type="text" onChange={handleChange} />
      </form>

      {transactions.map((item) => (
        <div key={item.id}>
          <p>Cliente: {item.cliente}</p>
          <p>Preço: {item.valor}</p>
          <p>Descrição: {item.descricao}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default SearchForm;
