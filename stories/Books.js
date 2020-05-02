import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import Books from '../src/components/books/books.component';

storiesOf('Books', module)
    .add(
        'Books',
        () => (
            <Books />
        )
    );


