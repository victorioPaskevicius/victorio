import { Form, Formik } from "formik";
import { useTasks } from "../context/taskProvider";
import { useParams,useNavigate, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";

function TaskForm() {
  const { createTask, getTask, updateTask } = useTasks();
  const [task, setTask] = useState({
    title: "",
    description: ""
  });
  const params = useParams();
  const navigate = useNavigate()

  useEffect(() => {
    const loadTasks = async () => {
      if (params.id) {
        const response = await getTask(params.id);
        setTask({
          title: response.title,
          description: response.description
        });
      }
    };
    loadTasks();
  }, [params.id]);

  return (
    <div>
      <h1>{params.id ? "Update task" : "Create task"}</h1>

      <Formik
        initialValues={task}
        enableReinitialize={true}
        onSubmit={async (values, actions) => {
          if (params.id) {
            await updateTask(params.id, values);
            navigate('/')
          } else {
            await createTask(values);
          }
          setTask({
            title: "",
            description: ""
          })
        }}
      >
        {({ handleChange, handleSubmit, values, isSubmitting }) => (
          <Form onSubmit={handleSubmit}>
            <label>Title</label>
            <input
              name="title"
              type="text"
              placeholder="Write a title"
              onChange={handleChange}
              value={values.title}
            />

            <label>Description</label>
            <input
              name="description"
              type="text"
              placeholder="Write a description"
              onChange={handleChange}
              value={values.description}
            />

            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Saving..." : "Save"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default TaskForm;
