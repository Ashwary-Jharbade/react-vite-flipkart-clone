const Carousel = () => {
  return (
    <>
      <section>
        <div className="carousel-container">
          <button className="carousel-btn prev">
            <span className="fa fa-angle-left"></span>
          </button>
          <button className="carousel-btn next">
            <span className="fa fa-angle-right"></span>
          </button>
          <div className="carousel">
            <div className="carousel-slider">
              <div className="carousel-items">
                <img src="https://rukminim1.flixcart.com/flap/1688/280/image/c65558420a69f74f.jpg?q=50" />
              </div>
              <div className="carousel-items">
                <img src="https://rukminim1.flixcart.com/flap/1688/280/image/ad75f59f7f69755a.jpg?q=50" />
              </div>
              <div className="carousel-items">
                <img src="https://rukminim1.flixcart.com/flap/1688/280/image/277aa1fca7122dd2.jpg?q=50" />
              </div>
              <div className="carousel-items">
                <img src="https://rukminim1.flixcart.com/flap/1688/280/image/c674527e3ea3ba4f.jpg?q=50" />
              </div>
              <div className="carousel-items">
                <img src="https://rukminim1.flixcart.com/flap/1688/280/image/b68fde7d8f97aa5b.jpg?q=50" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Carousel;
