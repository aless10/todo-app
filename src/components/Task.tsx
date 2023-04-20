import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
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

type TaskProps = {
  task: ITask
  markCompleted: (id: string) => void
  markDeleted: (id: string) => void
  setCurrentActive: () => void
}


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  marginBottom: 5,
  color: theme.palette.text.secondary,
}));


export const Task = ({setCurrentActive, markCompleted, markDeleted, task}: TaskProps) => {

  const {id, text, state, createdAt, active, title, tags} = task

  return (
    <>
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
    </>
  )
}
