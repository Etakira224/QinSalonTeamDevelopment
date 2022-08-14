import { PrimaryButton } from "../atoms/PrimaryButton";
import { GitHubCard } from "../molecules/GitHubCard";

export const GitHubSection = () => {
  return (
    <div id="github">
      <GitHubCard />
      <GitHubCard />
      <GitHubCard />
      <GitHubCard />
      <PrimaryButton value="View on GitHub" />
    </div>
  );
};
