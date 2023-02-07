import React from 'react';
import styled from 'styled-components';
import Tabs from './components/Tabs';

function App() {
  return (
    <Wrapper>
      <Column>
        <Box style={{ background: 'lightblue' }}>1</Box>
        <Box style={{ background: 'red' }}>
          <Tabs />
        </Box>
      </Column>
      <Column>
        <Box style={{ background: 'lightgreen' }}>3</Box>
        <Box style={{ background: 'lightpink' }}>4</Box>
      </Column>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  gap: 10px;
`;
const Column = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Box = styled.div`
  flex: 1;
`;

export default App;
