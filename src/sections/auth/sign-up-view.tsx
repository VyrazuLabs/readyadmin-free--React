import { Link } from 'react-router-dom';
import React, { useState, useCallback } from 'react';

import { LoadingButton } from '@mui/lab';
import {
  Box,
  Grid,
  Stack,
  Checkbox,
  TextField,
  IconButton,
  Typography,
  InputAdornment,
  FormControlLabel,
} from '@mui/material';

import { useRouter } from 'src/routes/hooks';

import { Iconify } from 'src/components/iconify';

const SignUpView = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSignUp = useCallback(() => {
    router.push('/');
  }, [router]);

  const renderForm = (
    <Box display="flex" flexDirection="column" alignItems="flex-end" gap={3}>
      <TextField
        fullWidth
        name="username"
        placeholder="Username"
        InputLabelProps={{ shrink: true }}
        sx={{ '.MuiInputBase-root': { background: '#fff', borderRadius: 1.5 } }}
      />
      <TextField
        fullWidth
        name="email"
        placeholder="Email address"
        defaultValue="hello@gmail.com"
        InputLabelProps={{ shrink: true }}
        sx={{ '.MuiInputBase-root': { background: '#fff', borderRadius: 1.5 } }}
      />

      <TextField
        fullWidth
        name="password"
        placeholder="Password"
        InputLabelProps={{ shrink: true }}
        type={showPassword ? 'text' : 'password'}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end" sx={{ pr: 0.5 }}>
              <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                <Iconify icon={showPassword ? 'solar:eye-bold' : 'iconamoon:eye-off'} />
              </IconButton>
            </InputAdornment>
          ),
        }}
        sx={{ '.MuiInputBase-root': { background: '#fff', borderRadius: 1.5 } }}
      />

      <TextField
        fullWidth
        name="password"
        placeholder="Confirm Password"
        InputLabelProps={{ shrink: true }}
        type={showConfirmPassword ? 'text' : 'password'}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end" sx={{ pr: 0.5 }}>
              <IconButton onClick={() => setShowConfirmPassword(!showConfirmPassword)} edge="end">
                <Iconify icon={showConfirmPassword ? 'solar:eye-bold' : 'iconamoon:eye-off'} />
              </IconButton>
            </InputAdornment>
          ),
        }}
        sx={{ '.MuiInputBase-root': { background: '#fff', borderRadius: 1.5 } }}
      />

      <Box sx={{ width: '100%' }}>
        <FormControlLabel control={<Checkbox />} label="Agree to Our terms and Conditions" />
      </Box>

      <LoadingButton
        fullWidth
        size="large"
        type="submit"
        variant="contained"
        onClick={handleSignUp}
        sx={{ p: 1.5, borderRadius: 3 }}
      >
        Sign Up
      </LoadingButton>
    </Box>
  );
  return (
    <Grid container sx={{ flex: '1 1 auto' }}>
      <Grid
        item
        xs={0}
        md={6}
        sx={{
          display: { xs: 'none', md: 'flex' },
          justifyContent: 'flex-end',
        }}
      >
        <Box component="img" src="/assets/background/auth_signup.png" sx={{ aspectRatio: '1/1' }} />
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <Stack
          gap={3}
          sx={{
            width: { xs: '90%', md: '45%' },
            background: { xs: '#fff', md: 'transparent' },
            p: { xs: 3, md: 0 },
            borderRadius: { xs: 2, md: 0 },
            transition: 'all 0.4s ease',
          }}
        >
          <Box>
            <Typography variant="h4" sx={{ fontSize: '2rem !important' }}>
              Signup
            </Typography>
            <Typography variant="h6" sx={{ color: '#0000007D' }}>
              to get started
            </Typography>
          </Box>

          {renderForm}

          <Typography align="center" variant="body2">
            Already have an account?{' '}
            <Link to="/sign-in" style={{ fontWeight: 700, textDecoration: 'none' }}>
              Login
            </Link>
          </Typography>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default SignUpView;
