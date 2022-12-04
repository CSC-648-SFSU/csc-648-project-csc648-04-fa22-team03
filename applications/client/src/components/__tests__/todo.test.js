// import 3 things from testing library react
import { render, screen, cleanup } from  '@testing-library/react';
// to use toBeInTheDocument function
import '@testing-library/jest-dom'

// To make test render component that we created
import Todo from './../todo';

// Create a test

test('should render todo component', () => {
  // expect(true).toBe(true);
  // Render component, ...
  render(<Todo/>);
  //... and retrieve it.
  const todoElement = screen.getByTestId('todo-1');
  // Make assertions on todoElement
  // Assert that todoElement is in the document.
  // pass if element has an id called 'todo-1'
  expect(todoElement).toBeInTheDocument();
  // pass if the div doesn't contain the string "Hi"
  expect(todoElement).toHaveTextContent("Hi");
})
