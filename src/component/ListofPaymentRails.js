import React from 'react'
import Button from 'react-bootstrap/Button';
import { useState,useEffect } from 'react';
import PAYIDPayment from './ProcessAtransaction/PAYIDPayment';
import BSBNPPPayment from './ProcessAtransaction/BSBNPPPayment';

import BulkDirectDebit from './ProcessAtransaction/BulkDirectDebit'
import DebitChildmAccount from './ProcessAtransaction/DebitChildmAccount';
import DirectCredit from './ProcessAtransaction/DirectCredit';
import DirectDebit from './ProcessAtransaction/DirectDebit';
import PayBpay from './ProcessAtransaction/PayBpay';
import PaymAccount from './ProcessAtransaction/PaymAccount';




// const [openNppPayBankAccount,setopenNppPayBankAccount]=useState(false);
// const [openPAYIDPayment,setopenPAYIDPayment]=useState(false);
// const [openPayBpay,setopenPayBpay]=useState(false);
// const [DebitChildmAccount,setDebitChildmAccount]=useState(false);
// const [PaymAccount,setPaymAccount]=useState(false);
// const [DirectDebit,setDirectDebit]=useState(false);
// const [BulkDirectDebit,setBulkDirectDebit]=useState(false);
// const [DirectCredit,setDirectCredit]=useState(false);
// const [DirectDebitToken,setDirectDebitToken]=useState(false);
// const [DirectCreditToken,setDirectCreditToken]=useState(false);

const ListofPaymentRails=()=>{
  const tabState={
    openNppPayBankAccount: false,
    openPAYIDPayment: false, 
    openPayBpay: false,
    openDebitChildmAccount: false,
    openPaymAccount: false,
    openDirectDebit: false,
    openBulkDirectDebit: false,
    openDirectCredit: false,
    openDirectDebitToken: false,
    openDirectCreditToken: false,
  }

  const [tab,setTab] =React.useState(tabState);

  const openTab = (tabName) =>{
  setTab((prevTab) =>{
    const updatedTab={ ...tabState, [tabName]: true};
    return Object.fromEntries(Object.entries(updatedTab).map(([key])=> [key, key=== tabName]))
  })
};


// const openNppPayBankAccountTab = () => {
//   setopenNppPayBankAccount(true);
//   setopenPAYIDPayment(false); 
//   setopenPayBpay(false)
//   setDebitChildmAccount(false)
//   setPaymAccount(false)
//   setDirectDebit(false)
//   setBulkDirectDebit(false)
//   setDirectCredit(false)
//   setDirectDebitToken(false)
//   setDirectCreditToken(false)
// };


  return (
    <div>
    <div className='paymentrailstyle' id="PaymentoutRails">
    <strong className='paymentraildescription'>Click Payment Rail that you would like to test</strong>
      {/* <Button variant="dark" onClick={()=> openTab('openPayBpay')}>Pay Bpay</Button>
      <Button variant="dark" onClick={()=> openTab('openDebitChildmAccount')}>Debit Child mAccount</Button>
      <Button variant="dark" onClick={()=> openTab('openPaymAccount')}>Pay mAccount</Button>
      <Button variant="dark" onClick={()=> openTab('openDirectDebit')}>Direct Debit</Button>
      <Button variant="dark" onClick={()=> openTab('openBulkDirectDebit')}>Bulk Direct Debit</Button>
      <Button variant="dark" onClick={()=> openTab('openDirectCredit')}>Direct Credit</Button>
      <Button variant="dark" onClick={()=> openTab('openDirectDebitToken')}>Direct Debit(Token)</Button>
      <Button variant="dark" onClick={()=> openTab('openDirectCreditToken')}>Direct Credit(Token)</Button> */}

      <Button variant="dark" onClick={()=> openTab('openNppPayBankAccount')}>Npp Pay(BankAccount)</Button>
      <Button variant="dark" onClick={()=> openTab('openPAYIDPayment')}>Npp Pay(PayId)</Button>

      </div>
        <div>
          {/* {openNppPayBankAccount && <BSBNPPPayment/>}
          {openPAYIDPayment && <PAYIDPayment/>} */}

          {Object.keys(tab).map((key) => tab[key] && key === 'openNppPayBankAccount' ? <BSBNPPPayment key={key}/> : null)}
          {Object.keys(tab).map((key) => tab[key] && key === 'openPAYIDPayment' ? <PAYIDPayment key={key}/> : null)}
          
          {/* {Object.keys(tab).map((key) => tab[key] && key === 'openPayBpay' ? <PayBpay key={key}/> : null)}
          {Object.keys(tab).map((key) => tab[key] && key === 'openDebitChildmAccount' ? <DebitChildmAccount key={key}/> : null)}
          {Object.keys(tab).map((key) => tab[key] && key === 'openPaymAccount' ? <PaymAccount key={key}/> : null)}
          {Object.keys(tab).map((key) => tab[key] && key === 'openBulkDirectDebit' ? <BulkDirectDebit key={key}/> : null)}
          {Object.keys(tab).map((key) => tab[key] && key === 'openDirectCredit' ? <DirectCredit key={key}/> : null)} */}

        </div>
    </div>
  )
  }

export default ListofPaymentRails


