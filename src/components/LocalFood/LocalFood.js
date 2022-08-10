import "./LocalFood.css";
import supportimg from "./support.png";

const LocalFood = () => {
  return (
    <div className="local-food-container">
      <img src={supportimg} />

      <div className="local-text">
        <h2>
          Support good food <br></br>and local business.
        </h2>

        <a href="#">Order Now</a>
      </div>
    </div>
  );
};

export default LocalFood;
