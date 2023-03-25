import Box from '@mui/material/Box';
import { Link, Typography } from '@mui/material';


export default function Footer() {

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', py: 2, px: 2.5 }}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            p: 1.5,
            borderRadius: '50%',
          }}
        >
      </Box>
      <Typography variant="body2" sx={{ color: 'text.secondary', m: 1.5, textAlign: 'center' }}>
        Made with ❤️ by <Link sx={{ color: 'text.secondary', fontWeight: 'bold' }} href="https://alessioizzo.com" target="_blank" rel="noopener" underline='hover'>aless.io</Link> and <Link sx={{ color: 'text.secondary', fontWeight: 'bold' }} href="https://www.behance.net/charlyinth290c/projects" target="_blank" rel="noopener" underline='hover'>carlotta</Link>
      </Typography>
    </Box>
  );
}

