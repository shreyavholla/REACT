import { render, screen, fireEvent } from '@testing-library/react';
import CustomerRow from "./CustomerRow";

describe("testing customer row using mocking", () => {
    let c = null;
    let callback = null;
    beforeEach(() => {
        c = {
            id:120,
            firstName: "Harry",
            lastName: "Potter"
        };
        callback  = jest.fn(); // mock function
    })
    it("test customer row renders", () => {
        render(<CustomerRow 
            key={c.id} 
            customer={c} 
            delEvent={(id) => callback(id)}/>);
            //screen.debug();
        const elem = screen.getByText(/Harry/i);
        expect(elem).toBeInTheDocument();
    });

    it("delete customer row", () => {
        render(<CustomerRow 
            key={c.id} 
            customer={c} 
            delEvent={(id) => callback(id)}/>);
            //screen.debug();
        const elem = screen.getByRole("button");
        fireEvent.click(elem);
        expect(callback).toBeCalledTimes(1);
        expect(callback).toBeCalledWith(120);
    });
})