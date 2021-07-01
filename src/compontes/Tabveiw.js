import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Tab, Form, Button } from "semantic-ui-react";
import Queryparams from "./Queryparams";
import JSON from "./JSON";
import { addQueryparams } from "../Actions/userAction";
import Respones from "./Respones";
import ResponseHeader from "./ResponseHeader";


const Tabveiw = (props) => {
  const [keyvalue, setKeyValue] = useState([{ key: "", value: "" }]);
  const inputRef = useRef(null)

  const dispatch = useDispatch();
  const state = useSelector((state) => state.addquery);
  
// const handleKeyChange=(key)=>{
//   props.handleKeyChange(keyRef.current.value)
// }
const handleinputChange=(e)=>{
  console.log(e)
// const values = [...keyvalue]
// values[index][e.target.name] = e.target.value
// setKeyValue(values)

}
const handleAdd=()=>{
  // setKeyValue([...keyvalue,{ key: "", value: "" }])
  // console.log(keyvalue)
  // console.log(inputRef)
  dispatch(addQueryparams())
}
const keyChange = (key,value)=>{
props.KeyChange(key,value)
}

  const panes = [
    {
      menuItem: props.tab1 === "Query params" ? "Query params" : "Respones",
      render: () =>
        props.tab1 === "Query params" ? (
          <Tab.Pane>
            <Form>
              {state.map((com, index) => {
                // return <Queryparams key={com.id} ind={index} id={com.id} ref={props.handleKeyChange} />;
                return <Queryparams key={index} ind={index} ref={inputRef} />;
              })}

              {/* <Queryparams/> */}
            </Form>
            <Button onClick={handleAdd}>Add</Button>
          </Tab.Pane>
        ) : (
          <Tab.Pane>
            <Respones />
          </Tab.Pane>
        ),
    },
    {
      menuItem: "Headers",
      render: () =>
        props.tab2 === "Headers" ? (
          <Tab.Pane>
            <Form>
              {state.map((com, index) => {
                return <Queryparams key={com.id} ind={index} />;
              })}
            </Form>
            <Button onClick={() => dispatch(addQueryparams())}>Add</Button>
          </Tab.Pane>
        ) : (
          <Tab.Pane>
            <ResponseHeader />
          </Tab.Pane>
        ),
    },
    {
      menuItem: props.tab3 === "JSON" ? "JSON" : null,
      render: () =>
        props.tab3 === "JSON" ? (
          <Tab.Pane>
            <JSON />
          </Tab.Pane>
        ) : null,
    },
  ];

  return <Tab panes={panes} style={{ margin: "20px 0" }} />;
};
export default Tabveiw;
