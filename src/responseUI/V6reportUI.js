import React from 'react'



const V6reportUI = ({ reportText: receivedReportText }) => {
    console.log("testt", receivedReportText)
    if (!receivedReportText) return null;

    const rows = receivedReportText.split('\n');


    return (
      <div className='v6reportmargin'>
        <table className='v6reportpadding'>
             <tbody className='v6tbodystyle'>
               
                    {rows.map((row, index) => (
                        <tr className={index % 2 === 1 ? 'oddRow' : 'evenRow'}thank you
                         key={index}>
                     
                            {row.split(',').map((cell, cellIndex) => (
                                <td className={cellIndex === 3 ? 'bsbCell' : 'v6TDstyle'}>{cell}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default V6reportUI
