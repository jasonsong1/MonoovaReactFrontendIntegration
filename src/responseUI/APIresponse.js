import React from 'react'

const APIresponse = ({ result }) => {
  return (


    <div class="responseBody">

      <div> **Endpoint Response** </div>
      <br></br>

      {result && result.status === 'Ok' && (
        <>
        {result?.durationMs && (<div>"Duration Ms": {result.durationMs},</div>)}
        {result?.status && (<div>"Status": {result.status},</div>)}
        {result?.statusDescription && (<div>"Status Description": {result.statusDescription},</div>)}
        {result?.completedDate && (<div>"Completed Date": {result.completedDate},</div>)}
        {result?.dishonouredDate && (<div>"Dishonoured Date": {result.dishonouredDate},</div>)}
        {result?.expectedClearanceDateForFunds && (<div>"Expected Clearance Date For Funds": {result.expectedClearanceDateForFunds},</div>)}
        {result?.fundsClearedDate && (<div>"Funds Cleared Date": {result.fundsClearedDate},</div>)}
        {result?.tansactionStatus && (<div>"Transaction Status": {result.transactionStatus},</div>)}
        {result?.uniqueReference && (<div>"Unique Reference": {result.uniqueReference},</div>)}
    
{/* Autochatcher response */}
        {result?.bankAccountName && (<div>"Bank Account Name": {result.bankAccountName},</div>)}
        {result?.bankAccountNumber && (<div>"Bank Account Number": {result.bankAccountNumber},</div>)}
        {result?.bsb && (<div>"BSB": {result.bsb},</div>)}
        {result?.clientUniqueId && (<div>"Client Unique Id": {result.clientUniqueId},</div>)}




{/* ADD BulkDirect Debits */}
        </>
      )}
      <>
        {result && result.status == 'MerchantFailedToLogin' && <div>check your API key. It is invalid API Key</div>}
        {result && result.status == 'UniqueIdNotFound' && <div>Invalid unique reference. please re-enter valid unique value </div>}
        {result && result.status == 'ValidationFailed' && <div>Check your bank account name </div>}
      </>
    </div>
  )
}

export default APIresponse
