import React from 'react';
import { Container } from 'react-bootstrap';
import MainNavbar from "features/mainNavbar/MainNavbar";
import TextInput from 'features/textInput/TextInput';
import './App.scss';


function App() {
  return (
    <div className="app">
      <MainNavbar />
      <Container fluid>
        <TextInput />
      </Container>
    </div>
  );
}

export default App;
