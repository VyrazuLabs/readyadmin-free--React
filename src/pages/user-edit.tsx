import { Helmet } from 'react-helmet-async';

import {
  Box,
  Card,
  Grid,
  Stack,
  Button,
  Container,
  TextField,
  Typography,
  FormControlLabel,
} from '@mui/material';

import { CONFIG } from 'src/config-global';
import { _langs, userProfileInfo } from 'src/_mock';
import { DashboardContent } from 'src/layouts/dashboard';

import { Iconify } from 'src/components/iconify';
import TimeZone from 'src/components/inputs/time-zones';
import CustomSwitch from 'src/components/inputs/custom-switch';
import CountrySelector from 'src/components/inputs/country-select';
import SelectOptionIcon from 'src/components/inputs/select-option';
import UserPermissions from 'src/components/inputs/user-permission';
import SecurityQuestion from 'src/components/inputs/security-question';
import FileUploadButton from 'src/components/inputs/file-upload-button';
import NotificationMethod from 'src/components/inputs/notification-method';

const UserEdit = () => {
  const userDetails = userProfileInfo;
  // const [userDetails, setUserDetails] = useState(userProfileInfo);
  return (
    <>
      <Helmet>
        <title> {`Edit User - ${CONFIG.appName}`}</title>
      </Helmet>
      <DashboardContent>
        <Container>
          <Typography variant="h4">Edit User</Typography>
          <form>
            <Grid container sx={{ mt: 5 }} justifyContent="space-between" rowGap={1}>
              <Grid item xs={12} md={3.5}>
                <Card
                  sx={{
                    height: 400,
                    p: 2,
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'column',
                  }}
                >
                  <Stack
                    sx={{
                      height: '80%',
                      width: '100%',
                      justifyContent: 'center',
                      alignItems: 'center',
                      gap: 2,
                    }}
                  >
                    <Box
                      sx={{
                        borderRadius: '50%',
                        border: '1px dashed #e7e7e8',
                        height: 130,
                        width: 130,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                    >
                      <FileUploadButton
                        label={
                          <Stack
                            alignItems="center"
                            sx={{
                              opacity: 0,
                              transition: 'all ease 0.3s',
                              '&:hover': { opacity: 1 },
                            }}
                          >
                            <Iconify
                              icon="mage:camera-fill"
                              sx={{ height: '1.5rem', width: '1.5rem' }}
                            />
                            <Typography variant="caption">Upload Image</Typography>
                          </Stack>
                        }
                        sx={{
                          height: 120,
                          width: 120,
                          borderRadius: '50%',
                          background: `url(${userDetails?.profilePicture})`,
                          backgroundPosition: 'center',
                          backgroundSize: 'contain',
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          p: 2,
                          textAlign: 'center',
                          color: 'white',
                        }}
                      />
                    </Box>
                    <Typography
                      variant="subtitle2"
                      sx={{ fontSize: '12px', width: '50%' }}
                      align="center"
                    >
                      Allowed *.jpeg, *.jpg, *.png, *.gif max size of 3 Mb
                    </Typography>
                  </Stack>
                  <Stack
                    sx={{ flexGrow: 1, width: '100%', justifyContent: 'flex-start', gap: 0.5 }}
                  >
                    <Stack gap={1}>
                      <Typography variant="subtitle1">Banned</Typography>
                      <FormControlLabel
                        control={<CustomSwitch defaultChecked />}
                        label={<Typography variant="body2">Ban this account.</Typography>}
                        labelPlacement="start"
                        sx={{ width: '100%', gap: 1, mx: 0, justifyContent: 'space-between' }}
                      />
                    </Stack>
                    <Stack gap={1}>
                      <Typography variant="subtitle1">Email Verified</Typography>
                      <FormControlLabel
                        control={<CustomSwitch defaultChecked />}
                        label={
                          <Typography variant="body2">
                            Disabling this will send the user an email.
                          </Typography>
                        }
                        labelPlacement="start"
                        sx={{ width: '100%', gap: 1, mx: 0, justifyContent: 'space-between' }}
                      />
                    </Stack>
                  </Stack>
                </Card>
              </Grid>
              <Grid item xs={12} md={8}>
                <Card sx={{ p: 2 }}>
                  <Grid
                    container
                    justifyContent="space-between"
                    alignItems="center"
                    rowGap={1}
                    columnSpacing={1.5}
                  >
                    <Grid item xs={12} sm={6}>
                      <TextField
                        label="Full Name"
                        fullWidth
                        defaultValue={`${userDetails?.firstName} ${userDetails?.lastName}`}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        label="Email Address"
                        fullWidth
                        defaultValue={`${userDetails?.email}`}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField label="Username" fullWidth />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField label="Password" fullWidth />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField label="Confirm Password" fullWidth />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        label="Phone Number"
                        fullWidth
                        defaultValue={`${userDetails?.phone}`}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <CountrySelector />
                    </Grid>
                  </Grid>

                  <Grid
                    container
                    justifyContent="space-between"
                    alignItems="center"
                    rowGap={1}
                    columnSpacing={1.5}
                    sx={{ mt: 5 }}
                  >
                    <Grid item xs={12}>
                      <Typography variant="subtitle2">Personal Information</Typography>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <TextField label="Company" fullWidth defaultValue="IBM" />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField label="Job Title/Position" fullWidth defaultValue="SDE-2" />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField label="Department" fullWidth defaultValue="Engineering" />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField label="State/Region" fullWidth defaultValue="New York" />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField label="City" fullWidth defaultValue="NY" />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        label="Address"
                        fullWidth
                        defaultValue="21 St James Pl, Brooklyn New York"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField label="Zip/Code" fullWidth defaultValue="100741" />
                    </Grid>
                  </Grid>
                  <Grid
                    container
                    justifyContent="space-between"
                    alignItems="center"
                    rowGap={1}
                    columnSpacing={1.5}
                    sx={{ mt: 5 }}
                  >
                    <Grid item xs={12}>
                      <Typography variant="subtitle2">User Access</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <SelectOptionIcon
                        options={_langs}
                        label="Language Preference"
                        placeholder="Language Preference"
                      />
                    </Grid>{' '}
                    <Grid item xs={12} sm={6}>
                      <TimeZone />
                    </Grid>{' '}
                    <Grid item xs={12} sm={6}>
                      <UserPermissions />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <NotificationMethod />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <SecurityQuestion />
                    </Grid>
                  </Grid>
                  <Stack direction="row" justifyContent="flex-end" sx={{ mt: 2 }}>
                    <Button variant="contained">Save Changes</Button>
                  </Stack>
                </Card>
              </Grid>
            </Grid>
          </form>
        </Container>
      </DashboardContent>
    </>
  );
};

export default UserEdit;
