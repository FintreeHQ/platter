import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';

import TestExampleComponent from '../components/TestExampleComponent';
import { BufferView } from './decorators';

storiesOf('TestExampleComponent', module)
  .addDecorator(BufferView)
  .add('default', () => (
    <TestExampleComponent onPress={action('tapped-default')} text={'Wena wena'}></TestExampleComponent>
  ))