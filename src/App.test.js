import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Home from './pages/Home';

test('FocusInput matches snapshot', () => {
  const { container } = render(<Home store="store"/>)
  expect(container.firstChild).toMatchSnapshot();
});

test.skip('clicking on button increments counter', () => {
  const { getByText, getByTestId } = render(<Home store="store" />)
  fireEvent.click(getByText("Search"));
  expect(getByTestId("count").textContent).toBe("Clicked 2 times");
});

test.skip('calls "onChange" prop on button click', () => {
  const onChange = jest.fn();
  const { getByLabelText } = render(<Home store="store"/>);
  const upperInput = getByLabelText(username)
  fireEvent.change(upperInput, {target: {value: upper}})

  expect(onChange).toHaveBeenCalled();
});