import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../images/logo.png";
import "./nav.css";
import { CategoryContext } from "../Context/CategoryContext";
import MenuBtn from "./MenuBtn/MenuBtn";

function Nav() {
  const location = useLocation();
  const [selected, setSelected] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const { setSelectedCategory } = useContext(CategoryContext);

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        setSelected("home");
        break;
      case "/about":
        setSelected("about");
        break;
      case "/brand":
        setSelected("brand");
        break;
      case "/product":
        setSelected("product");
        break;
      case "/career":
        setSelected("career");
        break;
      case "/success":
        setSelected("success");
        break;
      case "/blog":
        setSelected("blog");
        break;
      case "/contact":
        setSelected("contact");
        break;
      default:
        setSelected("");
        break;
    }
  }, [location.pathname]);

  return (
    <div className=" md:flex sticky bg-white top-0  h-fit w-full z-50 items-center justify-between pl-3 pr-20  shadow-md overflow-visible">
      <div className="left py-2 flex items-center md:px-10 ">
        <div className="block md:hidden w-fit bg-white">
          <MenuBtn />
        </div>
        <Link to="/">
          <img
            className=" md:w-[140px] md:h-[70px] w-[100px]"
            src={logo}
            alt="Logo"
          />
        </Link>
      </div>
      <div
        className="md:flex hidden md:gap-10 md:text-[15px]"
        style={{
          fontWeight: "500",
        }}
      >
        <div className="nav-item">
          <Link
            className={`cursor-pointer ${
              selected === "home" ? "selected" : ""
            }`}
            to="/"
          >
            Home
          </Link>
        </div>
        <div
          className="nav-item"
          onMouseEnter={() => setShowDropdown(true)}
          onMouseLeave={() => setShowDropdown(false)}
        >
          <Link
            className={`cursor-pointer ${
              selected === "about" ? "selected" : ""
            }`}
            to="/about"
          >
            About
          </Link>
          {showDropdown && (
            <div className="dropdown-menu w-fit mt-0">
              <Link className="dropdown-item" to="/about">
                About Us
              </Link>
              <Link className="dropdown-item" to="/csr">
                CSR Policy
              </Link>
            </div>
          )}
        </div>
        <div className="nav-item">
          <Link
            className={`cursor-pointer ${
              selected === "brand" ? "selected" : ""
            }`}
            to="/brand"
          >
            Our Brands
          </Link>
        </div>
        <div
          className="nav-item"
          onMouseEnter={() => setShowDropdown(true)}
          onMouseLeave={() => setShowDropdown(false)}
        >
          <Link
            className={`cursor-pointer ${
              selected === "product" ? "selected" : ""
            }`}
            onClick={() => setSelectedCategory("Biochemistry")}
            to="/product"
          >
            Products
          </Link>
          {showDropdown && (
            <div className="dropdown-menu w-fit">
              <Link
                className="dropdown-item "
                to="/product"
                onClick={() => setSelectedCategory("Biochemistry")}
              >
                Biochemistry
              </Link>
              <Link
                className="dropdown-item"
                to="/product"
                onClick={() => setSelectedCategory("Clinical Microbiology")}
              >
                Clinical Microbiology
              </Link>
              <Link
                className="dropdown-item"
                to="/product"
                onClick={() => setSelectedCategory("COVID-19")}
              >
                COVID-19
              </Link>
              <Link
                className="dropdown-item"
                to="/product"
                onClick={() => setSelectedCategory("Electrolyte Analyzer")}
              >
                Electrolyte Analyzer
              </Link>
              <Link
                className="dropdown-item"
                to="/product"
                onClick={() => setSelectedCategory("Hematology")}
              >
                Hematology
              </Link>
              <Link
                className="dropdown-item"
                to="/product"
                onClick={() => setSelectedCategory("Immunology")}
              >
                Immunology
              </Link>
              <Link
                className="dropdown-item"
                to="/product"
                onClick={() => setSelectedCategory("Point of Care")}
              >
                Point of Care
              </Link>
              <Link
                className="dropdown-item"
                to="/product"
                onClick={() => setSelectedCategory("Pre-Analytical Automation")}
              >
                Pre-Analytical Automation
              </Link>
            </div>
          )}
        </div>
        <div className="nav-item">
          <Link
            className={`cursor-pointer ${
              selected === "career" ? "selected" : ""
            }`}
            to="/career"
          >
            Career
          </Link>
        </div>
        <div className="nav-item">
          <Link
            className={`cursor-pointer ${
              selected === "success" ? "selected" : ""
            }`}
            to="/success"
          >
            Our Success
          </Link>
        </div>
        <div className="nav-item">
          <Link
            className={`cursor-pointer ${
              selected === "blog" ? "selected" : ""
            }`}
            to="/blog"
          >
            Blog
          </Link>
        </div>
        <div className="nav-item">
          <Link
            className={`cursor-pointer ${
              selected === "contact" ? "selected" : ""
            }`}
            to="/contact"
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Nav;
