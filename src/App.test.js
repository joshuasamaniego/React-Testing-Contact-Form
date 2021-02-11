import React from "react";
import {render} from "@testing-library/react";
import App from "./App";
import ContactForm from "./components/ContactForm";

test('App renders without errors', () => {
    render(<App/>);
})
test('ContactForm renders without errors', () => {
    render(<ContactForm/>);
})