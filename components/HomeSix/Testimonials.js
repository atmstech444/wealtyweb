import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

const Testimonials = () => {
  return (
    <>
      <div className="testimonials-wrap-area ptb-100">
        <div className="container">
          <Swiper
            slidesPerView={1}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="testimonials-wrap-slides"
          >
            <SwiperSlide>
              <div className="testimonials-card">
                <p>
                  But I must explain to you how all this mistaken idea of
                  denouncing pleasure and praising pain was born and I will give
                  you a complete account of the system, and expound the actual
                  teachings of the great explorer of the truth, the
                  master-builder of human happiness. No one rejects, dislikes,
                  or avoids pleasure itself.
                </p>

                <div className="information d-flex align-items-center justify-content-center">
                  <img
                    src="/images/home-six/user.png"
                    className="rounded-circle"
                    alt="image"
                  />
                  <div className="title">
                    <h3>Alex Smith</h3>
                    <span>Founder & CEO</span>
                  </div>
                </div>
                <div className="vector-icon-image">
                  <img src="/images/home-six/vector-icon.png" alt="icon" />
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="testimonials-card">
                <p>
                  But I must explain to you how all this mistaken idea of
                  denouncing pleasure and praising pain was born and I will give
                  you a complete account of the system, and expound the actual
                  teachings of the great explorer of the truth, the
                  master-builder of human happiness. No one rejects, dislikes,
                  or avoids pleasure itself.
                </p>

                <div className="information d-flex align-items-center justify-content-center">
                  <img
                    src="/images/home-six/user.png"
                    className="rounded-circle"
                    alt="image"
                  />
                  <div className="title">
                    <h3>Steven Smith</h3>
                    <span>Web Developer</span>
                  </div>
                </div>
                <div className="vector-icon-image">
                  <img src="/images/home-six/vector-icon.png" alt="icon" />
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="testimonials-card">
                <p>
                  But I must explain to you how all this mistaken idea of
                  denouncing pleasure and praising pain was born and I will give
                  you a complete account of the system, and expound the actual
                  teachings of the great explorer of the truth, the
                  master-builder of human happiness. No one rejects, dislikes,
                  or avoids pleasure itself.
                </p>

                <div className="information d-flex align-items-center justify-content-center">
                  <img
                    src="/images/home-six/user.png"
                    className="rounded-circle"
                    alt="image"
                  />
                  <div className="title">
                    <h3>Sarah Taylor</h3>
                    <span>Co-Founder</span>
                  </div>
                </div>
                <div className="vector-icon-image">
                  <img src="/images/home-six/vector-icon.png" alt="icon" />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="testimonials-wrap-shape">
          <img src="/images/home-six/vector-shape-2.png" alt="image" />
        </div>
      </div>
    </>
  );
};

export default Testimonials;
