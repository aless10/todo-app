import { List } from '@mui/material';
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
            <Task key={task.id} task={task} setCurrentActive={()=> {}} markCompleted={()=> {}} markDeleted={()=> {}}/>
          ))}
      </List>
    </>
  )
}