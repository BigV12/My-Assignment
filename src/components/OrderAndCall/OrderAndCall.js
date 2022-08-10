import "./OrderAndCall.css";
import order from "./order.png";
import call from "./call.png";

const OrderAndCall = () => {
  return (
    <div className="orderandcall-container">
      <div className="order">
        <img src={order} />
        <h2>
          {" "}
          Order online with our <br></br> simple checkout
        </h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </p>
        <button> See our FAQ</button>
      </div>
      <div className="call-design">
        <div className="call">
          <img src={call} />
          <h2>
            {" "}
            Call our store and <br></br> takeaway when it suits<br></br>you
            best.
          </h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text{" "}
            <br></br>ever since the 1500s
          </p>
        </div>

        <div className="call-me">
          <a href="tel:+61233233" className="call-action">
            Ph, +6233 233
          </a>
        </div>
      </div>
    </div>
  );
};

export default OrderAndCall;
