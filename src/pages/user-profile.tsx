import React from 'react';
import { Helmet } from 'react-helmet-async';

import { TabPanel, TabContext } from '@mui/lab';
import { Box, Container, Typography } from '@mui/material';

import { CONFIG } from 'src/config-global';
import { userProfileInfo } from 'src/_mock';
import { DashboardContent } from 'src/layouts/dashboard';

import UserFriends from 'src/sections/user/user-friends';
import UserGallery from 'src/sections/user/user-gallery';
import ProfileBanner from 'src/sections/user/profile-banner';
import UserFollowers from 'src/sections/user/user-followers';
import ProfileInfo from 'src/sections/user/user-profile-info';

const UserProfile = () => {
  const userProfile = userProfileInfo;
  const [tabValue, setTabValue] = React.useState('Profile');

  return (
    <>
      <Helmet>
        <title> {`Users Profile - ${CONFIG.appName}`}</title>
      </Helmet>
      <DashboardContent>
        <Container>
          <Typography variant="h4">User Profile</Typography>
          <TabContext value={tabValue}>
            <ProfileBanner
              setTabValue={setTabValue}
              tabValue={tabValue}
              userProfile={userProfile}
            />
            <Box>
              <TabPanel value="Profile" sx={{ p: 0 }}>
                <ProfileInfo userProfileData={userProfile} />
              </TabPanel>
              <TabPanel value="Followers" sx={{ p: 0 }}>
                <UserFollowers followers={userProfile?.followersList} />
              </TabPanel>
              <TabPanel value="Friends" sx={{ p: 0 }}>
                <UserFriends friendsList={userProfile?.friends} />
              </TabPanel>
              <TabPanel value="Gallery" sx={{ p: 0 }}>
                <UserGallery galleryPosts={userProfile?.gallery} />
              </TabPanel>
            </Box>
          </TabContext>
        </Container>
      </DashboardContent>
    </>
  );
};

export default UserProfile;
