import { PrimaryButton } from "../atoms/PrimaryButton";
import { Grid, Title } from "@mantine/core";
import { PortfolioCard } from "../molecules/PortfolioCard";

export const PortfolioSection = () => {
  return (
    <div id="portfolio">
      <Title order={2}>Portfolio</Title>
      <Grid>
        <Grid.Col md={6} lg={4}>
          <PortfolioCard />
        </Grid.Col>
        <Grid.Col md={6} lg={4}>
          <PortfolioCard />
        </Grid.Col>
        <Grid.Col md={6} lg={4}>
          <PortfolioCard />
        </Grid.Col>
        <Grid.Col md={6} lg={4}>
          <PortfolioCard />
        </Grid.Col>
      </Grid>
      <PrimaryButton value="View All" />
    </div>
  );
};
