import React from 'react';
import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import SignUpView from 'src/sections/auth/sign-up-view';

const SignUp = () => (
  <>
    <Helmet>
      <title> {`Sign up - ${CONFIG.appName}`}</title>
    </Helmet>

    <SignUpView />
  </>
);

export default SignUp;
