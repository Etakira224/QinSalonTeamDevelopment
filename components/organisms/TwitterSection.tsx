import { PrimaryButton } from "../atoms/PrimaryButton";
import { TwitterCard } from "../molecules/TwitterCard";

export const TwitterSection = () => {
  return (
    //いずれmap関数(?)で取得して繰り返し表示のこと
    <div id="twitter">
      <TwitterCard />
      <TwitterCard />
      <TwitterCard />
      <TwitterCard />
      <PrimaryButton value="View on Twitter" />
    </div>
  );
};
