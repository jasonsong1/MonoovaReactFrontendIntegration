import React from 'react'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-scroll'
import ListGroup from 'react-bootstrap/ListGroup';

const ListOfEndpoints = () => {


  return (
    <div className='ListOfEndpoints' >
      <div>
        <img width={220}
          height={80}
          className='logo'
          src='https://movdpwebsiteprodae.blob.core.windows.net/images/Monoova.png' />
      </div>

      <div className='search-area'>
        <div>
          <FontAwesomeIcon icon={faMagnifyingGlass} /></div>
        <div> <input type='text'
          className='search-areaStyle' /></div>


      </div>
      <div>
        <ul className='ListofEndpointsize'>
          <li>
            <div>
              <div>
                <span className='getButton'>GET</span>
              </div>
              <div>
              <Link to="GettransactionstatusbyUID" spy={true} smooth={true} offset={0} duration={550}> Get transaction status by UID</Link> 
            </div>
            </div>

          </li>

          <li>
            <div>
              <div>
                <div className='getButton'>GET</div>
              </div>
              <div>
               <Link to="GetUnclearedTransactionsbyDate" spy={true} smooth={true} offset={0} duration={550} >Get Uncleared Transactions by Date</Link> 
              </div>
            </div>
          </li>

          {/* <li>
          <div>
              <div>
                <div className='postButton'>POST</div>
              </div>
              <div>
               <Link to="ProcessAtransaction" spy={true} smooth={true} offset={0} duration={550}> Process a transaction</Link> 
              </div>
            </div>
          </li> */}


          <li>
            <div>
              <div>
                <div className='postButton'>POST</div>
              </div>
              <div>
              <Link to="BSBNPPPayment" spy={true} smooth={true} offset={0} duration={550}> Process a transaction</Link> 
              </div>
            </div>
          </li>
        </ul>




      </div>
    </div>

  )
}

export default ListOfEndpoints