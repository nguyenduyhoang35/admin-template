import { Grid } from "@react-md/utils";

export function CurrentChildren({
  route,
}) {
  return (
    <Grid columns={1}>
      {route}
    </Grid>
  );
}