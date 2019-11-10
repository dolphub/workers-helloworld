import styled from 'styled-components';
import React from 'react';
import './App.css';

import RandomNumber from './components/RandomNumber';
const RandomNumberContainer = styled.div`
  margin-top: 1.1em;
  display: flex;
  flex-direction: column;
`;

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p>Hello from Workers Site</p>

        <RandomNumberContainer>
          <RandomNumber />
        </RandomNumberContainer>
      </header>
    </div>
  );
};

export default App;
