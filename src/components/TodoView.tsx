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
      <Grid container sx={{
            p: 1,
            display: 'flex', 
            flexDirection: 
            'row'
          }}>
        <Grid item xs={6}>
          
            <TaskList tasks={tasks} />
          
        </Grid>
        <Grid item xs={6}>
          <TaskDetail task={activeTask} />
        </Grid>
      </Grid>
    </>
  )
}
