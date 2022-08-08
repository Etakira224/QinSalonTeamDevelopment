import { PrimaryButton } from "../atoms/PrimaryButton";
import { Grid } from "@mantine/core";

export const PortfolioSection = () => {
  return (
    <div>
      <Grid>
        <Grid.Col md={6} lg={3}>
          1
        </Grid.Col>
        <Grid.Col md={6} lg={3}>
          2
        </Grid.Col>
        <Grid.Col md={6} lg={3}>
          3
        </Grid.Col>
        <Grid.Col md={6} lg={3}>
          4
        </Grid.Col>
      </Grid>
      <PrimaryButton value="View All" />
    </div>
  );
};
