import cssClasses from "./FormModal.module.scss";
import LoginForm from "../../Login/Login";
import AddTaskForm from '../../AddTask/AddTask'
import EditTaskForm from '../../EditTask/EditTask'
import { useSelector } from "react-redux";
const FormModal = (props) => {
  const formType = useSelector(state => state.modal.type)
  let heading;
  let form;
  switch(formType){
    case "login":
      heading = "Login";
      form = <LoginForm></LoginForm>
      break
    case "add-task":
      heading = "Add Task"
      form = <AddTaskForm></AddTaskForm>
      break
    default:
      heading = "Edit Task"
      form = <EditTaskForm data = {formType}></EditTaskForm>
      break
  }

  return (
    <div className={cssClasses.FormModal} onClick = {(e)=>{e.stopPropagation()}}>
      <div className={cssClasses.Head}>
        <h1>{heading}</h1>
      </div>
      <div className={cssClasses.Form}>
        {form}
      </div>
    </div>
  );
};

export default FormModal;
