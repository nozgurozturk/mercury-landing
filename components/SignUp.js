export const SignUp = () => {
  return (
    <div className="signup-form">
      <h1>Hello Stranger</h1>
      <form>
        <label>name</label>
        <input type="text" required></input>
        <label>email</label>
        <input type="email" required></input>
        <label>location</label>
        <input type="text"></input>
        <label>password</label>
        <input type="password"></input>
        <label>comfirm password</label>
        <input type="password"></input>
        <div className="button-container">
          <input type="submit" value="signup"></input>
        </div>
      </form>
      <style jsx>
        {`
          .signup-form {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            width: 100%;
          }
          .signup-form h1 {
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
    </div>
  );
};
