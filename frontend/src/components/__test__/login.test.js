import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import login from "../login";

describe("test for login component", () => {
    
    //test case for buttons
    test("render the login form with button", () => {
        render(<login />);
        const buttonList = screen.findAllByRole("button");       
    });


    //test case for email validation
    test("should passed on email validation", () => {
        const testEmail = "rumindi@gmail.com";
    });




    //negative test case for email type
    test("email input field should accept email", () => {
        render(<login />);
        const email = screen.getByPlaceholderText("Enter Your Email");
        userEvent.type(email, "rumindi");
        expect(email.value).toMatch("rumindi@gmail.com");
    });


    //match email input type with its attribute
    test("email input type should have type email", () => {
        render(<login />);
        const email = screen.getByPlaceholderText("Enter Your Email");
        expect(email).toHaveAttribute("type","email");
    });
});