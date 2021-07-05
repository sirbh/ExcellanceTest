import { Formik, Form } from "formik";
import * as Yup from "yup";
import Input from "../UIComponent/Input/Input";
import Button from "../UIComponent/Button/SimpleButton";
import { addTask } from "../../Store/tasks";
import { hide } from "../../Store/modal";
import { useDispatch } from "react-redux";
import { useRef } from "react";
import { useEffect } from "react";

const AddTask = () => {
  const dispatch = useDispatch();
  const inputRef = useRef("");

  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <Formik
      validateOnBlur={false}
      validateOnChange={false}
      initialValues={{
        taskName: "",
      }}
      validationSchema={Yup.object({
        taskName: Yup.string().required("Required"),
      })}
      onSubmit={(value) => {
        dispatch(
          addTask({
            ...value,
          })
        );
        dispatch(hide());
      }}
    >
      <Form noValidate>
        <Input
          ref={inputRef}
          name="taskName"
          type="text"
          placeholder="ENTER TASK & THEN PRESS ENTER"
        ></Input>
        <Button name="ADD"></Button>
      </Form>
    </Formik>
  );
};

export default AddTask;
