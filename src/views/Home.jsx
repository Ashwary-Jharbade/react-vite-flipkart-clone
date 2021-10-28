import Navbar from "../sections/Navbar";
import Carousel from "../sections/Carousel";
import Category from "../sections/Category";
import Footer from "../sections/Footer";
import ProductCardTray from "../sections/ProductCardTray";
import AdvertisementCardTray from "../sections/AdvertisementCardTray";

const Home = () => {
  const style = {
    maxWidth: "1500px",
    margin: "auto",
  };
  const advertisementUrls = [
    "https://rukminim1.flixcart.com/flap/480/480/image/e1dcab571f682dd8.jpg?q=50",
    "https://rukminim1.flixcart.com/flap/480/480/image/a540fd8e0a1838a8.jpg?q=50",
    "https://rukminim1.flixcart.com/flap/480/480/image/e1dcab571f682dd8.jpg?q=50",
  ];

  const cardSliderData = [
    {
      image:
        "https://rukminim1.flixcart.com/image/150/150/kckud8w0/kurta/a/m/f/m-rmmbandhani3754-rangriti-original-imaftnjxchbaxkbu.jpeg?q=70",
      title: "Van Heusen, Louis Philips",
      offer: "Min 50% Off",
      category: "Shorts, Trousers, Suits",
    },
    {
      image:
        "https://rukminim1.flixcart.com/image/150/150/kckud8w0/kurta/a/m/f/m-rmmbandhani3754-rangriti-original-imaftnjxchbaxkbu.jpeg?q=70",
      title: "Van Heusen, Louis Philips",
      offer: "Min 50% Off",
      category: "Shorts, Trousers, Suits",
    },
    {
      image:
        "https://rukminim1.flixcart.com/image/150/150/kckud8w0/kurta/a/m/f/m-rmmbandhani3754-rangriti-original-imaftnjxchbaxkbu.jpeg?q=70",
      title: "Van Heusen, Louis Philips",
      offer: "Min 50% Off",
      category: "Shorts, Trousers, Suits",
    },
    {
      image:
        "https://rukminim1.flixcart.com/image/150/150/kckud8w0/kurta/a/m/f/m-rmmbandhani3754-rangriti-original-imaftnjxchbaxkbu.jpeg?q=70",
      title: "Van Heusen, Louis Philips",
      offer: "Min 50% Off",
      category: "Shorts, Trousers, Suits",
    },
    {
      image:
        "https://rukminim1.flixcart.com/image/150/150/kckud8w0/kurta/a/m/f/m-rmmbandhani3754-rangriti-original-imaftnjxchbaxkbu.jpeg?q=70",
      title: "Van Heusen, Louis Philips",
      offer: "Min 50% Off",
      category: "Shorts, Trousers, Suits",
    },
    {
      image:
        "https://rukminim1.flixcart.com/image/150/150/kckud8w0/kurta/a/m/f/m-rmmbandhani3754-rangriti-original-imaftnjxchbaxkbu.jpeg?q=70",
      title: "Van Heusen, Louis Philips",
      offer: "Min 50% Off",
      category: "Shorts, Trousers, Suits",
    },
    {
      image:
        "https://rukminim1.flixcart.com/image/150/150/kckud8w0/kurta/a/m/f/m-rmmbandhani3754-rangriti-original-imaftnjxchbaxkbu.jpeg?q=70",
      title: "Van Heusen, Louis Philips",
      offer: "Min 50% Off",
      category: "Shorts, Trousers, Suits",
    },
    {
      image:
        "https://rukminim1.flixcart.com/image/150/150/kckud8w0/kurta/a/m/f/m-rmmbandhani3754-rangriti-original-imaftnjxchbaxkbu.jpeg?q=70",
      title: "Van Heusen, Louis Philips",
      offer: "Min 50% Off",
      category: "Shorts, Trousers, Suits",
    },
  ];
  return (
    <>
      <div style={style}>
        <Navbar></Navbar>
        <Category></Category>
        <Carousel></Carousel>
        <ProductCardTray products={cardSliderData}></ProductCardTray>
        <AdvertisementCardTray urls={advertisementUrls}></AdvertisementCardTray>
        <ProductCardTray products={cardSliderData}></ProductCardTray>
        <AdvertisementCardTray urls={advertisementUrls}></AdvertisementCardTray>
        <ProductCardTray products={cardSliderData}></ProductCardTray>
        <Footer></Footer>
      </div>
    </>
  );
};

export default Home;
