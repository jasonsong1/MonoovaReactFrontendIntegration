import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import { useState } from 'react';
import APIresponse from '../responseUI/APIresponse';
import ClipLoader from "react-spinners/ClipLoader";

const RegisterPayID = () => {
    const [apiKey, setapiKey] = useState('')
    const [result, setResult] = useState(null);
    const [isSubmitted, setisSubmitted] = useState(false)
    const [loading, setLoading] = useState(false)
    const [bankAccountNumber, setbankAccountNumber] = useState('')
    const [payIdName, setpayIdName] = useState('')
    const [payId, setpayId] = useState('')
  
    const submitAPI = async () => {
      setLoading(true)
  
      let RegisterPayIDPayload = {
        bankAccountNumber: bankAccountNumber,
        payIdName: payIdName,
        payId:payId
      }
  
      const RegisterPayIDPayloadJSON = JSON.stringify(RegisterPayIDPayload);
  
      const response = await fetch(`https://api.m-pay.com.au/receivables/v1/payid/registerpayid`, {
        method: "POST",
        headers: {
          Authorization: `Basic ${btoa(apiKey)}`,
          'Content-Type': 'application/json',
        },
        body: RegisterPayIDPayloadJSON,
      })
  
      const data = await response.json();
      setResult(data);
      setisSubmitted(true);
      console.log(data)
      setLoading(false)
    }
  
    const resetForm = () => {
      setisSubmitted(false);
    };
  
    return (
      <div className='responseUIFlex'>
        <div className='endpoint-style' id="RegisterPayID">
  
          <div className='endpoint-Header'>
            <div className='postButton'>POST</div>
            <div>Register PayID</div>
  
            {!loading && !isSubmitted && <div className='sumbitButton' onClick={submitAPI}>Submit</div>}
            <ClipLoader
              color="#ff0000"
              loading={loading}
              size={30} />
            {isSubmitted && <div className='sumbitButton' onClick={resetForm}>Submit</div>}
          </div>
  
  
  
          <div class="requestURLColor">
          https://api.m-pay.com.au/receivables/v1/payid/registerpayid
          </div>
  
          <div>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Click to open</Accordion.Header>
                <Accordion.Body>
                  <form className='inputArea'>
                    <div>
                      <section>API Key <strong className='Strongfont'>Required </strong>
  
                        <div>
                          <input type='password'
                            placeholder='Enter your mAccount API Key'
                            value={apiKey}
                            onChange={(e) => setapiKey(e.target.value)}
                          ></input>
                        </div>
                      </section>
  
  
                      <section>
                        <div>
                          Bank Acount Number <strong className='Strongfont'>Required</strong>
                        </div>
  
                        <div>
                          <input type='text'
                            placeholder='Enter Bank Account Number'
                            value={bankAccountNumber}
                            onChange={(e) => setbankAccountNumber(e.target.value)}></input>
                        </div>
                        </section>

                        <section>
                        <div>
                          PayID Name <strong className='Strongfont'>Required</strong>
                        </div>
  
                        <div>
                          <input type='text'
                            placeholder='Enter PayID Name'
                            value={payIdName}
                            onChange={(e) => setpayIdName(e.target.value)}></input>
                        </div>
                        </section>

                        <section>
                        <div>
                          PayID Address
                        </div>
  
                        <div>
                          <input type='text'
                            placeholder='Enter PayID Email Adress'
                            value={payId}
                            onChange={(e) => setpayId(e.target.value)}></input>
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
        {/* <div><MobileUI result={result}/></div> */}
  
      </div>
    ) 
}

export default RegisterPayID
