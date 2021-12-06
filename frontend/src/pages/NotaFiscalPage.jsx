import React, { Fragment } from 'react'
import { Stack, Typography } from '@mui/material';
import Icon from '@mdi/react';
import { mdiHandshakeOutline } from '@mdi/js';

import NotasFiscaisTable from '../components/NotasFiscaisTable/NotasFiscaisTable';

function NotaFiscalPage() {
  return (
    <Fragment>
      <Stack direction="row" spacing={2}>
        <Icon path={mdiHandshakeOutline} title="User Profile" size={1.5} />
        <Typography 
          variant='h4' 
          component='h1'
          sx={{ fontWeight: 'medium' }}
        >
          Notas fiscais
        </Typography>
      </Stack>
      <Typography variant='h6' component='h2' sx={{ opacity: 0.5 }}>Visualize as notas fiscais que você tem.</Typography>
      <NotasFiscaisTable />
    </Fragment>
  )
}

export default NotaFiscalPage
