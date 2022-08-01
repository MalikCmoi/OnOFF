import { useState } from "react";
import { store } from "./redux";
import "./styles.css";
import TaskForm from "./TaskForm";
import TasksHeader from "./TasksHeader";
import TasksList from "./TasksList";
import { Provider } from "react-redux";

// Main
export default function App() {
  
  return (
    <Provider store={store}>
      <div className="Body">
          <TasksHeader />
          <TaskForm />
          
          <TasksList
          />
            


      </div>
    </Provider>
  );
}
