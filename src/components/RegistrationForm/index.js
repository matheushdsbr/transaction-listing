import React, { useState } from 'react';
import api from '../../config';

const RegistrationForm = () => {
  const [newCNPJ, setNewCNPJ] = useState('');
  const [newClient, setNewClient] = useState('');
  const [newPrice, setNewPrice] = useState('');
  const [newDescription, setNewDescription] = useState('');

  const newData = {
    cnpj: newCNPJ,
    client: newClient,
    price: newPrice,
    description: newDescription,
  };

  const handleNewCNPJ = (event) => {
    setNewCNPJ(event.target.value);
  };
  const handleNewClient = (event) => {
    setNewClient(event.target.value);
  };
  const handleNewPrice = (event) => {
    setNewPrice(event.target.value);
  };
  const handleDescription = (event) => {
    setNewDescription(event.target.value);
  };

  const addData = () => {
    fetch(`${api.baseUrl}/companies`, {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({
        cnpj: newData.cnpj,
        transactions: [
          {
            client: newData.client,
            price: newData.price,
            description: newData.description,
          },
        ],
      }),
    })
      .then((response) => response.json())
      .then((data) => (data.message ? 'deu pau' : console.log(data)));

    setNewCNPJ('');
    setNewClient('');
    setNewPrice('');
    setNewDescription('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Cadastrar dados de transação</h1>
        <div>
          <span>CNPJ: </span>
          <input type="text" value={newCNPJ} onChange={handleNewCNPJ} />
        </div>

        <div>
          <span>CLIENT: </span>
          <input type="text" value={newClient} onChange={handleNewClient} />
        </div>

        <div>
          <span>PRICE: </span>
          <input type="number" value={newPrice} onChange={handleNewPrice} />
        </div>

        <div>
          <span>DESCRIPTION: </span>
          <input
            type="text"
            value={newDescription}
            onChange={handleDescription}
          />
        </div>

        <button type="button" onClick={addData}>
          CLICK ME
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
