import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, TextField } from '@mui/material';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'cpf',
    headerName: 'CPF',
    width: 150,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', cpf: '318.457.040-10' },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', cpf: '318.457.040-10' },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', cpf: '318.457.040-10' },
  { id: 4, lastName: 'Stark', firstName: 'Arya', cpf: '318.457.040-10' },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', cpf: '318.457.040-10' },
  { id: 6, lastName: 'Melisandre', firstName: null, cpf: '318.457.040-10' },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', cpf: '318.457.040-10' },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', cpf: '318.457.040-10' },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', cpf: '318.457.040-10' },
];

function App() {
  return (
    <div className='App py-4'>
      <div>
      <TextField id="outlined-basic" label="Nome" variant="outlined" />
      <TextField id="outlined-basic" label="CPF" variant="outlined" />
      <Button variant="contained">Pesquisar</Button>
      </div>
      <div className='h-full h-96 px-4'>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>

    </div>
  );
}

export default App;
