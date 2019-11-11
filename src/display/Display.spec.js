// Test away!
import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Display from './Display';

test('Display renders correctly', () => {
  expect(render(<Display />)).toMatchSnapshot();
})

test('it can mock', () => {
  const mock = jest.fn();
  mock('smile');
  expect(mock).toHaveBeenCalled();
})

test('displays closed with red-led if the closed prop is true', () => {
  const { queryByText, getByText } = render(<Display closed={true} />);
  getByText(/closed/i);
  queryByText(/red-led/i)
})

test('displays locked with red-led if the locked prop is true', () => {
  const { queryByText, getByText } = render(<Display locked={true} />);
  getByText(/locked/i);
  queryByText(/red-led/i)
})


test('displays open with green-led if the closed prop is false', () => {
  const { queryByText, getByText } = render(<Display closed={false} />);
  getByText(/open/i);
  queryByText(/green-led/i)
})

test('displays unlocked with green-led if the locked prop is false', () => {
  const { queryByText, getByText } = render(<Display locked={false} />);
  getByText(/unlocked/i);
  queryByText(/green-led/i)
})