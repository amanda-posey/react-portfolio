import styled from 'styled-components';
import Sidebar from './Components/Sidebar';
import Homepage from './Pages/Homepage';
import About from './Pages/About';
import Resume from './Pages/Resume';
import Portfolio from './Pages/Portfolio';
import Contact from './Pages/Contact';
import { Route, Switch } from 'react-router';

function App() {
  return (  
    <div className='App'>
    <Sidebar />
    <MainContentStyled>
        <div className="lines">
        <div className="line-1"></div>
        <div className="line-2"></div>
        <div className="line-3"></div>
        <div className="line-4"></div>
      </div> 
      <Switch>

        <Route path="/" exact>
          <Homepage />
        </Route>

        <Route path="/about" exact>
          <About />
        </Route>

        <Route path="/resume" exact>
          <Resume />
        </Route>

        <Route path="/portfolio" exact>
          <Portfolio />
        </Route>

        <Route path="/contact" exact>
          <Contact />
        </Route>

      </Switch>
    </MainContentStyled>
    </div>
  );
}

const MainContentStyled = styled.main`
  position: relative;
  margin-left: 16.3rem;
  min-height: 100vh;
  /* background-color: var(--background-dark-color); */

  .lines {
    position: absolute;
    min-height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    opacity: 0.4;
    z-index: -1;
    .line-1, .line-2, .line-3, .line-4{
      width: 1px;
      min-height: 100vh;
      background-color: var(--font-dark-color);
    }
  }
  
`;


export default App;