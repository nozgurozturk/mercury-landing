import { useEffect, useState, useRef } from "react";
import { TweenMax, Power4 } from "gsap";

export const Navigation = ({ loginHandler, signUpHandler, closeHandler }) => {
  const authContainer = useRef();
  const closeButton = useRef();
  const [back, setBack] = useState();
  const _onLoginHandler = () => {
 
    loginHandler();
    setBack(!back);
  };
  const _onSignUpHandler = () => {

    signUpHandler();
    setBack(!back);
  };
  const _onCloseHandler = () => {
    closeHandler()
    setBack(!back);
  };
  useEffect(() => {
    if (!back) {
      TweenMax.to(authContainer.current, 0.6, {
        y: 0,
        ease: Power4.easeInOut
      }).delay(0.4);
      TweenMax.to(closeButton.current, 0.4, {
        y: -200,
        ease: Power4.easeInOut
      });
      TweenMax.to(closeButton.current, 0.1, { display: "none" }).delay(0.4);

      TweenMax.to(authContainer.current, 0.1, { display: "flex" }).delay(0.4);
    }
    if (back) {
      TweenMax.to(authContainer.current, 0.4, {
        y: -200,
        ease: Power4.easeInOut
      });
      TweenMax.to(closeButton.current, 0.6, {
        y: 0,
        ease: Power4.easeInOut
      }).delay(0.4);
      TweenMax.to(closeButton.current, 0.1, { display: "block" }).delay(0.4);

      TweenMax.to(authContainer.current, 0.1, { display: "none" }).delay(0.4);
    }
  }, [back]);
  return (
    <>
      <nav>
        <div className="logo">
          <img src="/logo.svg" alt="mercury-logo" />
          Mercury
        </div>
        <ul ref={authContainer} className="auth">
          <li onClick={() => _onLoginHandler()}>login</li>
          <li onClick={() => _onSignUpHandler()}>sign up</li>
        </ul>
        <div
          onClick={() => _onCloseHandler()}
          ref={closeButton}
          className="close-btn"
        >
          Back
        </div>
      </nav>

      <style jsx>{`
        nav {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: flex-end;
        }
        .logo {
          font-family: RoobertBold;
          color: #404044;
          font-size: 36px;
        }
        .logo img {
          margin-right: 24px;
        }
        .close-btn {
          display: none;
          font-family: RoobertBold;
          color: #404044;
          font-size: 36px;
        }
        .auth {
          display: flex;
          flex-direction: row;
          font-size: 24px;
        }
        .auth li{
          position:relative;
          cursor:pointer;
        }
        .auth li::after{
          content:'';
          position:absolute;
          left:0;
          bottom:-8px;
          height:1px;
          background-color:#404044;
          width:0;
          transition:600ms;
        }
        .auth li:hover::after{
            width:100%;
        }
        .auth li:first-child {
          margin-right: 32px;
        }

      `}</style>
    </>
  );
};
