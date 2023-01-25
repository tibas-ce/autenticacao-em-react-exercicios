import { useState } from "react";
import { useNavigate } from "react-router-dom";
import signup from "../../api/signup";
import { goToFeed, goToLogin } from "../../routes/coordinator";
import { FormContainer, InputContainer } from "./styled";

function SignUpPage() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const sendForm = (event) => {
    event.preventDefault();
    const body = {
      name: name,
      email: email,
      password: password
    };

    signup(body)

  }

  return (
    <main>
      <h1>Cadastro</h1>
      <FormContainer onSubmit={sendForm}>
        <InputContainer>
          <label htmlFor="name">Nome:</label>
          <input
            id="name"
            onChange={(e)=> setName(e.target.value)}
            required
          />
        </InputContainer>
        <InputContainer>
          <label htmlFor="email">E-mail:</label>
          <input
            id="email"
            type="email"
            onChange={(e)=> setEmail(e.target.value)}
            required
          />
        </InputContainer>
        <InputContainer>
          <label htmlFor="password">Senha:</label>
          <input
            id="password"
            type="password"
            onChange={(e)=> setPassword(e.target.value)}
            required
          />
        </InputContainer>

        <button onClick={() => goToFeed(navigate)}>Cadastrar</button>
        <button onClick={() => goToLogin(navigate)}>Já sou cadastrado</button>
      </FormContainer>
    </main>
  );
}

export default SignUpPage;