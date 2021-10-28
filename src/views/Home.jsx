import Navbar from "../sections/Navbar";
import Carousel from "../sections/Carousel";
import Category from "../sections/Category";
import Footer from "../sections/Footer";
import ProductCardTray from "../sections/ProductCardTray";
import AdvertisementCard from "../sections/AdvertisementCard";
import AdditionalProductCardTray from "../sections/AdditionalProductCardTray";

const Home = () => {
  const style = {
    maxWidth: "1500px",
    margin: "auto",
  };
  return (
    <>
      <div style={style}>
        <Navbar></Navbar>
        <Category></Category>
        <Carousel></Carousel>
        <ProductCardTray></ProductCardTray>
        <AdvertisementCard></AdvertisementCard>
        <ProductCardTray></ProductCardTray>
        <AdvertisementCard></AdvertisementCard>
        <ProductCardTray></ProductCardTray>
        <Footer></Footer>
      </div>
    </>
  );
};

export default Home;
