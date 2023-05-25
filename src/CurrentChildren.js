import { Grid } from "@react-md/utils";
import StandardTable from "./components/StandardTable";
import { CurrencyFormat } from "currency-fomatter"
import { Input } from "antd";

export function CurrentChildren({ route }) {
	const data = {
		list: [{}, {}, {}],
		pagination: null,
	};

	return (
		<Grid columns={1}>
			<StandardTable data={data} />
			<CurrencyFormat customInput={Input} fixedDecimalScale={true} decimalScale={3}/>
		</Grid>
	);
}
