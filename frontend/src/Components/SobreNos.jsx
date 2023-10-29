import React from 'react'
import styled from 'styled-components'



const Container = styled.div`
display: flex;
  align-items: center;
  justify-content: center;
  width: 100%; /* Ocupar a largura total */
  padding: 20px; /* Adiciona um preenchimento para dar espaço ao redor do conteúdo */
  background-color: white;
  text-align: center; /* Centraliza o texto */
`;

const Title = styled.h1`
 color: #f2811d;
  font-size: 50px;
  font-weight: bold;
  font-family: "Poppins", sans-serif;
  width: 50%;


  p{
    color: #000000;
    font-size: 30px;
    font-family: "Poppins", sans-serif;
    font-weight: 500;
  }
`;
const Img = styled.img`
    max-width: 100%; /* Garante que a imagem não seja maior que o contêiner */
  height: auto; /* Mantém a proporção da imagem */
`;
const Div = styled.div`
    display: flex;
  flex-wrap: wrap;
  justify-content: center; /* Centraliza horizontalmente */
  align-items: center; /* Centraliza verticalmente */
`;

const SobreNos = () => {
  return (
    <Container>
        <Div>
            <Title>Sobre nós</Title>
            <p>Somos mais do que uma plataforma. Somos um refúgio de amor, ancestralidade e empoderamento para todas as mulheres negras que estão passando pelo período de transição capilar. Aqui, acreditamos que a jornada capilar é muito mais do que apenas cuidar dos fios; é um ato de autoafirmação, resistência e celebração da nossa identidade. Aqui, acreditamos que seus cabelos são um reflexo da sua herança cultural, uma história de resistência e força que transcende gerações.</p>
        </Div>
    
      <Img src="public/sobrenos.png" alt="" />
  </Container>
  )
}

export default SobreNos;