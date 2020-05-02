import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import AddBorrow from '../src/components/add-borrow/add-borrow.component';

storiesOf('AddBorrow', module)
    .add(
        'AddBorrow',
        () => (
            <AddBorrow />
        )
    );


