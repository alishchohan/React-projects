import shoe from "../../public/images/shoe_image.png";
import flipcart from "../../public/images/flipkart.png";
import amazon from "../../public/images/amazon.png";
import "../App.css";
function Hero() {
  return (
    <main className="Hero container">
      <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          Your feet deserve the best and we're here to help you with our shoes.
          your feet deserve the best and we're here to help you with our shoes
        </p>
        <div className="hero-btn">
          <button className="buy-btn">Shop Now!</button>
          <button className="sec-btn">Category</button>
        </div>
        <div className="shopping">
          <p>Also Available On</p>
          <div className="brand-icons">
            <img src={amazon} alt="amazon logo image" className="amazon" />
            <img src={flipcart} alt="flipcart logo image" />
          </div>
        </div>
      </div>
      <div className="hero-image">
        <img src={shoe} alt="image  of nike shoe" />
      </div>
    </main>
  );
}
export default Hero;
