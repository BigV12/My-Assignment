import "./FreshProduct.css";
import product from "./product.png";

const FreshProduct = () => {
  return (
    <div className="card">
      <div className="product">
        <img src={product} alt="food" className="product-image" />
        <h2>
          The home of <br></br>fresh products
        </h2>
        <p>
          {" "}
          Lorem Ipsum is simply dummy text of the printing and typesetting
          <br></br>
          industry. Lorem Ipsum has been the industry's standard dummy text
          <br></br> ever since the 1500.
        </p>
      </div>
    </div>
  );
};

export default FreshProduct;
