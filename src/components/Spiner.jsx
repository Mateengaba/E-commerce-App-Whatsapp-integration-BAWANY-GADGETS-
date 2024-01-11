import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const Spiner = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center',width:"100%", minHeight: '100vh' }}>
      <CircularProgress />
    </Box>
  );
};

export default Spiner;
