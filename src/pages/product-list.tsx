import type { ColumnDef } from '@tanstack/react-table';
import type { Product } from 'src/components/table/types';

import { Helmet } from 'react-helmet-async';

import { Box, Card, Stack, Container, Typography, TableContainer } from '@mui/material';

import { _products } from 'src/_mock';
import { CONFIG } from 'src/config-global';
import { DashboardContent } from 'src/layouts/dashboard';

import DataTable from 'src/components/table/data-table';

const ProductList = () => {
  const productList = _products;
  const columns: ColumnDef<Product>[] = [
    {
      accessorKey: 'id',
      id: 'id',
      header: 'ID',
      cell: (info) => info.getValue() && (info.getValue() as string).slice(-6).toUpperCase(),
      size: 200,
    },
    {
      accessorKey: 'coverUrl',
      id: 'coverUrl',
      header: 'Product Image',
      cell: (info) => (
        <img
          src={info.getValue() as string}
          style={{ borderRadius: '8px', height: 60, width: 100, objectFit: 'cover' }}
          alt="product"
        />
      ),
      size: 200,
    },
    {
      accessorKey: 'price',
      id: 'price',
      header: 'Price',
      size: 200,
      cell: (info) => `$${info.getValue()}`,
      filterFn: 'includesString',
    },
    {
      accessorKey: 'name',
      id: 'name',
      header: 'Product Name',
      size: 200,
    },
    {
      accessorKey: 'colors',
      id: 'colors',
      header: 'Colors',
      size: 250,
      cell: (info) => {
        const colors = info.getValue() as [];
        return (
          <Stack direction="row" gap={0.5} sx={{ px: 1 }}>
            {colors.map((color) => (
              <Box
                key={color}
                sx={{
                  height: '25px',
                  width: '25px',
                  borderRadius: 0.75,
                  background: color,
                  border: '1px solid #e1e1e1',
                }}
              />
            ))}
          </Stack>
        );
      },
    },
    {
      accessorKey: 'priceSale',
      id: 'priceSale',
      header: 'Sale Price',
      cell: (info) => (info.getValue() ? `$${info.getValue()}` : 'N/A'),
      size: 200,
      filterFn: 'includesString',
    },
    {
      accessorKey: 'status',
      id: 'status',
      header: 'Status',
      cell: (info) => {
        const val = (info.getValue() || 'N/A') as string;
        return val[0].toUpperCase().concat(val.slice(1));
      },
      size: 200,
    },
  ];

  return (
    <>
      <Helmet>
        <title> {`Product List - ${CONFIG.appName}`}</title>
      </Helmet>
      <DashboardContent>
        <Container>
          <Typography variant="h4">Product List</Typography>
          <Card sx={{ p: 2, my: 3 }}>
            <TableContainer sx={{ minHeight: 10 }}>
              <DataTable tColumns={columns} tData={productList} />
            </TableContainer>
          </Card>
        </Container>
      </DashboardContent>
    </>
  );
};

export default ProductList;
