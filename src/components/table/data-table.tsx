/* eslint-disable */
import classes from './styles.module.scss';

import type { ColumnDef, PaginationState } from '@tanstack/react-table';

import { useState } from 'react';
import {
  flexRender,
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  getPaginationRowModel,
} from '@tanstack/react-table';

import { Stack } from '@mui/material';

import { Scrollbar } from '../scrollbar';
import TableOptions from './table-col-options';
import TablePagination from './table-pagination';

import type { ColProps } from './types';

const DataTable = ({ tColumns, tData }: { tColumns: ColumnDef<ColProps>[]; tData: ColProps[] }) => {
  const data = tData;
  const [columns] = useState(() => [...tColumns]);
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 5,
  });

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    debugTable: false,
    debugHeaders: false,
    debugColumns: false,
    columnResizeMode: 'onChange',
    // override default column sizing
    defaultColumn: {
      size: 200, // starting column size
      minSize: 100, // enforced during column resizing
      maxSize: 300, // enforced during column resizing
    },
    rowCount: 5,
    state: {
      pagination,
    },
    onPaginationChange: setPagination,
    manualPagination: true,
  });

  return (
    <Stack gap={1}>
      <Scrollbar>
        <table className={classes.table} style={{ width: table.getTotalSize() }}>
          <thead className={classes.thead}>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id} className={classes.tr}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id} className={classes.th}>
                    <TableOptions
                      columnName={
                        header.isPlaceholder
                          ? null
                          : flexRender(header.column.columnDef.header, header.getContext())
                      }
                      header={header}
                    />
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody className={classes.tbody}>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id} className={classes.tr}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className={classes.td}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </Scrollbar>
      <TablePagination table={table} />
    </Stack>
  );
};
export default DataTable;
