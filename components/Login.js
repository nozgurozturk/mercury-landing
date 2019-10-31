import { useEffect, useState } from "react";
import { loadGetInitialProps } from "next/dist/next-server/lib/utils";

export const Login = props => {
  const [mail, setMail] = useState();
  const [password, setPassword] = useState();

  useEffect(() => {}, [name, mail, password]);

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      const response = await fetch(
        "https://mercury-server.herokuapp.com/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            email: mail,
            password: password
          })
        }
      );
      const json = await response.json();
      if (response.ok) {
        console.log(json);
        console.log(getInitialProps(ctx))
      } else {
        console.log("unexpected error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="login-form">
      <h1>Welcome</h1>
      <form onSubmit={handleSubmit}>
        <label>email</label>
        <input
          type="email"
          required
          onChange={e => setMail(e.target.value)}
        ></input>
        <label>password</label>
        <input
          type="password"
          required
          onChange={e => setPassword(e.target.value)}
        ></input>
        <div className="button-container">
          <a>Reset Password</a>
          <input type="submit" value="login"></input>
        </div>
      </form>
      <style jsx>
        {`
          .login-form {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            max-width: 960px;
            width: 100%;
          }
          .login-form h1 {
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
            font-size: 16px;
            font-family: RoobertRegular;
            color: #404044;
            margin-bottom: 8px;
          }
          a {
            font-size: 18px;
            font-family: RoobertRegular;
            color: #404044;
            margin-right: 32px;
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
          input[type="submit"] {
            position: relative;
            margin-bottom: 0px;
            border-bottom: none;
            cursor: pointer;
          }
          .button-container {
            align-self: flex-end;
            display: flex;
            flex-direction: row;
            align-items: center;
          }
        `}
      </style>
    </div>
  );
};
