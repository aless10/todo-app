import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Title from './Title';
import { useState } from 'react';
import Chip from '@mui/material/Chip';
import TextField from '@mui/material/TextField';
import { Autocomplete, Button, Stack, Typography } from '@mui/material';
import { ITask } from '../types';

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
      <Grid item xs={6}>
        {active && (
        <Item>
          <Grid container sx={{
            p: 1,
            display: 'flex', 
            flexDirection: 
            'row'
          }}>
            <Grid item xs={6}>
              <TextField id="standard-basic" label="Title" variant="standard" defaultValue={title}/>
              <Typography sx={{ m: 2 }} variant='body2'>{createdAt.toDateString()}</Typography>  
              <Autocomplete
                multiple
                size="small"
                options={TAGS}
                renderTags={(tagValue, getTagProps) =>
                  tagValue.map((option, index) => (
                    <Chip
                      size="small"
                      sx={{color: option.color}}
                      label={option.label}
                      {...getTagProps({ index })}
                      key={option.label}
                    />
                  ))
                }
                renderInput={(params) => <TextField label='tags' {...params}/>}
              />
            </Grid>
            <Grid item xs={6} sx={{justifyContent: 'flex-end', alignItems: 'flex-end'}}>
              <Button variant="contained" sx={{color: '#566459', backgroundColor: '#a0eebb'}} >
                Update
              </Button>
            </Grid>
          </Grid>
          <TextField id="outlined-basic" label="Description" variant="outlined"/>
        </Item>
      )}
      </Grid>
      </>
  )
}



export default function Todo() {

  const [tasks, setTasks] = useState<ITask[]>([])

  const [activeTask, setActiveTask] = useState<string>()


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
    setActiveTask(newTask.id)
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
      <Grid container spacing={2} sx={{
        p: 1,
        display: 'flex', 
        flexDirection: 
        'row', 
      }}>
        {tasks.map((t) => <Task setCurrentActive={() => setActiveTask(t.id)} markDeleted={markDeleted} markCompleted={markCompleted} key={t.id} createdAt={t.createdAt} state={t.state} id={t.id} title={t.title} active={activeTask === t.id} tags={t.tags}/>)}
      </Grid>
    </Box>
    
    </>
  );
}