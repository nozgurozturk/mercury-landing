import { useEffect, useState } from "react";


export const Navigation = (props) => {
  
  return (
    <>
      <nav>
        <div className="logo">
          <img src="/logo.svg" alt="mercury-logo" />
          Mercury
        </div>
        <ul className="auth">
          <li onClick={props.onClickHandler}>login</li>
          <li>sign up</li>
        </ul>
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
        .auth {
          display: flex;
          flex-direction: row;
          font-size: 24px;
        }
        .auth li:first-child {
          margin-right: 32px;
        }
      `}</style>
    </>
  );
};
