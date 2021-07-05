import { useSelector } from "react-redux";
import cssClasses from "./Home.module.scss";
import Card from "../Card/Card";
import { useEffect, useState } from "react";

const Home = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const [taskList, setTaskList] = useState(tasks);
  const filterQuery = useSelector((state) => state.tasks.filterQuery);

  useEffect(() => {
    if (filterQuery === "") {
      setTaskList(tasks);
      return;
    }
    setTaskList(
      tasks.filter((task) =>
        task.taskName.toLowerCase().includes(filterQuery.toLowerCase())
      )
    );
  }, [filterQuery, tasks]);

  return taskList.length === 0 ? (
    <h1 style={{ marginTop: "30px" }}>No Task To Show</h1>
  ) : (
    <div className={cssClasses.Products}>
      {taskList.map((task) => {
        return <Card {...task} key =  {task.taskId} taskId = {task.taskId}></Card>;
      })}
    </div>
  );
};

export default Home;
