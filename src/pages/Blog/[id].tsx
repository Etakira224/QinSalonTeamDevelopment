import { BlogCard } from "../../components/molecules/BlogCard";
import { Layout } from "../../components/templates/Layout";
import { client } from "../../lib/client";

function EachArticleDetail() {
  return (
    <Layout>
      <BlogCard />
    </Layout>
  );
}

export default EachArticleDetail;

// 以下microCMS周りの実装。indexで記述しているものと共通部分が多いので後で整理のこと。
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "blogs" });
  const paths = data.contents.map(
    (content: { id: number }) => `/blog/${content.id}`
  );
  return { paths, fallback: false };
};

//例えば以下の関数getStaticPropsは同名の関数をexportしている。混乱のもとでは？
//contextはclient内に入っているもの？
export const getStaticProps = async (context: { params: { id: string } }) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "blog", contentId: id });

  return {
    props: {
      data,
    },
  };
};
