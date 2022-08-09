import "./HowItWorks.css";
import phone from "./phone.png";
import food from "./food.png";
import house from "./house.png";

const HowItWorks = () => {
  return (
    <div className="main-container">
      <section class="FlexContainer">
        <div className="food-container">
          <img src={food} alt="chow"></img>
          <h6>Adapt your menu items</h6>
          <p>
            Easily adapt your menu using the webflow CMS and allow customers to{" "}
            browse your items Easily adapt your menu using the webflow CMS and
            allow customers to browse your items
          </p>
        </div>

        <div className="phone-container">
          <img src={food} alt="chow"></img>
          <h6>Adapt your menu items</h6>
          <p>
            Easily adapt your menu using the webflow CMS and allow customers to
            browse your items Easily adapt your menu using the webflow CMS and
            allow customers to browse your items
          </p>
        </div>

        <div className="house-container">
          <img src={food} alt="chow"></img>
          <h6>Adapt your menu items</h6>
          <p>
            Easily adapt your menu using the webflow CMS and allow customers to{" "}
            browse your items Easily adapt your menu using the webflow CMS and
            allow customers to browse your items
          </p>
        </div>
      </section>

      <div className="house-container"></div>
    </div>
  );
};

export default HowItWorks;
