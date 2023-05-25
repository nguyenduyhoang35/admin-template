import { Grid } from "@react-md/utils";
import StandardTable from "./components/StandardTable";

export function CurrentChildren({ route }) {
	const data = {
		list: [{}, {}, {}],
		pagination: {},
	};
  
	return (
		<Grid columns={1}>
			<StandardTable data={data} />
		</Grid>
	);
}
