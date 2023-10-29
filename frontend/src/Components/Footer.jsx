import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  height: 300px;

  background-color: #011526;
`;

const Container = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  height: 300px;

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
  background-color: #011526;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 300px;
  width: 50%;
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #011526;
  height: 300px;
  width: 50%;
`;


const Footer = () => {
  return (
  <Section>
<Container>
    <Left>
        <Title>
            Sobre nós
            <p></p>
        </Title>
    </Left>
    <Right>

    </Right>
</Container>

  </Section>
  )
}

export default Footer