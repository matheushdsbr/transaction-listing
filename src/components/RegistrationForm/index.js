import React from 'react';

const RegistrationForm = () => {
  const handleChange = (event) => {
    console.log(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Cadastrar dados de transação</h1>
        <span>CNPJ: </span>
        <input type="text" onChange={handleChange} />
      </form>
    </div>
  );
};

export default RegistrationForm;
