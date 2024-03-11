import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import { useState } from 'react';
import V6reportUI from '../responseUI/V6reportUI';
import ClipLoader from "react-spinners/ClipLoader";


const V6Receivablereport = () => {
    const [apiKey, setapiKey] = useState('')
    const [reportDate, setreportDate] = useState('');
    const [result, setResult] = useState(null);
    const [isSubmitted, setisSubmitted] = useState(false)
    const [loading, setLoading] = useState(false)
    const [reportText, setReportText] = useState('');
  

    
  
    const submitAPI = async () => {

    try {
        setLoading(true)
        const response = await fetch(`https://api.m-pay.com.au/receivables/v6/report/${reportDate}`, {
          method: "GET",
          headers: {
            Authorization: `Basic ${btoa(apiKey)}`,
            'Content-Type': 'application/octet-stream',
          },
        });
  
        if (response.ok) {
          const reportText = await response.text();
          console.log("Report:", reportText);
          setReportText(reportText);
          setisSubmitted(true);
          setLoading(false)
         
        } else {
          throw new Error('Failed to fetch report');
        }
      } catch (error) {
        console.error("Error:", error);
        // Handle errors here
      }
    };


    const resetForm = () => {
        setisSubmitted(false);
      };



  
    return (
      <div className='responseUIFlex'>
        <div className='endpoint-style' id="V6Report">
  
          <div className='endpoint-Header'>
            <div className='getButton'>GET</div>
            <div>Report</div>
  
            {!loading && !isSubmitted && <div className='sumbitButton' onClick={submitAPI}>Submit</div>}
            <ClipLoader
              color="#ff0000"
              loading={loading}
              size={30} />
            {isSubmitted && <div className='sumbitButton' onClick={resetForm}>Submit</div>}
          </div>
  
  
  
          <div class="requestURLColor">
          https://api.m-pay.com.au/receivables/v6/report/{'{date}'}
          </div>
  
  
          <div>
  
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Click to open</Accordion.Header>
                <Accordion.Body>
                  <form className='inputArea'>
                    <div>
                      <section>API Key 3CAD4F77-5180-46B5-A67D-74B4D8E52665<strong className='Strongfont'>Required</strong>
  
                        <div>
                          <input type='password'
                            placeholder='Enter your mAccount API Key'
                            value={apiKey}
                            onChange={(e) => setapiKey(e.target.value)}
                          ></input>
                        </div>
                      </section>
  
                      <section>
                        <div>Date 20240311000001 <strong className='Strongfont'>Required</strong></div>
  
  
                        <div>
                          <input type='text'
                            placeholder='Enter your transaction Unique Reference'
                            value={reportDate}
                            onChange={(e) => setreportDate(e.target.value)}></input>
                        </div>
                      </section>
                    </div>
                  </form>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
  
          </div>
        </div>
  
        <div>
          {isSubmitted && <V6reportUI reportText={reportText} className="mediaflexcolumn" />}
        </div>
        {/* <div><MobileUI result={result}/></div> */}
  
      </div>
  
    )
}

export default V6Receivablereport
