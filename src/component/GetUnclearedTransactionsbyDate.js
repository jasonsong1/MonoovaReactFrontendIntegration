import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import { useState } from 'react';
import APIresponse from '../responseUI/APIresponse';
import MobileUI from '../responseUI/MobileUI';

const GetUnclearedTransactionsbyDate = () => {
  const [apiKey, setapiKey] = useState('')
  const [startDate, setstartDate] = useState('');
  const [result, setResult] = useState(null);
  const [isSubmitted, setisSubmitted] = useState(false)


  const submitAPI = async () => {
    const response = await fetch(`https://api.m-pay.com.au/reports/v1/unclearedFunds/${startDate}`, {
      method: "GET",
      headers: {
        Authorization: `Basic ${btoa(apiKey)}`,
        'Content-Type': 'application/json',
      },
    })

    const data = await response.json();
    setResult(data)
    setisSubmitted(true)

  }


  return (
    <div className='responseUIFlex'>
      <div className='endpoint-style' id="GetUnclearedTransactionsbyDate">

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
                  <div>
                    <section>
                      <div> API Key <strong className='Strongfont'>Required</strong>
                      </div>
                      <div>
                        <input type='text'
                          placeholder='Enter your mAccount API Key'
                          value={apiKey}
                          onChange={(e) => setapiKey(e.target.value)}
                        ></input>
                      </div>
                    </section>

                    <section>
                      <div>
                        Start Date <strong className='Strongfont'>Required - 01-01-2024</strong>
                      </div>

                      <div>
                        <input type='text'
                          placeholder='Enter Start Date'
                          value={startDate}
                          onChange={(e) => setstartDate(e.target.value)}></input>
                      </div>
                    </section>
                  </div>
                </form>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>




        </div>
      </div>

      <div>
        {isSubmitted && <APIresponse result={result} className="mediaflexcolumn" />}
      </div>

      {/* <div><MobileUI result={result} /></div> */}
    </div>


  )
}


export default GetUnclearedTransactionsbyDate
