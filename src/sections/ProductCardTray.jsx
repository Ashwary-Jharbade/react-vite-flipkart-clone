import React from "react";
import { CardSliderSkyBlueButton } from "../components/Buttons";
import CardSliderCard from "../components/CardSliderCard";

const ProductCardTray = (props) => {
  const productData = props.products;
  return (
    <>
      <section>
        <div className="card-slider-wrapper new-slider-section">
          <div className="card-slider-header">
            <div className="card-slider-header-content">
              <div className="card-slider-header-text font-500-22">
                Today's Fashion Deals
              </div>
              <div className="font-400-14 deal-time-out">From &#8377;99</div>
            </div>
            <div className="card-slider-header-btn">
              <CardSliderSkyBlueButton></CardSliderSkyBlueButton>
            </div>
          </div>
          <div className="card-slider-main-content">
            <button onClick="prevCard(3)" className="card-slider-btn btn-prev">
              <span className="fa fa-angle-left"></span>
            </button>
            <button onClick="nextCard(3)" className="card-slider-btn btn-next">
              <span className="fa fa-angle-left"></span>
            </button>
            <div className="card-slider-main-content-container slider-3">
              <div className="card-slider-card-container">
                {productData.map((item, index) => {
                  return <CardSliderCard key={index} product={item} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default React.memo(ProductCardTray);
