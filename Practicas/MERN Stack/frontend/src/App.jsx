import { Route, Routes } from "react-router-dom";
import TasksPage from "./pages/tasksPage.jsx";
import TaskForm from "./pages/taskForm.jsx";
import NotFound from "./pages/notFound.jsx";
import Navbar from "./components/navbar.jsx";
import { TaskContextProvider } from "./context/taskProvider.jsx";

function App() {
  return (
    <TaskContextProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<TasksPage></TasksPage>}></Route>
        <Route path="/new" element={<TaskForm></TaskForm>}></Route>
        <Route path="/edit/:id" element={<TaskForm></TaskForm>}></Route>
        <Route path="/*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </TaskContextProvider>
  );
}

export default App;
