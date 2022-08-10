import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <section className="top-div ">
        <div className="logo">
          <h5>
            Takeaway & Delivery Template <br></br>for small-medium business
          </h5>
        </div>
        {/* <div></div> */}
        <div className="list1">
          <ol>
            <li>
              {" "}
              <b>COMPANY</b>
            </li>
            <li>Home</li>
            <li>Order</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ol>

          <ol className="ccc">
            <li>
              {" "}
              <b>COMPANY</b>
            </li>
            <li>Home</li>
            <li>Order</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ol>

          <ol className="ddd">
            <li>
              {" "}
              <b>COMPANY</b>
            </li>
            <li>Home</li>
            <li>Order</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ol>
        </div>

        <div className="list2">
          <ol>
            <li>
              {" "}
              <b>TEMPLATE</b>
            </li>
            <li>Style Guide</li>
            <li>Chnagelog</li>
            <li>Liscience</li>
            <li>Webflow university</li>
          </ol>
        </div>

        <div className="list3">
          <ol>
            <li>
              {" "}
              <b>FLOWBASE</b>
            </li>
            <li>More Clonables</li>
            <li>Webflow university</li>
          </ol>
        </div>
      </section>

      <section className="down-div">
        <p>
          {" "}
          Built by <a href="#">Flowbase</a> powered by <a href="#">Webflow</a>
        </p>
      </section>
    </div>
  );
};

export default Footer;
