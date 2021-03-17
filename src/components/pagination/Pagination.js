import { func } from "prop-types";
import { Wrapper, Button } from "./Pagination.styles";

const Pagination = ({ handlePreviousPage, handleNextPage }) => {
	return (
		<Wrapper>
			{handlePreviousPage && (
				<Button onClick={handlePreviousPage}>Previous</Button>
			)}
			{handleNextPage && <Button onClick={handleNextPage}>Next</Button>}
		</Wrapper>
	);
};

Pagination.propTypes = {
	handleNextPage: func,
	handlePreviousPage: func,
};

export default Pagination;
