import React, { useState } from "react";

import { Navigation } from "../components/Navigation";
import { Auth } from "../components/Auth";
import { Jumbotron } from "../components/Jumbotron";
import { Info } from "../components/Info";
import { Footer } from "../components/Footer";

const Home = () => {
  const [loginShow, setLoginShow] = useState(false);
  const loginActionHandler = () => {
    setLoginShow(!loginShow);
  };

  return (
    <div className="mercury-container">
      <Navigation onClickHandler={() => loginActionHandler()} />
      <Auth loginShow={loginShow} />
      <Jumbotron loginShow={loginShow} />
      <Info />
      <Footer />
      <style jsx global>{`
        body {
          margin: 0;
          padding: 0;
          width: 100%;
          background-image: linear-gradient(
            to bottom,
            rgba(240, 240, 255, 1),
            rgba(30, 30, 34, 1)
          );
          font-family: RoobertRegular;
          color: #404044;
          overflow-x: hidden;
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
          padding: 48px 10px;
          display: flex;
          flex-direction: column;
        }
      `}</style>
    </div>
  );
};

export default Home;
