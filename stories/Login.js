import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import Login from '../src/components/login/login.component';

storiesOf('Login', module)
  .add(
    'Login',
    () => (
      <Login />
    )
  );

  
