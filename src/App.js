import styled from 'styled-components';
import Sidebar from './Components/Sidebar';
import Homepage from './Pages/Homepage';

function App() {
  return (  
    <div className='App'>
    <Sidebar />
    <MainContentStyled>
      {/* <div className="lines">
        <div className="line-1"></div>
        <div className="line-2"></div>
        <div className="line-3"></div>
        <div className="line-4"></div>
      </div> */}
      <Homepage />
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
    min-height: 100vh;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    .line-1, .line-2, .line-3, .line-4{
      width: 1px;
      min-height: 100vh;
      background-color: var(--border-color);
    }
  }
  
`;


export default App;