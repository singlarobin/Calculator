import Content from "./components/Content";
import styled from "styled-components";

const AppContainer = styled.div`
  margin: -1rem;
  height: 100vh;
`;

const HeaderContainer = styled.div`
  background: #926e6f;
  margin: 0px auto;
  height: 30vh;
`;

const Header = styled.h1`
  font-size: 5rem;
  text-align: center;
  color: #fdfaf6;
  padding: 80px 0px;
  margin: 0px auto;

  @media (max-width: 550px) {
    font-size: 4rem;
  }
`;

const App = () => {
  return (
    <AppContainer>
      <HeaderContainer>
        <Header>Calculator</Header>
      </HeaderContainer>
      <Content />
    </AppContainer>
  );
};

export default App;
