import React from "react";

// images
import brandIcn from "../assets/images/brand-icon.jpeg";

function Header() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light  navbar-container">
        <div class="container">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="#">
                  ورود
                </a>
              </li>
              <li class="nav-item ms-lg-3">
                <a class="nav-link" href="#">
                  عضویت
                </a>
              </li>
              <li class="nav-item dropdown d-lg-block d-none">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  ایجاد رویداد
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a class="dropdown-item" href="#">
                      ایجاد رویداد انلاین (وبینار)
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      ایجاد رویداد حضوری
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item ms-lg-3">
                <a class="nav-link" href="#">
                  برگزار کننده ها
                </a>
              </li>
              <li class="nav-item ms-lg-3">
                <a class="nav-link" href="#">
                  راهنما
                </a>
              </li>
              <li class="nav-item ms-lg-3">
                <a class="nav-link" href="#">
                  ورود به رویداد
                </a>
              </li>
              <li className="d-lg-none nav-item">
                <a class="nav-link" href="#">
                  ایجاد رویداد انلاین (وبینار)
                </a>
              </li>
              <li className="d-lg-none nav-item">
                <a class="nav-link" href="#">
                  ایجاد رویداد حضوری
                </a>
              </li>
            </ul>
            <form class="d-flex">
              <input
                class="form-control me-2 position-relative search-box"
                type="search"
                placeholder="جستجو"
                aria-label="Search"
              />
              <button className="searchbtn">
                <i class="bi bi-search"></i>
              </button>
            </form>
            <a class="navbar-brand" href="https://evand.com/">
              <img src={brandIcn} alt="EVAND" />
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
