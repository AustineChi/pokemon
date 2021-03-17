import styled from "styled-components";

export const Table = styled.div`
	width: 400px;
	margin: 50px 0;
	box-sizing: border-box;
	box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.45);
`;

export const Row = styled.div`
width: 100%;
display: flex;
align-items: center;
height: 40px;
&:hover {
    background-color: rgba(171,206,227, 1);
`;

export const RowItem = styled.div`
	padding: 10px;
	flex: 1;
	text-align: center;
	font-weight: ${({ weight }) => weight || "rgba(171,206,227, 0.3)"};
	background-color: ${({ background }) =>
		background || "rgba(171,206,227, 0.3)"};
`;
