import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import { Autoplay, Navigation } from "swiper";

// swiper-css
import "swiper/swiper.min.css";
import "swiper/modules/autoplay/autoplay.min.css";
import "swiper/modules/navigation/navigation.min.css";

// images

import freelancer from "../assets/images/freelanser-package.jpg";
import mbr from "../assets/images/MBR-package.jpg";
import rhetorical from "../assets/images/Rhetorical-package.jpg";
import coachBusiness from "../assets/images/coach business-packege.jpg";
import cfa from "../assets/images/CFA-package.jpg";
import marketDevelopment from "../assets/images/Market development-package.jpg";
import marketIdea from "../assets/images/market idea-package.jpg";
import postDba from "../assets/images/post DBA-package.jpg";
import businessLeader from "../assets/images/business leader-package.jpg";
import pic1 from "../assets/images/1.png";
import pic2 from "../assets/images/2.png";
import pic3 from "../assets/images/3.png";
import pic4 from "../assets/images/4.png";
import pic5 from "../assets/images/5.png";
import top1 from "../assets/images/top1.jpg";
import top2 from "../assets/images/top2.jpg";
import top3 from "../assets/images/top3.jpg";
import top4 from "../assets/images/top4.jpg";
import top5 from "../assets/images/top5.jpg";
import top6 from "../assets/images/top6.jpg";
import top7 from "../assets/images/top7.jpg";
import top8 from "../assets/images/top8.jpg";
import top9 from "../assets/images/top9.jpg";
import top10 from "../assets/images/top10.jpg";

// components

import HeaderCarousel from "./HeaderCarousel";
import FavPackages from "./FavPackages";
import TopSale from "./TopSale";
import EvandOrganizers from "./EvandOrganizers";
import OrganizersTopSale from "./OrganizersTopSale";

