import React from 'react';
import LoginForm from './LoginForm';
import './App.css';

const App = () => {
  const handleSubmit = (username, password) => {
    console.log( { username, password });
  };

  return (
    <div>
      <h1>Login Form</h1>
      <LoginForm onSubmit={handleSubmit} />
    </div>
  );
};

export default App;
