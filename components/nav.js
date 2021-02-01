import React from "react";
import { HashLink } from "react-router-hash-link";
import "../index.css";

export default class Nav extends React.Component {
  toggleMenue() {
    var menueShow = document.querySelector(".nav-open").classList;
    var [exp1, exp2, exp3] = document.querySelectorAll(".menstrip");
    console.log(exp1.classList);
    if (menueShow.contains("close-box")) {
      menueShow.remove("close-box");
      exp1.classList.add("toprotate");
      exp2.classList.add("fadeout");
      exp3.classList.add("bottomrotate");
    } else {
      menueShow.add("close-box");
      exp1.classList.remove("toprotate");
      exp2.classList.remove("fadeout");
      exp3.classList.remove("bottomrotate");
    }
  }

  handleResize() {
    var menueShow = document.querySelector(".nav-open").classList;
    var [exp1, exp2, exp3] = document.querySelectorAll(".menstrip");
    if (!menueShow.contains("close-box")) {
      menueShow.add("close-box");
      exp1.classList.remove("toprotate");
      exp2.classList.remove("fadeout");
      exp3.classList.remove("bottomrotate");
    }
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
    window.addEventListener("scroll", this.handleResize);
  }

  render() {
    return (
      <div>
        <div id="navbar">
        <img href="https://envirya.in/wp-content/uploads/2019/11/Logo-Symbol.svg">
          <HashLink to="#about" id="siteTitle">
            Aditya Pawar
          </HashLink>
          <div id="nav-links">
            <HashLink to="/blog/#blog">
              <button className="menueBtn">Blog</button>
            </HashLink>
          </div>

    );
  }
}
