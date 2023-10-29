import React, { useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import swal from "sweetalert";

const Section = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;500&display=swap");
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #000000;
  height: 100vh;
  width: 100%;
  display: flex;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  color: #000000;
  width: 100%;
  height: 100vh;
`;

const Title = styled.h1`
  display: flex;
  font-size: 2rem;
  font-weight: bold;
  justify-content: center;
  color: #000000;
`;

const FormG = styled.form`
  display: flex;
  width: 50%;
  justify-content: center;
  gap: 200px;
`;

const Form = styled.form`
  width: 500px;
  display: flex;

  flex-direction: column;
  gap: 25px;
  @media only screen and (max-width: 768px) {
    width: 300px;
  }
`;

const Input = styled.input`
  padding: 20px;
  background-color: #dcdbde52;
  border: 2px solid;
  border-radius: 5px;
  color: #f9920c;
`;

const Label = styled.label`
  padding: 20px 0px;
  border: none;
  border-radius: 5px;
  color: #f9920c;
  width: 100%;
  font-family: "Poppins", sans-serif;
  font-size: 20px;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 150px;
  width: 50%;
`;

const Right = styled.div`
  display: flex;
  width: 50%;
`;

const Img = styled.img`
  width: 100%;
`;
const Img1 = styled.img``;
const Button = styled.button`
  height: 50px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 700;
  line-height: 19px;
  text-align: center;
  border: 1px;
  border-style: solid;
  border-radius: 50px;
  border-color: #a984f8;
  color: #fcfcfc;
  background-color: #592316;
  text-transform: uppercase;
  transition: all 0.3s ease;

  @media (min-width: 320px) {
    padding: 12px 24px;
    justify-content: center;
  }

  &:hover {
    color: #ffffff;
    background-color: #f9920c;
    border-color: #ebf884;
    box-shadow: rgb(100 100 111 / 50%) 0 7px 29px 0;
  }
`;
const ButtonVerSenha = styled.button`
  width: 100%;
`;

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordShown, setPasswordShown] = useState(false);

  const [_, setCookies] = useCookies(["access_token"]);
  const navigate = useNavigate();

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };


  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("http://localhost:3001/auth/register", {
        username,
        email,
        password,
      });
      swal("Cadastro concluído! Agora faça login. ", "success");
    } catch (error) {
      if (error.response && error.response.status === 400) {
        swal(
          "Usuário já cadastrado. Por favor, escolha outro nome de usuário."
        );
      } else {
        console.log(error);
      }
    }
  };

  return (
    <Container>
      <Right>  <div>
            <Img1 src="public/bgRegister.png" />
          </div>
        
      </Right>

      <Left>
        <Form onSubmit={handleSubmit}>
         

          <Title>Olá, seja bem vindo!</Title>
          <FormG>
            <Label htmlFor="username">Usuario:</Label>
            <Input
              type="text"
              id="username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </FormG>
          <FormG>
            <Label htmlFor="email">Email:</Label>
            <Input
              type="email"
              id="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </FormG>
          <FormG>
            <Label htmlFor="password">Senha:</Label>
            <Input
            
              type={passwordShown ? "text" : "password"}
              id="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </FormG>
          <Link style={{ "text-decoration": "none" }} to="/login">Já é cadastrado? Faça login!</Link>
          <Button type="submit">Cadastrar</Button> 
<FormG>
          <Input type={passwordShown ? "text" : "password"} />
          <ButtonVerSenha onClick={togglePassword}>ver senha </ButtonVerSenha>
          </FormG>
        </Form>
        
       </Left>
    </Container>
  );
};
export default Register;
