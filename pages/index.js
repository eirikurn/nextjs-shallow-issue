import React from "react";
import Link from "next/link";
import Head from "../components/head";

const Home = ({ asPath }) => (
  <div>
    <Head title="Home" />

    <div className="hero">
      <h1 className="title">Blog</h1>
    </div>
    <div className="row">
      <p>
        Note that this example does not have a custom server. If you refresh and
        get 404, then return to this url to start again.
      </p>
      <h2>Articles</h2>
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

export default Home;
