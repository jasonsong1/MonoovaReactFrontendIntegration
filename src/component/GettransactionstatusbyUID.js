import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import { useState } from 'react';
import APIresponse from '../responseUI/APIresponse';
import MobileUI from '../responseUI/MobileUI';
import { Col, Row } from 'react-bootstrap'

const GettransactionstatusbyUID = () => {

const [apiKey,setapiKey]=useState('')
const [uniqueReference, setUniqueReference] = useState('');
const [result, setResult] = useState(null);
const [isSubmitted, setisSubmitted] = useState(false)

const submitAPI=async()=>{
  const response = await fetch(`https://api.m-pay.com.au/financial/v2/status/${uniqueReference}`,{
    method: "GET",
         headers: {
           Authorization: `Basic ${btoa(apiKey)}`,
           'Content-Type': 'application/json',
         },
  })

  const data = await response.json();
  setResult(data);
  setisSubmitted(true);
}


  return (
    <div className='responseUIFlex'>
    <div className='endpoint-style' id="GettransactionstatusbyUID">
      
        <div className='endpoint-Header'>
            <div className='getButton'>GET</div>
            <div>GetTransactionStatusByUID</div>
            <div className='sumbitButton' onClick={submitAPI}>Submit</div>
        </div>



        <div class="requestURLColor">
      https://api.m-pay.com.au/financial/v2/status/uniquereference
      </div>

      
        <div>

    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Click to open</Accordion.Header>
        <Accordion.Body>
          <form className='inputArea'>
            <div> API Key <strong className='Strongfont'>Required -57B17E5A-0375-4EA0-8059-420133765007 </strong>
            
            <div>
              <input type='text' 
              placeholder='Enter your mAccount API Key'
              value={apiKey}
              onChange={(e)=> setapiKey(e.target.value)}
              ></input>
            </div>

            <div>
              Unique Reference <strong className='Strongfont'>Required - ab2445a0-dc84-4e00-9754-c716239facb8</strong>
            </div>

            <div>
              <input type='text' 
              placeholder='Enter your transaction Unique Reference'
              value={uniqueReference}
              onChange={(e)=> setUniqueReference(e.target.value)}></input>
            </div>
            </div>
          </form>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
 
        </div>
        </div>

        <div> 
          {isSubmitted && <APIresponse result={result} className="mediaflexcolumn"/>}
        </div>
        {/* <div><MobileUI result={result}/></div> */}
     
    </div>
    
  )
}

export default GettransactionstatusbyUID