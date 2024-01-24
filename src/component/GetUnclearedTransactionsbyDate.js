import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import { useState } from 'react';
import APIresponse from '../responseUI/APIresponse';
import MobileUI from '../responseUI/MobileUI';

const GetUnclearedTransactionsbyDate = () => {
    const [apiKey,setapiKey]=useState('')
    const [startDate, setstartDate] = useState('');
    const [result, setResult] = useState(null);
    
    const submitAPI=async()=>{
      const response = await fetch(`https://api.m-pay.com.au/reports/v1/unclearedFunds/${startDate}`,{
        method: "GET",
             headers: {
               Authorization: `Basic ${btoa(apiKey)}`,
               'Content-Type': 'application/json',
             },
      })
    
      const data = await response.json();
      setResult(data)
    }
    
    
      return (
        <div className='endpoint-style'>
            <div className='endpoint-Header'>
                <div className='getButton'>GET</div>
                <div>Get Uncleared Transactions by Date</div>
                <div className='sumbitButton' onClick={submitAPI}>Submit</div>
            </div>
    
    
    
            <div class="requestURLColor">
            https://api.m-pay.com.au/reports/v1/unclearedFunds/startDate
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
                  Start Date <strong className='Strongfont'>Required - 01-01-2024</strong>
                </div>
    
                <div>
                  <input type='text' 
                  placeholder='Enter Start Date'
                  value={startDate}
                  onChange={(e)=> setstartDate(e.target.value)}></input>
                </div>
                </div>
              </form>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
     
    
    
    
            </div>
    
    
    
            <APIresponse result={result}/>
            <MobileUI result={result}/>
        </div>
    
        
      )
    }
    

export default GetUnclearedTransactionsbyDate
