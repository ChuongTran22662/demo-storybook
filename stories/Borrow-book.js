import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import BorrowBook from '../src/components/borrow-book/borrow-book.component';

storiesOf('BorrowBook', module)
    .add(
        'BorrowBook',
        () => (
            <BorrowBook />
        )
    );


