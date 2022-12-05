import React from "react";
import { render, fireEvent } from '@testing-library/react';
import SignupLink, {validateInput} from "../../pages/components/SignupLink";
import Signup from "../../pages/Signup";

describe("signup", () => {
    test("validate function should pass on correct email input", () => {
        const text = 'text@test.com'
        expect(validateInput(text)).toBe(true);
    });

    test("validate function should fail on incorrect email input", () => {
        const text = "text"
        expect(validateInput(text)).not.toBe(true);
    });

    test("signup email form should be in the document", () => {
        const component = render(<Signup />);
        const inputNode = component.getByRole("email");
        expect(inputNode).toBeInTheDocument();
    })

    test("signup name form should be in the document", () => {
        const component = render(<Signup />);
        const inputNode = component.getByRole("name");
        expect(inputNode).toBeInTheDocument();
    })

    test("signup password form should be in the document", () => {
        const component = render(<Signup />);
        const inputNode = component.getByRole("password");
        expect(inputNode).toBeInTheDocument();
    })

    test("email field should have label", () => {
        const component = render(<Signup />);
        const emailInputNode = component.getByRole("email");
        expect(emailInputNode.getAttribute("name")).toBe("email02");
    })
})