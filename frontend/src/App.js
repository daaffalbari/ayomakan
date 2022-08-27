import { useState } from 'react';
import { Container, Stack, Navbar } from 'react-bootstrap';
import { MdOutlineImageSearch } from 'react-icons/md';

import InputImage from './InputImage';
import Output from './Output';
import Intro from './components/Intro';
import axios, { Axios } from 'axios';

function App() {
  const [outputs, setOutputs] = useState([]);
  const [imageToPredict, setImageToPredict] = useState('');
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand style={{ display: 'flex', alignItems: 'center' }}>
          <MdOutlineImageSearch
            style={{
              marginLeft: '12px',
              marginRight: '8px',
            }}
          />
          Ayo Makan
        </Navbar.Brand>
      </Navbar>

      <Container>
        <Intro />
        <div className="mt-3" />
        <Stack gap={2}>
          <InputImage setOutputs={setOutputs} setImageToPredict={setImageToPredict} />
          <Output outputs={outputs} imageToPredict={imageToPredict} />
        </Stack>
      </Container>
    </div>
  );
}

export default App;
