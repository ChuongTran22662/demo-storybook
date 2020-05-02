import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import Users from '../src/components/users/user.component';

storiesOf('Users', module)
    .add(
        'Users',
        () => (
            <Users />
        )
    );


