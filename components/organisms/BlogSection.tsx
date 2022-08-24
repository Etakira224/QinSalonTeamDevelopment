import Link from "next/link";
import { client } from "../../libs/client";
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

//any型指定は修正必要
export const BlogSection = (data: any[]) => {
  return (
    <div id="blog">
      <Title order={2}>Blog</Title>
      <section>
        {/* 以下ダミーデータ */}
        {dummyGen()}
        {/* 以下microCMS仮実装。後で可読性なり調整すること */}
        <ul>
          {data.map((blog) => (
            <li key={blog.id}>
              <Link href={`/blog/${blog.id}`}>
                <a >{blog.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <PrimaryButton value="View All" />
    </div>
  );
};

// microCMS関連
export const getStaticProps = async () => {
  const data = await client.get({endpoint: "blogs"});

  return {
    props: {
      data: data.contents,
    }
  }
}


