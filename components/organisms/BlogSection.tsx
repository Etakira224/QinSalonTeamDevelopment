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
  return (
    <div id="blog">
      <section>
        {/* 以下ダミーデータ */}

        {dummyGen()}
      </section>
      <PrimaryButton value="View All" />
    </div>
  );
};
