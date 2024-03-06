import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import { useState, useEffect } from 'react';
import PaymentResponse from '../../responseUI/PaymentResponse';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamation } from '@fortawesome/free-solid-svg-icons'
import ClipLoader from "react-spinners/ClipLoader";

const PAYIDPayment = () => {

    const [uniqueReference,setuniqueReference]=useState('')
    const [totalAmount,settotalAmount]=useState('')
    const [description,setdescription]=useState('')
    const [NppCreditPayId,setNppCreditPayId]=useState('')
    const [payId,setpayId]=useState('')
    const [payIdType,setpayIdType]=useState('')
    const [accountName,setaccountName]=useState('')
    const [remitterName,setremitterName]=useState('')
    const [endToEndId,setendToEndId]=useState('')
    const [amount,setamount]=useState('')
    const [lodgementReference,setlodgementReference]=useState('')
    const [apiKey,setapiKey]=useState('')
    const [result, setResult]=useState('')
    const [isSubmitted,setisSubmitted]=useState(false)
    const [disbursementMethod,setdisbursementMethod]=useState('NppCreditPayId')
    const [loading,setLoading]=useState(false)



    const submitAPI = async() => {
      setLoading(true)
      let PAYIDPaymentPayload ={
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
    
      const response = await fetch(`https://api.m-pay.com.au/financial/v2/transaction/execute`,{
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
    
    const handlePayIdType  = (type) => {
      setpayIdType(type);
    }
    
    
    
    
      return (
        
        <div className='responseUIFlex'>
        <div className='endpoint-style-Paymentrail' id="BSBNPPPayment">
    
          <div className='endpoint-Header'>
            <div className='postButton'>POST</div>
            <div>PayID Payout</div>
            {!loading && !isSubmitted && <div className='sumbitButton' onClick={submitAPI}>Submit</div>}
            <ClipLoader
        color="#ff0000"
        loading={loading}
        size={30}/>

         {isSubmitted &&<div className='sumbitButton' onClick={resetForm}>Submit</div>}
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
    
                      {/* <div>Unique Reference
                        <input type='text'
                          placeholder='Enter your Unique Reference Key'
                          value={uniqueReference}
                          onChange={(e) => setuniqueReference(e.target.value)}
                        ></input>
                      </div>
    
                      <div>totalAmount
                        <input type='text'
                          placeholder='Enter your Total Amount'
                          value={totalAmount}
                          onChange={(e) => settotalAmount(e.target.value)}
                        ></input>
                      </div>
                      
                      <div>paymentSource
                        <input type='text'
                          placeholder='Enter your Unique Reference Key'
                          value={uniqueReference}
                          onChange={(e) => setuniqueReference(e.target.value)}
                        ></input>
                      </div>
    
                      <div>description
                        <input type='text'
                          placeholder='Enter your description'
                          value={description}
                          onChange={(e) => setdescription(e.target.value)}
                        ></input>
                      </div> */}
    
                        <div>
                        <div>Api Key<strong className='Strongfont'>Required </strong></div>
                        <input type='password'
                          placeholder='Enter your Disbursement Method'
                          value={apiKey}
                          onChange={(e) => setapiKey(e.target.value)}
                        ></input>
                      </div>
    
                      {/* <div>
                      <div>disbursementMethod NppCreditPayId<strong className='Strongfont'>Required </strong></div>
                        <input type='text'
                          placeholder='Enter your Disbursement Method'
                          value={disbursementMethod}
                          onChange={(e) => setdisbursementMethod(e.target.value)}
                        ></input>
                      </div> */}
    
                      <div>
                      <div>payId 717582148Test02@monoova.com<strong className='Strongfont'>Required </strong></div>
                        <input type='text'
                          placeholder='Enter your PayID'
                          value={payId}
                          onChange={(e) => setpayId(e.target.value)}
                        ></input>
                      </div>
    
                      <div>
                      <div className='payIdTypeButtons'>payIdType <strong className='Strongfont'>Required </strong>
                        <div>
                          <button type="button" onClick={()=> handlePayIdType ('Email')} >Email</button>
                        <button type="button" onClick={()=> handlePayIdType ('ABN')}>ABN</button>
                        <button type="button" onClick={()=> handlePayIdType ('PhoneNumber')}>PhoneNumber</button>
                        <button type="button" onClick={()=> handlePayIdType ('OrganisationId')}>OrganisationId</button>
                        <button type="button" onClick={()=> handlePayIdType ('ACN')}>ACN</button>
                        </div>
                      </div>
                        {/* <input type='text'
                          placeholder='Enter your payIdType'
                          value={payIdType}
                          onChange={(e) => setpayIdType(e.target.value)}
                        ></input> */}
                      </div>
    
                      <div>
                        <div> accountName Test account<strong className='Strongfont'>Required </strong></div>
                       
                        <input type='text'
                          placeholder='Enter your AccountName'
                          value={accountName}
                          onChange={(e) => setaccountName(e.target.value)}
                        ></input>
                      </div>
    
                      {/* <div>
                      <div>endToEndId</div>
                        <input type='text'
                          placeholder='Enter your endToEndId'
                          value={endToEndId}
                          onChange={(e) => setendToEndId(e.target.value)}
                        ></input>
                      </div>
    
                      <div>
                      <div>remitterName</div>
                        <input type='text'
                          placeholder='Enter remitterName'
                          value={remitterName}
                          onChange={(e) => setremitterName(e.target.value)}></input>
                      </div> */}
    
                      <div>
                        <div>Amount<strong className='Strongfont'>Required </strong></div>
                        <input type='text'
                          placeholder='Enter amount'
                          value={amount}
                          onChange={(e) => setamount(e.target.value)}></input>
                      </div>
    
                      {/* <div>lodgementReference
                        <input type='text'
                          placeholder='Enter LodgementReference'
                          value={lodgementReference}
                          onChange={(e) => setlodgementReference(e.target.value)}></input>
                      </div> */}
                    </div>
                  </form>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
    
    
    
    
          </div>
        </div>
    
        <div> 
        {isSubmitted && <PaymentResponse result={result} className="mediaflexcolumn"/>}
          </div>
    
        {/* <div><MobileUI result={result} /></div> */}
        
      </div>
    
    
    )
    }

export default PAYIDPayment
