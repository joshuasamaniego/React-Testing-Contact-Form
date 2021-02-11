import React from "react";
import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ContactForm from "./ContactForm";

test('ConntactForm renders without errors', () => {
    render(<ContactForm/>);
})

test('Input Fields behave accordingly', async () => {
    render(<ContactForm/>);

    const firstNameInput = screen.getByLabelText(/first name/i);
    const lastNameInput = screen.getByLabelText(/last name/i);
    const emailInput = screen.getByLabelText(/email/i);
    const messageInput = screen.getByLabelText(/message/i);
    const button = screen.getByRole("button", { name: /submit/i});

    act(() => {
        userEvent.type(firstNameInput, "Freddie");
        userEvent.type(lastNameInput, "Cougar");
        userEvent.type(emailInput, "shreddie4lyfe@gmail.com");
        userEvent.type(messageInput, "BOO!");
        userEvent.click(button);
    })

    const freddieTextAwait = await screen.findByDisplayValue(/freddie/i); 
    const freddieText = screen.findByText(/freddie/i); 
    expect(firstNameInput).toMatchObject({});
    expect(freddieTextAwait).toBeInTheDocument();
    freddieText
        .then(() => {
            expect(freddieText).toBeInTheDocument();
      })
})