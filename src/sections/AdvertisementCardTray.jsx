import React from "react";
import AdvertisementCard from "../components/AdvertisementCard";

const AdvertisementCardTray = (props) => {
  const advertisementUrls = props.urls;
  return (
    <>
      <section>
        <div className="rect-card-container">
          {advertisementUrls.map((item, index) => {
            return <AdvertisementCard key={index} urls={item} />;
          })}
        </div>
      </section>
    </>
  );
};

export default React.memo(AdvertisementCardTray);
