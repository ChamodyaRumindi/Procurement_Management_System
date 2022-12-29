import {render, screen} from "@testing-library/react";
import HomeC from '../../components/HomeC';


//test case for header
test("header renders with user home", () => {
    render(<HomeC/>);
    const linkElement = screen.getByText(/Welcome to Procurement Management System/i);
    expect(linkElement).toBeInTheDocument();
});


//test case for home component
test("render user home component in the document", () => {
    const component = render(<HomeC />);
    console.log(component);
});