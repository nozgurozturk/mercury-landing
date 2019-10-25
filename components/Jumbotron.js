import dynamic from "next/dynamic";
import { useState } from "react";
const ThreeDNoSSR = dynamic(() => import("./ThreeD"), {
  ssr: false
});

export const Jumbotron = () => {
  const [move, setMove] = useState(false);
  return (
    <>
      <section className="mercury-jumbotron">
        <div className="jbt-phareses">
          <h1 onClick={()=>{setMove(!move)}}>First plane[t] of your browser</h1>
          <h3>Simple, usefull and minimal startpage</h3>
        </div>
        <ThreeDNoSSR move={move}/>
      </section>
      <style jsx>{`
        .mercury-jumbotron {
          margin-top: 120px;
        }
        .jbt-phareses {
          max-width: 448px;
          display: flex;
          flex-direction: column;
          color: #404044;
        }
        .jbt-phareses h1 {
          font-family: RoobertBold;
          font-size: 48px;
        }
        .jbt-phareses h3 {
          font-family: RoobertRegular;
          font-size: 24px;
        }
      `}</style>
    </>
  );
};
