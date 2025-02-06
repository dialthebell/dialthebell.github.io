import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./index.css";

function Home() {
  const navigate = useNavigate();

  const handleSubLinkClick = (e) => {
    e.stopPropagation(); // 阻止事件冒泡
    navigate("/page2"); // 手动导航到页面2
  };

  return (
    <div className="home-container">
      <nav className="nav-buttons">
        <div className="title-text">
          <img
            src="/src/assets/images/title.png"
            alt="title-text"
            className="title-img"
          />
        </div>
        <Link to="/page1" className="oval-link">
          <img
            src="/src/assets/images/btn1.png"
            alt="按钮1"
            className="oval-button"
          />
        </Link>
        <Link
          to="/page2"
          className="oval-sub-link"
        >
          <img
            src="/src/assets/images/btn2.png"
            alt="按钮2"
          onClick={handleSubLinkClick}

            className="oval-button"
          />
        </Link>

        <div className="dots-pattern">
          • • • • •<br />• • •<br />•
        </div>
        <Link to="/page3" className="oval-link-left">
          <img
            src="/src/assets/images/btn3.png"
            alt="按钮3"
            className="oval-sub-button"
          />
        </Link>
        <Link to="/page4" className="oval-link-right">
          <img
            src="/src/assets/images/btn4.png"
            alt="按钮4"
            className="oval-sub-button"
          />
        </Link>
      </nav>
    </div>
  );
}

export default Home;
