const Slider = () => {
  return (
    <div
      id="carouselExampleControls"
      className="carousel slide "
      data-ride="carousel"
      style={{ paddingBottom: "1.5rem" }}
    >
      <ol className="carousel-indicators">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="0"
          className="active"
        ></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://images.fpt.shop/unsafe/fit-in/800x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/7/11/638246827889680903_F-H1_800x300.png"
            className="d-block w-100"
            alt="1"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://images.fpt.shop/unsafe/fit-in/800x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/7/7/638242884306428891_F-H1_800x300.png"
            className="d-block w-100"
            alt="2"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://images.fpt.shop/unsafe/fit-in/800x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/7/12/638247521821115007_F-H1_800x300@2x.png"
            className="d-block w-100"
            alt="3"
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-target="#carouselExampleControls"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-target="#carouselExampleControls"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </button>
    </div>
  );
};
export default Slider;
