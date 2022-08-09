import "./Check.css";

const Check = (props) => {
  return (
    <div className="check-container">
      {props.items.map((food) => (
        <chh>
          <section className="  check-container__cover">
            <div className="check-container__image">
              <img src={food.image} alt="food" />
            </div>

            <div className="description-flex">
              <h4>{food.title}</h4>
              <h6>{food.price}</h6>

              <p>{food.description}</p>
              <input
                type="number"
                size="20"
                className="input"
                placeholder="1"
              ></input>
              <button className="btn">Add To Cart</button>
            </div>

            {/* <div className="price-flex">
              <h6>{food.price}</h6>
            </div> */}
          </section>
        </chh>
      ))}
    </div>
  );
};

export default Check;
