import { PrimaryButton } from "../atoms/PrimaryButton";
import { TwitterCard } from "../modules/TwitterCard";

export const TwitterSection = () => {
  return (
    <div>
      <TwitterCard />
      <TwitterCard />
      <TwitterCard />
      <TwitterCard />
      <PrimaryButton value="View on Twitter" />
    </div>
  );
};
