// Test away
import React from 'react';
import { render } from '@testing-library/react';

import Dashboard from './Dashboard';
test('Display renders correctly', () => {
  expect(render(<Dashboard />)).toMatchSnapshot();
})