import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home.jsx";
import  Navbar from "./Components/Navbar.jsx";
import styled from "styled-components";
import { Auth } from "./Components/Auth.jsx";


const Section = styled.div`
  display: flex;
`;

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: #000000;
  background-image: conic-gradient(
    from 90deg at 50% 100%,
    #ffffffdf 90deg,
    #ffffff 5.8turn
  );

  &::-webkit-scrollbar {
    display: none;
  }
`;

function App() {
  return (
    <Section>
      <Container>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<Auth />} />
          </Routes>
          
        </Router>
      </Container>
    </Section>
  );
}

export default App;