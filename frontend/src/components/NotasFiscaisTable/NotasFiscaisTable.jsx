import { Fragment, useContext } from "react";
import { Grid, Typography } from "@mui/material";
import NotaFiscalCard from './NotaFiscalCard';

import OrderContext from "../../context/OrderContext";

function NotasFiscaisTable() {
  const { orders } = useContext(OrderContext)
  return (
    <Fragment>
      <Grid 
        direction="row" 
        alignItems="center" 
        container columns={ 12 } 
        sx={{ width: '80vw', marginTop: 2, marginBottom: 2, opacity: 0.5, paddingLeft: 2 }}
      >
        <Grid item xs><Typography variant='subtitle2'>NOTA FISCAL</Typography></Grid>
        <Grid item xs><Typography variant='subtitle2'>SACADO</Typography></Grid>
        <Grid item xs><Typography variant='subtitle2'>CEDENTE</Typography></Grid>
        <Grid item xs><Typography variant='subtitle2'>EMISSÃO</Typography></Grid>
        <Grid item xs><Typography variant='subtitle2'>VALOR</Typography></Grid>
        <Grid item xs><Typography variant='subtitle2'>STATUS</Typography></Grid>
        <Grid item xs />
      </Grid>
      { orders.map((order) => (
        <NotaFiscalCard key={order.orderNfId} data={order} />
      )) }
    </Fragment>
  )
}

export default NotasFiscaisTable;