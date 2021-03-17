import { object } from "prop-types";
import { Table, Row, RowItem } from "./DetailsTable.styles";

const DetailsTable = ({ pokemonQualities }) => {
	return (
		<Table>
			<Row>
				<RowItem weight={"700"}>ID:</RowItem>
				<RowItem background={"white"}>
					{pokemonQualities.Pokemon_id}
				</RowItem>
			</Row>
			<Row>
				<RowItem weight={"700"}>Name:</RowItem>
				<RowItem background={"white"}> {pokemonQualities.name}</RowItem>
			</Row>
			<Row>
				<RowItem weight={"700"}>Hatch Counter:</RowItem>
				<RowItem background={"white"}>
					{pokemonQualities.hatch_counter}
				</RowItem>
			</Row>
			<Row>
				<RowItem weight={"700"}>Baby:</RowItem>
				<RowItem background={"white"}>
					{String(pokemonQualities.is_baby)}
				</RowItem>
			</Row>
			<Row>
				<RowItem weight={"700"}>Mythical:</RowItem>
				<RowItem background={"white"}>
					{String(pokemonQualities.is_mythical)}
				</RowItem>
			</Row>
		</Table>
	);
};

DetailsTable.propTypes = {
	pokemonQualities: object,
};

export default DetailsTable;
