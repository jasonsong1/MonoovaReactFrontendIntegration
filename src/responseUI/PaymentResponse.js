import React from 'react'


const PaymentResponse = ({result}) => {
  return (
    <div class="responseBody">

      <div> **Endpoint Response** </div>
      <br></br>

      {result && result.status === 'Ok' && (
        <>
          <div>"durationMs": "{result?.durationMs},</div>
          <div>"status": "{result?.status}",</div>
          <div><span>"statusDescription": "{result?.statusDescription}",</span></div>
          <div><span>"callerUniqueReference": "{result?.callerUniqueReference}",</span></div>
          <div>"transactionId": "{result?.transactionId},</div>

        </>
      )}
      <>
        {result && result.status == 'MerchantFailedToLogin' && <div>Check your API key. It is invalid API Key</div>}
        {result && result.status == 'InvalidDisbursementMethod' && <div>The disbursement method has an unknown value</div>}
        {result && result.status == 'FinancialValidateDisbursementNppCreditBankAccountDetailsAreInvalid' && <div>Check your BSB and Account number</div>}
        {result && result.status == 'FinancialValidateDisbursementNppCreditPayIdDetailsAreInvalid' && <div>Invalid PayID or payIdType or account name</div>}
        {result && result.status == 'RequestBodyIsNotTheExpectedType' && <div>The body of the request was not the expected type, has price been included in the payload?</div>}

      
      
        
      </>
    </div>
  )
}

export default PaymentResponse
