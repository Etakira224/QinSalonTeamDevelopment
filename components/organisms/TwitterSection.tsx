import { Title } from "@mantine/core";
import { PrimaryButton } from "../atoms/PrimaryButton";
import { TwitterCard } from "../molecules/TwitterCard";

export const TwitterSection = () => {
  return (
    //いずれmap関数(?)で取得して繰り返し表示のこと
    <div id="twitter">
      <Title order={2}>Twitter</Title>
      <section>
        <TwitterCard />
        <TwitterCard />
        <TwitterCard />
        <TwitterCard />
      </section>
      <PrimaryButton value="View on Twitter" />
    </div>
  );
};
