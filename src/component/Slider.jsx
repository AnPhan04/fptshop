const Slider = () => {
  return (
    <div
      id="carouselExampleControls"
      class="carousel slide"
      data-ride="carousel"
      style={{ margin: 0, padding: "0 20rem" }}
    >
      <ol class="carousel-indicators">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="0"
          class="active"
        ></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            src="https://images.fpt.shop/unsafe/fit-in/800x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/7/11/638246827889680903_F-H1_800x300.png"
            class="d-block w-100"
            alt="1"
          />
        </div>
        <div class="carousel-item">
          <img
            src="https://images.fpt.shop/unsafe/fit-in/800x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/7/7/638242884306428891_F-H1_800x300.png"
            class="d-block w-100"
            alt="2"
          />
        </div>
        <div class="carousel-item">
          <img
            src="https://images.fpt.shop/unsafe/fit-in/800x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/7/12/638247521821115007_F-H1_800x300@2x.png"
            class="d-block w-100"
            alt="3"
          />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-target="#carouselExampleControls"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-target="#carouselExampleControls"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </button>
    </div>
  );
};

export default Slider;
