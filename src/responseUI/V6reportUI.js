import React from 'react'



const V6reportUI = ({ reportText: receivedReportText }) => {
    console.log("testt", receivedReportText)
    if (!receivedReportText) return null;

    const rows = receivedReportText.split('\n');


    return (
      <div>
        <table>
          <thead>
            <tr>
              {/* 각 열의 제목을 표시 */}
              <th>Transaction ID</th>
              <th>Batch Id</th>
              <th>DateTime</th>
              <th>BSB</th>
              <th>Account Number</th>
              <th>Account Name</th>
              <th>PayID</th>
              <th>PayID Name</th>
              <th>Transaction Code</th>
              <th>Transaction Type</th>
              <th>Amount</th>
              <th>Lodgement Reference</th>
              <th>Remitter Name</th>
              <th>Indicator</th>
              <th>Withholding Tax Amount</th>
              <th>EndToEndId</th>
              <th>RespondBeforeDateTime</th>
              <th>NameOfUserSupplyingFile</th>
              <th>NumberOfUserSupplyingFile</th>
              <th>DescriptionOfEntriesOnFile</th>
              <th>SourceBsb</th>
              <th>SourceAccountNumber</th>
              <th>SourceAccountName</th>
              <th>CategoryPurposeCode</th>
              <th>CreditorReferenceInformation</th>
              <th>USINumber</th>
              <th>USIScheme</th>
              <th>UltimateCreditorName</th>
              <th>ReconciliationRuleReference</th>
              

              {/* 이하 열 제목들 추가 */}
            </tr>
          </thead>
             <tbody>
                    {/* 각 행의 데이터를 표시 */}
                    {rows.map((row, index) => (
                        <tr key={index}>
                            {/* 각 행의 데이터를 쉼표로 구분하여 열별로 표시 */}
                            {row.split(',').map((cell, cellIndex) => (
                                <td key={cellIndex}>{cell}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default V6reportUI
