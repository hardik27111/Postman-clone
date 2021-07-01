import axios from "axios";

export const addQueryparams = () => {
  return (dispatch) => {
    dispatch({
      type: "ADD_QUERYPARAMS",
    });
  };
};

export const removeQueryparams = (index) => {
  return (dispatch, getState) => {
    const oldState = getState().addquery;
    oldState.splice(index, 1);

    dispatch({
      type: "REMOVE_QUERYPARAMS",
    });
  };
};

export const requestOccurrence = (Method, Url) => {
  return (dispatch, getState) => {
    axios.interceptors.request.use((request) => {
      request.customData = request.customData || {};
      request.customData.startTime = new Date().getTime();
      return request;
    });

    function updateEndTime(response) {
      response.customData = response.customData || {};
      response.customData.time =
        new Date().getTime() - response.config.customData.startTime;
      return response;
    }

    axios.interceptors.response.use(updateEndTime, (e) => {
      return Promise.reject(updateEndTime(e.response));
    });

    const senddata = getState().senddata;

    axios({ method: Method, url: Url, data: senddata })
      .catch((e) =>{

        dispatch({
          type: "REQUEST_OCCURRENCE",
          e,
        })
        console.log(e)
      }
      )
      .then((res) => {
        dispatch({
          type: "REQUEST_OCCURRENCE",
          res,
        });
        console.log(res)
      });
  };
};

export const sendDataRequest = (data) => {
  return (dispatch) => {
    dispatch({
      type: "SEND_DATA",
      data,
    });
  };
};

export const addKey = (inputId, nameOfKey, valueOfKey) => {
  return (dispatch, getState) => {
    const Queryparams = getState().addquery;
    if (Queryparams) {
      let value = [...Queryparams];
      value[inputId][nameOfKey] = valueOfKey;
      dispatch({
        type: "ADD_KEY",
        // inputId,
        // key,
        // name
        value,
      });
    }

    // Queryparams.forEach(element => {
    //   if (element.id===inputId) {

    //     dispatch({
    //       type:"ADD_KEY",
    //       inputId,
    //       key
    //     })
    //   }
    // });
  };
};
