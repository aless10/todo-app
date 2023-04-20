import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Grid, List, Typography } from '@mui/material';
import { ITask } from '../types';
import { Task } from './Task';

type Props = {
  tasks: ITask[]
}


export default function TaskList({tasks}: Props) {

  return (
    <>
      <List
        sx={{
          overflowY: 'auto',
        }}
        disablePadding
      >
        {tasks.map( task => (
            <Task task={task} setCurrentActive={()=> {}} markCompleted={()=> {}} markDeleted={()=> {}}/>
          ))}
      </List>
    </>
  )
}