import { List } from "@mui/material";
import { ITask } from "../types";
import { Task } from "./Task";

type Props = {
  tasks: ITask[];
  handleClickOnTask: (e: Event) => void;
  markAsCompleteTask: (taskId: string) => void;
  markAsDeleteTask: (taskId: string) => void;
};

export default function TaskList({
  tasks,
  handleClickOnTask,
  markAsCompleteTask,
  markAsDeleteTask,
}: Props) {
  return (
    <>
      <List
        sx={{
          overflowY: "auto",
          height: "50vh",
        }}
        disablePadding
      >
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            setCurrentActive={handleClickOnTask}
            markCompleted={markAsCompleteTask}
            markDeleted={markAsDeleteTask}
          />
        ))}
      </List>
    </>
  );
}
