import React from 'react';
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ContactForm from "./ContactForm";

test('renders without errors', async () => {
    //Arrage
    render(<ContactForm/>);

    //Act:
    //  1. Get our firstName, lastName, email, message input fields.
    const firstNameInput = screen.getByLabelText(/first name/i);
    const lastNameInput = screen.getByLabelText(/last name/i);
    const emailInput = screen.getByLabelText(/email/i);
    const messageInput = screen.getByLabelText(/message/i);

    //  2. Type values into our input fields.
    userEvent.type(firstNameInput, "Joe");
    userEvent.type(lastNameInput, "Smith");
    userEvent.type(emailInput, "joesmith@gmail.com");
    userEvent.type(messageInput, "I am awesome!");

    //  3. Push the submit button.
    const button = screen.getByRole('button');
    userEvent.click(button);
    
    //Assert:
    // Species name is on the screen.
    const newInput = await screen.findByText("Joe");
    expect(newInput).toBeInTheDocument();

});