import { Formik, Form } from "formik";
import * as Yup from "yup";
import Input from "../UIComponent/Input/Input";
import Button from "../UIComponent/Button/SimpleButton";
import { editTask } from "../../Store/tasks";
import { hide } from "../../Store/modal";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef } from "react";

const EditTask = (props) => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks);
  const id = tasks.findIndex((ele) => ele.taskId === props.data);
  const task = tasks[id];
  const inputRef = useRef("");

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <Formik
      validateOnBlur={false}
      validateOnChange={false}
      initialValues={{
        taskName: task.taskName,
      }}
      validationSchema={Yup.object({
        taskName: Yup.string().required("Required"),
      })}
      onSubmit={(value) => {
        console.log(value);
        dispatch(editTask({ ...value, taskId: props.data }));
        dispatch(hide());
      }}
    >
      <Form noValidate>
        <Input
          ref={inputRef}
          name="taskName"
          type="text"
          placeholder="Enter Task Name & Press Enter"
        ></Input>
        <Button name="EDIT"></Button>
      </Form>
    </Formik>
  );
};

export default EditTask;
