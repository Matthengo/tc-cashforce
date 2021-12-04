import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import cashForceLogo from '../cashforceLogo.svg';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

function Header() {
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
        <Typography>Bem-vindo {'<username>'}</Typography>
      </Stack>
    </Stack>
  )
}

export default Header
