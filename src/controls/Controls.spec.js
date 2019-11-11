// Test away!
import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Controls from './Controls';

test('Controls renders correctly', () => {
  expect(render(<Controls />)).toMatchSnapshot();
})

test('toggleClosed is called on click', () => {
  const toggleClosedMock = jest.fn();
  const { getByText } = render(<Controls toggleClosed={toggleClosedMock} />);
  const toggleButton = getByText(/close gate/i);
  fireEvent.click(toggleButton);
  expect(toggleClosedMock).toHaveBeenCalled();
  expect(toggleClosedMock).toHaveBeenCalledTimes(1);
})

test('toggleLocked is called on click', () => {
  const toggleLockedMock = jest.fn();
  const { getByText } = render(<Controls closed={true} toggleLocked={toggleLockedMock} />);
  const toggleButton = getByText(/lock gate/i);
  fireEvent.click(toggleButton);
  expect(toggleLockedMock).toHaveBeenCalled();
  expect(toggleLockedMock).toHaveBeenCalledTimes(1);
})

test('closed toggle button is disabled if the gate is locked', () => {
  const { getByText } = render(<Controls locked={true} closed={true} />);
  const toggleButton = getByText(/open gate/i);
  expect(toggleButton.disabled).toEqual(true);
})

test('lock toggle button is disabled if the gate is open', () => {
  const { getByText } = render(<Controls />);
  const toggleButton = getByText(/lock gate/i);
  expect(toggleButton.disabled).toEqual(true);
})