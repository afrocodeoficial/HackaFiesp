import React from "react";
import styled from "styled-components";
import SobreNos from "./sobrenos";
import Beneficios from "./Beneficios";
import Forms from "./Forms";
import Footer from "./Footer";


const Section = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;500&display=swap");
  width: 100vw;
  height: 200%;


`;

const Container = styled.div`
  background-image: url(public/bghome.jpg);
  width: 100%;
  height: 70vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;



const Title = styled.div`
  color: white;
  font-size: 80px;
  font-weight: bold;
  font-family: "Poppins", sans-serif;
  width: 30%;
  padding: 10rem;
  p {
    color: #f2811d;
    font-weight: bolder;
  }
`;

const Home = () => {
  return (
    <Section>
      <Container>
        <Title>
          Conecte-se as suas raizes com a <p>AfroCode</p>
        </Title>
        <SobreNos />
        <Beneficios/>
        <Forms/>
        <Footer/>
      </Container>
    
    </Section>
  );
};

export default Home;