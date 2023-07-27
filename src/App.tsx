
import styled from "styled-components";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Home";
import Story from "./pages/Story";
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";
import Header from './components/Header'
import  Footer from './components/Footer'

function App() {
  return (
    <>
      <Main>
      <Header />
             <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/story" element={<Story />} />
          <Route path="/Features" element={<Features />} />
          <Route path="/pricing" element={<Pricing />} />
        </Routes> 
        <Footer/>
       
      </Main>
    </>
  );
}

export default App;

const Main = styled.div`
  /* width: 100%; */
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  flex-direction: column;
`;
