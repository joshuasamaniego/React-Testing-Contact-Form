import React from 'react';
import { render, screen } from "@testing-library/react";
import App from "./App";

test('renders without errors', () => {
    //checks to see if App renders
    render(<App />)
});