import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Btn1Img from "/Home/btn1.png";
import Btn1DeepImg from "/Home/btn1_deep.png";
import Btn2Img from "/Home/btn2.png";
import Btn2DeepImg from "/Home/btn2_deep.png";
import Btn3Img from "/Home/btn3.png";
import Btn3DeepImg from "/Home/btn3_deep.png";
import Btn4Img from "/Home/btn4.png";
import Btn4DeepImg from "/Home/btn4_deep.png";
import DotsImg from "/Home/dots.png";
import TitleImg from "/Home/title.png";
import CameraImg from "/Home/camera.png";
import TipImg from "/Home/tip.png";
import "./index.css";

function Home() {
  const navigate = useNavigate();
  const [isBtn1Hover, setIsBtn1Hover] = useState(false);
  const [isBtn2Hover, setIsBtn2Hover] = useState(false);
  const [isBtn3Hover, setIsBtn3Hover] = useState(false);
  const [isBtn4Hover, setIsBtn4Hover] = useState(false);
  const [showTip, setShowTip] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowTip(true);

      const hideTimer = setTimeout(() => {
        setShowTip(false);

        const intervalId = setInterval(() => {
          setShowTip(true);

          setTimeout(() => {
            setShowTip(false);
          }, 5000);
        }, 360000);

        return () => clearInterval(intervalId);
      }, 5000);
      return () => clearTimeout(hideTimer);
    }, 5000);
  }, []);

  const handleSubLinkClick = (e) => {
    e.stopPropagation();
    navigate("/Waiting");
  };

  return (
    <div className="home-container">
      <img src={TitleImg} alt="title-text" className="title-img" />
      <Link
        to="/Camera"
        onMouseEnter={() => setIsBtn1Hover(true)}
        onMouseLeave={() => setIsBtn1Hover(false)}
      >
        <img
          src={isBtn1Hover ? Btn1DeepImg : Btn1Img}
          alt="按钮1"
          className="oval-outside-button"
        />
      </Link>
      <Link
        to="/About"
        onMouseEnter={() => setIsBtn2Hover(true)}
        onMouseLeave={() => setIsBtn2Hover(false)}
      >
        <img
          src={isBtn2Hover ? Btn2DeepImg : Btn2Img}
          alt="按钮2"
          onClick={handleSubLinkClick}
          className="oval-inside-button"
        />
      </Link>

      <img src={DotsImg} alt="dots" className="dots-pattern-img" />
      <img src={CameraImg} alt="dots" className="camera-img" />
      {showTip && <img src={TipImg} alt="tip" className="tip-img" />}

      <Link
        to="/Waiting"
        onMouseEnter={() => setIsBtn3Hover(true)}
        onMouseLeave={() => setIsBtn3Hover(false)}
      >
        <img
          src={isBtn3Hover ? Btn3DeepImg : Btn3Img}
          alt="按钮3"
          className="oval-sub-left-button"
        />
      </Link>
      <Link
        to="/Authortity"
        onMouseEnter={() => setIsBtn4Hover(true)}
        onMouseLeave={() => setIsBtn4Hover(false)}
      >
        <img
          src={isBtn4Hover ? Btn4DeepImg : Btn4Img}
          alt="按钮4"
          className="oval-sub-right-button"
        />
      </Link>
    </div>
  );
}

export default Home;
