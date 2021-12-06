import { Button, Grid, Typography, Collapse } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';

import { formatDate, formatMoney } from '../../utils/helperFunctions'
import statusArray from '../../utils/orderStatusArray';

function NotaFiscalCard({ data }) {
  const [expand, setExpand] = useState(false);
  
  console.log(data.value);
  return (
    <Box
      sx={{ 
        width: '80vw', 
        marginTop: 2,
        marginBottom: 2,
        border: '1px solid rgba(0, 0, 0, .2)',
        borderRadius: 2,
      }}
    >
      <Grid 
          direction="row" 
          alignItems="center" 
          container columns={ 12 }
          sx={{ padding: 2, paddingRight: 0 }}
        >
          <Grid item xs><Typography variant='body1'>{data.orderNumber}</Typography></Grid>
          <Grid item xs><Typography variant='body1'>{data.buyer.name}</Typography></Grid>
          <Grid item xs><Typography variant='body1'>{data.provider.name}</Typography></Grid>
          <Grid item xs><Typography variant='body1'>{formatDate(data.emissionDate)}</Typography></Grid>
          <Grid item xs><Typography sx={{ color: '#00AD8C' }} variant='body1'>{formatMoney(data.value, 'BRL')}</Typography></Grid>
          <Grid item xs><Typography variant='body1'>{statusArray[data.orderStatusBuyer]}</Typography></Grid>
          <Grid item xs>
            <Button 
              size="small" 
              variant='outlined' 
              onClick={() => setExpand(!expand)}
            >
              Dados do cedente
            </Button>
          </Grid>
        </Grid>
        <Collapse in={expand} timeout='auto' unmountOnExit>
          <Box sx={{ margin: 1, borderTop: '1px solid rgba(0, 0, 0, .2)', }}>
            <Typography variant="h6" gutterBottom component="div">
              Dados do Cedente
            </Typography>
          </Box>
        </Collapse>
      </Box>
  )
}

export default NotaFiscalCard
