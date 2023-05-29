import React from 'react';
import LoginForm from './LoginForm';

const App = () => {
  const handleSubmit = (username, password) => {
    console.log( { username, password });
  };

  return (
    <div>
      <h1>Group 7 Login Form</h1>
      <LoginForm onSubmit={handleSubmit} />
    </div>
  );
};

export default App;
