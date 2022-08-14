import { PrimaryButton } from "../atoms/PrimaryButton";
import { BlogCard } from "../molecules/BlogCard";

const dummyGen = () => {
  const items = [];
  for (let i = 0; i <5; i++) {
    items.push( <BlogCard /> )
  }
  return <ul>{ items }</ul>;
}

export const BlogSection = () => {
  return (
    <div id="blog">
      <section>
        {/* 以下ダミーデータ */}
        <article>
          <h3>This is a header.</h3>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit.{" "}
          </p>
          <p>2022.08.08</p>
        </article>
        <article>
          <h3>This is a header.</h3>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit.{" "}
          </p>
          <p>2022.08.08</p>
        </article>
        <article>
          <h3>This is a header.</h3>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit.{" "}
          </p>
          <p>2022.08.08</p>
        </article>
        <article>
          <h3>This is a header.</h3>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit.{" "}
          </p>
          <p>2022.08.08</p>
        </article>
        <article>
          <h3>This is a header.</h3>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit.{" "}
          </p>
          <p>2022.08.08</p>
        </article>
        <br />
        <br />
        <br />
        {dummyGen()}
      </section>
      <PrimaryButton value="View All" />
    </div>
  );
};
