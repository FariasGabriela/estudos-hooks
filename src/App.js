import React from 'react';
import Home from './view/Home';
import styled from 'styled-components';
import { color } from 'styled-system';

const Item = styled.div`
  ${color}
`;

function App() {
  return <Home />;
}

export default App;
