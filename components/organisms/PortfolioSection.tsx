import { PrimaryButton } from "../atoms/PrimaryButton";
import { Grid } from "@mantine/core";
import { ArticleCard } from "../ArticleCard";

export const PortfolioSection = () => {
  return (
    <div>
      <Grid>
        <Grid.Col md={6} lg={3}>
          <ArticleCard />
        </Grid.Col>
        <Grid.Col md={6} lg={3}>
          <ArticleCard />
        </Grid.Col>
        <Grid.Col md={6} lg={3}>
          <ArticleCard />
        </Grid.Col>
        <Grid.Col md={6} lg={3}>
          <ArticleCard />
        </Grid.Col>
      </Grid>
      <PrimaryButton value="View All" />
    </div>
  );
};
