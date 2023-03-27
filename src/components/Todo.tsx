import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Title from './Title';
import { useState } from 'react';
import Chip from '@mui/material/Chip';
import TextField from '@mui/material/TextField';
import { Button, Stack, Typography } from '@mui/material';
import { TaskProps } from '../types';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  marginBottom: 5,
  color: theme.palette.text.secondary,
}));


function ActionButtons() {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="contained" sx={{color: '#566459', backgroundColor: '#a0eebb'}} >
        Mark as completed
      </Button>
      <Button variant="contained" sx={{ color: '#566459', backgroundColor: '#ffbf9b'}} >
        Delete
      </Button>
    </Stack>
  );
}

const Task = ({id, text, state, createdAt, active, title, tags}: TaskProps) => {

  const [isActive, setIsActive] = useState<boolean>(false)

  const handleOnClick = () => {
    setIsActive(!isActive)
  }

  return (
    <>
      <Grid item xs={6}>
        <Item onClick={handleOnClick}>
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
              <ActionButtons/>
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

  const [tasks, setTasks] = useState<TaskProps[]>([])

  const addTask = () => {
    const taskId = tasks[-1]?.id || 0
    const newTask: TaskProps = {
      id: taskId + 1,
      createdAt: new Date(),
      title: 'newTask',
      active: true,
      state: 'created'
    }
    setTasks([newTask, ...tasks])

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
        {tasks.map((t) => <Task key={t.id} createdAt={t.createdAt} state={t.state} id={t.id} title={t.title} active={t.active} tags={t.tags}/>)}
      </Grid>
    </Box>
    
    </>
  );
}