import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Slider from "./Slider";
const Home = () => {
  return (
    <div>
      <Header />
      <main
        className="home-body"
        style={{
          backgroundImage: `url("https://images.fpt.shop/unsafe/fit-in/filters:quality(95):fill(transparent)/fptshop.com.vn/Uploads/Originals/2023/7/17/638252324817743038_desk-header-bg.png")`,
          backgroundColor: "rgb(245, 59, 34)",
        }}
      >
        <div className="back-to-school">
          <img
            alt="backtoschool"
            src="https://images.fpt.shop/unsafe/fit-in/filters:quality(80):fill(transparent)/fptshop.com.vn/Uploads/Originals/2023/7/17/638252151027782237_desk-header.png"
            style={{ width: "100%" }}
          />
        </div>
        <Slider />
      </main>
      <Footer />
    </div>
  );
};
export default Home;
