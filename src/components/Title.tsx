import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { Grid, Typography, colors } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Title() {

  return (
    <Box sx={{ width: '100%', mt: 3, display: 'flex', 
    flexDirection: 'column', alignItems: 'center' }}>
      <Grid container spacing={2} sx={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
        <Grid item xs={3} sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <Typography variant="h2">
            ToDo List
          </Typography>
        </Grid>
        <Grid item xs={3} sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <Button data-testid="toggle" variant="contained">Create a new task</Button>
        </Grid>
      </Grid>
    </Box>
  );
}