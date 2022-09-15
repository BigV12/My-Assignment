import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <section className="top-div ">
        <div className="logo">
          <p>
            Takeaway & Delivery Template <br></br>for small-medium business
          </p>
        </div>

        <div className="list1">
          <ol>
            <li className="aaa">
              {" "}
              <b className="bold">COMPANY</b>
            </li>
            <li>Home</li>
            <li>Order</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ol>

          <ol className="ddd">
            <li>
              {" "}
              <b className="bold">FLOWBASE</b>
            </li>
            <li>More Clonables</li>
          </ol>
        </div>
      </section>

      <section className="down-div">
        <p>
          {" "}
          Built by{" "}
          <a className="ref" href="#">
            Flowbase
          </a>{" "}
          powered by{" "}
          <a className="ref" href="#">
            Webflow
          </a>
        </p>
      </section>
    </div>
  );
};

export default Footer;
