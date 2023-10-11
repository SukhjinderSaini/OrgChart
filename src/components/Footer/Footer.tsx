import "./Footer.css";
function Footer() {
  return (
    <>
      <hr className="my-1"></hr>
      <div className="footer">
        <ul className="nav">
          <li className="nav-item">
            <a className="nav-link" href="#">
              Privacy Policy
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Terms of Service
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Careers
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Copyright
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Footer;
