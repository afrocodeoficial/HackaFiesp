import React from "react";
import styled from "styled-components";
import Login from "./LoginECadastro/Login";
// import Register from "./LoginECadastro/Register";


const Section = styled.div`
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;500&display=swap");
font-family: "Poppins", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  color: #fff;
  background-image: url("bg-user.jpg");
  background-repeat: no-repeat;
  background-size: cover;
`;


export const Auth = () => {
  return (
    <Section>
      <Login/>
      {/* <Register/> */}
    </Section>
  );
};


























