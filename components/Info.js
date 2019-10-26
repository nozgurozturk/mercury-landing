import { useEffect, useState, useRef } from "react";
import { TweenMax, Power4 } from "gsap";
export const Info = () => {
  const [lazy, setLazy] = useState(false);
  const screnRef = useRef();
  useEffect(() => {
    const handleScroll = () => {
      if (
        screnRef.current.getBoundingClientRect().top <
        window.innerHeight / 2
      ) {
        setLazy(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    if (lazy) {
      TweenMax.to(screnRef.current, 2.4, { x: -400, ease: Power4.easeOut });
    }
  }, [lazy]);

  return (
    <>
      <section className="mercury-info">
        <ul className="mercury-features">
          <li>
            <div className="mercury-circle"></div>
            <div>
              <h1>Board</h1>
              <p>Create board and collect saved items</p>
            </div>
          </li>
          <li>
            <div className="mercury-circle"></div>
            <div>
              <h1>Item</h1>
              <p>Save your links, tasks, etc..</p>
            </div>
          </li>
          <li>
            <div className="mercury-circle"></div>
            <div>
              <h1>Shortcuts</h1>
              <p>Mark shortcuts for your most used websites</p>
            </div>
          </li>
        </ul>
        <div className="mercury-screen" ref={screnRef}>
          <div className="screen-bar"></div>
          <div className="board-container">
            <div className="board">
              <h3>To-do</h3>
              <ul>
                <li>launch rocket</li>
                <li>go to mercury</li>
                <li>return to earth</li>
              </ul>
            </div>
            <div className="board">
              <h3>Projects</h3>
              <ul>
                <li>kepler</li>
                <li>galileo</li>
              </ul>
            </div>
          </div>
          <div className="shortcut-container">
            <h3>Shortcuts</h3>
            <ul>
              <li>github</li>
              <li>jira</li>
              <li>figma</li>
              <li>trello</li>
            </ul>
          </div>
        </div>
      </section>
      <style jsx>
        {`
          .mercury-info {
            display: flex;
            flex-direction: row;
            align-items: center;
            margin-top: 328px;
          }
          .mercury-features {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          }
          .mercury-features li {
            display: flex;
            flex-direction: row;
            margin-bottom: 48px;
            width: 1200px;
          }
          .mercury-features li:last-child {
            margin-bottom: 0px;
          }
          .mercury-circle {
            position: relative;
            height: 34px;
            width: 34px;
            border-radius: 50%;
            background-color: #f0f0ff;
            margin-right: 36px;
          }
          .mercury-circle:after {
            content: "";
            position: absolute;
            height: 4px;
            width: 4px;
            border-radius: 50%;
            right: 2px;
            top: 50%;
            transform: translate(-50%, -50%);
            background-color: #404044;
          }
          .mercury-features li h1 {
            margin: 0;
            padding: 0;
            font-family: RoobertBold;
            font-size: 48px;
            color: #f0f0ff;
            line-height: 34px;
          }
          .mercury-features li p {
            font-family: RoobertRegular;
            font-size: 24px;
            color: #cacadd;
          }
          .mercury-screen {
            min-height: 520px;
            min-width: 800px;
            padding: 48px 64px;
            background-color: #e0e0ee;
            box-shadow: 0px 16px 16px rgba(0, 0, 0, 0.25);
            border-radius: 24px;
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            color: #404044;
          }
          .screen-bar {
            position: absolute;
            background-color: #404044;
            height: 40px;
            width: 100%;
            top: 0;
            left: 0;
            border-top-left-radius: 24px;
          }
          .mercury-screen:after {
            content: "";
            position: absolute;
            height: 12px;
            width: 12px;
            top: 13px;
            left: 80px;
            border-radius: 50%;
            background-color: #f0f0ff;
            z-index: 99;
          }
          .screen-bar:after {
            content: "";
            position: absolute;
            height: 12px;
            width: 12px;
            top: 13px;
            left: 32px;
            border-radius: 50%;
            background-color: #f0f0ff;
            z-index: 99;
          }
          .screen-bar:before {
            content: "";
            position: absolute;
            height: 12px;
            width: 12px;
            top: 13px;
            left: 56px;
            border-radius: 50%;
            background-color: #f0f0ff;
            z-index: 99;
          }
          .mercury-screen h3 {
            margin-top: 24px;
            margin-bottom: 16px;
            font-family: RoobertSemiBold;
            font-size: 36px;
          }
          .mercury-screen li {
            font-family: RoobertRegular;
            font-size: 24px;
            padding: 8px 0px;
          }
          .board-container {
            display: flex;
            flex-direction: row;
          }
          .board {
            display: flex;
            flex-direction: column;
            margin-right: 80px;
          }

          .shortcut-container {
            display: flex;
            flex-direction: column;
          }
          .shortcut-container ul {
            display: flex;
            flex-direction: row;
          }
          .shortcut-container ul li {
            margin-right: 80px;
          }
        `}
      </style>
    </>
  );
};
