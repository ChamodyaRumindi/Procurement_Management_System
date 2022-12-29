import {render, screen} from "@testing-library/react";
import CreateSupplier from '../CreateSupplier';


//test case for header
test("supplier header renders with react document", () => {
    render(<CreateSupplier/>);
    const linkElement = screen.getByText(/Create New Supplier/i);
    expect(linkElement).toBeInTheDocument();
});


//negative test case for header
test("supplier header renders with react document", () => {
    render(<CreateSupplier/>);
    const linkElement = screen.getByText(/New Login/i);
    expect(linkElement).toBeInTheDocument();
});


//test case for buttons
test("render the supplier form with button", () => {
    render(<CreateSupplier />);
    const buttonList = screen.findAllByRole("button");       
});