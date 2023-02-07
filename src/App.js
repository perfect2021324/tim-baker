import './App.css';
import { Background, MainContainer } from './components/Containers';
import { Header as H } from './components/Header';
import { Intro } from './pages/Intro';
import { Resume } from './pages/Resume';

function App() {

  return (
    <Background>
      <MainContainer>
        <H />
        <Intro />
        <Resume />
      </MainContainer>
    </Background>
  )
}

export default App;
