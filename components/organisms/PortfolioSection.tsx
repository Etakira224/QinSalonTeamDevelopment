import { PrimaryButton } from "../atoms/PrimaryButton";
import { Grid } from "@mantine/core";
import { PortfolioCard } from "../modules/PortfolioCard";

export const PortfolioSection = () => {
  return (
    <div id="portfolio">
      <Grid>
        <Grid.Col md={6} lg={3}>
          <PortfolioCard />
        </Grid.Col>
        <Grid.Col md={6} lg={3}>
          <PortfolioCard />
        </Grid.Col>
        <Grid.Col md={6} lg={3}>
          <PortfolioCard />
        </Grid.Col>
        <Grid.Col md={6} lg={3}>
          <PortfolioCard />
        </Grid.Col>
      </Grid>
      <PrimaryButton value="View All" />
    </div>
  );
};
