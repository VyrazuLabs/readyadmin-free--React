import type { CardProps } from '@mui/material/Card';
import type { ColorType } from 'src/theme/core/palette';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { useTheme } from '@mui/material/styles';
import { Stack, Typography } from '@mui/material';

import { fPercent, fShortenNumber } from 'src/utils/format-number';

import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

type Props = CardProps & {
  title: string;
  total: number;
  percent: number;
  updatedAt?: string;
  color?: ColorType;
  icon: React.ReactNode;
};

export function AnalyticsWidgetSummary({
  icon,
  title,
  total,
  percent,
  updatedAt,
  color = 'primary',
  sx,
  ...other
}: Props) {
  const theme = useTheme();

  const renderTrending = (
    <Box
      sx={{
        gap: 0.5,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Iconify
        width={20}
        icon={percent < 0 ? 'iconamoon:arrow-down-2-fill' : 'iconamoon:arrow-up-2-fill'}
        color={percent > 0 ? theme.palette.success.main : theme.palette.error.main}
      />
      <Box
        component="span"
        sx={{
          typography: 'subtitle2',
          color: percent > 0 ? theme.palette.success.main : theme.palette.error.main,
        }}
      >
        {percent > 0 && '+'}
        {fPercent(percent)}
      </Box>
    </Box>
  );

  return (
    <Card
      sx={{
        p: 3,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 2,
        ...sx,
      }}
      {...other}
    >
      <Box sx={{ width: 50, height: 50 }}>{icon}</Box>

      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'flex-end',
          justifyContent: 'flex-end',
        }}
      >
        <Box sx={{ flexGrow: 1, minWidth: 112 }}>
          <Box sx={{ typography: 'h3', textAlign: 'center' }}>{fShortenNumber(total)}</Box>

          <Box
            sx={{
              mb: 1,
              typography: 'subtitle2',
              textAlign: 'center',
              color: theme.palette.grey[500],
            }}
          >
            {title}
          </Box>
        </Box>
      </Box>
      <Stack alignItems="center">
        {renderTrending}
        <Typography variant="caption" sx={{ color: theme.palette.grey[500] }}>
          {updatedAt}
        </Typography>
      </Stack>
    </Card>
  );
}
