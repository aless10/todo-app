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
     <Grid container spacing={2}>
        <Grid item xs={12}>
          <Card>
            <Box sx={{ display: 'flex', height: '70vh' }}>
              <TaskList tasks={tasks} />
              <TaskDetail task={activeTask} />
            </Box>
          </Card>
        </Grid>
     </Grid>
    </>
  )
}
