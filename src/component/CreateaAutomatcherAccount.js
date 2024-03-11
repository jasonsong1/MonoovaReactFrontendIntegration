import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import { useState } from 'react';
import APIresponse from '../responseUI/APIresponse';
import ClipLoader from "react-spinners/ClipLoader";


const CreateaAutomatcherAccount = () => {


  const [apiKey, setapiKey] = useState('')
  const [result, setResult] = useState(null);
  const [isSubmitted, setisSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [bankAccountName, setbankAccountName] = useState('')
  const [isActive, setisActive] = useState('true')

  const submitAPI = async () => {
    setLoading(true)

    let CreateaAutomatcherAccountPayload = {
      bankAccountName: bankAccountName,
      isActive: isActive
    }

    const CreateaAutomatcherAccountPayloadJSON = JSON.stringify(CreateaAutomatcherAccountPayload);

    const response = await fetch(`https://api.m-pay.com.au/receivables/v1/create`, {
      method: "POST",
      headers: {
        Authorization: `Basic ${btoa(apiKey)}`,
        'Content-Type': 'application/json',
      },
      body: CreateaAutomatcherAccountPayloadJSON,
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
      <div className='endpoint-style' id="CreateaAutomatcherAccount">

        <div className='endpoint-Header'>
          <div className='postButton'>POST</div>
          <div>Create a Automatcher (Receivables) Account</div>

          {!loading && !isSubmitted && <div className='sumbitButton' onClick={submitAPI}>Submit</div>}
          <ClipLoader
            color="#ff0000"
            loading={loading}
            size={30} />
          {isSubmitted && <div className='sumbitButton' onClick={resetForm}>Submit</div>}
        </div>



        <div class="requestURLColor">
          https://api.m-pay.com.au/receivables/v1/create
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
                        Bank Acount Name <strong className='Strongfont'>Required</strong>
                      </div>

                      <div>
                        <input type='text'
                          placeholder='Enter Bank Account Name'
                          value={bankAccountName}
                          onChange={(e) => setbankAccountName(e.target.value)}></input>
                      </div></section>


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

export default CreateaAutomatcherAccount
