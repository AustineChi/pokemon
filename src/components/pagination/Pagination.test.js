import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Pagination from "./index";


describe("<Pagination />", () => {
    const handlePreviousPage = jest.fn();
    const handleNextPage = jest.fn();
    beforeEach(cleanup);

	test("Renders without crashing", () => {
		render(<Pagination handlePreviousPage={handlePreviousPage} handleNextPage={handleNextPage} />);
	});

	test("expects next button to be in document and to be called on click", () => {
		const { getByText } = render(
			<Pagination handlePreviousPage={handlePreviousPage} handleNextPage={handleNextPage} />
        );
        const nextButton = getByText("Next");
        expect(nextButton).toBeInTheDocument();
		fireEvent.click(nextButton);
		expect(handleNextPage).toHaveBeenCalled();
	});

	test("expects previous button to be called on button click", () => {
		const { queryByText } = render(
			<Pagination handlePreviousPage={handlePreviousPage} handleNextPage={handleNextPage} />
        );
        
        const previousButton = queryByText("Previous");
		const nextButton = queryByText("Next");
		fireEvent.click(nextButton);
        expect(previousButton).toBeInTheDocument();
        fireEvent.click(previousButton);
        expect(handlePreviousPage).toHaveBeenCalled();


	});
});
