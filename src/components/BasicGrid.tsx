import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Title from './Title';
import { useState } from 'react';
import Chip from '@mui/material/Chip';
import { Button, Stack, Typography } from '@mui/material';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  marginBottom: 5,
  color: theme.palette.text.secondary,
}));

type TaskProps = {
  task: string
  tags: string[]
}

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

const Task = ({task, tags}: TaskProps) => {

  const [active, setActive] = useState<boolean>(false)

  const handleOnClick = () => {
    setActive(!active)
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
            alignItems: 'center'
          }}>
            <Grid item xs={6}>
              <Typography sx={{ fontWeight: 'bold', m: 2 }} variant='h6'>{task}</Typography>
              <Chip label="Tag 1" />
              <Chip label="Tag 2" />
              <Chip label="Tag 3" />  
            </Grid>
            <Grid item xs={6} sx={{ alignItems: 'flex-end'}}>
              <ActionButtons/>
            </Grid>  
          </Grid>
        </Item>        
      </Grid>
      <Grid item xs={6}>
        {active && <Item>{task}</Item>}
      </Grid>
      </>
  )
}



export default function BasicGrid() {

  const [tasks, setTasks] = useState<string[]>([])

  const addTask = () => {
    const newTask = ['hello']
    setTasks([...newTask, ...tasks])

  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Title handleNewTask={addTask}/>
      <Grid container spacing={2} sx={{
        p: 1,
        display: 'flex', 
        flexDirection: 
        'row', 
        alignItems: 'center'
      }}>
        {tasks.map((task) => <Task task={task} tags={[]}/>)}
      </Grid>
    </Box>
  );
}