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
  background-image: url(public/destaque.jpg);
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

const Trilhas = () => {
  return (
    <Section>
      <Container>
        <Title>
          <p>Home > Trilha de AUTOESTIMA</p>
          TRILHA DE AUTOESTIMA
        </Title>
      </Container>
      <h1>
        
         CATEGORIAS
        </h1>
        <div><img src="public/model.jpg" alt="" /></div>
        <div><img src="public/model2.jpg" alt="" /></div>
        <div><img src="public/model3.jpg" alt="" /></div>
    </Section>
  );
};

export default Trilhas;
