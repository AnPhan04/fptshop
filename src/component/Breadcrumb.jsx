import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Breadcrumb = ({ categoryId }) => {
  const [categories, setCategories] = useState("");
  const [names, setNames] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      const response = await fetch("http://localhost:9999/categories");
      const jsonData = await response.json();
      const nameList = jsonData.map((data) => data.name);
      setCategories(jsonData);
      setNames(nameList);
    };
    getCategories();
  }, []);

  // Check if the names array is empty or the categoryId is not valid
  if (!names.length || categoryId < 0 || categoryId >= names.length) {
    return null; // Return null if data is not ready or categoryId is invalid
  }

  return (
    <div className="home-body">
      <nav aria-label="breadcrumb">
        <ol
          className="breadcrumb"
          style={{ background: "none", margin: 0, paddingLeft: 0 }}
        >
          <li className="breadcrumb-item">
            <NavLink to="/">Trang chủ</NavLink>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {names[categoryId]}
          </li>
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumb;
