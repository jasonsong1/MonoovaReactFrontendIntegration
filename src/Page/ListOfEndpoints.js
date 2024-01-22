import React from 'react'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const ListOfEndpoints = () => {

    const listofendpoints =[
    "Process a transaction",
    "Get transaction status by UID",
    "Create a Automatcher (Receivables) Account",
    "Get Account Status By BankAccount",
    "List Accounts",
    "V6 Report",
    "H",
    "G",
    "G",
    "G",
    "G",
    "G",
    "G",
    "G",
    "G",]
  return (
         <div className='ListOfEndpoints' >
            <div>
                <img width={220} 
                height={80}
                className='logo'
                src='https://movdpwebsiteprodae.blob.core.windows.net/images/Monoova.png'/>
            </div>

            <div className='search-area'>
            <div>
            <FontAwesomeIcon icon={faMagnifyingGlass} /></div>
            <div> <input type='text'
                className='search-areaStyle'/></div>
               
                      
            </div>
        
            <div className='ListofEndpointsize'>
            {listofendpoints.map((item)=>(
            <div>{item}</div>
            ))}
            
            </div>
            
         </div>
 
  )
}

export default ListOfEndpoints
