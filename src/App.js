import logo from './logo.svg';
import './App.css';
import ListOfEndpoints from './Page/ListOfEndpoints';
import GettransactionstatusbyUID from './component/GettransactionstatusbyUID';
import APIresponse from './responseUI/APIresponse';
import MobileUI from './responseUI/MobileUI';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Row} from 'react-bootstrap'
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Row className='main-area'>
        <Col className='listlayout' lg={2}><ListOfEndpoints/></Col>
        <Col lg={5}><GettransactionstatusbyUID/></Col>
        <Col lg={3}><APIresponse/></Col>
        <Col lg={2}><MobileUI/></Col>
      </Row>
    </div>
  );
}

export default App;
