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
    <Box sx={{ width: '70%' }}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
        <Typography variant="body1" color="text.secondary">
          ToDo List
        </Typography>
        </Grid>
        <Grid item xs={6}>
        <Button data-testid="toggle" variant="contained">Create a new task</Button>
        </Grid>
      </Grid>
    </Box>
  );
}