const AdvertisementCard = (props) => {
  const url = props.urls;
  return (
    <>
      <div class="rect-card">
        <a href="">
          <img src={url} alt="" />
        </a>
      </div>
    </>
  );
};

export default AdvertisementCard;
