

function Footer() {
  return (
    <footer className="main-footer py-2">
      <div className="d-flex justify-content-center text-center align-items-center">
        <p className="mb-0">My Recipe Book &reg; {new Date().getFullYear()} | Made with love by 
        <a
          href="https://www.linkedin.com/in/antonio-sebastiano/"
          target="_blank"
          rel="noreferrer"
          className="ms-1 f-bold"
        >
          Antonio Sebastiano
        </a></p>
      </div>
    </footer>
  );
}

export default Footer;
