import { useEffect, useRef } from "react";
import { TweenMax, Power4 } from "gsap";

export const Auth = props => {
  const loginContainer = useRef();
  useEffect(() => {
    if (props.loginShow) {
      TweenMax.to(loginContainer.current, 2.4, {
        opacity: 1,
        ease: Power4.easeIn
      });
    }
  }, [props.loginShow]);
  return (
    <>
      <section ref={loginContainer} className="login-container">
        <h1>Welcome Back</h1>
        <form>
          <label>email</label>
          <input type="email" required></input>
          <label>password</label>
          <input type="password"></input>
          <div className="button-container">
            <a>Reset Password</a>
            <input type="submit" value="login"></input>
          </div>
        </form>
      </section>
      <style jsx>
        {`
          .login-container {
            position: absolute;
            opacity: 0;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            margin-top: 180px;
            max-width: 960px;
            width: 100%;
          }
          .login-container h1 {
            font-family: RoobertBold;
            font-size: 48px;
            line-height: 0;
          }
          form {
            display: flex;
            flex-direction: column;
            width: 40%;
          }
          label {
            font-size: 24px;
            font-family: RoobertRegular;
            color: #cacacd;
            margin-bottom: 8px;
          }
          a {
            font-size: 18px;
            font-family: RoobertRegular;
            color: #404044;
            margin-right: 32px;
            line-height: 24px;
          }
          input {
            font-size: 24px;
            font-family: RoobertRegular;
            outline: none;
            background: none;
            box-shadow: none;
            border: none;
            border-bottom: 1px solid #404044;
            margin-bottom: 48px;
          }

          .button-container {
            align-self: flex-end;
            display: flex;
            flex-direction: row;
          }
        `}
      </style>
    </>
  );
};
