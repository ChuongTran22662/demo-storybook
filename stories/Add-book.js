import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import AddBook from '../src/components/add-book/add-book.component';

storiesOf('AddBook', module)
    .add(
        'AddBook',
        () => (
            <AddBook />
        )
    );


