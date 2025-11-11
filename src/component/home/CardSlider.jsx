import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const CardSlider = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("/Slider.json")
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((err) => console.error(err));
  }, []);

  if (items.length === 0) return null;

  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      navigation
      loop={true}
      spaceBetween={20}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      breakpoints={{
        0: { slidesPerView: 1 },
        768: { slidesPerView: 3 },
        1024: { slidesPerView: 5 },
      }}
    >
      {items.map((item) => (
        <SwiperSlide key={item.id}>
          <div
            className={`rounded-[10px] h-[230px] w-[200px] shadow-md p-2 flex flex-col items-center ${item.color}`}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-[140px] object-contain rounded-md mb-2"
            />
            <h2 className="text-lg font-semibold">{item.title}</h2>
            <p className="text-sm text-[#7E7E7E]">{item.items} items</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CardSlider;
