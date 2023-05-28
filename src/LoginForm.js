import React, { useState } from 'react';

const LoginForm = ({onSubmit}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(username, password);
  };

  const isFormValid = username !== '' && password !== '';

  return (
    <form>
      <div>
        <label htmlFor="username">Enter your username:</label>
        <input
          type="text"
          id="usernameInput"
          value={username}
          onChange={handleUsernameChange}
          placeholder="Username"
        />
      </div>
      <div>
        <label htmlFor="Password">Enter your Password:</label>
        <input
          type="text"
          id="passwordInput"
          value={password}
          onChange={handlePasswordChange}
          placeholder="Password"
        />
      </div>
      <button
        id="login-button"
        type="submit"
        onClick={handleSubmit}
        disabled={!isFormValid}
      >
        Submit
      </button>
    </form>
  );
};

export default LoginForm;
