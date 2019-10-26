export const Login = () => {
  return (
    <div className="login-form">
      <h1>Welcome</h1>
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
