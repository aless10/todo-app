import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Grid, Typography } from '@mui/material';

type Props = {
  handleNewTask: () => void
}


export default function Title({handleNewTask}: Props) {

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
          <Button data-testid="toggle" onClick={handleNewTask} variant="contained">Create a new task</Button>
        </Grid>
      </Grid>
    </Box>
  );
}