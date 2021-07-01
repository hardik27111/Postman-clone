import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Input,
  Select,
  Button,
  Container,
  Menu,
  Segment,
} from "semantic-ui-react";
import Tabveiw from "./Tabveiw";
import Respones from "./Respones";
import { requestOccurrence } from "../Actions/userAction";

const requestOption = [
  { key: "GE", text: "GET", value: "GET" },
  { key: "PO", text: "POST", value: "POST" },
  { key: "PU", text: "PUT", value: "PUT" },
  { key: "PA", text: "PATCH", value: "PATCH" },
  { key: "DE", text: "DELETE", value: "DELETE" },
];

const Urlform = () => {
  // const keyRef = useRef
  const dispatch = useDispatch();
  const state = useSelector((state) => state.addquery);
  const [keyvalue, setKeyValue] = useState([{ key: "", value: "" }]);
  const [methodType, setMethodType] = useState("GET");
  const [urlReq, setUrlReq] = useState({ url: "", static: "" });
  // const [urlReq, setUrlReq] = useState();
  let regex = /[\?]{1}/;
  let staticurl = null;

  // useEffect(()=>{

  //   // console.log()
  //   if (state) {

  //     let result = regex.test(urlReq)
  //     if (result) {
  //       state.forEach(ele => {
  //         console.log(ele.key)
  //         if (ele.key) {
  //           setUrlReq(`${urlReq.static}${ele.key}`)}
  //         // }else if(ele.value){
  //         //   setUrlReq(`${urlReq}${ele.value}`)
  //         // }
  //         else{
  //           setUrlReq(urlReq);
  //         }

  //       });
  //     }else{
  //       state.forEach(ele=>{

  //         if (ele.key) {

  //           setUrlReq(`${urlReq.static}?${ele.key}`)}
  //         // }else if(ele.value){
  //         //   setUrlReq(`${urlReq}=${ele.key}`)
  //         // }
  //         else{
  //           setUrlReq(urlReq);
  //         }
  //       })

  //     }
  //   }
  //   // inputEvent()
  // // },[state])
let keyValueString=null
useEffect(()=>{
if (urlReq.url) {
  if (state) {
    state.forEach((el,ind) => {
      if (ind==0) {
        keyValueString+='?'+encodeURIComponent(el.key)+'='+ encodeURIComponent(el.value)
      }else{
        keyValueString+='&'+encodeURIComponent(el.key)+'='+ encodeURIComponent(el.value)
      }   
    });
    
  }
let newKeyValueString = keyValueString.replace('null','')

    setUrlReq(perv=>{return{...perv,url:`${urlReq.static}${newKeyValueString}`}})

}
// if (urlReq.url.includes('null?=')) {
//   console.log(urlReq.url)
//   setUrlReq(perv=>{return{...perv,url:''}})
// }
// else{
//   setUrlReq(perv=>{return{...perv,url:`${urlReq.static}${string}`}})
// }
},[state])
  // useEffect(() => {
  //   console.log(state)
  //   if (urlReq) {
  //     state.forEach((el, ind) => {
        
  //       // if (el.key && el.value) {
  //       //   // let regex = /[?el.key=el.value]/;
  //       //   // let regex1 = /[&el.key=el.value]/;
          
  //       //   if (ind===0) {
  //       //     // let newUrl=null
  //       //     let newUrl=null
  //       //     newUrl=urlReq.static+'?'+encodeURIComponent(el.key)+'='+ encodeURIComponent(el.value)
  //       //     console.log(newUrl)
  //       //     // setUrlReq(perv=>{return{...perv,url:newurl}})
  //       //     // console.log(urlReq.includes(`?${el.key}`))
  //       //     if (urlReq.url.includes(`?${el.key}=${el.value}`)) {
  //       //     }else{
  //       //       // setUrlReq(urlReq+'?'+encodeURIComponent(el.key)+'='+ encodeURIComponent(el.value))
  //       //       setUrlReq(perv=>{return{...perv,url:newUrl}})
  //       //     }
  //       //   }else{
  //       //     let newUrl=null
  //       //     newUrl=urlReq.url+'&'+encodeURIComponent(el.key)+'='+ encodeURIComponent(el.value)
  //       //     // setUrlReq(perv=>{return{...perv,url:newurl}})
  //       //     // console.log(urlReq.includes(`&${el.key}=${el.value}`))
  //       //     if (urlReq.url.includes(`&${el.key}=${el.value}`)) {
  //       //     }else{
  //       //       // setUrlReq(urlReq+'&'+encodeURIComponent(el.key)+'='+ encodeURIComponent(el.value))
  //       //       setUrlReq(perv=>{return{...perv,url:newUrl}})
  //       //     }
            
  //       //   }
  //       // }})
  //     }
  //   }
  // }, [state]);
      // setTimeout(() => {

      
          // if (ind === 0) {
          //   setUrlReq((perv) => {
          //     return { ...perv, url: `${urlReq.url}?${el.key}=${el.value}` };
          //   });
          // } else {
          //   setUrlReq((perv) => {
          //     return { ...perv, url: `${urlReq.url}&${el.key}=${el.value}` };
          //   });
          // }
          // setKeyValue([...keyvalue,{key:el.key,value:el.value}])
          // console.log(keyvalue)
          // function removeDuplicates(array) {
          //   let a = []
          //   array.map(x =>{ 
          //     if(!a.includes(x)) {
          //       a.push(x)
          //     }})
          //   return a
          // };
          
          // let jsonObject = keyvalue.map(JSON.stringify);
      
          //   // console.log(jsonObject);
      
          //  let uniqueSet = new Set(jsonObject);
          //  let uniqueArray = Array.from(uniqueSet).map(JSON.parse);
      
          //   console.log(uniqueArray);
       
    
  
  // let finalKeyValue
// useEffect(()=>{
//   keyvalue.forEach((el)=>{
//     if (!finalKeyValue) {
      
//     }
//   })
// },[keyvalue])
  // removeDublicates=()={
   
  // }
  const handleChange = (e) => {
    // dispatch(requestType(e.target.innerText))
    setMethodType(e.target.innerText);
    // console.log(method)
  };
  const inputEvent = (e) => {
    setUrlReq((perv) => {
      return { ...perv, url: e.target.value, static: e.target.value };
    });
    // setUrlReq(e.target.value);
  };
  // const handleKeyValueChange=(key,value)=>{
  //   let result = regex.test(urlReq);
  //   if (result) {
  //     if (key==='key') {

  //       setKeyValue(value)
  //     }else{

  //       setKeyValue(value)
  //     }
  //     setUrlReq(`${urlReq}${key}`);
  //   } else {
  //     if (key==='key') {

  //       setKeyValue(value)
  //     }else{

  //       setKeyValue(value)
  //     }

  //     setUrlReq(`${urlReq}?${key}`);
  //   }
  // }

  // const handleKeyChange = (key, value) => {
  //   // handleKeyValueChange(key,value)
  //   let result = regex.test(urlReq);
  //   let newUrl = null;
  //   if (result) {
  //     if (key === "key") {
  //       newUrl = `${urlReq.static}${value}`;
  //     } else {
  //       newUrl = `${urlReq.url}=${value}`;
  //     }
  //     // setUrlReq(`${urlReq}${key}`);
  //   } else {
  //     if (key === "key") {
  //       newUrl = `${urlReq.static}?${value}`;
  //     } else {
  //       newUrl = `${urlReq.url}=${value}`;
  //     }

  //     // setUrlReq(`${urlReq}?${key}`);
  //   }
  //   console.log(newUrl);
  //   setUrlReq((prev) => {
  //     return { ...prev, url: newUrl };
  //   });
  //   // dispatch(requestOccurrence(methodType, urlReq));
  // };

  return (
    <>
      <Container style={{ margin: "20px 0" }}>
        <Input
          type="text"
          fluid
          placeholder="https://example.com"
          type="url"
          action
        >
          <Select
            style={{ backgroundColor: "#0089ff", color: "#fff" }}
            options={requestOption}
            compact
            defaultValue="GET"
            onChange={handleChange}
          />
          <input onChange={inputEvent} value={urlReq.url} />
          <Button
            onClick={() => dispatch(requestOccurrence(methodType, urlReq.url))}
            primary
          >
            Send
          </Button>
        </Input>
        <Tabveiw
          tab1={"Query params"}
          tab2={"Headers"}
          tab3={"JSON"}
          // KeyChange={handleKeyChange}
        />
        <Tabveiw tab1={"Respones"} tab2={"Respones Headers"} />
      </Container>
    </>
  );
};

export default Urlform;
