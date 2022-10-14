import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

it('renders heading', () => {
  render(<App />);
  // screen.debug();
  const h1Element = screen.getByText(/React Customer Application/i);
  expect(h1Element).toBeInTheDocument();
});

it('renders customers', () => {
  render(<App />);
  const btns = screen.getAllByRole('button');
  expect(btns.length).toBe(6);
});


it('renders customers test using DOM', () => {
  let {container} = render(<App />);
  const btns = container.querySelectorAll('button')
  expect(btns.length).toBe(6);
});

it('delete customer', () => {
  render(<App />);
  let btns = screen.getAllByRole('button');
  fireEvent.click(btns[3]);
  btns = screen.getAllByRole('button');
  expect(btns.length).toBe(5);
});

it('filter customer', () => {
  render(<App />);
  // let txtBox = screen.getByRole('input');
  let txtBox = screen.getByPlaceholderText('search by name');
  fireEvent.change(txtBox, {target: {value: 'Geller'}});
  //screen.debug();
  let btns = screen.getAllByRole('button');
  btns = screen.getAllByRole('button');
  expect(btns.length).toBe(2);
});