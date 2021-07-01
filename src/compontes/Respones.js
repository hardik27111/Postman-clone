import React from "react";
import prettyBytes from "pretty-bytes";
import { useSelector } from "react-redux";
import Editor from "react-json-editor-ajrm";
import locale from "react-json-editor-ajrm/locale/en";
const Respones = () => {
  const response = useSelector((state) => state.request.response);
  if (response) {
    
    console.log(response);
  }
  const Margin = {
    margin: "0 10px",
  };
  return (
    <>
      {
        response?
        (
          <>
          {response.data?
          (
            <>
            <div style={{ display: "flex", color:'#36b700'}}>
              <h5 style={Margin}>Status : {response.status} </h5>
              <h5 style={Margin}>Time : {response.customData.time}ms</h5>
              <h5 style={Margin}>
                Size :
                {prettyBytes(
                  JSON.stringify(response.data).length +
                    JSON.stringify(response.headers).length
                )}
              </h5>
            </div>
            <div>
              <Editor
                id="a_unique_id"
                placeholder={response.data}
                locale={locale}
                height="550px"
                width="100%"
                style={{ fontSize: "20px" }}
              />
            </div>
            </>
          ):(
            <>
            <div style={{ display: "flex",color:'#ef0202' }}>
              <h5 style={Margin}>Status : {response.status}</h5>
              {/* {response?
              <h5 style={Margin}>Status : {response.status} </h5>
              :(<>
              {response.e?
              <h5 style={Margin}>Status : {response.e.status} </h5>
              :
                null
              }
              </>)
              } */}
              <h5 style={Margin}>Time : 0</h5>
              <h5 style={Margin}>0</h5>

            </div>
            </>
          )
        }
          </>
        ):"Hit send to get a response"
      }
    </>
  );
};

export default Respones;
