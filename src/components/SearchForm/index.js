import React, { useState } from 'react';
import api from '../../config';

const SearchForm = () => {
  const [CNPJ, setCNPJ] = useState('');
  const [transactions, setTransactions] = useState([]);

  const handleChange = (event) => {
    setCNPJ(event.target.value);
  };

  const searchCNPJ = async () => {
    fetch(`${api.baseUrl}/companies?cnpj=${CNPJ}`)
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
          <strong>CNPJ: {item.cnpj}</strong>
          {item.transactions.map((transaction) => (
            <div key={transaction.client}>
              <p>CLIENT: {transaction.client}</p>
              <p>PRICE: {transaction.price}</p>
              <p>DESCRIPTION: {transaction.description}</p>
              <hr />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default SearchForm;
