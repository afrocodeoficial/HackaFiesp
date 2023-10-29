import React, { useRef, useState } from "react";

import styled from "styled-components";

const Section = styled.div`
 @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;500&display=swap");
  height: 100vh;
  width: 100%;
   display: flex;

`;

const Container = styled.div`
display: flex;
width: 100%;
 align-items: center;
justify-content: space-between;

 


`;

const Left = styled.div`
 


  display: flex;
  justify-content: center;
  width: 50%;
  height: 100%;
  border-radius: 5px;
  margin: 5rem auto 0 auto;


  @media (max-width: 768px) {
    width: 100%;
    height: 150%;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Right = styled.div`
 
 width: 50%;
  height: 100%;

`;




const Title = styled.h1`
font-family: "Poppins", sans-serif;
  margin-top: 35px;
  display: flex;
  font-size: 3rem;
  font-weight: 200px;
  justify-content: center;
  color: #f2811d;
`;
const Line = styled.img`
  width: 30px;
  margin-left: 25vh;
  display: flex;
  align-items: center;
  justify-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    margin-left: 8.5rem;
  }
`;

const Desc = styled.p`
  font-size: 20px;
color: white;
  display: flex;
  text-align: center;
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

const TextArea = styled.textarea`
 padding: 20px;
  background-color: #dcdbde52;
  border: 2px solid;
  border-radius: 5px;
  color: #f9920c;
`;

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


const Img = styled.img`
width: 50%;
`;

const Forms = () => {
  const ref = useRef();
  const [success, setSuccess] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_du2spom",
        "template_v5bjspl",
        ref.current,
        "yM1q9gUGf8cqrIn4F"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
        },
        (error) => {
          console.log(error.text);
          setSuccess(false);
        }
      );
  };
  return (
    <Section id="contact" className="header_link">
      <Container>
        <Left>
          <Form ref={ref} onSubmit={handleSubmit}>
            <Title>Fale conosco</Title>

          

            <Desc>
              Sinta-se à vontade para entrar em contato enviando o
              formulário abaixo e retornaremos o mais breve possível.
            </Desc>
            <Input  placeholder="Nome" name="name"  />
            <Input type="email" placeholder="Email" name="email" />
            <TextArea
              placeholder="Escreva sua mensagem:"
              name="message"
              rows={7}
            />
            <Button type="submit">Enviar</Button>
            {success &&
              "Sua mensagem foi enviada com sucesso! Em breve retornaremos :)"}
          </Form>
        </Left>

        <Right>

<Img src="public/modeloforms.png"  />
        </Right>

      </Container>
    </Section>
  );
};

export default Forms;