import dynamic from "next/dynamic";
import { useState, useRef, useEffect } from "react";
import { TweenMax, Power4 } from "gsap";

const ThreeDNoSSR = dynamic(() => import("./ThreeD"), {
  ssr: false
});

export const Jumbotron = ({ animated }) => {
  const jbt = useRef()
  useEffect(() => {
    if(animated){
      TweenMax.to(jbt.current, 0.6, {opacity:0, ease : Power4.easeOut})
    }else{
      TweenMax.to(jbt.current, 1.2, {opacity:1, ease : Power4.easeOut}).delay(2.4)
    }
  }, [animated]);
  return (
    <>
      <section  className="mercury-jumbotron">
        <div ref={jbt} className="jbt-phareses">
          <h1>First plane[t] of your browser</h1>
          <h3>Simple, usefull and minimal startpage</h3>
        </div>
        <ThreeDNoSSR move={animated} />
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
