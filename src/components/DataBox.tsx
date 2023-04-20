import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { AddCard, Construction, Delete, TaskAlt } from '@mui/icons-material';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { SvgIconTypeMap } from '@mui/material';


type DataBoxProps = {
  key: string;
  text: string;
  icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
    muiName: string;
  };
  bgColor: string;
  iconBgColor: string;
  counter?: number
}

const DataBoxElements: Array<DataBoxProps> = [
  {
    key: 'created',
    text: 'Created tasks',
    bgColor: '#cafdf5',
    iconBgColor: '#96f8f4',
    icon: AddCard
  },
  {
    key: 'completed',
    text: 'Completed tasks',
    bgColor: '#d8fbde',
    iconBgColor: '#a0eebb',
    icon: TaskAlt
  },
  {
    key: 'deleted',
    text: 'Deleted tasks',
    bgColor: '#ffe9d5',
    iconBgColor: '#ffbf9b',
    icon: Delete
  },
  {
    key: 'remaining',
    text: 'Remaining tasks',
    bgColor: '#fff5cc',
    iconBgColor: '#ffe38f',
    icon: Construction
  }
]

function DataBox(props: DataBoxProps) {

  const Component = props.icon

  return (
    <Box
      sx={{
        backgroundColor: props.bgColor,
        boxShadow: 2,
        borderRadius: 5,
        p: 2,
        mt: 10,
        ml: 2,
        mr: 2,
        mb: 2,
        minWidth: 80,
        minHeight: 150,
        display: 'flex', 
        flexDirection: 
        'column', 
        alignItems: 'center'
      }}
    >
      <Box sx={{borderRadius: '50%', backgroundColor: props.iconBgColor, width: 80,
          height: 80, alignItems: 'center', display: 'flex', 
          flexDirection: 
          'column', justifyContent: 'center', mt: 5 }}>
        <Component sx={{width: 30, height: 30}} />
      </Box>
      <Typography variant="h4" sx={{ color: 'text.secondary', m: 1.5, textAlign: 'center' }}>
        {props.counter}
      </Typography>
      <Typography variant="subtitle2" sx={{ color: 'text.secondary', m: 1.5, textAlign: 'center', fontWeight: 'bold'}}>
        {props.text}
      </Typography>
      
    </Box>
  );
}


export default function DataBoxList() {
  return <>
  <Grid container spacing={2}>
    {DataBoxElements.map((element) => {
      return (
      <Grid item xs={3}>
        <DataBox key={element.key} text={element.text} counter={element.counter} bgColor={element.bgColor} iconBgColor={element.iconBgColor} icon={element.icon}/>
      </Grid>
      )
    })}
  </Grid>
  </>
}