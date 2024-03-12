import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import { useState, useEffect } from 'react';
import PaymentResponse from '../../responseUI/PaymentResponse';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamation } from '@fortawesome/free-solid-svg-icons'
import ClipLoader from "react-spinners/ClipLoader";

const PAYIDPayment = () => {


  const [payId, setpayId] = useState('')
  const [payIdType, setpayIdType] = useState('')
  const [accountName, setaccountName] = useState('')
  const [amount, setamount] = useState('')
  const [apiKey, setapiKey] = useState('')
  const [result, setResult] = useState('')
  const [isSubmitted, setisSubmitted] = useState(false)
  const [disbursementMethod, setdisbursementMethod] = useState('NppCreditPayId')
  const [loading, setLoading] = useState(false)
  const [activeButton, setActiveButton] = useState(null)


  const submitAPI = async () => {
    setLoading(true)
    let PAYIDPaymentPayload = {
      disbursements: [
        {
          disbursementMethod: disbursementMethod,
          toNppCreditPayIdDetails: {
            payId: payId,
            payIdType: payIdType,
            accountName: accountName,
            // endToEndId: endToEndId,
            // remitterName: remitterName,
          },
          // lodgementReference: lodgementReference,
          amount: amount,
        },
      ],
    }


    const PAYIDPaymentPayloadJSON = JSON.stringify(PAYIDPaymentPayload);

    const response = await fetch(`https://api.m-pay.com.au/financial/v2/transaction/execute`, {
      method: "POST",
      headers: {
        Authorization: `Basic ${btoa(apiKey)}`,
        'Content-Type': 'application/json',
      },
      body: PAYIDPaymentPayloadJSON,
    })
    const data = await response.json()

    setResult(data)
    setisSubmitted(true)
    console.log(data)
    setLoading(false)

  }


  const resetForm = () => {
    setisSubmitted(false);
  };

  const handlePayIdType = (type) => {
    setpayIdType(type);
    setActiveButton(type)
  }





  return (

    <div className='responseUIFlex'>
      <div className='endpoint-style-Paymentrail'>

        <div className='endpoint-Header'>
          <div className='postButton'>POST</div>
          <div>PayID Payout</div>
          {!loading && !isSubmitted && <div className='sumbitButton' onClick={submitAPI}>Submit</div>}
          <ClipLoader
            color="#ff0000"
            loading={loading}
            size={30} />

          {isSubmitted && <div className='sumbitButton' onClick={resetForm}>Submit</div>}
        </div>



        <div class="requestURLColor">
          https://api.m-pay.com.au/financial/v2/transaction/execute
        </div>
        <div>

          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Click to open</Accordion.Header>
              <Accordion.Body>
                <form className='inputArea'>
                  <div>

                    {/* <section>Unique Reference
                        <input type='text'
                          placeholder='Enter your Unique Reference Key'
                          value={uniqueReference}
                          onChange={(e) => setuniqueReference(e.target.value)}
                        ></input>
                      </section>
    
                      <section>totalAmount
                        <input type='text'
                          placeholder='Enter your Total Amount'
                          value={totalAmount}
                          onChange={(e) => settotalAmount(e.target.value)}
                        ></input>
                      </section>
                      
                      <section>paymentSource
                        <input type='text'
                          placeholder='Enter your Unique Reference Key'
                          value={uniqueReference}
                          onChange={(e) => setuniqueReference(e.target.value)}
                        ></input>
                      </section>
    
                      <section>description
                        <input type='text'
                          placeholder='Enter your description'
                          value={description}
                          onChange={(e) => setdescription(e.target.value)}
                        ></input>
                      </section> */}

                    <section>
                      <div>Api Key<strong className='Strongfont'>Required </strong></div>
                      <input type='password'
                        placeholder='Enter your Disbursement Method'
                        value={apiKey}
                        onChange={(e) => setapiKey(e.target.value)}
                      ></input>
                    </section>

                    {/* <section>
                      <div>disbursementMethod NppCreditPayId<strong className='Strongfont'>Required </strong></div>
                        <input type='text'
                          placeholder='Enter your Disbursement Method'
                          value={disbursementMethod}
                          onChange={(e) => setdisbursementMethod(e.target.value)}
                        ></input>
                      </section> */}

                    <section>
                      <div>payId 717582148Test02@monoova.com<strong className='Strongfont'>Required </strong></div>
                      <input type='text'
                        placeholder='Enter your PayID'
                        value={payId}
                        onChange={(e) => setpayId(e.target.value)}
                      ></input>
                    </section>

                    <section>
                      <div className='payIdTypeButtons'>payIdType <strong className='Strongfont'>Required </strong>
                        <div>
                          {/* <button type="button" onClick={() => handlePayIdType('Email')} >Email</button> */}
                          <button type="button" onClick={() => handlePayIdType('Email')} className={activeButton === 'Email' ? 'active' : ''}>Email</button>
                          <button type="button" onClick={() => handlePayIdType('ABN')} className={activeButton === 'ABN' ? 'active' : ''}>ABN</button>
                          <button type="button" onClick={() => handlePayIdType('PhoneNumber')} className={activeButton === 'PhoneNumber' ? 'active' : ''}>PhoneNumber</button>
                          <button type="button" onClick={() => handlePayIdType('OrganisationId')} className={activeButton === 'OrganisationId' ? 'active' : ''}>OrganisationId</button>
                          <button type="button" onClick={() => handlePayIdType('ACN')} className={activeButton === 'ACN' ? 'active' : ''}>ACN</button>
                        </div>
                      </div>
                      {/* <input type='text'
                          placeholder='Enter your payIdType'
                          value={payIdType}
                          onChange={(e) => setpayIdType(e.target.value)}
                        ></input> */}
                    </section>

                    <section>
                      <div> accountName Test account<strong className='Strongfont'>Required </strong></div>

                      <input type='text'
                        placeholder='Enter your AccountName'
                        value={accountName}
                        onChange={(e) => setaccountName(e.target.value)}
                      ></input>
                    </section>

                    {/* <section>
                      <div>endToEndId</div>
                        <input type='text'
                          placeholder='Enter your endToEndId'
                          value={endToEndId}
                          onChange={(e) => setendToEndId(e.target.value)}
                        ></input>
                      </section>
    
                      <section>
                      <div>remitterName</div>
                        <input type='text'
                          placeholder='Enter remitterName'
                          value={remitterName}
                          onChange={(e) => setremitterName(e.target.value)}></input>
                      </section> */}

                    <section>
                      <div>Amount<strong className='Strongfont'>Required </strong></div>
                      <input type='text'
                        placeholder='Enter amount'
                        value={amount}
                        onChange={(e) => setamount(e.target.value)}></input>
                    </section>

                    {/* <section>lodgementReference
                        <input type='text'
                          placeholder='Enter LodgementReference'
                          value={lodgementReference}
                          onChange={(e) => setlodgementReference(e.target.value)}></input>
                      </section> */}
                  </div>
                </form>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>




        </div>
      </div>

      <div>
        {isSubmitted && <PaymentResponse result={result} className="mediaflexcolumn" />}
      </div>

      {/* <div><MobileUI result={result} /></div> */}

    </div>


  )
}

export default PAYIDPayment
