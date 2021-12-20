import { Typography } from '@mui/material';
import { height, width } from '@mui/system';
import { DataGrid, GridColumns } from '@mui/x-data-grid';
import axios from 'axios';
import { GetServerSideProps } from 'next';

const OrdersPage = (props: any) => {
  const columns: GridColumns = [
    {
      field: 'id',
      headerName: 'ID',
      width: 300,
    },
    {
      field: 'amount',
      headerName: 'Valor',
      width: 100,
    },
    {
      field: 'credit_card_number',
      headerName: 'Num. Cartão de Crédito',
      width: 200,
    },
    {
      field: 'credit_card_name',
      headerName: 'Nome Cartão Crédito',
      width: 200,
    },
    {
      field: 'status',
      headerName: 'Staus',
      width: 110,
    },
  ];
  return (
    <div style={{ height: 400, width: '100%' }}>
      <Typography component="h1" variant="h4">
        Minhas Ordens
      </Typography>
      <DataGrid
        columns={columns}
        rows={props.orders}
        rowsPerPageOptions={[5]}
        disableSelectionOnClick
        checkboxSelection
      />
    </div>
  );
};

export default OrdersPage;

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_NEST_API_HOST}/orders`,
    {
      headers: {
        'x-token': 'cfnil26n04s',
      },
    }
  );

  return {
    props: {
      orders: data,
    },
  };
};
