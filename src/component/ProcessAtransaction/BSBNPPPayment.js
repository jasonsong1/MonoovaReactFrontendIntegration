import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import { useState } from 'react';
import PaymentResponse from '../../responseUI/PaymentResponse';


const BSBNPPPayment = () => {

const [uniqueReference,setuniqueReference]=useState('')
const [totalAmount,settotalAmount]=useState('')
const [description,setdescription]=useState('')
const [disbursementMethod,setdisbursementMethod]=useState('')
const [bsbNumber,setbsbNumber]=useState('')
const [accountNumber,setaccountNumber]=useState('')
const [accountName,setaccountName]=useState('')
const [remitterName,setremitterName]=useState('')
const [endToEndId,setendToEndId]=useState('')
const [amount,setamount]=useState('')
const [lodgementReference,setlodgementReference]=useState('')
const [apiKey,setapiKey]=useState('')
const [result, setResult]=useState('')
const [isSubmitted,setisSubmitted]=useState(false)

const submitAPI = async() => {

  let BSBNPPPaymentPayload ={
    disbursements: [
      {
        disbursementMethod: disbursementMethod,
        toNppCreditBankAccountDetails: {
          bsbNumber: bsbNumber,
          accountNumber: accountNumber,
          accountName: accountName,
          // endToEndId: endToEndId,
          // remitterName: remitterName,
        },
        // lodgementReference: lodgementReference,
        amount: amount,
      },
    ],
  }


  const BSBNPPPaymentPayloadJSON = JSON.stringify(BSBNPPPaymentPayload);

  const response = await fetch(`https://api.m-pay.com.au/financial/v2/transaction/execute`,{
    method: "POST",
      headers: {
        Authorization: `Basic ${btoa(apiKey)}`,
        'Content-Type': 'application/json',
      },
      body: BSBNPPPaymentPayloadJSON,
  })
      const data = await response.json()
      setResult(data)
      setisSubmitted(true)
      console.log(data)

}







  return (
    <div className='responseUIFlex'>
    <div className='endpoint-style' id="BSBNPPPayment">

      <div className='endpoint-Header'>
        <div className='postButton'>POST</div>
        <div>Process a transaction</div>
        <div className='sumbitButton' onClick={submitAPI}>Submit</div>
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
                <div> Unique Reference 

                  {/* <div>
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

                    <div>apiKey
                    <input type='text'
                      placeholder='Enter your Disbursement Method'
                      value={apiKey}
                      onChange={(e) => setapiKey(e.target.value)}
                    ></input>
                  </div>

                  <div>disbursementMethod NppCreditBankAccount
                    <input type='text'
                      placeholder='Enter your Disbursement Method'
                      value={disbursementMethod}
                      onChange={(e) => setdisbursementMethod(e.target.value)}
                    ></input>
                  </div>

                  <div>bsbNumber 802-985
                    <input type='text'
                      placeholder='Enter your BSB'
                      value={bsbNumber}
                      onChange={(e) => setbsbNumber(e.target.value)}
                    ></input>
                  </div>

                  <div>accountNumber 813510258
                    <input type='text'
                      placeholder='Enter your Account Number'
                      value={accountNumber}
                      onChange={(e) => setaccountNumber(e.target.value)}
                    ></input>
                  </div>

                  <div>accountName Test account
                    <input type='text'
                      placeholder='Enter your AccountName'
                      value={accountName}
                      onChange={(e) => setaccountName(e.target.value)}
                    ></input>
                  </div>

                  {/* <div>endToEndId
                    <input type='text'
                      placeholder='Enter your endToEndId'
                      value={endToEndId}
                      onChange={(e) => setendToEndId(e.target.value)}
                    ></input>
                  </div>

                  <div>remitterName
                    <input type='text'
                      placeholder='Enter remitterName'
                      value={remitterName}
                      onChange={(e) => setremitterName(e.target.value)}></input>
                  </div> */}

                  <div>amount
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


export default BSBNPPPayment
