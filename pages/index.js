import React from "react";
import dynamic from 'next/dynamic'

import { Navigation } from "../components/Navigation";
//import { Jumbotron } from "../components/Jumbotron";

const JumbtotronNoSSR = dynamic(
  () => import('../components/Jumbotron'),
  { ssr: false }
)

const Home = () => (
  <div className="mercury-container">
    <Navigation />
    <JumbtotronNoSSR />
    <style jsx global>{`
      body {
        margin: 0;
        padding: 0;
        width: 100%;
        background-image: linear-gradient(
          to bottom,
          rgba(240, 240, 255, 1),
          rgba(64, 64, 68, 1)
        );
        font-family: RoobertRegular;
        color: #404044;
      }
      ul {
        list-style: none;
        margin: 0;
        padding: 0;
      }
      @font-face {
        font-family: RoobertRegular;
        src: url("/font/Roobert-Regular.woff");
      }
      @font-face {
        font-family: RoobertSemiBold;
        src: url("/font/Roobert-SemiBold.woff");
      }
      @font-face {
        font-family: RoobertBold;
        src: url("/font/Roobert-Bold.woff");
      }
      .mercury-container {
        max-width: 960px;
        margin: 0 auto;
        padding:48px 10px;
        display: flex;
        flex-direction: column;
      }
    `}</style>
  </div>
);

export default Home;
