import { render } from "@testing-library/react";

import Home from "./Home";
import { BrowserRouter as Router } from 'react-router-dom';
<><img alt="first-image" src="../../images/1.png" /><img alt="second-image" src="../../images/2.png" /><img alt="third-image" src="../../images/3.jpg" /></>


import '@testing-library/jest-dom';

describe("Home", () => {
  test("renders without crashing", () => {
    render(<Router><Home /></Router>);
  });

  test("renders the header", () => {
    const { getByText } = render(<Router><Home /></Router>);
    expect(getByText("Online Exam System")).toBeInTheDocument();
  });

  test("renders the first image", () => {
    const { getByAltText } = render(<Router><Home /></Router>);
    expect(getByAltText("first-image")).toBeInTheDocument();
  });
  
  test("renders the second image", () => {
    const { getByAltText } = render(<Router><Home /></Router>);
    expect(getByAltText("second-image")).toBeInTheDocument();
  });
  
  test("renders the third image", () => {
    const { getByAltText } = render(<Router><Home /></Router>);
    expect(getByAltText("third-image")).toBeInTheDocument();
  });
  
  
});
