import React from 'react'

const APIresponse = ({result}) => {
  return (
    <div>
      {result?.statusDescription}
    </div>
  )
}

export default APIresponse
