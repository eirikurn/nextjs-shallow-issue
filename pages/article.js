import React from "react";
import Link from "next/link";
import { withRouter } from "next/router";
import Head from "../components/head";

const Article = ({ articleName, router }) => (
  <div>
    <Head title="Home" />

    <div className="hero">
      <h1 className="title">Article {articleName}</h1>
    </div>
    <div className="row tabs">
      {"Tabs: "}
      <Link href="/article" as={`/article/${articleName}`} shallow>
        <a>Body</a>
      </Link>{" "}
      <Link href="/article" as={`/article/${articleName}/comments`} shallow>
        <a>Comments</a>
      </Link>
      {" (shallow links)"}
      <p>
        {router.asPath.match(/comments$/)
          ? `Comments for ${articleName}`
          : `Body for ${articleName}`}
      </p>
    </div>
    <div className="row">
      <h2>Articles (not shallow links)</h2>
      <ul>
        <li>
          <Link href="/article" as="/article/hello-world">
            <a>Hello world</a>
          </Link>
        </li>

        <li>
          <Link href="/article" as="/article/nextjs-rocks">
            <a>NextJS Rocks</a>
          </Link>
        </li>
      </ul>
    </div>

    <style jsx>{`
      .hero {
        width: 100%;
        color: #333;
      }
      .title {
        margin: 0;
        width: 100%;
        padding-top: 80px;
        line-height: 1.15;
        font-size: 48px;
      }
      .title,
      .description {
        text-align: center;
      }
      .row {
        max-width: 880px;
        margin: 80px auto 40px;
      }
    `}</style>
  </div>
);

Article.getInitialProps = ctx => {
  const { asPath } = ctx;
  const articleName = asPath.split("/")[2];
  return {
    articleName
  };
};

export default withRouter(Article);
