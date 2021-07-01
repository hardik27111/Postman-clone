import React, { useState } from "react";
import Editor from "react-json-editor-ajrm"
import { useDispatch } from "react-redux";
import { sendDataRequest } from "../Actions/userAction";
const JSON = () => {
  const dispatch = useDispatch()

  const changehandler = (e)=>{
    dispatch(sendDataRequest(e.jsObject))
  }
  // console.log(inputjson)
  // const editor = 
  return (
    <>
    <pre>
      <Editor height='200px' width='100%' onChange={changehandler}/>
    </pre>
    </>
  );
};

export default JSON;
