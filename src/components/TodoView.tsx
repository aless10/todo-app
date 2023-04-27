import { Grid } from "@mui/material";
import { ITask } from "../types";
import TaskList from "./TaskList";
import TaskDetail from "./TaskDetail";

type TodoViewProps = {
  tasks: ITask[];
  activeTask?: ITask;
  markAsCompleteTask: (taskId: string) => void;
  markAsDeleteTask: (taskId: string) => void;
};

export const ToDoView = ({
  tasks,
  activeTask,
  markAsCompleteTask,
  markAsDeleteTask,
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
            tasks={tasks}
          />
        </Grid>
        <Grid item xs={6}>
          <TaskDetail task={activeTask} />
        </Grid>
      </Grid>
    </>
  );
};
