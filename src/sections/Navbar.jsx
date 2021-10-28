import Searchbar from "../components/SearchBar";

const Navbar = () => {
  return (
    <>
      <section>
        <div className="header-wrapper">
          <div className="header-container">
            <div className="navbar">
              <div className="navbar-spacer"></div>
              <div className="logo-wrapper">
                <div className="logo">
                  <div className="logo-image-container">
                    <img
                      src="https://ashwary-jharbade.github.io/Flipkart-Clone/assets/img/flipkart-plus-logo.png"
                      alt="flipkart logo"
                    />
                  </div>
                  <div className="logo-text font-400-11">
                    <span>Explore</span>
                    <span className="plus">Plus</span>
                    <img
                      src="https://ashwary-jharbade.github.io/Flipkart-Clone/assets/img/plus.png"
                      alt="plus"
                    />
                  </div>
                </div>
              </div>

              <Searchbar></Searchbar>

              <div className="login-btn-wrapper">
                <button
                  onclick="toggleLoginModal(1)"
                  className="navbar-btn-container font-500-15"
                >
                  <span className="login-btn">Login</span>
                  <div className="drop-down">
                    <div className="drop-down-arrow"></div>
                    <div className="drop-down-list">
                      <div className="drop-down-list-container">
                        <a href="" className="list-item font-400-15">
                          <div className="list-icon new-customer-text font-500-15">
                            New customer?
                          </div>
                          <div className="list-content sign-up-text font-500-15">
                            Sign Up
                          </div>
                        </a>
                        <div className="list-divider"></div>
                        <a href="" className="list-item font-400-15">
                          <div className="list-icon">
                            <span className="fa  fa-bell"></span>
                          </div>
                          <div className="list-content">My Profile</div>
                        </a>
                        <div className="list-divider"></div>
                        <a href="" className="list-item font-400-15">
                          <div className="list-icon">
                            <span className="fa  fa-sellsy"></span>
                          </div>
                          <div className="list-content">Flipkart Plus Zone</div>
                        </a>
                        <div className="list-divider"></div>
                        <a href="" className="list-item font-400-15">
                          <div className="list-icon">
                            <span className="fa  fa-question-circle-o"></span>
                          </div>
                          <div className="list-content">Orders</div>
                        </a>
                        <div className="list-divider"></div>
                        <a href="" className="list-item font-400-15">
                          <div className="list-icon">
                            <span className="fa  fa-buysellads"></span>
                          </div>
                          <div className="list-content">Whishlist</div>
                        </a>
                        <div className="list-divider"></div>
                        <a href="" className="list-item font-400-15">
                          <div className="list-icon">
                            <span className="fa  fa-download"></span>
                          </div>
                          <div className="list-content">Rewards</div>
                        </a>
                        <div className="list-divider"></div>
                        <a href="" className="list-item font-400-15">
                          <div className="list-icon">
                            <span className="fa  fa-download"></span>
                          </div>
                          <div className="list-content">Gift Cards</div>
                        </a>
                      </div>
                    </div>
                  </div>
                </button>
              </div>

              <div className="login-btn-wrapper">
                <button className="navbar-btn-container font-500-15">
                  <span className="nav-btn">
                    More <span className="fa fa-angle-down"></span>
                  </span>
                  <div className="drop-down">
                    <div className="drop-down-arrow"></div>
                    <div className="drop-down-list">
                      <div className="drop-down-list-container">
                        <a href="" className="list-item font-400-15">
                          <div className="list-icon">
                            <span className="fa  fa-bell"></span>
                          </div>
                          <div className="list-content">
                            Notification Preference
                          </div>
                        </a>
                        <div className="list-divider"></div>
                        <a href="" className="list-item font-400-15">
                          <div className="list-icon">
                            <span className="fa  fa-sellsy"></span>
                          </div>
                          <div className="list-content">Sell on Flipkart</div>
                        </a>
                        <div className="list-divider"></div>
                        <a href="" className="list-item font-400-15">
                          <div className="list-icon">
                            <span className="fa  fa-question-circle-o"></span>
                          </div>
                          <div className="list-content">24X7 Customer Care</div>
                        </a>
                        <div className="list-divider"></div>
                        <a href="" className="list-item font-400-15">
                          <div className="list-icon">
                            <span className="fa  fa-buysellads"></span>
                          </div>
                          <div className="list-content">Advertise</div>
                        </a>
                        <div className="list-divider"></div>
                        <a href="" className="list-item font-400-15">
                          <div className="list-icon">
                            <span className="fa  fa-download"></span>
                          </div>
                          <div className="list-content">Download App</div>
                        </a>
                      </div>
                    </div>
                  </div>
                </button>
              </div>

              <div className="login-btn-wrapper">
                <button className="navbar-btn-container font-500-15">
                  <span className="nav-btn">
                    Cart <span className="fa fa-shopping-cart"></span>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Navbar;
