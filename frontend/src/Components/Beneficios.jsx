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
          {" "}
          Apoio psicológico{" "}
          <p>
            Sabemos que a jornada capilar pode ser um caminho emocionalmente
            desafiador. Portanto, oferecemos um espaço seguro e confidencial,
            onde você pode se conectar com psicólogos especializados que
            compreendem as complexidades da sua experiência.
          </p>{" "}
        </Title>
      </Left>
      <Right>
        <Title>
          {" "}
          Tutoriais
          <p>
            Na AfroCode, reconhecemos que a transição capilar é uma jornada
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
