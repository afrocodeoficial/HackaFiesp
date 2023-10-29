import React from 'react'

const Cadastro = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const [_, setCookies] = useCookies(["access_token"]);
    const navigate = useNavigate();
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      try {
        await axios.post("http://localhost:3001/auth/register", {
          username,
          email,
          password,
        });
        swal("Cadastro concluído! Agora faça login. " , "success");
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
        <Form onSubmit={handleSubmit}>
          <Title>Cadastrar-se</Title>
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
              type="password"
              id="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </FormG>
          <Button type="submit">Cadastrar</Button>
          <AuthGoogle />
        </Form>
      </Container>
    );
  };
export default Cadastro