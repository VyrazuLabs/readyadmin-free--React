import type { TabsProps } from '@mui/material';

import React from 'react';

import {
  Box,
  Tab,
  Tabs,
  Stack,
  Avatar,
  styled,
  Divider,
  useTheme,
  Typography,
} from '@mui/material';

import { fShortenNumber } from 'src/utils/format-number';

interface StyledTabsProps extends TabsProps {
  children?: React.ReactNode;
  value: string;
  onChange: (event: React.SyntheticEvent, newValue: string) => void;
}

const StyledTabs = styled((props: StyledTabsProps) => (
  <Tabs {...props} TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }} />
))({
  transition: 'all 250ms ease',
  '& .MuiTabs-indicator': {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    bottom: '15px',
  },
  '& .MuiTabs-indicatorSpan': {
    maxWidth: 40,
    width: '100%',
    backgroundColor: '#635ee7',
  },
  '& .MuiTabs-scroller': {
    flex: 'unset',
  },
});

interface StyledTabProps {
  label: string;
  value: string;
}

const StyledTab = styled((props: StyledTabProps) => (
  <Tab disableRipple disableFocusRipple {...props} />
))(({ theme }) => ({
  textTransform: 'none',
  transition: 'all 250ms ease',
  marginRight: theme.spacing(1),
  '&.Mui-focusVisible': {
    backgroundColor: 'rgba(100, 95, 228, 0.32)',
  },
}));

const ProfileBanner = ({
  userProfile,
  tabValue,
  setTabValue,
}: {
  userProfile: any;
  tabValue: string;
  setTabValue: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const theme = useTheme();
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setTabValue(newValue);
  };

  return (
    <Box
      sx={{
        mt: 3,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Stack
        alignItems="center"
        justifyContent={{ xs: 'center', md: 'flex-start' }}
        gap={3}
        sx={{
          p: 3,
        }}
      >
        <Box
          component="img"
          src="/assets/background/overlay.jpg"
          sx={{ height: 120, width: '100%', objectFit: 'cover', borderRadius: 2 }}
        />
        <Avatar
          alt="Remy Sharp"
          src={userProfile?.profilePicture}
          sx={{
            width: { xs: 60, md: 120 },
            height: { xs: 60, md: 120 },
            mt: -8,
            border: '1px solid #fff',
          }}
        />
        <Stack alignItems="center">
          <Typography variant="h4">
            {userProfile?.firstName} {userProfile?.lastName}
          </Typography>
          <Typography variant="h6">{userProfile?.position}</Typography>
        </Stack>
        <Box>
          <Stack direction="row" sx={{ width: '100%', justifyContent: 'space-around' }} gap={3}>
            <Stack gap={0.25} alignItems="center">
              <Typography variant="body2" sx={{ color: theme.palette.grey[700], fontWeight: 500 }}>
                Followers
              </Typography>
              <Typography variant="h3">{fShortenNumber(userProfile?.followers)}</Typography>
            </Stack>
            <Divider orientation="vertical" variant="middle" flexItem />
            <Stack gap={0.25} alignItems="center">
              <Typography variant="body2" sx={{ color: theme.palette.grey[700], fontWeight: 500 }}>
                Following
              </Typography>
              <Typography variant="h3">{fShortenNumber(userProfile?.following)}</Typography>
            </Stack>
          </Stack>
        </Box>
      </Stack>

      {/* Navigation tabs */}
      <Stack>
        <Stack>
          <StyledTabs
            sx={{
              justifyContent: 'center',
              '.MuiTabs-scroller': {
                py: 0.75,
                background: '#fff',
                borderRadius: 4,
              },
            }}
            variant="scrollable"
            scrollButtons
            allowScrollButtonsMobile
            onChange={handleChange}
            value={tabValue}
            TabIndicatorProps={{
              style: {
                bottom: '15px',
                maxWidth: '60px',
                width: '100%',
              },
            }}
          >
            <StyledTab label="Profile" value="Profile" />
            <StyledTab label="Followers" value="Followers" />
            <StyledTab label="Friends" value="Friends" />
            <StyledTab label="Gallery" value="Gallery" />
          </StyledTabs>
        </Stack>
      </Stack>
    </Box>
  );
};

export default ProfileBanner;
