import { useDispatch } from "react-redux";
import { removeItem } from "./redux";

// create tr and td
const TaskItem = (props) => {
  const { task } = props;

  const dispatch = useDispatch();

  return (
    <tr>
      <td>
        {task.name}
      </td>
      <td>
        {task.shop}
      </td>
      <td>
        <strong>
        <a
          onClick={() => 
            dispatch(removeItem(task.id)) //dispatch function toolkit 
          }
        >
          Delete
        </a>
        </strong>
      </td>
    </tr>
  );
};

export default TaskItem;
