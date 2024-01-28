import React from 'react'

const APIresponse = ({ result }) => {
  return (


    <div class="responseBody">

      <div> **Endpoint Response** </div>
      <br></br>

      {result && result.status === 'Ok' && (
        <>
          <div>"durationMs": "{result?.durationMs},</div>
          <div>"status": "{result?.status}",</div>
          <div><span>"statusDescription": "{result?.statusDescription}",</span></div>
          <div><span>"completedDate": "{result?.completedDate}",</span></div>
          <div>"dishonouredDate": "{result?.dishonouredDate},</div>
          <div>"expectedClearanceDateForFunds": {result?.expectedClearanceDateForFunds},</div>
          <div>"fundsClearedDate": {result?.fundsClearedDate},</div>
          <div> <span> "transactionStatus": "{result?.tansactionStatus}",</span></div>
          <div> "uniqueReference": "{result?.uniqueReference}"</div>
          ADD BulkDirect Debits
        </>
      )}
      <>
        {result && result.status == 'MerchantFailedToLogin' && <div>check your API key. It is invalid API Key</div>}
        {result && result.status == 'UniqueIdNotFound' && <div>Invalid unique reference. please re-enter valid unique value </div>}
      </>
    </div>
  )
}

export default APIresponse
