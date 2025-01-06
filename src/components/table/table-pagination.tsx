import type { Table } from '@tanstack/react-table';

import { Stack, Button, MenuItem, TextField } from '@mui/material';

import type { ColProps } from './types';

const TablePagination = ({ table }: { table: Table<ColProps> }) => (
  <Stack
    direction="row"
    alignItems="center"
    justifyContent={{ xs: 'center', md: 'flex-end' }}
    gap={1}
    flexWrap="wrap"
  >
    <Button
      variant="contained"
      onClick={() => table.firstPage()}
      disabled={!table.getCanPreviousPage()}
    >
      {'<<'}
    </Button>
    <Button
      variant="contained"
      onClick={() => table.previousPage()}
      disabled={!table.getCanPreviousPage()}
    >
      {'<'}
    </Button>
    <Button variant="contained" onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
      {'>'}
    </Button>
    <Button variant="contained" onClick={() => table.lastPage()} disabled={!table.getCanNextPage()}>
      {'>>'}
    </Button>
    <Stack direction="row" alignItems="center" gap={1}>
      <div>Page</div>
      <strong>
        {table.getState().pagination.pageIndex + 1} of {table.getPageCount().toLocaleString()}
      </strong>
    </Stack>

    <TextField
      size="small"
      select
      value={table.getState().pagination.pageSize}
      onChange={(e) => {
        table.setPageSize(Number(e.target.value));
      }}
    >
      {[5, 10, 25, 50, 100].map((pageSize) => (
        <MenuItem key={pageSize} value={pageSize}>
          Show {pageSize}
        </MenuItem>
      ))}
    </TextField>
  </Stack>
);

export default TablePagination;
