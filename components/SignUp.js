import { useState, useEffect } from "react";

export const SignUp = () => {
  const [name, setName] = useState();
  const [mail, setMail] = useState();
  const [password, setPassword] = useState();
  const [comfrimPass, setComfirmPass] = useState();

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
            name : name,
            email: mail,
            password: password
          })
        }
      );
      const json = await response.json();
      if (response.ok) {
        console.log(json);
      } else {
        console.log("unexpected error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="signup-form">
      <h1>Hello Stranger</h1>
      <form onSubmit={handleSubmit}>
        <label>name</label>
        <input
          type="text"
          required
          onChange={e => setName(e.target.value)}
        ></input>
        <label>email</label>
        <input
          type="email"
          required
          onChange={e => setMail(e.target.value)}
        ></input>
        <label>location</label>
        <input type="text"></input>
        <label>password</label>
        <input
          type="password"
          onChange={e => setPassword(e.target.value)}
        ></input>
        <label>comfirm password</label>
        <input
          type="password"
          onChange={e => setComfirmPass(e.target.value)}
        ></input>
        <div className="button-container">
          <input type="submit" value="sign up"></input>
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
            justify-content: space-between;
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
            margin-bottom: 16px;
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
          }
        `}
      </style>
    </div>
  );
};
