import { Title } from "@mantine/core";
import { PrimaryButton } from "../atoms/PrimaryButton";
import { BlogCard } from "../molecules/BlogCard";

const dummyGen = () => {
  const items = [];
  for (let i = 0; i < 5; i++) {
    items.push(<BlogCard />);
  }
  return <ul>{items}</ul>;
};

export const BlogSection = () => {
  //こういうdivも全てmantine準拠のコンポーネントでやれば準拠のpropsで指定するだけでスタイリングできるので楽なのでは。
  return (
    <div id="blog">
      <Title order={2}>Blog</Title>
      <section>
        {/* 以下ダミーデータ */}

        {dummyGen()}
      </section>
      <PrimaryButton value="View All" />
    </div>
  );
};
