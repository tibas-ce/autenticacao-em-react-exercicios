import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import login from "../../api/login.js";
import { goToFeed, goToSignUp } from "../../routes/coordinator.js";
import { FormContainer, InputContainer } from "./styled.js";


function LoginPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const sendForm = (event) => {
    event.preventDefault();
    const body = {
      email,
      password
    }
    login(body)
  }
 
  return (
    <main>
      <h1>Login</h1>
      <FormContainer onSubmit={sendForm}>
        <InputContainer>
          <label htmlFor="email">E-mail:</label>
          <input
            id="email"
            type= "email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </InputContainer>
        <InputContainer>
          <label htmlFor="password">Senha:</label>
          <input
            id="password"
            type= "password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </InputContainer>
        <button onClick={() => goToFeed(navigate)}>Entrar</button>
        <button onClick={() => goToSignUp(navigate)}>Não tenho cadastro</button>
      </FormContainer>
    </main>
  );
}

export default LoginPage;