function Home() {
  const data = [
    {
      image: freelancer,
      coursName: "چطور به یک فریلنسر با درآمد 2000 دلاری تبدیل شویم؟!",
      coursTime: "آنلاین - چهارشنبه ۱۵ تیر ۱۴۰۱ ساعت ۲۰:۰۰",
      price: "رایگان",
    },
    {
      image: mbr,
      coursName: "تعامل والد و کودک در بستر ذهن آگاهی",
      coursTime: "آنلاین - پنج‌شنبه ۲۳ تیر ۱۴۰۱ ساعت ۱۷:۰۰",
      price: "رایگان",
    },
    {
      image: rhetorical,
      coursName: " دوره 3 ماهه آموزش سخنوری و فن بیان 1401",
      coursTime: "آنلاین - پنج‌شنبه ۲۳ تیر ۱۴۰۱ ساعت ۱۷:۰۰",
      price: "از ۱,۲۴۰,۰۰۰ تومان",
    },
    {
      image: coachBusiness,
      coursName: " تزریق ثروت ۲",
      coursTime: "آنلاین - دوشنبه ۱۳ تیر ۱۴۰۱ ساعت ۱۹:۰۰ ",
      price: "۳۵,۰۰۰ تومان",
    },
    {
      image: cfa,
      coursName: " دوره جامع تحلیلگر مالی بر اساس استاندارد CFA ",
      coursTime: "مشهد - دوشنبه ۲۰ تیر ۱۴۰۱ ساعت ۱۷:۰۰",
      price: "۵,۹۰۰,۰۰۰ تومان",
    },
    {
      image: marketDevelopment,
      coursName:
        "کنفرانس ملی توسعه بازار و مدیریت نوین سازمان در صنعت گردشگری ",
      coursTime: "مشهد -  پنج‌شنبه ۲۳ تیر ۱۴۰۱ ساعت ۱۴:۰۰",
      price: "از ۶۰۰,۰۰۰ تومان",
    },
    {
      image: marketIdea,
      coursName: " ایده، بازار، سرمایه؛ برای استعدادهای ایران",
      coursTime: "تهران -  یک‌شنبه ۱۲ تیر ۱۴۰۱ ساعت ۱۸:۰۰",
      price: "رایگان",
    },
    {
      image: postDba,
      coursName: "اولین دوره  عالی  POST DBA - مدیریت ورهبری کسب وکارها  ",
      coursTime: "تهران - یک‌شنبه ۲۹ خرداد ۱۴۰۱ ساعت ۱۰:۰۸",
      price: "۱,۰۰۰,۰۰۰ تومان",
    },
    {
      image: businessLeader,
      coursName: " پرورش رهبر کسب و کار (Business Leader)",
      coursTime: "تهران - پنج‌شنبه ۱۶ تیر ۱۴۰۱ ساعت ۱۴:۰۰",
      price: "۱۲۰,۰۰۰ تومان",
    },
  ];

  const data2 = [
    {
      image: marketDevelopment,
      coursName:
        "کنفرانس ملی توسعه بازار و مدیریت نوین سازمان در صنعت گردشگری ",
      coursTime: "مشهد -  پنج‌شنبه ۲۳ تیر ۱۴۰۱ ساعت ۱۴:۰۰",
      price: "از ۶۰۰,۰۰۰ تومان",
    },
    {
      image: marketIdea,
      coursName: " ایده، بازار، سرمایه؛ برای استعدادهای ایران",
      coursTime: "تهران -  یک‌شنبه ۱۲ تیر ۱۴۰۱ ساعت ۱۸:۰۰",
      price: "رایگان",
    },
    {
      image: postDba,
      coursName: "اولین دوره  عالی  POST DBA - مدیریت ورهبری کسب وکارها  ",
      coursTime: "تهران - یک‌شنبه ۲۹ خرداد ۱۴۰۱ ساعت ۱۰:۰۸",
      price: "۱,۰۰۰,۰۰۰ تومان",
    },
    {
      image: businessLeader,
      coursName: " پرورش رهبر کسب و کار (Business Leader)",
      coursTime: "تهران - پنج‌شنبه ۱۶ تیر ۱۴۰۱ ساعت ۱۴:۰۰",
      price: "۱۲۰,۰۰۰ تومان",
    },
  ];
  const data3 = [
    {
      image: pic1,
      title: "وبینار خودت رو با ابزارهای مدرن برگزار کن",
    },
    {
      image: pic2,
      title: "رویدادها رو آنالیز و تحلیل کن",
    },
    {
      image: pic3,
      title: "با ابزارهای تبلیغاتی، درآمدت رو افزایش بده",
    },
    {
      image: pic4,
      title: "شرکت کننده‌ها رو با ابزار حرفه‌ای مدیریت کن",
    },
    {
      image: pic5,
      title: "در کمتر از ۱۰ دقیقه، صفحه رویداد اختصاصی بساز",
    },
  ];
  const data4 = [
    {
      title: " گروه مدیریت سرمایه فاینوست",
      image: top1,
      activeNum: 11,
      organizersNum: 11,
      followersNum: 532,
    },
    {
      title: "  CS50x Iran",
      image: top2,
      activeNum: 11,
      organizersNum: 11,
      followersNum: 532,
    },
    {
      title: "  Strategy Talk",
      image: top3,
      activeNum: 11,
      organizersNum: 11,
      followersNum: 532,
    },
    {
      title: " شرکت مشاوره مدیریت ایلیا",
      image: top4,
      activeNum: 11,
      organizersNum: 11,
      followersNum: 532,
    },
    {
      title: "  مرکز عکاسی پرشیا",
      image: top5,
      activeNum: 11,
      organizersNum: 11,
      followersNum: 532,
    },
    {
      title: " انجمن علمی عمران و محیط زیست دانشگاه صنعتی امیرکبیر",
      image: top6,
      activeNum: 11,
      organizersNum: 11,
      followersNum: 532,
    },
    {
      title: " گروه نرم افزاری اوراش",
      image: top7,
      activeNum: 11,
      organizersNum: 11,
      followersNum: 532,
    },
    {
      title: " مدرسه کسب و کار گلرنگ",
      image: top8,
      activeNum: 11,
      organizersNum: 11,
      followersNum: 532,
    },
    {
      title: " محاسبه گران خبره",
      image: top9,
      activeNum: 11,
      organizersNum: 11,
      followersNum: 532,
    },
    {
      title: "دکتر بهنود صدر",
      image: top10,
      activeNum: 11,
      organizersNum: 11,
      followersNum: 532,
    },
  ];

  return (
    <div>
      <section className="section1 mt-5">
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          spaceBetween={35}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            1400: {
              width: 1400,
              slidesPerView: 2.3,
            },
            992: {
              width: 992,
              slidesPerView: 2,
            },
            768: {
              width: 768,
              slidesPerView: 1.5,
            },
            576: {
              width: 576,
              slidesPerView: 1,
            },
          }}
          loop={true}
          className="mySwiper"
        >
          {data.map((item, index) => (
            <SwiperSlide>
              <HeaderCarousel
                image={item.image}
                coursName={item.coursName}
                coursTime={item.coursTime}
                price={item.price}
                key={index}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      <section className="container favorites-container mt-5">
        <div className="favorites-head-title mb-4">
          <h3>محبوب‌ترین رویدادهای</h3>
          <select name="class-status" id="class-status" className="me-3">
            <option value="online">آنلاین</option>
            <option value="in-person">حضوری</option>
            <option value="in-person-online">آنلاین و حضوری</option>
          </select>
        </div>
        <div className="favorites-list  mt-4 mb-4 d-none d-md-block">
          <ul className="d-flex flex-wrap">
            <li className="col"> تمام رویداد ها </li>
            <li className="col"> ویژه من </li>
            <li className="col"> امروز </li>
            <li className="col"> این هفته </li>
            <li className="col"> تکنولوژی </li>
            <li className="col"> کارآفرینی </li>
            <li className="col"> مالی </li>
            <li className="col"> مدیریت </li>
            <li className="col"> فرهنگی هنری </li>
            <li className="col"> کسب و کار </li>
          </ul>
        </div>
        <div className="fav-package d-sm-flex d-none">
          {data.map((item, index) => (
            <FavPackages
              image={item.image}
              coursName={item.coursName}
              coursTime={item.coursTime}
              price={item.price}
              key={index}
            />
          ))}
        </div>
      </section>
      <section className="top-sale container mt-5 mb-5 d-sm-block d-none">
        <h3 className="mb-3">پرفروش‌های هفته</h3>
        <div className="Topsale-package ">
          {data2.map((item, index) => (
            <TopSale
              image={item.image}
              coursName={item.coursName}
              coursTime={item.coursTime}
              price={item.price}
              key={index}
            />
          ))}
        </div>
      </section>
      <section className="evand-organizers">
        <div className="organizers-title container mb-4">
          ایوند برای برگزارکنندگان
        </div>
        <div className="organizers-carousel">
          <Swiper
            modules={[Navigation]}
            navigation
            spaceBetween={25}
            breakpoints={{
              1400: {
                width: 1400,
                slidesPerView: 2.3,
              },
              992: {
                width: 992,
                slidesPerView: 2,
              },
              768: {
                width: 768,
                slidesPerView: 1.5,
              },
              576: {
                width: 576,
                slidesPerView: 1,
              },
            }}
            loop={true}
            className="mySwiper"
          >
            {data3.map((item, index) => (
              <SwiperSlide>
                <EvandOrganizers
                  image={item.image}
                  title={item.title}
                  key={index}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="organizers-title container mb-4 mt-5 d-none d-lg-block">
          محبوب ترین برگزارکنندگان
        </div>
        <div className="">
          <div className="organizers d-flex container d-none d-lg-flex">
            <a href="#" className="me-4"></a>
            <a href="#" className="me-4"></a>
            <a href="#" className="me-4"></a>
            <a href="#" className="me-4"></a>
            <a href="#" className="me-4"></a>
            <a href="#" className="me-4"></a>
          </div>
        </div>
      </section>
      <section className="mt-4">
        <h2 className="mb-3 container">پرفروش‌ترین برگزارکنندگان این ماه</h2>
        <div className="organizers-top-sale"></div>
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={25}
          breakpoints={{
            1400: {
              width: 1400,
              slidesPerView: 2.3,
            },
            992: {
              width: 992,
              slidesPerView: 2,
            },
            768: {
              width: 768,
              slidesPerView: 1.5,
            },
            576: {
              width: 576,
              slidesPerView: 1,
            },
          }}
          loop={true}
          className="mySwiper"
        >
          {data4.map((item, index) => (
            <SwiperSlide>
              <OrganizersTopSale
                image={item.image}
                title={item.title}
                key={index}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
}

export default Home;
