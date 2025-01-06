import { Link } from 'react-router-dom';
import { useState, useCallback } from 'react';

import Box from '@mui/material/Box';
import { Grid, Stack } from '@mui/material';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';
import InputAdornment from '@mui/material/InputAdornment';

import { useRouter } from 'src/routes/hooks';

import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

export function SignInView() {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);

  const handleSignIn = useCallback(() => {
    router.push('/');
  }, [router]);

  const renderForm = (
    <Box display="flex" flexDirection="column" alignItems="flex-end" gap={3}>
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
        defaultValue="@demo1234"
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

      <Typography
        component={Link}
        to="/"
        variant="subtitle2"
        align="right"
        sx={{ textDecoration: 'none' }}
      >
        Forgot password?
      </Typography>

      <LoadingButton
        fullWidth
        size="large"
        type="submit"
        variant="contained"
        onClick={handleSignIn}
        sx={{ p: 1.5, borderRadius: 3 }}
      >
        Sign in
      </LoadingButton>
    </Box>
  );

  return (
    <Grid container sx={{ flex: '1 1 auto' }}>
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
              Login
            </Typography>
            <Typography variant="h6" sx={{ color: '#0000007D' }}>
              to get started
            </Typography>
          </Box>

          {renderForm}

          <Typography align="center" variant="body2">
            Do not have an account?{' '}
            <Link to="/sign-up" style={{ fontWeight: 700, textDecoration: 'none' }}>
              Sign up
            </Link>
          </Typography>
        </Stack>
      </Grid>
      <Grid
        item
        xs={0}
        md={6}
        sx={{
          display: { xs: 'none', md: 'flex' },
          justifyContent: 'flex-end',
        }}
      >
        <Box component="img" src="/assets/background/auth.png" sx={{ aspectRatio: '1/1' }} />
      </Grid>
    </Grid>
  );
}
