import React from "react";
import { Navigation } from "../components/Navigation";

const Home = () => (
  <div className="mercury-container">
    <Navigation />
    <style jsx global>{`
      body {
        margin: 0;
        padding: 0;
        width:100%;
        background-image: linear-gradient(
          to bottom,
          rgba(240, 240, 255, 1),
          rgba(64, 64, 68, 1)
        );
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
      .mercury-container{
        max-width:960px;
        margin:48px auto;
        display:flex;
        flex-direction:column;
      }
    `}</style>
  </div>
);

export default Home;
