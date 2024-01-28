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
      {/* <>
        {result && result.status == 'MerchantFailedToLogin' && <div>check your API key. It is invalid API Key</div>}
        {result && result.status == 'UniqueIdNotFound' && <div>Invalid unique reference. please re-enter valid unique value </div>}
      </> */}
    </div>
  )
}

export default PaymentResponse
