const CardSliderCard = (props) => {
  const product = props.product;
  return (
    <>
      <div className="card-slider-card">
        <div className="card-slider-card-img-wrapper">
          <div className="card-slider-card-img-container">
            <img
              src="https://rukminim1.flixcart.com/image/150/150/kckud8w0/kurta/a/m/f/m-rmmbandhani3754-rangriti-original-imaftnjxchbaxkbu.jpeg?q=70"
              alt=""
            />
          </div>
        </div>
        <div className="card-slider-card-text-content">
          <div className="prod-category font-500-14">
            Van Heusen, Louis Philips
          </div>
          <div className="prod-discount font-400-14">Min 50% Off</div>
          <div className="prod-type font-400-14">Shorts, Trousers, Suits</div>
        </div>
      </div>
    </>
  );
};

export default CardSliderCard;
