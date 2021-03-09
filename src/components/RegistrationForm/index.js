import React, { useState } from 'react';
import api from '../../config';
import Form from '../Form';
import Input from '../Input';
import Button from '../Button';

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
  const handleNewDescription = (event) => {
    setNewDescription(event.target.value);
  };

  const addData = () => {
    fetch(`${api.baseUrl}`, {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({
        estabelecimento: newData.cnpj,
        cliente: newData.client,
        valor: newData.price,
        descricao: newData.description,
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
    if (
      newCNPJ === '' ||
      newClient === '' ||
      newPrice === '' ||
      newDescription === ''
    ) {
      console.log('campos vazios');
    } else {
      addData();
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="d-flex justify-content-center w-100">
          <h1>Cadastrar dados de transação</h1>
        </div>
        <div className="col-4 offset-4">
          <Form onSubmit={handleSubmit}>
            <Input
              name="Estabelecimento"
              value={newCNPJ}
              onChange={handleNewCNPJ}
            />
            <div className="mb-4" />

            <Input
              name="Cliente"
              value={newClient}
              onChange={handleNewClient}
            />
            <div className="mb-4" />

            <Input name="Preço" value={newPrice} onChange={handleNewPrice} />
            <div className="mb-4" />

            <Input
              name="Descrição"
              value={newDescription}
              onChange={handleNewDescription}
            />
            <div className="mb-4" />

            <Button onClick={handleSubmit}>Cadastrar Transação</Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
