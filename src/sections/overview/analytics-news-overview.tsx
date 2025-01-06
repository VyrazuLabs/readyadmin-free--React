import type { CardProps } from '@mui/material/Card';
import type { TimelineItemProps } from '@mui/lab/TimelineItem';

import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader';
import { Box, ListItem, useTheme, ListItemText } from '@mui/material';

import { fDate } from 'src/utils/format-time';

import { Scrollbar } from 'src/components/scrollbar';

// ----------------------------------------------------------------------

type Props = CardProps & {
  title?: string;
  subheader?: string;
  list: {
    id: string;
    coverUrl: string;
    title: string;
    postedAt: string;
    totalViews: number;
    description: string;
    totalShares: number;
    totalComments: number;
    totalFavorites: number;
    author: {
      name: string;
      avatarUrl: string;
    };
    status: string;
  }[];
};

export function AnalyticsNewsOverView({ title, subheader, list, ...other }: Props) {
  return (
    <Card {...other}>
      <CardHeader title={title} subheader={subheader} />
      <Scrollbar fillContent sx={{ maxHeight: 450 }}>
        <Box component="ul" sx={{ gap: 1 }}>
          {list.map((item, index) => (
            <Item key={item.id} item={item} lastItem={index === list.length - 1} />
          ))}
        </Box>
      </Scrollbar>
    </Card>
  );
}

// ----------------------------------------------------------------------

type ItemProps = TimelineItemProps & {
  lastItem: boolean;
  item: Props['list'][number];
};

function Item({ item, lastItem }: ItemProps) {
  const theme = useTheme();
  return (
    <ListItem sx={{ gap: 2 }}>
      <Box
        component="img"
        src={item.coverUrl}
        sx={{ height: '70px', width: '90px', borderRadius: 1.5, flexShrink: 0, objectFit: 'cover' }}
      />
      <ListItemText
        primary={
          <Typography variant="subtitle2" sx={{ fontSize: '13px' }} noWrap>
            {fDate(item.postedAt)}
          </Typography>
        }
        secondary={
          <Typography variant="subtitle2" sx={{ color: theme.palette.grey[600] }} noWrap>
            {item.description}
          </Typography>
        }
      />
    </ListItem>
  );
}
