//import Row from "react-bootstrap/Row";

import { VscGithub } from "react-icons/vsc";
import { TiSocialLinkedinCircular } from "react-icons/ti";

function Footer() {
  return (
    <footer className="main-footer py-2">
      <div className="d-flex flex-column flex-md-row justify-content-center text-center align-items-center">
        <div className="mx-1">
          My Recipe Book &reg; {new Date().getFullYear()}
        </div>
        <div className="mx-1">
          Made with love by
          <a
            href="https://www.linkedin.com/in/antonio-sebastiano/"
            target="_blank"
            rel="noreferrer"
            className="ms-1 f-bold"
          >
            Antonio Sebastiano
          </a>
        </div>
        <div className="mx-1">
          <a
            href="https://www.linkedin.com/in/antonio-sebastiano/"
            target="_blank"
            rel="noreferrer"
            className="ms-1 social-links"
          >
            <TiSocialLinkedinCircular className="mx-1 linkedin-icon" />
          </a>

          <a
            href="https://github.com/SebAnt86"
            target="_blank"
            rel="noreferrer"
            className="ms-1 social-links"
          >
            <VscGithub className="mx-1 github-icon"></VscGithub>
          </a>
        </div>

        {/* <p className="mb-0">My Recipe Book &reg; {new Date().getFullYear()} 
        | Made with love by 
        <a
          href="https://www.linkedin.com/in/antonio-sebastiano/"
          target="_blank"
          rel="noreferrer"
          className="ms-1 f-bold"
        >
          Antonio Sebastiano
        </a>
        </p> */}
      </div>
    </footer>
  );
}

export default Footer;
