import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faLaptop,
  faTablet,
  faAppleAlt,
  faDesktop,
  faKeyboard,
  faRecycle,
  faHouse,
  faSimCard,
  faTags,
} from "@fortawesome/free-solid-svg-icons";

const iconMapping = {
  faPhone: faPhone,
  faLaptop: faLaptop,
  faTablet: faTablet,
  faAppleAlt: faAppleAlt,
  faDesktop: faDesktop,
  faKeyboard: faKeyboard,
  faRecycle: faRecycle,
  faHouse: faHouse,
  faSimCard: faSimCard,
  faTags: faTags,
};

const Header = () => {
  const [categories, setCategories] = useState([]);
  const [names, setNames] = useState([]);
  const [urls, setUrls] = useState([]);
  useEffect(() => {
    const getIcons = async () => {
      const response = await fetch("http://localhost:9999/categories");
      const jsonData = await response.json();
      setCategories(jsonData);
      const nameList = jsonData.map((data) => data.name);
      setNames(nameList);
    };

    getIcons();
  }, []);

  function toLowerCaseNonAccentVietnamese(str) {
    str = str.toLowerCase();
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/đ/g, "d");
    // Some system encode vietnamese combining accent as individual utf-8 characters
    str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // Huyền sắc hỏi ngã nặng
    str = str.replace(/\u02C6|\u0306|\u031B/g, ""); // Â, Ê, Ă, Ơ, Ư
    return str;
  }

  const urlList = names.map((n) => {
    const urlBeforeConvert = toLowerCaseNonAccentVietnamese(n).replace(/\s/g, '-');
    return urlBeforeConvert;
  });

  return (
    <div className="header" style={{ background: "#cd1818" }}>
      <nav className="navbar navbar-expand-lg navbar-light">
        <NavLink
          style={{ padding: "0 15px 0 0" }}
          className="navbar-brand"
          to="/"
        >
          <img alt="logo" src="logofptshop.png" style={{ width: "150px" }} />
        </NavLink>
      </nav>

      <ul className="nav home-body" style={{ background: "black" }}>
        {categories.map((cate, index) => (
          <li key={cate.categoryId} className="nav-item">
            <a href={urlList[index]} className="nav-link">
              <FontAwesomeIcon
                className="nav-icon"
                icon={iconMapping[cate.icon]}
              />
              <span style={{ display: "inline-block", paddingLeft: "7px" }}>
                {cate.name}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Header;
