import { Grid, Card, Box } from '@mui/material'
import { ITask } from '../types'
import TaskList from './TaskList'
import TaskDetail from './TaskDetail'

type TodoViewProps = {
    tasks: ITask[]
    activeTask?: ITask
}


export const ToDoView = ({tasks, activeTask}: TodoViewProps) => {
  return (
    <>
      <Box sx={{ display: 'flex', height: '70vh', direction: 'row', flexGrow: 1 }}>
        <TaskList tasks={tasks} />
        <TaskDetail task={activeTask} />
      </Box>
    </>
  )
}
