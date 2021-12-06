import { Stack, Typography } from '@mui/material'
import React, { useContext } from 'react'
import cashForceLogo from '../cashforceLogo.svg';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

import OrderContext from '../context/OrderContext';

function Header() {
  const { user } = useContext(OrderContext);
  
  return (
    <Stack 
      component='header' 
      sx={{ height: '10vh' }}
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      spacing={2}
    >
      <img alt='logo' src={cashForceLogo} />
      <Stack direction="row" alignItems="center" spacing={1} justifyContent="left">
        <AccountBoxIcon fontSize='large' htmlColor='#00AD8C' />
        <Typography>Bem-vindo {user.name}</Typography>
      </Stack>
    </Stack>
  )
}

export default Header
