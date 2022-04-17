import React from "react";
//Incorporate the react testing library
import { render, cleanup } from "@testing-library/react";
//Import the jest-dom package
import "@testing-library/jest-dom/extend-expect";
import About from "..";

//Import the About Component
afterEach(cleanup);

//Configure the testing environment
describe("About component", () => {
  //The first test will be the baseline to verify that the component is rendering.
  it("renders", () => {
    render(<About />);
  });

  //Second test
  //In this test case, we'll use the asFragment function, which returns a snapshot of the About component.
  it("matches snapshot DOM node structure", () => {
    //render About
    const { asFragment } = render(<About />);
    expect(asFragment()).toMatchSnapshot();
  });
});
