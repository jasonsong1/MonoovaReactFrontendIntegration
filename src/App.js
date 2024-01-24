import logo from './logo.svg';
import './App.css';
import ListOfEndpoints from './Page/ListOfEndpoints';
import GettransactionstatusbyUID from './component/GettransactionstatusbyUID';
import GetUnclearedTransactionsbyDate from './component/GetUnclearedTransactionsbyDate';
import APIresponse from './responseUI/APIresponse';
import MobileUI from './responseUI/MobileUI';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row } from 'react-bootstrap'



function App() {
  return (
    <div>



      <div className='main-area'>

        <div className='listlayout'>
          <ListOfEndpoints />
        </div>

        <div className='mainpageindividualendpoint'>
          <section><GettransactionstatusbyUID id="GettransactionstatusbyUID" /></section>
          <section><GetUnclearedTransactionsbyDate id="GetUnclearedTransactionsbyDate" /></section>
        </div>

      </div>




    </div>
  );
}

export default App;