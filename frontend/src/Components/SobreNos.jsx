import React from 'react'
import styled from 'styled-components'



const Container = styled.div`
display: flex;
align-items: center;
justify-content: space-around;
width: 100%;
height: 500px;
background-color: white;
`;

const Title = styled.div`
 color: #f2811d;
  font-size: 50px;
  font-weight: bold;
  font-family: "Poppins", sans-serif;
  width: 50%    ;


  p{
    color: #000000;
    font-size: 30px;
    font-family: "Poppins", sans-serif;
    font-weight: 500;

gap: 50px;
  }
`;
const Img = styled.img``;

const SobreNos = () => {
  return (
    <Container>
     <Title>Sobre nós
            <p>Somos mais do que uma plataforma. Somos um refúgio de amor, ancestralidade e empoderamento para todas as mulheres negras que estão passando pelo período de transição capilar. Aqui, acreditamos que a jornada capilar é muito mais do que apenas cuidar dos fios; é um ato de autoafirmação, resistência e celebração da nossa identidade. Aqui, acreditamos que seus cabelos são um reflexo da sua herança cultural, uma história de resistência e força que transcende gerações.</p></Title>


    <div>
      <Img src="public/sobrenos.png" alt="" />
    </div>
  </Container>
  )
}

export default SobreNos;