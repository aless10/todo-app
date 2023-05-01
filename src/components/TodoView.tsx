import { Grid } from "@mui/material";
import { ITask } from "../types";
import TaskList from "./TaskList";
import TaskDetail from "./TaskDetail";

type TodoViewProps = {
  tasks: ITask[];
  activeTask?: ITask;
  handleClickOnTask: (e: any) => void;
  handleChangeTitle: (e: any) => void;
  handleChangeTags: (e: any) => void;
  handleChangeDescription: (e: any) => void;
  markAsCompleteTask: (taskId: string) => void;
  markAsDeleteTask: (taskId: string) => void;
};

export const ToDoView = ({
  tasks,
  activeTask,
  handleChangeDescription,
  handleClickOnTask,
  handleChangeTags,
  markAsCompleteTask,
  markAsDeleteTask,
  handleChangeTitle,
}: TodoViewProps) => {
  return (
    <>
      <Grid
        container
        sx={{
          p: 1,
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Grid item xs={6}>
          <TaskList
            markAsDeleteTask={markAsDeleteTask}
            markAsCompleteTask={markAsCompleteTask}
            handleClickOnTask={handleClickOnTask}
            tasks={tasks}
          />
        </Grid>
        <Grid item xs={6}>
          <TaskDetail
            handleChangeDescription={handleChangeDescription}
            handleChangeTitle={handleChangeTitle}
            handleChangeTags={handleChangeTags}
            task={activeTask}
          />
        </Grid>
      </Grid>
    </>
  );
};
