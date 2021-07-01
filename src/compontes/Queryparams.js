import React, { useState } from "react";
import { Button, Form, Checkbox } from "semantic-ui-react";
import { removeQueryparams } from "../Actions/userAction";
import { useDispatch, useSelector } from "react-redux";
import useParams from "./useParams";
import { addKey } from "../Actions/userAction";
import { useFormik } from "formik";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";
// import { useForm } from "react-hook-form";

// const schema = yup.object().shape({
//   key: yup
//     .string()
//     .required()
//     .matches(/^a-zA-z/),
// });
const Queryparams = (props) => {
  const formik = useFormik({
    initialValues: {
      key: "",
      value: "",
    },
    onSubmit: (values) => {
      dispatch(addKey(props.ind, values.name, values));
    },
    validate: (values) => {
      let errors = {};

      if (/[&\/\\#, +()$~%.'":*?<>{}]/g.test(values.key)) {
        errors.key =
          "Your string has special characters. \nThese are not allowed.";
      }
    },
  });
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm({
  //   resolver: yupResolver(schema),
  // });
  const [key, setKey] = useState();
  const [error, setError] = useState();

  const dispatch = useDispatch();
  function specialcharecter(data) {
    const iChars = "!`@#$%^&*()+=-[]\\';,./{}|\":<>?~_";

    for (var i = 0; i < data.length; i++) {
      if (iChars.indexOf(data.charAt(i)) != -1) {
        setError("special characters are not allowed.");
        setTimeout(() => {
          setError("");
        }, 1500);
        return true;
      }
    }
  }

  const handleKeyChange = (e) => {
    if (specialcharecter(e.target.value)) {
      setKey((perv) => perv);
    } else {
      setKey(e.target.value);
      dispatch(addKey(props.ind, e.target.name, e.target.value));
    }
  };
  const handleValueChange = (e) => {
    dispatch(addKey(props.ind, e.target.name, e.target.value));
  };

  return (
    <>
      <Form.Group>
        {/* <Checkbox checked={checked}/> */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Form.Input
            name="key"
            placeholder="Key"
            onChange={handleKeyChange}
            value={key}
          />
          <p style={{ color: "red", overflow: "hidden" }}>{error}</p>
        </div>
        {/* <Form.Input placeholder='Key' name='key' onChange={handleKeyValueChange} /> */}
        {/* <Form.Input placeholder='Key' name='key' ref={props.ref} /> */}
        {/* <Form.Input placeholder='Value' name='value' onChange={handleKeyValueChange}/> */}
        {/* <Form.Input placeholder='Value' name='value'ref={ref}/> */}

        <Form.Input
          placeholder="Value"
          name="value"
          onChange={handleValueChange}
        />

        <Button
          onClick={(e) => {
            e.preventDefault();
            dispatch(removeQueryparams(props.ind));
          }}
        >
          Remove
        </Button>
      </Form.Group>
    </>
  );
};

export default Queryparams;
// import React, { useState } from "react";
// import { Button, Form, Checkbox } from "semantic-ui-react";
// import { removeQueryparams } from "../Actions/userAction";
// import { useDispatch, useSelector } from "react-redux";
// import useParams from "./useParams";
// import { addKey } from "../Actions/userAction";

// const Queryparams = React.forwardRef((props, ref) => {
//     console.log(ref)
//     const [keyvalue, setKeyValue] = useState([{ key: "", value: "" }]);

//   const dispatch = useDispatch();
// //   const handleinputChange = (e) => {
// //     dispatch(addKey(props.ind, e.target.name, e.target.value));
// //   };

//   return (
//     <>
//       <Form.Group>
//         {/* <Checkbox checked={checked}/> */}
//         {/* <Form.Input placeholder="Key" name="key" onChange={props.handleinputChange(props.ind)} /> */}
//         {/* <Form.Input placeholder='Key' name='key' onChange={handleKeyValueChange} /> */}
//         <Form.Input placeholder='Key' name='key' ref={ref} />
//         {/* <Form.Input placeholder='Value' name='value' onChange={handleKeyValueChange}/> */}
//         <Form.Input placeholder='Value' name='value'ref={ref}/>
//         {/* <Form.Input placeholder="Value" name="value" onChange={props.handleinputChange(props.ind)} /> */}
//         {/* <Button onClick={(e)=>{e.preventDefault();dispatch(removeQueryparams(props.ind))}}>Remove</Button> */}
//       </Form.Group>
//     </>
//   );
// });

// export default Queryparams;
