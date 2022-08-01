import { useSelector } from "react-redux";
import TaskItem from "./TaskItem";


// Create the table
const TasksList = (props) => {
  const tasks = useSelector(state =>state.shop)
  return (
    <>
    <table>
      <tbody>
        {tasks.map((t) => (
          
              <TaskItem task={t} key={t.id}/>
            
        ))}
      </tbody>
    </table>
    </>
  );
};

export default TasksList;
