import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function BasicStack() {

  const [items, setItems] = React.useState<string[]>([])

  const addItem = () => {
    const newItem = "itemmmmm"
    setItems([newItem, ...items])
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Button data-testid="toggle" variant="contained" onClick={addItem}>Create a new task</Button>
      <Stack spacing={2}>
        {items.map((item, index) => {
            const tid = `test-${index}`
            return <Item data-testid={tid} key={index}>{item}</Item>
          })
        }
      
      </Stack>
    </Box>
  );
}