import React, { useState } from "react";
import "./todoapp.css";

const Todoapp = () => {
  /* State for addTask  */
  const [task, setTask] = useState("");
  /* State for addTask List  */
  const [taskList, setTaskList] = useState([]);

  /* Event to add Task Value */
  const handlechange = (e) => {
    setTask(e.target.value);
  };

  /* Event to add Task Details in List  */
  const addTask = (e) => {
    if (task !== "") {
      const taskDetails = {
        id: Math.floor(Math.random() * 1000),
        value: task,
        isCompleted: false,
      };

      setTaskList([...taskList, taskDetails]);
    }
  };

  /* Event to Delete  in List  */
  const deleteTask = (e, id) => {
    e.preventDefault();
    setTaskList(taskList.filter((t) => t.id !== id));
    // setTaskList(taskList.find((t) => t.id == id));
  };

  /* Event to complete in List  */
  const completedTask = (e, id) => {
    e.preventDefault();

    const element = taskList.findIndex((elem) => elem.id === id);
    // console.log(element);

    const newTaskList = [...taskList];
    // console.log(newTaskList);

    newTaskList[element] = {
      ...newTaskList[element],
      isCompleted: true,
    };

    setTaskList(newTaskList);
  };

  return (
    <div className="todo">
      <input
        type="text"
        name="text"
        id="text"
        onChange={(e) => handlechange(e)}
        placeholder="Add Your Text Here..."
      />
      <button onClick={addTask} className="add-btn">
        Add
      </button>

      {/* To show to List    */}
      {taskList !== [] ? (
        <ul>
          {taskList.map((t) => {
            return (
              <li className={t.isCompleted ? "crossText" : "listitem"}>
                {t.value}
                <button
                  className="completed"
                  onClick={(e) => completedTask(e, t.id)}
                >
                  Completed
                </button>
                <button className="delete" onClick={(e) => deleteTask(e, t.id)}>
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
};

export default Todoapp;
