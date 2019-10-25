export const Footer = () => {
  return (
    <>
      <footer>
        <div className="logo">
          <img src="/logo-light.svg" alt="mercury-logo" />
          Mercury
        </div>
        <ul className="social">
          <li>
            <a href="https://twitter.com/nozgurozturk">
              <img src="/twitter.svg" alt="twitter-mercury" />
            </a>
          </li>
          <li>
            <a href="https://github.com/nozgurozturk">
              <img src="/github.svg" alt="github-mercury" />
            </a>
          </li>
        </ul>
      </footer>
      <style jsx>{`
        footer {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: flex-end;
          margin-top:96px;
        }
        .logo {
          font-family: RoobertRegular;
          color: #f0f0ff;
          font-size: 36px;
        }
        .logo img {
          margin-right: 24px;
        }
        .social {
          display: flex;
          flex-direction: row;
          align-items:center;
        }
        .social li:first-child {
          margin-right: 32px;
        }
      `}</style>
    </>
  );
};
