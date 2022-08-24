import { Title } from "@mantine/core";
import { PrimaryButton } from "../atoms/PrimaryButton";
import { GitHubCard } from "../molecules/GitHubCard";

export const GitHubSection = () => {
  return (
    <div id="github">
      <Title order={2}>GitHub</Title>
      <section>
        <GitHubCard />
        <GitHubCard />
        <GitHubCard />
        <GitHubCard />
      </section>
      <PrimaryButton value="View on GitHub" />
    </div>
  );
};
