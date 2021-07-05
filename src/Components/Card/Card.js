import { useDispatch, useSelector } from "react-redux";
import { show } from "../../Store/modal";
import { removeTask } from "../../Store/tasks";
import cssClasses from "./Card.module.scss";
const Card = (props) => {
  const isAuth = useSelector((state) => state.authenticate.isAuth);
  const dispatch = useDispatch();
  return (
    <div className={cssClasses.Card}>
      <p>Created At : {props.createdAt}</p>
      <h3>{props.taskName}</h3>
      <div className={cssClasses.Btn}>
        {isAuth && (
          <button
            style={{ backgroundColor: "darkgreen" }}
            onClick={() => {
              dispatch(show(props.taskId));
            }}
          >
            Edit
          </button>
        )}
        {isAuth && (
          <button
            style={{ backgroundColor: "red" }}
            onClick={() => {
              dispatch(removeTask(props.taskId));
            }}
          >
            Remove
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;
