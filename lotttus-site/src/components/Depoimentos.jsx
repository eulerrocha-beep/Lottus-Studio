import "../styles/depoimentos.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectCoverflow } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

import Feedback1 from "../assets/feedback1.avif";
import Feedback2 from "../assets/feedback2.avif";
import Feedback3 from "../assets/feedback3.avif";
import Feedback4 from "../assets/feedback4.avif";
import Feedback5 from "../assets/feedback5.avif";

const depoimentos = [
  Feedback1,
  Feedback2,
  Feedback3,
  Feedback4,
  Feedback5,
];

function Depoimentos() {
  return (
    <section className="testimonials-section" id="depoimentos">

      <div className="testimonials-header">

        <span>Depoimentos</span>

        <h2>
          Histórias de
          <br />
          <i>bem-estar.</i>
        </h2>

        <p>
          A confiança das nossas clientes é o maior reflexo do cuidado,
          dedicação e carinho em cada atendimento realizado na LÓTTUS.
        </p>

      </div>

      <Swiper
        modules={[
          Autoplay,
          Pagination,
          EffectCoverflow
        ]}

        effect="coverflow"

        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 180,
          modifier: 1,
          scale: .9,
          slideShadows: false,
        }}

        centeredSlides
        grabCursor
        loop

        speed={900}

        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}

        pagination={{
          clickable: true,
        }}

        breakpoints={{
          0: {
            slidesPerView: 1.15,
            spaceBetween: 20,
          },

          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },

          1200: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}

        className="testimonials-swiper"
      >

        {depoimentos.map((imagem, index) => (

          <SwiperSlide key={index}>

            <div className="phone-frame">

              <div className="phone-notch"></div>

              <img
                src={imagem}
                alt={`Feedback ${index + 1}`}
                loading="lazy"
                className="phone-screen"
              />

            </div>

          </SwiperSlide>

        ))}

      </Swiper>

    </section>
  );
}

export default Depoimentos;