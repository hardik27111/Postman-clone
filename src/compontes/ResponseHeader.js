import React from 'react'
import { useSelector } from "react-redux";

const ResponseHeader = () => {
    const response = useSelector((state) => state.request.response);
    return (
        <pre>
        {!response
          ? "Hit send to get a response"
          : JSON.stringify(response.headers, undefined, 4)}
      </pre>
    )
}

export default ResponseHeader
