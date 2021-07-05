import { useField } from "formik";
import cssClasses from './Input.module.scss'
import {forwardRef, useRef} from 'react'
import { useImperativeHandle } from "react";

const Input = (props,ref) => {
  const [field, meta] = useField(props.name);
  const inputRef = useRef("");
  useImperativeHandle(ref,()=>{
    return {
      focus: ()=>{
        inputRef.current.focus();
      }
    }
  })

  return (
    <div className = {cssClasses.Input}>
      <input
        ref = {inputRef}
        placeholder={props.placeholder}
        type={props.type}
        {...field}
      ></input>
      <p style = {{height:'20px'}}>{meta.error ?"* "+ meta.error : "     "}</p>
    </div>
  );
};

export default forwardRef(Input);
