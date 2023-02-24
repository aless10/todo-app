import React from 'react';
import { unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { render, screen, fireEvent } from '@testing-library/react';
import BasicStack from '../components/BasicStack';
import Button from '@mui/material/Button';

let container: any = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});


test('renders the component', () => {
  render(<BasicStack />);
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});

it("changes value when clicked one time", () => {
  act(() => {
    render(<BasicStack/>, container);
  });

  // get a hold of the button element, and trigger some clicks on it
  const button = document.querySelector("[data-testid=toggle]")!;

  act(() => {
    button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });
  const item = document.querySelector("[data-testid=test-0]")!;
  expect(item).toBeInTheDocument();
})

it("changes value when clicked multiple times", () => {
  act(() => {
    render(<BasicStack/>, container);
  });

  // get a hold of the button element, and trigger some clicks on it
  const button = document.querySelector("[data-testid=toggle]")!;


  
  for (let i = 0; i < 5; i++) {
    act(() => {
      button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    })
    let dataTest = `[data-testid=test-${i}]`
    let itemLoop = document.querySelector(dataTest)!;
    expect(itemLoop).toBeInTheDocument();
  }


})