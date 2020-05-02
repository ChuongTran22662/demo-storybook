import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import AddUser from '../src/components/add-user/add-user.component';

storiesOf('AddUser', module)
    .add(
        'AddUser',
        () => (
            <AddUser />
        )
    );


