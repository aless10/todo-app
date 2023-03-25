import Button from '@mui/material/Button';

import SaveIcon from '@mui/icons-material/Save';
import DownloadIcon from '@mui/icons-material/Download';
import Stack from '@mui/material/Stack';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CheckIcon from '@mui/icons-material/Check';

function IconLabelButtons() {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="contained" sx={{backgroundColor: '#00ab55'}} startIcon={<SaveIcon />}>
        Save
      </Button>
      <Button variant="contained" sx={{backgroundColor: '#3366ff'}} startIcon={<DownloadIcon />}>
        Export
      </Button>
    </Stack>
  );
}


export default function BasicMenu() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ background: 'white', color: 'black' }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <CheckIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            ToDo App
          </Typography>
          <IconLabelButtons/>
        </Toolbar>
      </AppBar>
    </Box>
  );
}