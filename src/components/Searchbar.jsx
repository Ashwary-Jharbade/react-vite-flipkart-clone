const Searchbar = () => {
  return (
    <>
      <div className="input-wrapper">
        <div className="input-container">
          <div className="input-field-container">
            <input
              className="input-field"
              type="text"
              placeholder="Search for products, brands and more"
            />
          </div>
          <div className="seach-icon-container">
            <a href="" className="search-icon">
              <span className="fa fa-search"></span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Searchbar;
