import React from 'react'

const PayIDRegisterUI = ({result}) => {
  return (
   
    <div class="responseBody">

      <div> **Endpoint Response** </div>
      <br></br>

      {result && result.status === 'Ok' && (
        <>
     
 {/* Register PayID response  */}
{result?.PayIdDetails.BankAccountNumber && (<div>"Bank Account Number": {result.PayIdDetails.BankAccountNumber},</div>)}
{result?.PayIdDetails.PayId && (<div>"PayId": {result.PayIdDetails.PayId},</div>)}
{result?.PayIdDetails.PayIdName && (<div>"PayID Name": {result.PayIdDetails.PayIdName},</div>)}
{result?.PayIdDetails.PayIdStatus && (<div>"PayID Status": {result.PayIdDetails.PayIdStatus},</div>)}


        </>
      )}
    
    </div>
  )
}

export default PayIDRegisterUI
