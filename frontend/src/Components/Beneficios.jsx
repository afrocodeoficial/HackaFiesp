import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  height: 500px;

  background-color: white;
`;

const Title = styled.div`
display: flex;
flex-direction: column;
align-items: center;
  color: white;
  font-size: 50px;
  font-weight: bold;
  font-family: "Poppins", sans-serif;
gap: 60px;
  p {
  width: 80%;
    font-size: 25px;
    font-weight: 300;
  }
`;

const Left = styled.div`
  display: flex;
  background-color: #592316;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 500px;
  width: 50%;
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #f2811d;
  height: 500px;
  width: 50%;
`;

const Beneficios = () => {
  return (
    <Container>
      <Left>
        <Title>
      
        Resgate sua autoestima
          <p>
          Nosso objetivo é construir um ambiente cada vez mais seguro e resgatar sua ancestralidade, para que você possa trilhar um caminho repleto de autoestima e empoderamento! 
          </p>{" "}
        </Title>
      </Left>
      <Right>
        <Title>
      
          Tutoriais
          <p>
            Na Djeli, reconhecemos que a transição capilar é uma jornada
            única e que cada mulher tem suas próprias necessidades e
            preferências quando se trata de cuidar de seus cabelos naturais. É
            por isso que oferecemos diversos tutoriais.
          </p>
        </Title>
      </Right>
    </Container>
  );
};

export default Beneficios;
