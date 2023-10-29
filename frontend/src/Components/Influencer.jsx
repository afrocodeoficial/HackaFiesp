import React from "react";
import styled from "styled-components";


const Section = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 20px;
  height: auto;
  flex-direction: column;
  h1{


    margin-top: 50px;
    font-size: 50px;
  font-weight: bold;
  font-family: "Poppins", sans-serif;

    text-align: center;
  

    color: #fc8b00;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 500px;
  background-image: url("/destaque.jpg");
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #ffffff;
  font-size: 50px;
  font-weight: bold;
  font-family: "Poppins", sans-serif;
  gap: 60px;
  p {
    font-size: 25px;
    font-weight: 300;
  }
`;


const Div = styled.div`
  display: flex;
  flex-direction: column;
 gap: 30px;

  
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

const Influencer = () => {
  return (
    <Section>
      <Container>
        <Title>
          <p>Home ➵ DashBoard Influencer</p>
          DashBoard Influencer
        </Title>
      </Container>

     

<Div> <h1>Olá, Lilian!</h1>

    <Button>Abrir transmissão ao vivo <img src="/Group.png"  /></Button>
</Div>



        <div><img src="/Métricas.jpg" alt="" /></div>
        <div><img src="/4.jpg" alt="" /></div>
        


    </Section>
  );
};

export default Influencer;
