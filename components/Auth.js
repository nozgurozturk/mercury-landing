import { useEffect, useRef } from "react";
import { TweenMax, Power4 } from "gsap";

import { Login } from "./Login";
import { SignUp } from "./SignUp";

export const Auth = ({ loginShow, signUpShow, animated }) => {
  const authContainer = useRef();

  useEffect(() => {
    if (animated) {
      TweenMax.to(authContainer.current, 2.4, {
        opacity: 1,
        ease: Power4.easeIn
      });
    } else {
      TweenMax.to(authContainer.current, 2.4, {
        opacity: 0,
        ease: Power4.easeIn
      });
    }
  }, [animated]);
  return (
    <section ref={authContainer} className="auth-container">
      {loginShow ? <Login /> : null}
      {signUpShow ? <SignUp /> : null}
      <style jsx>
        {`
          .auth-container {
            opacity: 0;
            position: absolute;
            margin-top: 180px;
            max-width: 960px;
            width: 100%;
          }
        `}
      </style>
    </section>
  );
};
