import { Link } from "react-router-dom";
import ContentLeftImg from "/About-2.png";
import ContentTopImg from "/About-1.png";
import ContentRightImg from "/About-3.png";
import BtnBackImg from "/btn_back.png";
import "./index.css";

function About() {
  return (
    <div className="about-container">
      <img src={ContentLeftImg} alt="内容1" className="content-left" />
      <img src={ContentTopImg} alt="内容2" className="content-top" />
      <img src={ContentRightImg} alt="内容3" className="content-right" />
      <Link to="/">
        <img src={BtnBackImg} alt="返回按钮" className="back-btn" />
      </Link>
    </div>
  );
}

export default About;
