import { useEffect, useState } from "react";
import { getTasksRequest } from "../api/tasks.api";
import TaskCard from "../components/taskCard.jsx";
import { useTasks } from "../context/taskProvider.jsx";

function TasksPage() {
  const {tasks,loadTasks} = useTasks()

  useEffect(() => {
    loadTasks();
  }, []);

  function renderMain() {
    if (tasks.length === 0) {
      return <h1>No tasks yet</h1>;
    } else return tasks.map((task) => <TaskCard task={task} key={task.id} />);
  }

  return (
    <div>
      <h1>Tasks</h1>
      {renderMain()}
      <div></div>
    </div>
  );
}

export default TasksPage;
