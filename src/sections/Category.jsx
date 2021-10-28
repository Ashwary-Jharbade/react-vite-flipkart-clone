const Category = () => {
  return (
    <>
      <section>
        <div className="category-wrapper">
          <div className="category-container font-500-14">
            <div className="category-item-wrapper">
              <div className="category-items">
                <div className="category-image">
                  <img
                    src="https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100"
                    alt=""
                  />
                </div>
                <div className="category-name">
                  <span>Top Offers</span>
                </div>
              </div>
            </div>

            <div className="category-item-wrapper">
              <div className="category-items">
                <div className="category-image">
                  <img
                    src="https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100"
                    alt=""
                  />
                </div>
                <div className="category-name">
                  <span>Grocery</span>
                </div>
              </div>
            </div>

            <div className="category-item-wrapper">
              <div className="category-items">
                <div className="category-image">
                  <img
                    src="https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100"
                    alt=""
                  />
                </div>
                <div className="category-name">
                  <span>Mobiles</span>
                </div>
              </div>
            </div>

            <div
              className="category-item-wrapper"
              onmouseleave="toggleCatArrow('fashion',0)"
              onmouseover="toggleCatArrow('fashion',1)"
            >
              <div className="category-items">
                <div className="category-image">
                  <img
                    src="https://rukminim1.flixcart.com/flap/128/128/image/82b3ca5fb2301045.png?q=100"
                    alt=""
                  />
                </div>
                <div className="category-name">
                  <span id="fashion">
                    Fashion{" "}
                    <span
                      className="fa fa-angle-down cat-arrow"
                      id="fashion_category_span"
                    ></span>
                  </span>
                </div>
              </div>

              <div className="drop-down" id="fashion_main">
                <div className="drop-down-arrow"></div>
                <div className="drop-down-list">
                  <div className="drop-down-list-container-one">
                    <div
                      className="drop-down-list-container"
                      id="fashion_list"
                    ></div>
                  </div>
                  <div className="drop-down-list-container-two">
                    <div
                      className="drop-down-list-container"
                      id="fashion_sublist"
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="category-item-wrapper"
              onmouseleave="toggleCatArrow('electronic',0)"
              onmouseover="toggleCatArrow('electronic',1)"
            >
              <div className="category-items">
                <div className="category-image">
                  <img
                    src="https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100"
                    alt=""
                  />
                </div>
                <div className="category-name">
                  <span id="electronic">
                    Electronics{" "}
                    <span
                      className="fa fa-angle-down"
                      id="electronic_category_span"
                    ></span>
                  </span>
                </div>
              </div>

              <div className="drop-down" id="electronic_main">
                <div className="drop-down-arrow"></div>
                <div className="drop-down-list">
                  <div className="drop-down-list-container-one">
                    <div
                      className="drop-down-list-container"
                      id="electronic_list"
                    ></div>
                  </div>
                  <div className="drop-down-list-container-two">
                    <div
                      className="drop-down-list-container"
                      id="electronic_sublist"
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="category-item-wrapper"
              onmouseleave="toggleCatArrow('home',0)"
              onmouseover="toggleCatArrow('home',1)"
            >
              <div className="category-items">
                <div className="category-image">
                  <img
                    src="https://rukminim1.flixcart.com/flap/128/128/image/ab7e2b022a4587dd.jpg?q=100"
                    alt=""
                  />
                </div>
                <div className="category-name">
                  <span id="home">
                    Home{" "}
                    <span
                      className="fa fa-angle-down"
                      id="home_category_span"
                    ></span>
                  </span>
                </div>
              </div>

              <div className="drop-down" id="home_main">
                <div className="drop-down-arrow"></div>
                <div className="drop-down-list">
                  <div className="drop-down-list-container-one">
                    <div
                      className="drop-down-list-container"
                      id="home_list"
                    ></div>
                  </div>
                  <div className="drop-down-list-container-two">
                    <div
                      className="drop-down-list-container"
                      id="home_sublist"
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="category-item-wrapper"
              onmouseleave="toggleCatArrow('appliances',0)"
              onmouseover="toggleCatArrow('appliances',1)"
            >
              <div className="category-items">
                <div className="category-image">
                  <img
                    src="https://rukminim1.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100"
                    alt=""
                  />
                </div>
                <div className="category-name">
                  <span id="appliances">
                    Appliances{" "}
                    <span
                      className="fa fa-angle-down"
                      id="appliances_category_span"
                    ></span>
                  </span>
                </div>
              </div>

              <div className="drop-down" id="appliances_main">
                <div className="drop-down-arrow"></div>
                <div className="drop-down-list">
                  <div className="drop-down-list-container-one">
                    <div
                      className="drop-down-list-container"
                      id="appliances_list"
                    ></div>
                  </div>
                  <div className="drop-down-list-container-two">
                    <div
                      className="drop-down-list-container"
                      id="appliances_sublist"
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="category-item-wrapper">
              <div className="category-items">
                <div className="category-image">
                  <img
                    src="https://rukminim1.flixcart.com/flap/128/128/image/71050627a56b4693.png?q=100"
                    alt=""
                  />
                </div>
                <div className="category-name">
                  <span>Travel</span>
                </div>
              </div>
            </div>

            <div
              className="category-item-wrapper"
              onmouseleave="toggleCatArrow('more',0)"
              onmouseover="toggleCatArrow('more',1)"
            >
              <div className="category-items">
                <div className="category-image">
                  <img
                    src="https://rukminim1.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png?q=100"
                    alt=""
                  />
                </div>
                <div className="category-name">
                  <span id="more">
                    Beauty, Toys & More{" "}
                    <span
                      className="fa fa-angle-down"
                      id="more_category_span"
                    ></span>
                  </span>
                </div>
              </div>

              <div className="drop-down" id="more_main">
                <div className="drop-down-arrow"></div>
                <div className="drop-down-list">
                  <div className="drop-down-list-container-one">
                    <div
                      className="drop-down-list-container"
                      id="more_list"
                    ></div>
                  </div>
                  <div className="drop-down-list-container-two">
                    <div
                      className="drop-down-list-container"
                      id="more_sublist"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Category;
