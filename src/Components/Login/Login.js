import { Formik, Form } from "formik";
import * as Yup from "yup";
import Input from "../../Components/UIComponent/Input/Input";
import Button from "../../Components/UIComponent/Button/SimpleButton";
import { useDispatch } from "react-redux";
import { hide } from "../../Store/modal";
import { login } from "../../Store/auth";
import { useRef } from "react";
import { useEffect } from "react";


const Login = () => {
  const dispatch = useDispatch();
  const inputRef = useRef("");

  useEffect(()=>{
    inputRef.current.focus()
  },[])
  return (
    <Formik
      validateOnBlur={false}
      validateOnChange={false}
      initialValues={{ username: "", password: "" }}
      validationSchema={Yup.object({
        username: Yup.string().required("Required"),
        password: Yup.string()
          .min(8, "must be 8 char long")
          .required("Required"),
      })}
      onSubmit={(value,action) => {
        dispatch(login({userName:value.username,password:value.password}))
        dispatch(hide())
        action.setSubmitting = false;
      }}
    >
      <Form noValidate>
        <Input name="username" type="text" placeholder="Your Name" ref = {inputRef}></Input>
        <Input name="password" type="password" placeholder="Password"></Input>
        <Button name="Login"></Button>
      </Form>
    </Formik>
  );
};

export default Login;
