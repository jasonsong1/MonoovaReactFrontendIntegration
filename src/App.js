import logo from './logo.svg';
import './App.css';
import ListOfEndpoints from './component/ListOfEndpoints';
import GettransactionstatusbyUID from './component/GettransactionstatusbyUID';
import GetUnclearedTransactionsbyDate from './component/GetUnclearedTransactionsbyDate';
// import APIresponse from './responseUI/APIresponse';
// import MobileUI from './responseUI/MobileUI';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row } from 'react-bootstrap'
import BSBNPPPayment from './component/ProcessAtransaction/BSBNPPPayment';
import PAYIDPayment from './component/ProcessAtransaction/PAYIDPayment';
import ListofPaymentRails from './component/ListofPaymentRails';
import CreateaAutomatcherAccount from './component/CreateaAutomatcherAccount';


function App() {
  return (
    <div>

      <div className='main-area'>
        <div className='listlayout'>
          <ListOfEndpoints />
        </div>

        <Row className='mainpageindividualendpoint' xs={1} md={2} spacing={1} >
          <Col>
          <div className='IntroHeader1'>
          <div className='IntroHeader2'>Monoova Payments API (v5.25)</div>
          <div className='IntroHeader3'><h5>Monoova Support: support@monoova.com</h5>
          <h5>URL: https://www.monoova.com</h5><br></br><br></br></div>

          <div className='IntroHeader2'>Introduction</div>
          <div className='IntroHeader3'>
            <section>
          Explore Monoova's comprehensive testing API portal for an enhanced user experience and seamless integration process. Our platform empowers you to run our APIs in a sandbox environment, providing invaluable insights into product functionality and facilitating smoother integration. Dive into our testing API portal to gain a deeper understanding of our offerings and streamline your development journey. 
          </section>
         <br></br><br></br></div>

          <div className='IntroHeader2'>Getting started</div>
          <div className='IntroHeader3'><ul>
            <li>Sign on to our Developer Portal</li>
            <li>Get your sandbox API key under "MANAGE &gt; ACCOUNTS" in the Developer Portal</li>
            <li>Authenticate</li>
            <li>Browse this document to find the functions you need</li>
            <li>Enter the values and submit the reuqest.</li>
          </ul>
          </div>
          </div>
          </Col>

         

          <Col><GettransactionstatusbyUID/></Col>
          <Col><GetUnclearedTransactionsbyDate/></Col>
         
          {/* <Col><BSBNPPPayment/></Col>
          <Col><PAYIDPayment/></Col> */}
          
          <Col><ListofPaymentRails/></Col>
          <Col><CreateaAutomatcherAccount/></Col>

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