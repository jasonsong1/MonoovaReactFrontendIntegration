import React from 'react'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

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
            <a href='GettransactionstatusbyUID'>
              <span className='getButton'>GET</span>
              Get transaction status by UID
            </a>
          </li>

          <li>
            <div>
              <div >
                <span className='getButton'>GET</span>
              </div>
              <div>
                <a href='GetUnclearedTransactionsbyDate'>
                  Get Uncleared Transactions by Date
                </a>
              </div>
            </div>

          </li>
          <li>3</li>
          <li>4</li>

        </ul>

      </div>
    </div>

  )
}

export default ListOfEndpoints