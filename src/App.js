import logo from './logo.svg';
import './App.css';
import ListOfEndpoints from './component/ListOfEndpoints';
import GettransactionstatusbyUID from './component/GettransactionstatusbyUID';
import GetUnclearedTransactionsbyDate from './component/GetUnclearedTransactionsbyDate';
import APIresponse from './responseUI/APIresponse';
import MobileUI from './responseUI/MobileUI';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row } from 'react-bootstrap'
import BSBNPPPayment from './component/ProcessAtransaction/BSBNPPPayment';
import PayOutFunction from './component/PayOutFunction';



function App() {
  return (
    <div>



      <div className='main-area'>
        <div className='listlayout'>
          <ListOfEndpoints />
        </div>

        <Row className='mainpageindividualendpoint' xs={1} md={2} spacing={1} >
          <Col><div className='EMPTY'>EMPTY</div></Col>
          <Col><GettransactionstatusbyUID/></Col>
          <Col><GetUnclearedTransactionsbyDate/></Col>
          <Col><BSBNPPPayment/></Col>
          <Col><PayOutFunction/></Col>
          <Col><div className='EMPTY'>EMPTY</div></Col>
          <Col><div className='EMPTY'>EMPTY</div></Col>
          <Col><div className='EMPTY'>EMPTY</div></Col>
          <Col><div className='EMPTY'>EMPTY</div></Col>
          <Col><div className='EMPTY'>EMPTY</div></Col>
          <Col><div className='EMPTY'>EMPTY</div></Col>
          <Col><div className='EMPTY'>EMPTY</div></Col>
          <Col><div className='EMPTY'>EMPTY</div></Col>
          <Col><div className='EMPTY'>EMPTY</div></Col>
          <Col><div className='EMPTY'>EMPTY</div></Col>
          <Col><div className='EMPTY'>EMPTY</div></Col>
          <Col><div className='EMPTY'>EMPTY</div></Col>
          <Col><div className='EMPTY'>EMPTY</div></Col>
          <Col><div className='EMPTY'>EMPTY</div></Col>
          <Col><div className='EMPTY'>EMPTY</div></Col>
          <Col><div className='EMPTY'>EMPTY</div></Col>
          <Col><div className='EMPTY'>EMPTY</div></Col>
          <Col><div className='EMPTY'>EMPTY</div></Col>
          <Col><div className='EMPTY'>EMPTY</div></Col>
          <Col><div className='EMPTY'>EMPTY</div></Col>
          <Col><div className='EMPTY'>EMPTY</div></Col>
          <Col><div className='EMPTY'>EMPTY</div></Col>
          <Col><div className='EMPTY'>EMPTY</div></Col>
          <Col><div className='EMPTY'>EMPTY</div></Col>
          <Col><div className='EMPTY'>EMPTY</div></Col>
          <Col><div className='EMPTY'>EMPTY</div></Col>
          <Col><div className='EMPTY'>EMPTY</div></Col>
          <Col><div className='EMPTY'>EMPTY</div></Col>
          <Col><div className='EMPTY'>EMPTY</div></Col>
          <Col><div className='EMPTY'>EMPTY</div></Col>
          <Col><div className='EMPTY'>EMPTY</div></Col>
          <Col><div className='EMPTY'>EMPTY</div></Col>
          <Col><div className='EMPTY'>EMPTY</div></Col>
          <Col><div className='EMPTY'>EMPTY</div></Col>
          <Col><div className='EMPTY'>EMPTY</div></Col>
          <Col><div className='EMPTY'>EMPTY</div></Col>
          <Col><div className='EMPTY'>EMPTY</div></Col>
          <Col><div className='EMPTY'>EMPTY</div></Col>
          <Col><div className='EMPTY'>EMPTY</div></Col>
          <Col><div className='EMPTY'>EMPTY</div></Col>
          <Col><div className='EMPTY'>EMPTY</div></Col>
          <Col><div className='EMPTY'>EMPTY</div></Col>
          <Col><div className='EMPTY'>EMPTY</div></Col>
          <Col><div className='EMPTY'>EMPTY</div></Col>
          <Col><div className='EMPTY'>EMPTY</div></Col>
          <Col><div className='EMPTY'>EMPTY</div></Col>
          <Col><div className='EMPTY'>EMPTY</div></Col>
          <Col><div className='EMPTY'>EMPTY</div></Col>
          <Col><div className='EMPTY'>EMPTY</div></Col>
          <Col><div className='EMPTY'>EMPTY</div></Col>
          <Col><div className='EMPTY'>EMPTY</div></Col>
          <Col><div className='EMPTY'>EMPTY</div></Col>
          <Col><div className='EMPTY'>EMPTY</div></Col>
          <Col><div className='EMPTY'>EMPTY</div></Col>
          <Col><div className='EMPTY'>EMPTY</div></Col>
          <Col><div className='EMPTY'>EMPTY</div></Col>
          <Col><div className='EMPTY'>EMPTY</div></Col>
          <Col><div className='EMPTY'>EMPTY</div></Col>
          <Col><div className='EMPTY'>EMPTY</div></Col>
          <Col><div className='EMPTY'>EMPTY</div></Col>
          <Col><div className='EMPTY'>EMPTY</div></Col>
          <Col><div className='EMPTY'>EMPTY</div></Col>
          <Col><div className='EMPTY'>EMPTY</div></Col>
          <Col><div className='EMPTY'>EMPTY</div></Col>
          <Col><div className='EMPTY'>EMPTY</div></Col>
          <Col><div className='EMPTY'>EMPTY</div></Col>
          <Col><div className='EMPTY'>EMPTY</div></Col>
          <Col><div className='EMPTY'>EMPTY</div></Col>
          <Col><div className='EMPTY'>EMPTY</div></Col>
          <Col><div className='EMPTY'>EMPTY</div></Col>

  
        </Row>


      </div>




    </div>
  );
}

export default App;