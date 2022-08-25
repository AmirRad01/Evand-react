import React from "react";

// image

import bazarPng from "../assets/images/bazaar-new.png";
import appStorePng from "../assets/images/app-store-logo.png";
import android from "../assets/images/android.png";
import parspack from "../assets/images/parspack.png";

function Footer() {
  return (
    <footer className="">
      <div className="footer-list-container container ">
        <span className="head-title w-100 d-none d-lg-flex">دسته بندی‌ها</span>
        <div className="w-100 row d-none d-lg-flex">
          <div className="list-item-container col">
            <a href="#"> رویدادهای تکنولوژی</a>
            <a href="#"> رویدادهای کارآفرینی</a>
            <a href="#"> رویدادهای فرهنگی هنری</a>
            <a href="#"> رویدادهای گردشگری</a>
            <a href="#"> رویدادهای مدیریت</a>
          </div>
          <div className="list-item-container col">
            <a href="#"> رویدادهای کسب و کار</a>
            <a href="#"> رویدادهای فنی، مهندسی و صنعت</a>
            <a href="#"> رویدادهای خیریه</a>
            <a href="#"> رویدادهای مذهبی و مناسبتی</a>
            <a href="#"> رویدادهای پزشکی</a>
          </div>
          <div className="list-item-container col">
            <a href="#"> رویدادهای مالی</a>
            <a href="#"> رویدادهای توسعه فردی و خانواده</a>
            <a href="#"> رویدادهای تحصیلی</a>
            <a href="#"> رویدادهای ورزشی</a>
            <a href="#"> رویدادهای سرگرمی</a>
          </div>
          <div className=" list-item-container col">
            <a href="#"> رویدادهای علوم انسانی</a>
            <a href="#"> رویدادهای علوم پایه</a>
            <a href="#"> رویدادهای غیره</a>
          </div>
        </div>
        <div className="w-100 d-flex mt-4 d-none d-lg-flex">
          <span className="head-title w-50"> شهر‌های پر رویداد</span>
          <span className="head-title me-3"> دانشگاه‌ها</span>
        </div>
        <div className="row d-none d-lg-flex">
          <div className="list-item-container col">
            <a href="#"> رویدادهای شهر تهران</a>
            <a href="#"> رویدادهای شهر اصفهان</a>
            <a href="#"> رویدادهای شهر مشهد</a>
            <a href="#">رویدادهای شهر تبریز</a>
            <a href="#"> رویدادهای شهر شیراز</a>
          </div>
          <div className="list-item-container col">
            <a href="#"> رویدادهای شهر کرج</a>
            <a href="#"> رویدادهای شهر قم</a>
            <a href="#"> رویدادهای شهر اراک</a>
            <a href="#"> رویدادهای شهر قدس</a>
            <a href="#"> رویدادهای شهر اهواز</a>
          </div>
          <div className="list-item-container col">
            <a href="#">رویدادهای حوالی جغرافیایی دانشگاه شریف</a>
            <a href="#"> رویدادهای دانشگاه امیرکبیر</a>
            <a href="#"> رویدادهای دانشگاه علم و صنعت ایران</a>
            <a href="#"> رویدادهای دانشگاه تهران</a>
            <a href="#"> رویدادهای دانشگاه صنعتی خواجه نصیرالدین طوسی</a>
          </div>
          <div className="list-item-container col">
            <a href="#"> رویدادهای دانشگاه بهشتی</a>
            <a href="#"> رویدادهای دانشگاه الزهرا</a>
            <a href="#">رویدادهای دانشگاه صنعتی اصفهان</a>
            <a href="#">رویدادهای دانشگاه آزاد اسلامی واحد نجف آباد</a>
          </div>
        </div>
        <hr className="d-none d-lg-block" />
        <div className=" row w-100 d-none d-lg-flex">
          <span className=" head-title col"> استفاده از ایوند </span>
          <span className="head-title col"> در وبلاگ ایوند بخوانید </span>
          <span className="head-title col"> تماس با تیم پشتیبانی </span>
          <span className="col"></span>
        </div>
        <div className="row d-none d-lg-flex">
          <div className="list-item-container col">
            <a href="#">ایجاد رویداد در ایوند</a>
            <a href="#"> سوالات متداول برگزارکنندگان رویداد</a>
            <a href="#"> شرایط استفاده</a>
            <a href="#"> حریم خصوصی</a>
            <a href="#">تعرفه‌ها</a>
            <a href="#"> ورود به سالن‌یاب</a>
          </div>
          <div className="list-item-container col">
            <a href="#"> چرا رویداد</a>
            <a href="#"> برنامه‌ریزی و برگزاری رویداد</a>
            <a href="#"> از رویدادها چه خبر؟</a>
            <a href="#"> فروش و بازاریابی رویداد</a>
            <a href="#"> خبرهای ایوند</a>
          </div>
          <div className="list-item-container col">
            <div className=" customer-support mt-2">
              <span className="">
                <i class="bi bi-headset"></i>
              </span>
              <a href="tel:02143407788" className="list-phon-number ">
                ۰۲۱-۴۳۴۰۷۷۸۸
              </a>
            </div>
            <div className="d-flex customer-support mt-2 ">
              <span>
                <i class="bi bi-headset"></i>
              </span>
              <a href="tel:02143407788" className="list-phon-number me-2">
                ۰۲۱-۹۱۰۰۷۶۵۱
              </a>
            </div>
            <div className="d-flex customer-support mt-2 ">
              <span>
                <i class="bi bi-headset"></i>
              </span>
              <a href="tel:02143407788" className="list-phon-number me-2">
                ۰۹۳۹-۳۵۷-۰۸۹۳
              </a>
            </div>
            <span className="mt-1">اپلیکیشن برگزارکنندگان</span>
            <div className="d-flex applications row">
              <a
                href="https://cafebazaar.ir/app/com.evand.organizer/?l=fa"
                className="col"
              >
                <img src={bazarPng} alt="bazar" />
              </a>
              <a
                href="https://itunes.apple.com/us/app/evand-organizer/id1260539936?mt=8"
                className="col"
              >
                <img src={appStorePng} alt="appStore" />
              </a>
            </div>
            <span className="mt-1">اپلیکیشن شرکت‌کنندگان</span>
            <div className="row">
              <a href="https://evand.com/download-discovery" className="col">
                <img src={android} alt="android" className="w-100" />
              </a>
              <div className="col"></div>
            </div>
          </div>
          <div className="col ">
            <a href="http://parspack.com">
              <img src={parspack} alt="package" className="w-50" />
            </a>
          </div>
        </div>
        <hr className="d-none d-lg-block" />
        <div className="text-center about-evand ">
          <div className="d-lg-none col-12  mb-4">
            <span className=" mb-3">تماس با پشتیبانی</span>
            <div className=" mt-2 expand-support-container">
              <span className="ms-1">
                <i class="bi bi-headset"></i>
              </span>
              <a href="tel:02143407788" className="list-phon-number">
                ۰۲۱-۴۳۴۰۷۷۸۸
              </a>
            </div>
            <div className=" mt-2 expand-support-container">
              <span className="ms-1">
                <i class="bi bi-headset"></i>
              </span>
              <a href="tel:02143407788" className="list-phon-number">
                ۰۲۱-۹۱۰۰۷۶۵۱
              </a>
            </div>
          </div>
          <ul className="evand-list flex-wrap">
            <li className="me-4">
              <a href="#"> درباره ایوند</a>
            </li>
            <li className="me-4">
              <a href="#">بلاگ </a>
            </li>
            <li className="me-4">
              <a href="#"> تماس با ایوند</a>
            </li>
            <li className="me-4">
              <a href="#"> ابزار و ویژگی‌ها</a>
            </li>
            <li className="me-4">
              <a href="#">راهنما </a>
            </li>
          </ul>
          <ul className="footer-icon flex-wrap">
            <li className="me-4">
              <a href="#">
                <i class="bi bi-telegram"></i>
              </a>
            </li>
            <li className="me-4">
              <a href="#">
                <i class="bi bi-instagram"></i>
              </a>
            </li>
            <li className="me-4">
              <a href="#">
                <i class="bi bi-linkedin"></i>
              </a>
            </li>
            <li className="me-4">
              <a href="#">
                <i class="bi bi-facebook"></i>
              </a>
            </li>
            <li className="me-4">
              <a href="#">
                <i class="bi bi-twitter"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
