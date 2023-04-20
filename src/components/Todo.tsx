import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Title from './Title';
import { useState } from 'react';
import Chip from '@mui/material/Chip';
import TextField from '@mui/material/TextField';
import { Autocomplete, Button, List, Stack, Typography } from '@mui/material';
import { ITask } from '../types';
import TaskList from './TaskList';
import TaskDetail from './TaskDetail';

type Tag = {
  label: string
  color: string
}

type TaskProps = ITask & {
  markCompleted: (id: string) => void
  markDeleted: (id: string) => void
  setCurrentActive: () => void
}

const TAGS = [
  {label: 'Work', color: 'red'},
  {label: 'Hobby', color: 'cyan'},
  {label: 'Life', color: 'green'}
]


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  marginBottom: 5,
  color: theme.palette.text.secondary,
}));


const Task = ({setCurrentActive, markCompleted, markDeleted, id, text, state, createdAt, active, title, tags}: TaskProps) => {


  return (
    <>
      <Grid item xs={6}>
        <Item onClick={setCurrentActive} sx={{ color: state === 'completed' ? 'green' : undefined}}>
          <Grid container sx={{
            p: 1,
            display: 'flex', 
            flexDirection: 
            'row',
            justifyContent: 'flex-end', 
            alignItems: 'flex-end'
          }}>
            <Grid item xs={6}>
              <Typography sx={{ fontWeight: 'bold', m: 2 }} variant='h6'>{title}</Typography>
              {tags?.map(tag => <Chip label="Tag 1" />)}
            </Grid>
            <Grid item xs={6} >
                <Stack direction="row" spacing={2}>
                  <Button onClick={() => markCompleted(id)} variant="contained" sx={{color: '#566459', backgroundColor: '#a0eebb'}} >
                    Mark as completed
                  </Button>
                  <Button variant="contained" onClick={() => markDeleted(id)} sx={{ color: '#566459', backgroundColor: '#ffbf9b'}} >
                    Delete
                </Button>
              </Stack>
            </Grid>  
          </Grid>
        </Item>        
      </Grid>
      </>
  )
}



export default function Todo() {

  const [tasks, setTasks] = useState<ITask[]>([])

  const [activeTask, setActiveTask] = useState<ITask>()


  const addTask = () => {
    const newTask: ITask = {
      id: crypto.randomUUID(),
      createdAt: new Date(),
      title: 'newTask',
      active: true,
      state: 'created'
    }
    const previousTasks = tasks.map(t => {
      t.active = true
      return t
    })
    setActiveTask(newTask)
    setTasks([newTask, ...previousTasks])
  }

  const markCompleted = (taskId: string) => {
    const updatedTasks = tasks.map(t => {
      if (t.id === taskId) {
        t.state = 'completed'
      }
      return t
    })
    setTasks([...updatedTasks])
  }

  const markDeleted = (taskId: string) => {
    const updatedTasks = tasks.filter(t => t.id !== taskId)
    setTasks([...updatedTasks])
  }
  
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Title handleNewTask={addTask}/>
        <Grid container spacing={2}>
        <Box sx={{ display: 'flex', height: '70vh' }}>
          <List sx={{ overflowY: 'auto' }} disablePadding>
            <TaskList tasks={tasks}/>
            <TaskDetail task={activeTask}/>
          </List>
          </Box>
        </Grid>
      </Box>
    </>
  );
}