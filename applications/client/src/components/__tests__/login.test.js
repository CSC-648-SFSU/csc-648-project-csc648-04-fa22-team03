import React from "react";
import { render, fireEvent } from '@testing-library/react';
import LoginLink, {validateInput} from "../../pages/components/LoginLink";
import Login from "../../pages/Login";

describe("login", () => {
    test("validate function should pass on correct email input", () => {
        const text = 'text@test.com'
        expect(validateInput(text)).toBe(true);
    });

    test("validate function should fail on incorrect email input", () => {
        const text = "text"
        expect(validateInput(text)).not.toBe(true);
    });

    test("login form should be in the document", () => {
        const component = render(<Login />);
        const labelNode = component.getByText("email");
        expect(labelNode).toBeInTheDocument();
    })

    test("email field should have label", () => {
        const component = render(<Login />);
        const emailInputNode = component.getByLabelText("email");
        expect(emailInputNode.getAttribute("name")).toBe("email");
    })

    test("email input should accept text", () => {
        const { getByLabelText } = render(<Login />)
        const emailInputNode = component.getByLabelText("email");
        expect(emailInputNode.value).toMatch("")
        fireEvent.change(emailInputNode, {target: {value: 'testing'}})
        expect(emailInputNode.value).toMatch("testing")
    })

    test("should be able to sumbit form", () => {
        const mockFn = jest.fn()
        const { getByRole } = render(<Login handleSubmit={mockFn} />)
        const inputNode = getByRole("button");
        fireEvent.submit(inputNode);
        expect(mockFn).toHaveBeenCalledTimes(1);
    })
})