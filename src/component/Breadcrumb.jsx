import { NavLink } from "react-router-dom";

const Breadcrumb = () => {
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
            Điện thoại
          </li>
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumb;
